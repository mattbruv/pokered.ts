import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LORELEIS_ROOM_BLOCKS } from "../data/blocks/LoreleisRoom";
import { OverworldSprite } from "../sprite";

export const LoreleisRoom: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: LORELEIS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: MapName.IndigoPlateauLobby, warpIndex: 2 },
      { x: 5, y: 11, toMap: MapName.IndigoPlateauLobby, warpIndex: 2 },
      { x: 4, y: 0, toMap: MapName.BrunosRoom, warpIndex: 0 },
      { x: 5, y: 0, toMap: MapName.BrunosRoom, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 2,
        sprite: OverworldSprite.SPRITE_LORELEI,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_LORELEISROOM_LORELEI",
        trainerId: "OPP_LORELEI",
        trainerLevel: 1
      }
    ]
  },
  text: {
    _LoreleisRoomLoreleiBeforeBattleText: [
      ["text", "Welcome to"],
      ["line", "#MON LEAGUE!"],
      ["para", "I am LORELEI of"],
      ["line", "the ELITE FOUR!"],
      ["para", "No one can best"],
      ["line", "me when it comes"],
      ["cont", "to icy #MON!"],
      ["para", "Freezing moves"],
      ["line", "are powerful!"],
      ["para", "Your #MON will"],
      ["line", "be at my mercy"],
      ["cont", "when they are"],
      ["cont", "frozen solid!"],
      ["para", "Hahaha!"],
      ["line", "Are you ready?"]
    ],
    _LoreleisRoomLoreleiEndBattleText: [
      ["text", "How"],
      ["line", "dare you!"],
      ["prompt"]
    ],
    _LoreleisRoomLoreleiAfterBattleText: [
      ["text", "You're better"],
      ["line", "than I thought!"],
      ["cont", "Go on ahead!"],
      ["para", "You only got a"],
      ["line", "taste of #MON"],
      ["cont", "LEAGUE power!"]
    ],
    _LoreleisRoomLoreleiDontRunAwayText: [
      ["text", "Someone's voice:"],
      ["line", "Don't run away!"]
    ]
  }
};
