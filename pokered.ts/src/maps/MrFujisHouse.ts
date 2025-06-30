import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MR_FUJIS_HOUSE_BLOCKS } from "../data/blocks/MrFujisHouse";

export const MrFujisHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: MR_FUJIS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 5,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 6,
        y: 3,
        sprite: "SPRITE_LITTLE_GIRL",
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 6,
        y: 4,
        sprite: "SPRITE_MONSTER",
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_PSYDUCK"
      },
      {
        type: "sprite",
        x: 1,
        y: 3,
        sprite: "SPRITE_MONSTER",
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_NIDORINO"
      },
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: "SPRITE_MR_FUJI",
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_MR_FUJI"
      },
      {
        type: "sprite",
        x: 3,
        y: 3,
        sprite: "SPRITE_POKEDEX",
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_POKEDEX"
      }
    ]
  },
  textPointers: []
};
