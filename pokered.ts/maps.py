import glob
import json
import os
from pathlib import Path




data = {}
names = set()

maps = glob.glob("../pokered/data/maps/headers/*.asm", recursive=True)
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
                data[name]["tileset"] = tileset
            if (first == "connection"):
                direc = rest[0].replace(",", "")
                to_map = rest[1].replace(",", "")
                offset = rest[3]
                data[name]["connections"][direc] = {
                    "map": to_map,
                    #"offset": int(offset)
                }
                if direc == "north" or direc == "south":
                    data[name]["connections"][direc]["yOffset"] = int(offset)
                else:
                    data[name]["connections"][direc]["xOffset"] = int(offset)

                print(rest, direc)
            if first == "end_map_header":
                continue

maps = glob.glob("../pokered/maps/*.blk", recursive=True)
for map_path in maps:
    with open(map_path, "rb") as map:
        content = list(map.read())
        name = Path(map_path).stem
        if name in data:
            data[name]["blocks"] = content
        print(name, content)


# get map constants (width, height)
with open("../pokered/constants/map_constants.asm") as f:
    const_data = f.readlines()
    for map in data:
        name = data[map]["id"]
        entry = next(filter(lambda x: "map_const " + name in x, const_data))
        entry = entry.split()
        width = int(entry[2].replace(",", ""))
        height = int(entry[3].replace(",", ""))
        data[map]["width"] = width
        data[map]["height"] = height
        #print(name, entry, width, height)
    

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