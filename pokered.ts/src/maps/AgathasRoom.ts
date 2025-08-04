import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { AGATHAS_ROOM_BLOCKS } from "../data/blocks/AgathasRoom";
import { OverworldSprite } from "../sprite";

export const AgathasRoom: Map = {
  width: 5,
  height: 6,
  borderBlock: 0,
  blocks: AGATHAS_ROOM_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: MapName.BrunosRoom, warpIndex: 2 },
      { x: 5, y: 11, toMap: MapName.BrunosRoom, warpIndex: 3 },
      { x: 4, y: 0, toMap: MapName.LancesRoom, warpIndex: 0 },
      { x: 5, y: 0, toMap: MapName.LancesRoom, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 2,
        sprite: OverworldSprite.SPRITE_AGATHA,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_AGATHASROOM_AGATHA",
        trainerId: "OPP_AGATHA",
        trainerLevel: 1
      }
    ]
  },
  text: {
    _AgathaBeforeBattleText: [
      ["text", "I am AGATHA of"],
      ["line", "the ELITE FOUR!"],
      ["para", "OAK's taken a lot"],
      ["line", "of interest in"],
      ["cont", "you, child!"],
      ["para", "That old duff was"],
      ["line", "once tough and"],
      ["cont", "handsome! That"],
      ["cont", "was decades ago!"],
      ["para", "Now he just wants"],
      ["line", "to fiddle with"],
      ["cont", "his #DEX! He's"],
      ["cont", "wrong! #MON"],
      ["cont", "are for fighting!"],
      ["para", "<PLAYER>! I'll show"],
      ["line", "you how a real"],
      ["cont", "trainer fights!"]
    ],
    _AgathaEndBattleText: [
      ["text", "Oh ho!"],
      ["line", "You're something"],
      ["cont", "special, child!"],
      ["prompt"]
    ],
    _AgathaAfterBattleText: [
      ["text", "You win! I see"],
      ["line", "what the old duff"],
      ["cont", "sees in you now!"],
      ["para", "I have nothing"],
      ["line", "else to say! Run"],
      ["cont", "along now, child!"]
    ],
    _AgathasRoomAgathaDontRunAwayText: [
      ["text", "Someone's voice:"],
      ["line", "Don't run away!"]
    ]
  }
};
