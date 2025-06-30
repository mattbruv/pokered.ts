import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_3F_BLOCKS } from "../data/blocks/CeladonMansion3F";

export const CeladonMansion3F: Map = {
  width: 4,
  height: 6,
  borderBlock: 15,
  blocks: CELADON_MANSION_3F_BLOCKS,
  tileset: Tileset.MANSION,
  connections: {},
  objects: {
    warps: [
      { x: 6, y: 1, toMap: MapName.CeladonMansion2F, warpId: 1 },
      { x: 7, y: 1, toMap: MapName.CeladonMansionRoof, warpId: 1 },
      { x: 2, y: 1, toMap: MapName.CeladonMansionRoof, warpId: 2 },
      { x: 4, y: 1, toMap: MapName.CeladonMansion2F, warpId: 4 }
    ],
    backgroundItems: [
      { x: 1, y: 3, signId: "TEXT_CELADONMANSION3F_GAME_PROGRAM_PC" },
      { x: 4, y: 3, signId: "TEXT_CELADONMANSION3F_PLAYING_GAME_PC" },
      { x: 1, y: 6, signId: "TEXT_CELADONMANSION3F_GAME_SCRIPT_PC" },
      { x: 4, y: 9, signId: "TEXT_CELADONMANSION3F_DEV_ROOM_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 4,
        sprite: "SPRITE_BIKE_SHOP_CLERK",
        movement: "STAY",
        textId: "TEXT_CELADONMANSION3F_PROGRAMMER"
      },
      {
        type: "sprite",
        x: 3,
        y: 4,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_CELADONMANSION3F_GRAPHIC_ARTIST"
      },
      {
        type: "sprite",
        x: 0,
        y: 7,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_CELADONMANSION3F_WRITER"
      },
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: "SPRITE_SILPH_WORKER_M",
        movement: "STAY",
        textId: "TEXT_CELADONMANSION3F_GAME_DESIGNER"
      }
    ]
  },
  textPointers: []
};
