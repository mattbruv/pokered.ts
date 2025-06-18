import json
import os

INPUT_PATH = "maps.json"
OUTPUT_DIR = "src/maps"
BLOCKS_OUT_DIR = "src/data/blocks"

MAP_TS_HEADER = """import {{ Map, MapName }} from "../map";
import {{ Tileset }} from "../tileset";
import {{ {blocks_const} }} from "../data/blocks/{block_file}";

"""

TS_BODY_TEMPLATE = """export const {map_name}: Map = {{
  width: {width},
  height: {height},
  blocks: {blocks_const},
  tileset: Tileset.{tileset},
  connections: {connections},
  object: {{}},
  textPointers: [],
  script: () => {{}},
}};
"""

BLOCK_TS_TEMPLATE = "export const {blocks_const} = {blocks};\n"

def format_connection(conn):
    if "xOffset" in conn:
        return f"{{ map: MapName.{conn['map']}, xOffset: {conn['xOffset']} }}"
    elif "yOffset" in conn:
        return f"{{ map: MapName.{conn['map']}, yOffset: {conn['yOffset']} }}"
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
        print(key, value["id"])
        map_name = key
        map_id = value["id"]
        width = value["width"]
        height = value["height"]
        blocks = value["blocks"] if "blocks" in value else []
        tileset = value["tileset"].upper()

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

        file_contents = (
            MAP_TS_HEADER.format(blocks_const=blocks_const, block_file=map_name) +
            TS_BODY_TEMPLATE.format(
                map_name=map_name,
                width=width,
                blocks_const=blocks_const,
                height=height,
                blocks=blocks,
                tileset=tileset,
                connections=connections
            )
        )

        output_path = os.path.join(OUTPUT_DIR, f"{map_name}.ts")
        with open(output_path, "w") as ts_file:
            ts_file.write(file_contents)

        print(f"Wrote {output_path}")

if __name__ == "__main__":
    main()
