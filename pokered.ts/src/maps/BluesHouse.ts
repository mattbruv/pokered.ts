import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BLUES_HOUSE_BLOCKS } from "../data/blocks/BluesHouse";
import { OverworldSprite } from "../sprite";

export const BluesHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: BLUES_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: OverworldSprite.SPRITE_DAISY,
        movement: "STAY",
        textId: "TEXT_BLUESHOUSE_DAISY_SITTING"
      },
      {
        type: "item",
        x: 6,
        y: 4,
        sprite: OverworldSprite.SPRITE_DAISY,
        movement: "WALK",
        textId: "TEXT_BLUESHOUSE_DAISY_WALKING",
        itemId: "0"
      },
      {
        type: "item",
        x: 3,
        y: 3,
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_BLUESHOUSE_TOWN_MAP",
        itemId: "0"
      }
    ]
  },
  textPointers: []
};
