import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_FOREST_NORTH_GATE_BLOCKS } from "../data/blocks/ViridianForestNorthGate";
import { OverworldSprite } from "../sprite";

export const ViridianForestNorthGate: Map = {
  width: 5,
  height: 4,
  borderBlock: 10,
  blocks: VIRIDIAN_FOREST_NORTH_GATE_BLOCKS,
  tileset: Tileset.FOREST_GATE,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 0, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 5, y: 0, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 4, y: 7, toMap: MapName.ViridianForest, warpIndex: 0 },
      { x: 5, y: 7, toMap: MapName.ViridianForest, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_VIRIDIANFORESTNORTHGATE_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 2,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_VIRIDIANFORESTNORTHGATE_GRAMPS"
      }
    ]
  },
  textPointers: []
};
