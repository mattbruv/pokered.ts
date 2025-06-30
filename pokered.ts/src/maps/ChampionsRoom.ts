import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CHAMPIONS_ROOM_BLOCKS } from "../data/blocks/ChampionsRoom";
import { OverworldSprite } from "../sprite";

export const ChampionsRoom: Map = {
  width: 4,
  height: 4,
  borderBlock: 3,
  blocks: CHAMPIONS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: MapName.LancesRoom, warpIndex: 1 },
      { x: 4, y: 7, toMap: MapName.LancesRoom, warpIndex: 2 },
      { x: 3, y: 0, toMap: MapName.HallOfFame, warpIndex: 0 },
      { x: 4, y: 0, toMap: MapName.HallOfFame, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        sprite: OverworldSprite.SPRITE_BLUE,
        movement: "STAY",
        textId: "TEXT_CHAMPIONSROOM_RIVAL"
      },
      {
        type: "sprite",
        x: 3,
        y: 7,
        sprite: OverworldSprite.SPRITE_OAK,
        movement: "STAY",
        textId: "TEXT_CHAMPIONSROOM_OAK"
      }
    ]
  },
  textPointers: []
};
