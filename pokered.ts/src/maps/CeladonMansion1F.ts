import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_1F_BLOCKS } from "../data/blocks/CeladonMansion1F";

export const CeladonMansion1F: Map = {
  width: 4,
  height: 6,
  borderBlock: 15,
  blocks: CELADON_MANSION_1F_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 5, y: 11, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 4, y: 0, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 7, y: 1, toMap: MapName.CeladonMansion2F, warpIndex: 1 },
      { x: 2, y: 1, toMap: MapName.CeladonMansion2F, warpIndex: 2 }
    ],
    backgroundItems: [
      { x: 4, y: 9, signId: "TEXT_CELADONMANSION1F_MANAGERS_SUITE_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: "SPRITE_MONSTER",
        movement: "STAY",
        textId: "TEXT_CELADONMANSION1F_MEOWTH"
      },
      {
        type: "sprite",
        x: 1,
        y: 5,
        sprite: "SPRITE_GRANNY",
        movement: "STAY",
        textId: "TEXT_CELADONMANSION1F_GRANNY"
      },
      {
        type: "sprite",
        x: 1,
        y: 8,
        sprite: "SPRITE_FAIRY",
        movement: "WALK",
        textId: "TEXT_CELADONMANSION1F_CLEFAIRY"
      },
      {
        type: "sprite",
        x: 4,
        y: 4,
        sprite: "SPRITE_MONSTER",
        movement: "WALK",
        textId: "TEXT_CELADONMANSION1F_NIDORANF"
      }
    ]
  },
  textPointers: []
};
