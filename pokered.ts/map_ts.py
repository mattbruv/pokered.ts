import json
import os
import re

### BE WARNED
### The code in this file is hacky, vibe-coded dog shit
### I don't really care because it's just used during development to help me generate
### map files, so in theory once the map files are done I don't need this anymore.

INPUT_PATH = "maps.json"
OUTPUT_DIR = "src/maps"
BLOCKS_OUT_DIR = "src/data/blocks"

MAP_TS_HEADER = """import {{ Map, MapName }} from "../map";
import {{ Tileset }} from "../tileset";
import {{ {blocks_const} }} from "../data/blocks/{block_file}";
import {{ OverworldSprite }} from "../sprite";

"""

TS_BODY_TEMPLATE = """export const {map_name}: Map = {{
  width: {width},
  height: {height},
  borderBlock: {border},
  blocks: {blocks_const},
  tileset: Tileset.{tileset},
  connections: {connections},
  objects: {objects},
  text: {text},
}};
"""

BLOCK_TS_TEMPLATE = "export const {blocks_const} = {blocks};\n"

def format_connection(conn):
    if "yOffset" in conn:
        return f"{{ map: MapName.{conn['map']}, yOffset: {conn['yOffset']} }}"
    elif "xOffset" in conn:
        return f"{{ map: MapName.{conn['map']}, xOffset: {conn['xOffset']} }}"
    else:
        return f"{{ map: MapName.{conn['map']} }}"

def format_connections(conns):
    if not conns:
        return "{}"
    return (
        "{\n" +
        ",\n".join(
            f"  {dir}: {format_connection(conn)}"
            for dir, conn in conns.items()
        ) +
        "\n}"
    )

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(BLOCKS_OUT_DIR, exist_ok=True)

    with open(INPUT_PATH, "r") as f:
        maps = json.load(f)

    for key, value in maps.items():
        # print(key, value["id"])
        map_name = key
        map_id = value["id"]
        width = value["width"]
        height = value["height"]
        blocks = value["blocks"] if "blocks" in value else []
        tileset = value["tileset"].upper()
        map_objects = value["objects"]
        border = map_objects["border_block"]
        text = value["text"] if "text" in value else {}
        del map_objects["border_block"]
        # print(map_objects)

        # Prepare block export
        blocks_const = f"{map_id}_BLOCKS"
        blocks_ts = json.dumps(blocks, indent=2)
        block_ts_code = BLOCK_TS_TEMPLATE.format(
            blocks_const=blocks_const,
            blocks=blocks_ts
        )

        # Write block data file
        block_ts_path = os.path.join(BLOCKS_OUT_DIR, f"{map_name}.ts")
        with open(block_ts_path, "w") as block_file:
            block_file.write(block_ts_code)
        print(f"Wrote block data to {block_ts_path}")

        connections = format_connections(value.get("connections", {}))

        map_object_json = json.dumps(map_objects)
        # Regex to remove quotes around toMap values
        map_object_json = re.sub(r'"(MapName[^"]+)"', r'\1', map_object_json)
        # replace sprites with enum
        map_object_json = re.sub(r'"(SPRITE_[^"]+)"', r'OverworldSprite.\1', map_object_json)
        map_object_json = map_object_json.replace("range_dir", "direction")

        file_contents = (
            MAP_TS_HEADER.format(blocks_const=blocks_const, block_file=map_name) +
            TS_BODY_TEMPLATE.format(
                map_name=map_name,
                width=width,
                blocks_const=blocks_const,
                height=height,
                blocks=blocks,
                tileset=tileset,
                border=border,
                connections=connections,
                objects=map_object_json,
                text=text
            )
        )

        output_path = os.path.join(OUTPUT_DIR, f"{map_name}.ts")
        with open(output_path, "w") as ts_file:
            ts_file.write(file_contents)

        print(f"Wrote {output_path}")

if __name__ == "__main__":
    main()
