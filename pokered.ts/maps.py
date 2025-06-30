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
        entry = next(filter(lambda x: "map_const " + name  + "," in x, const_data))
        entry = entry.split()
        width = int(entry[2].replace(",", ""))
        height = int(entry[3].replace(",", ""))
        data[map]["width"] = width
        data[map]["height"] = height
        #print(name, entry, width, height)

maps = glob.glob("../pokered/data/maps/objects/*.asm", recursive=True)
cmds = set()

def find_first_with_property(d, prop, value):
    for key, obj in d.items():
        if obj.get(prop) == value:
            return key, obj
    return None, None

for map_path in maps:
    with open(map_path, "r") as map:
        content = map.readlines()
        name = Path(map_path).stem
        print(name, len(content))
        objects = {
            "warps": [],
            "backgroundItems": [],
            "objects": []
        }

        for line in content:
            obj = line.split()
            if len(obj) == 0:
                continue
            cmd = obj[0]
            if name not in cmd:
                cmds.add(cmd)
            #background tile
            if obj[0] == "db" and "border block" in line:
                # extract hex number to int
                val = obj[1].replace("$", "").replace(",", "")
                objects["border_block"] = int(val, 16)
            if obj[0] == "warp_event":
                #\1 x position
                #\2 y position
                #\3 destination map (-1 = wLastMap)
                #\4 destination warp id; starts at 1 (internally at 0)
                tag, x, y, toMap, toWarp = obj
                x = int(x.replace(",", ""))
                y = int(y.replace(",", ""))
                toMap = toMap.replace(",","")
                mapName, _rest = find_first_with_property(data, "id", toMap)
                if mapName is not None:
                    toMap = "MapName." + mapName
                toWarp = int(toWarp.replace(",",""))
                #print(tag, x, y, toMap, toWarp)
                entry = {
                    "x": x,
                    "y": y,
                    "toMap": toMap,
                    "warpIndex": toWarp - 1,
                }
                objects["warps"].append(entry)
            
            if obj[0] == "bg_event":
                #\1 x position
                #\2 y position
                #\3 sign id
                tag, x, y, sign_id = obj
                x = int(x.replace(",", ""))
                y = int(y.replace(",", ""))
                entry = {
                    "x": x,
                    "y": y,
                    "signId": sign_id
                }
                objects["backgroundItems"].append(entry)
                #print("BG:", tag, x, y, sign_id)
            
            if obj[0] == "object_event":
                #\1 x position
                #\2 y position
                #\3 sprite id
                #\4 movement (WALK/STAY)
                #\5 range or direction
                #\6 text id
                #\7 items only: item id
                #\7 trainers only: trainer class/pokemon id
                #\8 trainers only: trainer number/pokemon level
                print(len(obj), obj)
                count = len(obj)
                if (count == 9):
                    tag, x, y, sprite, movement, range_dir, text_id, trainer_id, trainer_level = obj
                    entry = {
                        "type": "trainer",
                        "x": int(x.replace(",", "")),
                        "y": int(y.replace(",", "")),
                        "sprite": sprite.replace(",", ""),
                        "movement": movement.replace(",", ""),
                        "textId": text_id.replace(",", ""),
                        "trainerId": trainer_id.replace(",", ""),
                        "trainerLevel": int(trainer_level.replace(",", "")),
                    }
                    objects["objects"].append(entry)
                if (count == 8):
                    tag, x, y, sprite, movement, range_dir, text_id, item_id = obj
                    entry = {
                        "type": "item",
                        "x": int(x.replace(",", "")),
                        "y": int(y.replace(",", "")),
                        "sprite": sprite.replace(",", ""),
                        "movement": movement.replace(",", ""),
                        "textId": text_id.replace(",", ""),
                        "itemId": item_id.replace(",", ""),
                    }
                    objects["objects"].append(entry)
                if (count == 7):
                    tag, x, y, sprite, movement, range_dir, text_id = obj
                    entry = {
                        "type": "sprite",
                        "x": int(x.replace(",", "")),
                        "y": int(y.replace(",", "")),
                        "sprite": sprite.replace(",", ""),
                        "movement": movement.replace(",", ""),
                        "textId": text_id.replace(",", ""),
                    }
                    objects["objects"].append(entry)
                print(count)

        data[name]["objects"] = objects
print(cmds)
    

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