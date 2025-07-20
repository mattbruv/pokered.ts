import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_FOREST_SOUTH_GATE_BLOCKS } from "../data/blocks/ViridianForestSouthGate";
import { OverworldSprite } from "../sprite";

export const ViridianForestSouthGate: Map = {
  width: 5,
  height: 4,
  borderBlock: 10,
  blocks: VIRIDIAN_FOREST_SOUTH_GATE_BLOCKS,
  tileset: Tileset.FOREST_GATE,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 0, toMap: MapName.ViridianForest, warpIndex: 3 },
      { x: 5, y: 0, toMap: MapName.ViridianForest, warpIndex: 4 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 4,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_VIRIDIANFORESTSOUTHGATE_GIRL"
      },
      {
        type: "sprite",
        x: 2,
        y: 4,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "WALK",
        textId: "TEXT_VIRIDIANFORESTSOUTHGATE_LITTLE_GIRL"
      }
    ]
  },
  textPointers: []
};
