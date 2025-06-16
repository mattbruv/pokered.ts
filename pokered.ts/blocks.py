import glob
import json
import os
from pathlib import Path


blocksets = glob.glob("../pokered/gfx/blocksets/*.bst", recursive=True)

out = {}

for blockset_path in blocksets:
    with open(blockset_path, "rb") as blockset:
        data = list(blockset.read())
        grouped = [data[i:i+16] for i in range(0, len(data), 16)]
        name = Path(blockset_path).stem
        out[name] = grouped
        print(name, len(grouped))

with open("src/gfx/blocksets.ts", "w") as ts:
    ts.write("import { BlockSet } from \"../map\";\n\n")
    ts.write("export const BLOCKSETS: Record<string, BlockSet> = {\n")
    for block in out:
        ts.write(f"{block}:\n")
        ts.write(json.dumps(out[block]))
        ts.write(",\n")
    ts.write("} as const")
# for key in data:
#     path = f"./src/maps/{key}.ts"
#     with open(path, "w") as f:
#         print(data[key])
#         entry = data[key]
#         f.write("import { map } from \"../map\";\n")
#         f.write("import { tileset } from \"../tileset\";\n\n")
#         f.write("export const x: map = {\n")
#         f.write(f"tileset: tileset.{entry['tileset']},\n")
#         f.write(f"width: 0,\n")
#         f.write(f"height: 0,\n")
#         f.write("object: {\n")
#         f.write("},\n")

#         f.write("}")