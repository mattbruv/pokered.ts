import os
import glob
import base64
import json

def copy_pngs(src_root, json_path):
    png_files = glob.glob(os.path.join(src_root, '**', '*.png'), recursive=True)

    data = {}

    for file_path in png_files:
        rel_path = os.path.relpath(file_path, src_root)
        # Replace path separators with hyphens and remove the .png extension
        key = rel_path.replace(os.sep, '-')
        if key.lower().endswith('.png'):
            key = key[:-4]  # remove last 4 chars '.png'

        with open(file_path, 'rb') as f:
            encoded = base64.b64encode(f.read()).decode('ascii')

        data[key] = encoded

    with open(json_path, 'w') as json_file:
        json_file.write("export const graphicsBase64 = ")
        json.dump(data, json_file, indent=2)
        json_file.write(" as const;")

    print(f"Created JSON file with {len(data)} images at: {json_path}")

# Example usage
copy_pngs('../pokered/gfx/', 'src/gfxBase64.ts')
