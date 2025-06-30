import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_LAB_METRONOME_ROOM_BLOCKS } from "../data/blocks/CinnabarLabMetronomeRoom";
import { OverworldSprite } from "../sprite";

export const CinnabarLabMetronomeRoom: Map = {
  width: 4,
  height: 4,
  borderBlock: 23,
  blocks: CINNABAR_LAB_METRONOME_ROOM_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: MapName.CinnabarLab, warpIndex: 3 },
      { x: 3, y: 7, toMap: MapName.CinnabarLab, warpIndex: 3 }
    ],
    backgroundItems: [
      { x: 0, y: 4, signId: "TEXT_CINNABARLABMETRONOMEROOM_PC_KEYBOARD" },
      { x: 1, y: 4, signId: "TEXT_CINNABARLABMETRONOMEROOM_PC_MONITOR" },
      { x: 2, y: 1, signId: "TEXT_CINNABARLABMETRONOMEROOM_AMBER_PIPE" }
    ],
    objects: [
      {
        type: "sprite",
        x: 7,
        y: 2,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_CINNABARLABMETRONOMEROOM_SCIENTIST1"
      },
      {
        type: "sprite",
        x: 2,
        y: 3,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "WALK",
        textId: "TEXT_CINNABARLABMETRONOMEROOM_SCIENTIST2"
      }
    ]
  },
  textPointers: []
};
