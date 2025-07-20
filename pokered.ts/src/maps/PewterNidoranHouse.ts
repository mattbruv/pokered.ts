import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_NIDORAN_HOUSE_BLOCKS } from "../data/blocks/PewterNidoranHouse";
import { OverworldSprite } from "../sprite";

export const PewterNidoranHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: PEWTER_NIDORAN_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 5,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_PEWTERNIDORANHOUSE_NIDORAN"
      },
      {
        type: "sprite",
        x: 3,
        y: 5,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_LITTLE_BOY,
        movement: "STAY",
        textId: "TEXT_PEWTERNIDORANHOUSE_LITTLE_BOY"
      },
      {
        type: "sprite",
        x: 1,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_PEWTERNIDORANHOUSE_MIDDLE_AGED_MAN"
      }
    ]
  },
  textPointers: []
};
