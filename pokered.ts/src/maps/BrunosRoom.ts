import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BRUNOS_ROOM_BLOCKS } from "../data/blocks/BrunosRoom";
import { OverworldSprite } from "../sprite";

export const BrunosRoom: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: BRUNOS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: MapName.LoreleisRoom, warpIndex: 2 },
      { x: 5, y: 11, toMap: MapName.LoreleisRoom, warpIndex: 3 },
      { x: 4, y: 0, toMap: MapName.AgathasRoom, warpIndex: 0 },
      { x: 5, y: 0, toMap: MapName.AgathasRoom, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 2,
        sprite: OverworldSprite.SPRITE_BRUNO,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_BRUNOSROOM_BRUNO",
        trainerId: "OPP_BRUNO",
        trainerLevel: 1
      }
    ]
  },
  text: {
    _BrunoBeforeBattleText: [
      ["text", "I am BRUNO of"],
      ["line", "the ELITE FOUR!"],
      ["para", "Through rigorous"],
      ["line", "training, people"],
      ["cont", "and #MON can"],
      ["cont", "become stronger!"],
      ["para", "I've weight"],
      ["line", "trained with"],
      ["cont", "my #MON!"],
      ["para", "<PLAYER>!"],
      ["para", "We will grind you"],
      ["line", "down with our"],
      ["cont", "superior power!"],
      ["para", "Hoo hah!"]
    ],
    _BrunoEndBattleText: [
      ["text", "Why?"],
      ["line", "How could I lose?"],
      ["prompt"]
    ],
    _BrunoAfterBattleText: [
      ["text", "My job is done!"],
      ["line", "Go face your next"],
      ["cont", "challenge!"]
    ],
    _BrunosRoomBrunoDontRunAwayText: [
      ["text", "Someone's voice:"],
      ["line", "Don't run away!"]
    ]
  }
};
