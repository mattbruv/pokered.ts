import { GameData } from "./game";
import { MapName } from "./map";
import { getBlockIndexAtPosition, TileProbe } from "./overworld/map";
import { OverworldSprite, SpriteName } from "./sprite";

export type DebugCallbacks = {
  setMap: (map: MapName, x: number, y: number) => void;
  setWalkOnWalls: (value: boolean) => void;
  setShowMapOutlines: (value: boolean) => void;
  setSprite: (sprite: OverworldSprite) => void;
};

export type DebugState = {
  walkOnWalls: boolean;
  showMapOutlines: boolean;
  player: {
    x: number;
    y: number;
    sprite: SpriteName;
  };
  map: {
    name: MapName;
  };
  currentTile: TileProbe | null;
  nextTile: TileProbe | null;
  block: {
    index: number;
    id: number;
    x: number;
    y: number;
  };
};

export function getDebugState(data: GameData): DebugState {
  const pos = data.player.sprite.position;
  return {
    player: {
      sprite: data.player.sprite.image,
      ...pos
    },
    ...data.debug,
    map: {
      name: data.map.currentMapName
    },
    currentTile: data.debug.currentTile,
    nextTile: data.debug.nextTile,
    block: {
      id: 0,
      index: getBlockIndexAtPosition(data.map.currentMap, pos.x, pos.y),
      x: Math.floor(pos.x / 2),
      y: Math.floor(pos.y / 2)
    }
  };
}
