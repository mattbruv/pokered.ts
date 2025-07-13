import {
  Stack,
  Text,
  Card,
  ScrollArea,
  Title,
  Checkbox,
  Select,
  type ComboboxItem,
} from "@mantine/core";
import {
  MapName,
  OverworldSprite,
  type DebugCallbacks,
  type DebugState,
} from "pokered.ts";
import { WarpTo } from "./debug/WarpTo";
import { SetSprite } from "./debug/SetSprite";

type DebugProps = {
  state: DebugState;
  callbacks: DebugCallbacks;
};

export default function GameDebugPanel({ state, callbacks }: DebugProps) {
  return (
    <ScrollArea h="100%">
      <Stack>
        <Title order={4}>Debug (may cause lag)</Title>

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
            onChange={(e) =>
              callbacks.setShowMapOutlines(e.currentTarget.checked)
            }
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
          <WarpTo warpCallback={callbacks.setMap} />
          <SetSprite spriteCallback={callbacks.setSprite} />
        </Card>
      </Stack>
    </ScrollArea>
  );
}
