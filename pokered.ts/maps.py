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

maps = glob.glob("../pokered/data/maps/objects/*.asm", recursive=True)
for map_path in maps:
    with open(map_path, "r") as map:
        content = map.readlines()
        name = Path(map_path).stem
        print(name, len(content))
        objects = {
            "warps": []
        }

        for line in content:
            obj = line.split()
            if len(obj) == 0:
                continue
            #background tile
            if obj[0] == "db":
                # extract hex number to int
                objects["border_block"] = int(obj[1].replace("$", "").replace(",", ""), 16)
            if obj[0] == "warp_event":
                #\1 x position
                #\2 y position
                #\3 destination map (-1 = wLastMap)
                #\4 destination warp id; starts at 1 (internally at 0)
                tag, x, y, toMap, toWarp = obj
                x = int(x.replace(",", ""))
                y = int(y.replace(",", ""))
                toMap = toMap.replace(",","")
                toWarp = int(toWarp.replace(",",""))
                print(tag, x, y, toMap, toWarp)
                entry = {
                    "x": x,
                    "y": y,
                    "to": toMap,
                    "warp": toWarp,
                }
                objects["warps"].append(entry)

        data[name]["objects"] = objects
    

with open("maps.json", "w") as out:
    out.write(json.dumps(data, indent=4))

# with open("src/mapLookup.ts", "a") as mf:
#     mf.write("\n")
#     for key in sorted(data):
#         mf.write(f"[MapName.{key}]: {key},\n")

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