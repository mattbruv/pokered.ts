import { useState } from "react";
import {
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
  NumberInput,
} from "@mantine/core";
import { MapName, type DebugCallbacks, type DebugState } from "pokered.ts";

type DebugProps = {
  state: DebugState;
  callbacks: DebugCallbacks;
};

export default function GameDebugPanel({ state, callbacks }: DebugProps) {
  const [warpMap, setWarpMap] = useState<MapName>(MapName.AgathasRoom);
  const [warpX, setWarpX] = useState(0);
  const [warpY, setWarpY] = useState(0);

  // Mock sprite options
  const spriteOptions = [
    { value: "SPRITE_RED", label: "Red" },
    { value: "SPRITE_BLUE", label: "Blue" },
    { value: "SPRITE_PIKACHU", label: "Pikachu" },
  ];

  const handleWarp = () => {
    if (!warpMap) {
      alert("Fill in warp map");
      return;
    }
    callbacks.setMap(warpMap, warpX, warpY);
  };

  return (
    <ScrollArea h="100%">
      <Stack>
        <Title order={4}>Debug Controls {state.block.id}</Title>

        {/* Gameplay Toggles */}
        <Card withBorder>
          <Text size="sm" fw={500}>
            Toggles
          </Text>
          <Checkbox
            label="Walk Through Walls"
            checked={state.walkOnWalls}
            onChange={(e) => callbacks.setWalkOnWalls(e.currentTarget.checked)}
          />
          <Checkbox
            label="Show Block/Map Outlines"
            checked={state.showMapOutlines}
            onChange={(e) => callbacks.setWalkOnWalls(e.currentTarget.checked)}
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
            value={state.player.sprite}
            onChange={() => {}}
            placeholder="Select Sprite"
            mt="xs"
          />
        </Card>

        {/* Live State */}
        <Card withBorder>
          <Text size="sm" fw={500}>
            Live State
          </Text>
          <Text size="xs">Map: {MapName[state.map.name]}</Text>
          <Text size="xs">
            Block Position: (x: {state.block.x}, y: {state.block.y})
          </Text>
          <Text size="xs">
            Block Index: {state.block.index}, Id: {state.block.id}
          </Text>
          <Text size="xs">Current Tile ID: {state.map.name}</Text>
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
            onChange={(e) => setWarpMap(e.currentTarget.value as any)}
          />
          <Group grow mt="xs">
            <NumberInput
              label="X"
              placeholder="X pos"
              value={warpX}
              onChange={(e) => setWarpX(Number(e))}
            />
            <NumberInput
              label="Y"
              placeholder="Y pos"
              value={warpY}
              onChange={(e) => setWarpY(Number(e))}
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
