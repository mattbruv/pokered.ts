import { useState } from "react";
import {
  Flex,
  Box,
  Stack,
  Button,
  Text,
  Card,
  ScrollArea,
  Title,
  Checkbox,
  Select,
  TextInput,
  Group,
} from "@mantine/core";

export default function GameDebugPanel() {
  const [walkThroughWalls, setWalkThroughWalls] = useState(false);
  const [selectedSprite, setSelectedSprite] = useState<string | null>(
    "SPRITE_RED"
  );
  const [blockOutlines, setBlockOutlines] = useState(false);
  const [warpMap, setWarpMap] = useState("");
  const [warpX, setWarpX] = useState("");
  const [warpY, setWarpY] = useState("");

  // Mock live state
  const currentMap = "Pallet Town";
  const playerBlock = "(12, 8)";
  const playerTile = "(96, 64)";
  const currentTileId = 23;

  // Mock sprite options
  const spriteOptions = [
    { value: "SPRITE_RED", label: "Red" },
    { value: "SPRITE_BLUE", label: "Blue" },
    { value: "SPRITE_PIKACHU", label: "Pikachu" },
  ];

  const handleWarp = () => {
    if (!warpMap || warpX === "" || warpY === "") {
      alert("Fill in map, X, and Y");
      return;
    }
    console.log(`Warping to ${warpMap} at (${warpX}, ${warpY})`);
    // Call your game warp function here
  };

  return (
    <ScrollArea h="100%">
      <Stack>
        <Title order={4}>Debug Controls</Title>

        {/* Gameplay Toggles */}
        <Card withBorder>
          <Text size="sm" fw={500}>
            Toggles
          </Text>
          <Checkbox
            label="Walk Through Walls"
            checked={walkThroughWalls}
            onChange={(e) => setWalkThroughWalls(e.currentTarget.checked)}
          />
          <Checkbox
            label="Show Block/Map Outlines"
            checked={blockOutlines}
            onChange={(e) => setBlockOutlines(e.currentTarget.checked)}
            mt="xs"
          />
        </Card>

        {/* Sprite Selector */}
        <Card withBorder>
          <Text size="sm" fw={500}>
            Player Sprite
          </Text>
          <Select
            data={spriteOptions}
            value={selectedSprite}
            onChange={setSelectedSprite}
            placeholder="Select Sprite"
            mt="xs"
          />
        </Card>

        {/* Live State */}
        <Card withBorder>
          <Text size="sm" fw={500}>
            Live State
          </Text>
          <Text size="xs">Map: {currentMap}</Text>
          <Text size="xs">Block Position: {playerBlock}</Text>
          <Text size="xs">Tile Position: {playerTile}</Text>
          <Text size="xs">Current Tile ID: {currentTileId}</Text>
        </Card>

        {/* Warp To Map */}
        <Card withBorder>
          <Text size="sm" fw={500}>
            Warp To
          </Text>
          <TextInput
            label="Map"
            placeholder="Map name"
            value={warpMap}
            onChange={(e) => setWarpMap(e.currentTarget.value)}
          />
          <Group grow mt="xs">
            <TextInput
              label="X"
              placeholder="X pos"
              value={warpX}
              onChange={(e) => setWarpX(e.currentTarget.value)}
            />
            <TextInput
              label="Y"
              placeholder="Y pos"
              value={warpY}
              onChange={(e) => setWarpY(e.currentTarget.value)}
            />
          </Group>
          <Button fullWidth mt="sm" onClick={handleWarp}>
            Warp
          </Button>
        </Card>
      </Stack>
    </ScrollArea>
  );
}
