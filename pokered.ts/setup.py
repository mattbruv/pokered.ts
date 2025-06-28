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
            print(item, mapped)
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
            buffer = BytesIO()
            img.save(buffer, format="PNG")
            encoded = base64.b64encode(buffer.getvalue()).decode('ascii')

        else:
            with open(file_path, 'rb') as f:
                encoded = base64.b64encode(f.read()).decode('ascii')

        data[key] = encoded

    with open(json_path, 'w') as json_file:
        json_file.write("export const graphicsBase64 = ")
        json.dump(data, json_file, indent=2)
        json_file.write(" as const;")

    print(f"Created JSON file with {len(data)} images at: {json_path}")

# Example usage
copy_pngs('../pokered/gfx/', 'src/gfx/imagesBase64.ts')
