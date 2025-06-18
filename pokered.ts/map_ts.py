import json
import os

INPUT_PATH = "maps.json"
OUTPUT_DIR = "src/maps"

TS_HEADER = """import { Map, MapName } from "../map";
import { Tileset } from "../tileset";

"""

TS_BODY_TEMPLATE = """export const {map_name}: Map = {{
  width: {width},
  height: {height},
  blocks: {blocks},
  tileset: Tileset.{tileset},
  connections: {connections},
  object: {{}},
  textPointers: [],
  script: () => {{}},
}};
"""

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



def to_ts_enum(value: str) -> str:
    """Convert a string to a valid enum reference"""
    return value.strip()

def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    with open(INPUT_PATH, "r") as f:
        maps = json.load(f)

    for key, value in maps.items():
        print(key, value["id"])
        map_name = key
        width = value["width"]
        height = value["height"]
        blocks = json.dumps(value["blocks"] if "blocks" in value else [])
        tileset = value["tileset"].upper()

        connections = format_connections(value.get("connections", {}))

        file_contents = (
            TS_HEADER +
            TS_BODY_TEMPLATE.format(
                map_name=map_name,
                width=width,
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
