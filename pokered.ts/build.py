import subprocess

commands = [
    "python3 blocks.py",
    "python3 maps.py",
    "python3 text.py",
    "python3 map_ts.py",
    "python3 setup.py",
    "npm run format",
]

for cmd in commands:
    print(f"Running: {cmd}")
    try:
        result = subprocess.run(cmd, shell=True, check=True, text=True, capture_output=True)
        print(result.stdout)
    except subprocess.CalledProcessError as e:
        print(f"Command failed with error:\n{e.stderr}")
