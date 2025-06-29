import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { COLOSSEUM_BLOCKS } from "../data/blocks/Colosseum";

export const Colosseum: Map = {
  width: 5,
  height: 4,
  borderBlock: 14,
  blocks: COLOSSEUM_BLOCKS,
  tileset: Tileset.CLUB,
  connections: {},
  objects: {
    warps: [],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 2,
        sprite: "SPRITE_RED",
        movement: "STAY",
        textId: "TEXT_COLOSSEUM_OPPONENT"
      }
    ]
  },
  textPointers: []
};
