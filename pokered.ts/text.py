
import glob
import json
from pathlib import Path


text_files = glob.glob("../pokered/text/*.asm", recursive=True)

map_data = json.loads(open("maps.json", "r").read())

commands = set()
for text_file in text_files:
    p = Path(text_file)
    data = open(p).readlines()

    label = ""

    text_data = {}

    for line in data:
        if "::" in line:
            label = line.replace("::", "").strip()
            if label  not in text_data:
                text_data[label] = []
        elif label != "" and line.strip() != "" and line.strip() != "done":
            line = line.strip()
            split = line.split(" ")
            cmd = split[0]
            rest = " ".join(split[1::])
            commands.add(cmd)
            print(cmd, rest)
            rest = rest.replace("\"", "")
            if rest != "":
                text_data[label].append([cmd, rest])
            else:
                text_data[label].append([cmd])

    map_name = p.stem.replace("_2", "")
    if map_name in map_data:
        map_data[map_name]["text"] = text_data
    else:
        print("NOT IN MAP: ", map_name)

open("maps.json", "w", encoding="utf-8").write(json.dumps(map_data, ensure_ascii=False, indent=4))
print(commands)