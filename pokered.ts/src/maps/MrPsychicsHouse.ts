import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MR_PSYCHICS_HOUSE_BLOCKS } from "../data/blocks/MrPsychicsHouse";
import { OverworldSprite } from "../sprite";

export const MrPsychicsHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: MR_PSYCHICS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 7 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        sprite: OverworldSprite.SPRITE_FISHING_GURU,
        movement: "STAY",
        textId: "TEXT_MRPSYCHICSHOUSE_MR_PSYCHIC"
      }
    ]
  },
  textPointers: []
};
