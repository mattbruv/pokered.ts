import glob
import json
import os
from pathlib import Path


maps = glob.glob("../pokered/data/maps/headers/*.asm", recursive=True)


data = {}
names = set()

for map_path in maps:
    with open(map_path, "r") as map:
        content = map.read().splitlines()
        content = [x.strip() for x in content]
        name = Path(map_path).stem
        for thing in content:
            entry = thing.split()
            first = entry[0]
            rest = entry[1:]
            names.add(name)
            if (first == "map_header"):
                data[name] = {}
                data[name]["connections"] = {}
                tileset = entry[3].replace(",", "")
                data[name]["name"] = name
                data[name]["id"] = entry[2].replace(",", "")
                data[name]["tileset"] = "Tileset." + tileset
            if (first == "connection"):
                direc = rest[0].replace(",", "")
                to_map = rest[1].replace(",", "")
                offset = rest[3]
                data[name]["connections"][direc] = {
                    "map": to_map,
                    "offset": int(offset)
                }
                print(rest, direc)
            if first == "end_map_header":
                continue


with open("maps.json", "w") as out:
    out.write(json.dumps(data, indent=4))

# for key in data:
#     path = f"./src/maps/{key}.ts"
#     with open(path, "w") as f:
#         print(data[key])
#         entry = data[key]
#         f.write("import { Map } from \"../map\";\n")
#         f.write("import { Tileset } from \"../tileset\";\n\n")
#         f.write("export const X: Map = {\n")
#         f.write(f"tileset: Tileset.{entry['tileset']},\n")
#         f.write(f"width: 0,\n")
#         f.write(f"height: 0,\n")
#         f.write("object: {\n")
#         f.write("},\n")

#         f.write("}")