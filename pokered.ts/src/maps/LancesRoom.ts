import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LANCES_ROOM_BLOCKS } from "../data/blocks/LancesRoom";
import { OverworldSprite } from "../sprite";

export const LancesRoom: Map = {
  width: 13,
  height: 13,
  borderBlock: 3,
  blocks: LANCES_ROOM_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  objects: {
    warps: [
      { x: 24, y: 16, toMap: MapName.AgathasRoom, warpIndex: 2 },
      { x: 5, y: 0, toMap: MapName.ChampionsRoom, warpIndex: 0 },
      { x: 6, y: 0, toMap: MapName.ChampionsRoom, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 6,
        y: 1,
        sprite: OverworldSprite.SPRITE_LANCE,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_LANCESROOM_LANCE",
        trainerId: "OPP_LANCE",
        trainerLevel: 1
      }
    ]
  },
  text: {
    _LancesRoomLanceBeforeBattleText: [
      ["text", "Ah! I heard about"],
      ["line", "you <PLAYER>!"],
      ["para", "I lead the ELITE"],
      ["line", "FOUR! You can"],
      ["cont", "call me LANCE the"],
      ["cont", "dragon trainer!"],
      ["para", "You know that"],
      ["line", "dragons are"],
      ["cont", "mythical #MON!"],
      ["para", "They're hard to"],
      ["line", "catch and raise,"],
      ["cont", "but their powers"],
      ["cont", "are superior!"],
      ["para", "They're virtually"],
      ["line", "indestructible!"],
      ["para", "Well, are you"],
      ["line", "ready to lose?"],
      ["para", "Your LEAGUE"],
      ["line", "challenge ends"],
      ["cont", "with me, <PLAYER>!"]
    ],
    _LancesRoomLanceEndBattleText: [
      ["text", "That's it!"],
      ["para", "I hate to admit"],
      ["line", "it, but you are a"],
      ["cont", "#MON master!"],
      ["prompt"]
    ],
    _LancesRoomLanceAfterBattleText: [
      ["text", "I still can't"],
      ["line", "believe my"],
      ["cont", "dragons lost to"],
      ["cont", "you, <PLAYER>!"],
      ["para", "You are now the"],
      ["line", "#MON LEAGUE"],
      ["cont", "champion!"],
      ["para", "...Or, you would"],
      ["line", "have been, but"],
      ["cont", "you have one more"],
      ["cont", "challenge ahead."],
      ["para", "You have to face"],
      ["line", "another trainer!"],
      ["cont", "His name is..."],
      ["para", "<RIVAL>!"],
      ["line", "He beat the ELITE"],
      ["cont", "FOUR before you!"],
      ["para", "He is the real"],
      ["line", "#MON LEAGUE"],
      ["cont", "champion!@"],
      ["text_end"]
    ]
  }
};
