
import glob
import json
from pathlib import Path


text_files = glob.glob("../pokered/text/*.asm", recursive=True)

map_data = json.loads(open("maps.json", "r").read())

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
        elif label is not "" and line.strip() is not "":
            text_data[label].append(line.strip())

    map_name = p.stem.replace("_2", "")
    if map_name in map_data:
        map_data[map_name]["text"] = text_data
    else:
        print("NOT IN MAP: ", map_name)

open("maps.json", "w").write(json.dumps(map_data))