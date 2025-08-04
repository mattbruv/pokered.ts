import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_B2F_BLOCKS } from "../data/blocks/MtMoonB2F";
import { OverworldSprite } from "../sprite";

export const MtMoonB2F: Map = {
  width: 20,
  height: 18,
  borderBlock: 3,
  blocks: MT_MOON_B2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 25, y: 9, toMap: MapName.MtMoonB1F, warpIndex: 1 },
      { x: 21, y: 17, toMap: MapName.MtMoonB1F, warpIndex: 4 },
      { x: 15, y: 27, toMap: MapName.MtMoonB1F, warpIndex: 5 },
      { x: 5, y: 7, toMap: MapName.MtMoonB1F, warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 8,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_SUPER_NERD",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 11,
        y: 16,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 15,
        y: 22,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 29,
        y: 11,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_ROCKET3",
        trainerId: "OPP_ROCKET",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 29,
        y: 17,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_ROCKET4",
        trainerId: "OPP_ROCKET",
        trainerLevel: 4
      },
      {
        type: "sprite",
        x: 12,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_FOSSIL,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_DOME_FOSSIL"
      },
      {
        type: "sprite",
        x: 13,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_FOSSIL,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_HELIX_FOSSIL"
      },
      {
        type: "item",
        x: 25,
        y: 21,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_HP_UP",
        itemId: "HP_UP"
      },
      {
        type: "item",
        x: 29,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_TM_MEGA_PUNCH",
        itemId: "TM_MEGA_PUNCH"
      }
    ]
  },
  text: {
    _MtMoonB2FDomeFossilYouWantText: [
      ["text", "You want the"],
      ["line", "DOME FOSSIL?"]
    ],
    _MtMoonB2FHelixFossilYouWantText: [
      ["text", "You want the"],
      ["line", "HELIX FOSSIL?"]
    ],
    _MtMoonB2FReceivedFossilText: [
      ["text", "<PLAYER> got the"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _MtMoonB2FYouHaveNoRoomText: [
      ["text", "Look, you've got"],
      ["line", "no room for this.@"],
      ["text_end"]
    ],
    _MtMoonB2FSuperNerdTheyreBothMineText: [
      ["text", "Hey, stop!"],
      ["para", "I found these"],
      ["line", "fossils! They're"],
      ["cont", "both mine!"]
    ],
    _MtMoonB2FSuperNerdOkIllShareText: [
      ["text", "OK!"],
      ["line", "I'll share!"],
      ["prompt"]
    ],
    _MtMoonB2fSuperNerdEachTakeOneText: [
      ["text", "We'll each take"],
      ["line", "one!"],
      ["cont", "No being greedy!"]
    ],
    _MtMoonB2FSuperNerdTheresAPokemonLabText: [
      ["text", "Far away, on"],
      ["line", "CINNABAR ISLAND,"],
      ["cont", "there's a #MON"],
      ["cont", "LAB."],
      ["para", "They do research"],
      ["line", "on regenerating"],
      ["cont", "fossils."]
    ],
    _MtMoonB2FSuperNerdThenThisIsMineText: [
      ["text", "All right. Then"],
      ["line", "this is mine!@"],
      ["text_end"]
    ],
    _MtMoonB2FRocket1BattleText: [
      ["text", "TEAM ROCKET will"],
      ["line", "find the fossils,"],
      ["cont", "revive and sell"],
      ["cont", "them for cash!"]
    ],
    _MtMoonB2FRocket1EndBattleText: [
      ["text", "Urgh!"],
      ["line", "Now I'm mad!"],
      ["prompt"]
    ],
    _MtMoonB2FRocket1AfterBattleText: [
      ["text", "You made me mad!"],
      ["line", "TEAM ROCKET will"],
      ["cont", "blacklist you!"]
    ],
    _MtMoonB2FRocket2BattleText: [
      ["text", "We, TEAM ROCKET,"],
      ["line", "are #MON"],
      ["cont", "gangsters!"]
    ],
    _MtMoonB2FRocket2EndBattleText: [
      ["text", "I blew"],
      ["line", "it!"],
      ["prompt"]
    ],
    _MtMoonB2FRocket2AfterBattleText: [
      ["text", "Darn it all! My"],
      ["line", "associates won't"],
      ["cont", "stand for this!"]
    ],
    _MtMoonB2FRocket3BattleText: [
      ["text", "We're pulling a"],
      ["line", "big job here!"],
      ["cont", "Get lost, kid!"]
    ],
    _MtMoonB2FRocket3EndBattleText: [
      ["text", "So, you"],
      ["line", "are good."],
      ["prompt"]
    ],
    _MtMoonB2FRocket3AfterBattleText: [
      ["text", "If you find a"],
      ["line", "fossil, give it"],
      ["cont", "to me and scram!"]
    ],
    _MtMoonB2FRocket4BattleText: [
      ["text", "Little kids"],
      ["line", "should leave"],
      ["cont", "grown-ups alone!"]
    ],
    _MtMoonB2FRocket4EndBattleText: [
      ["text", "I'm"],
      ["line", "steamed!"],
      ["prompt"]
    ],
    _MtMoonB2FRocket4AfterBattleText: [
      ["text", "#MON lived"],
      ["line", "here long before"],
      ["cont", "people came."]
    ]
  }
};
