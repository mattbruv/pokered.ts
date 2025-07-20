import {
  Stack,
  Text,
  Card,
  ScrollArea,
  Title,
  Checkbox,
  Group,
} from "@mantine/core";
import { MapName, type DebugCallbacks, type DebugState } from "pokered.ts";
import { WarpTo } from "./debug/WarpTo";
import { SetSprite } from "./debug/SetSprite";
import type { TileProbe } from "pokered.ts/dist/overworld/map";

type DebugProps = {
  state: DebugState;
  callbacks: DebugCallbacks;
};

function Tile({
  tile,
  name,
  color,
}: {
  tile: TileProbe;
  name: string;
  color: string;
}) {
  return (
    <div>
      <Text fw={500}>{name} Tile</Text>
      {tile.inBounds && (
        <Text size="sm">
          (x: {tile.tileX}, y: {tile.tileY})
        </Text>
      )}
      <Text style={{ color: tile.canWalk ? "green" : "red" }} size="sm">
        Walk: {tile.canWalk ? "true" : "false"}
      </Text>
      <Text style={{ color: tile.canSurf ? "blue" : "red" }} size="sm">
        Surf: {tile.canSurf ? "true" : "false"}
      </Text>
      <Text size="sm">In Bounds: {tile.inBounds ? "true" : "false"}</Text>
      {tile.inBounds && (
        <Text style={{ color }} size="sm">
          Tile Id: {tile.tileId} (${tile.tileId.toString(16)})
        </Text>
      )}
    </div>
  );
}

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
            label="Walk Through Walls (w)"
            checked={state.walkOnWalls}
            onChange={(e) => callbacks.setWalkOnWalls(e.currentTarget.checked)}
          />
          <Checkbox
            label="Show Block/Map Outlines (b)"
            checked={state.showMapOutlines}
            onChange={(e) =>
              callbacks.setShowMapOutlines(e.currentTarget.checked)
            }
            mt="xs"
          />
        </Card>

        {/* Live State */}
        <Card withBorder>
          <Group>
            <Stack gap={"xs"}>
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
            </Stack>
            {state.currentTile && (
              <Tile color="cyan" name="Current" tile={state.currentTile} />
            )}
            {state.nextTile && (
              <Tile color="magenta" name="Next" tile={state.nextTile} />
            )}
          </Group>
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
