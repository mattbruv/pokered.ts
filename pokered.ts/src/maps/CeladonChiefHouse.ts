import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_CHIEF_HOUSE_BLOCKS } from "../data/blocks/CeladonChiefHouse";
import { OverworldSprite } from "../sprite";

export const CeladonChiefHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_CHIEF_HOUSE_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 11 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 11 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_CELADONCHIEFHOUSE_CHIEF"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "WALK",
        textId: "TEXT_CELADONCHIEFHOUSE_ROCKET"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        sprite: OverworldSprite.SPRITE_SAILOR,
        movement: "STAY",
        textId: "TEXT_CELADONCHIEFHOUSE_SAILOR"
      }
    ]
  },
  textPointers: []
};
