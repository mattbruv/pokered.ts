import os
import glob
import base64
import json

from io import BytesIO
from PIL import Image

# AI slop
def fix_sprite(img: Image.Image) -> Image.Image:
    img = img.convert('RGBA')
    datas = list(img.getdata())

    # Define mappings
    source_colors = [
        (170, 170, 170, 255),  # light gray
        (85, 85, 85, 255),     # dark gray
        (0, 0, 0, 255),        # black
    ]
    target_colors = [
        (255, 255, 255, 255),  # white
        (170, 170, 170, 255),  # light gray
        (0, 0, 0, 255),        # black
        #(85, 85, 85, 255),     # dark gray
    ]

    color_map = dict(zip(source_colors, target_colors))

    new_data = []
    for item in datas:
        if item == (255, 255, 255, 255):
            # make transparent
            new_data.append((255, 255, 255, 0))
        else:
            mapped = color_map.get(item, item)
            #print(item, mapped)
            new_data.append(mapped)  # replace if in mapping

    img.putdata(new_data)
    return img

def gbc_colors(img: Image.Image, isBackground=False) -> Image.Image:
    img = img.convert('RGBA')
    datas = list(img.getdata())

    # Define mappings
    source_colors = [
        (255, 255, 255, 255),   # white
        (170, 170, 170, 255),  # light gray
        (85, 85, 85, 255),     # dark gray
        (0, 0, 0, 255),        # black
    ]
    target_colors = [
        (255, 255, 255, 255),  # white
        (255, 132, 132, 255),  # light gray
        (148, 58, 58, 255),     # dark gray
        (0, 0, 0, 255),        # black
    ]

    if not isBackground:
        target_colors = [
            (255, 255, 255, 255),  # white
            (123, 255, 49, 255),  # light gray
            (0, 132, 0, 255),     # dark gray
            (0, 0, 0, 255),        # black
        ]


    color_map = dict(zip(source_colors, target_colors))

    new_data = []
    for item in datas:
        mapped = color_map.get(item, item)
        #print(item, mapped)
        new_data.append(mapped)  # replace if in mapping

    img.putdata(new_data)
    return img

def copy_pngs(src_root, json_path):
    png_files = glob.glob(os.path.join(src_root, '**', '*.png'), recursive=True)

    data = {}

    for file_path in png_files:
        rel_path = os.path.relpath(file_path, src_root)
        # Replace path separators with hyphens and remove the .png extension
        key = rel_path.replace(os.sep, '-')
        if key.lower().endswith('.png'):
            key = key[:-4]  # remove last 4 chars '.png'
        
        # fix issues with sprites, they are colored wrong and should not have a white background
        if "sprites-" in key:
            print(key)
            img = Image.open(file_path)
            img = fix_sprite(img)
            img = gbc_colors(img, "grass_" in key)
            buffer = BytesIO()
            img.save(buffer, format="PNG")
            encoded = base64.b64encode(buffer.getvalue()).decode('ascii')

        else:
            with open(file_path, 'rb') as f:
                img = Image.open(file_path)
                img = gbc_colors(img, True)
                buffer = BytesIO()
                img.save(buffer, format="PNG")
                encoded = base64.b64encode(buffer.getvalue()).decode('ascii')

        data[key] = encoded

    with open(json_path, 'w') as json_file:
        json_file.write("export const graphicsBase64 = ")
        json.dump(data, json_file, indent=2)
        json_file.write(" as const;")

    print(f"Created JSON file with {len(data)} images at: {json_path}")


def extract_tile_make_white_transparent(input_path, tile_x, tile_y, output_path):
    """
    Opens input_path, extracts 8x8 tile at tile_x, tile_y (tile coords, each 8 pixels),
    makes white pixels transparent, saves to output_path.
    """
    with Image.open(input_path) as img:
        # Calculate pixel coordinates
        left = tile_x * 8
        upper = tile_y * 8
        right = left + 8
        lower = upper + 8

        # Crop the 8x8 tile
        tile = img.crop((left, upper, right, lower)).convert("RGBA")

        # Make white pixels transparent
        datas = tile.getdata()
        new_data = []
        for item in datas:
            # item is (R, G, B, A) if RGBA, (R, G, B) if RGB
            if item[0] == 255 and item[1] == 255 and item[2] == 255:
                # Replace white with transparency
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
        tile.putdata(new_data)

        # Save to output
        tile.save(output_path, "PNG")

def generate_shadow():
    # Load the image
    im = Image.open("../pokered/gfx/overworld/shadow.png")

    # Mirror horizontally
    im_h = im.transpose(Image.FLIP_LEFT_RIGHT)

    # Stack original and horizontally mirrored side by side
    im_double_width = Image.new(im.mode, (im.width * 2, im.height))
    im_double_width.paste(im, (0, 0))
    im_double_width.paste(im_h, (im.width, 0))

    # Mirror vertically
    im_v = im_double_width.transpose(Image.FLIP_TOP_BOTTOM)

    # Stack original+mirror and vertically mirrored below
    im_double_size = Image.new(im.mode, (im.width * 2, im.height * 2))
    im_double_size.paste(im_double_width, (0, 0))
    im_double_size.paste(im_v, (0, im.height))
    im_double_size.save("../pokered/gfx/sprites/shadow_full.png")

# Example usage

extract_tile_make_white_transparent("../pokered/gfx/tilesets/overworld.png", 2, 5, "../pokered/gfx/tilesets/grass_overworld.png")
extract_tile_make_white_transparent("../pokered/gfx/tilesets/forest.png", 0, 2, "../pokered/gfx/tilesets/grass_forest.png")
extract_tile_make_white_transparent("../pokered/gfx/tilesets/forest.png", 4, 3, "../pokered/gfx/tilesets/grass_forest_flower.png")
extract_tile_make_white_transparent("../pokered/gfx/tilesets/plateau.png", 5, 4, "../pokered/gfx/tilesets/grass_plateau.png")
# pre-bake the player's shadow, it's not 1996, we can afford a 16x16 pixel image in memory
# instead of creating it at runtime
generate_shadow()
copy_pngs('../pokered/gfx/', 'src/gfx/imagesBase64.ts')