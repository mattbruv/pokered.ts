import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_2F_BLOCKS } from "../data/blocks/SilphCo2F";
import { OverworldSprite } from "../sprite";

export const SilphCo2F: Map = {
  width: 15,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_2F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 24, y: 0, toMap: MapName.SilphCo1F, warpIndex: 2 },
      { x: 26, y: 0, toMap: MapName.SilphCo3F, warpIndex: 0 },
      { x: 20, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 3, y: 3, toMap: MapName.SilphCo3F, warpIndex: 6 },
      { x: 13, y: 3, toMap: MapName.SilphCo8F, warpIndex: 4 },
      { x: 27, y: 15, toMap: MapName.SilphCo8F, warpIndex: 5 },
      { x: 9, y: 15, toMap: MapName.SilphCo6F, warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 1,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_SILPH_WORKER_F"
      },
      {
        type: "trainer",
        x: 5,
        y: 12,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_SCIENTIST1",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 24,
        y: 13,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_SCIENTIST2",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 16,
        y: 11,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 23
      },
      {
        type: "trainer",
        x: 24,
        y: 7,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SILPHCO2F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 24
      }
    ]
  },
  text: {
    SilphCo2FSilphWorkerFPleaseTakeThisText: [
      ["text", "Eeek!"],
      ["line", "No! Stop! Help!"],
      ["para", "Oh, you're not"],
      ["line", "with TEAM ROCKET."],
      ["cont", "I thought..."],
      ["cont", "I'm sorry. Here,"],
      ["cont", "please take this!"],
      ["prompt"]
    ],
    _SilphCo2FSilphWorkerFReceivedTM36Text: [
      ["text", "<PLAYER> got"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _SilphCo2FSilphWorkerFTM36ExplanationText: [
      ["text", "TM36 is"],
      ["line", "SELFDESTRUCT!"],
      ["para", "It's powerful, but"],
      ["line", "the #MON that"],
      ["cont", "uses it faints!"],
      ["cont", "Be careful."]
    ],
    _SilphCo2FSilphWorkerFTM36NoRoomText: [
      ["text", "You don't have any"],
      ["line", "room for this."]
    ],
    _SilphCo2FScientist1BattleText: [
      ["text", "Help! I'm a SILPH"],
      ["line", "employee."]
    ],
    _SilphCo2FScientist1EndBattleText: [
      ["text", "How"],
      ["line", "did you know I"],
      ["cont", "was a ROCKET?"],
      ["prompt"]
    ],
    _SilphCo2FScientist1AfterBattleText: [
      ["text", "I work for both"],
      ["line", "SILPH and TEAM"],
      ["cont", "ROCKET!"]
    ],
    _SilphCo2FScientist2BattleText: [
      ["text", "It's off limits"],
      ["line", "here! Go home!"]
    ],
    _SilphCo2FScientist2EndBattleText: [
      ["text", "You're"],
      ["line", "good."],
      ["prompt"]
    ],
    _SilphCo2FScientist2AfterBattleText: [
      ["text", "Can you solve the"],
      ["line", "maze in here?"]
    ],
    _SilphCo2FRocket1BattleText: [
      ["text", "No kids are"],
      ["line", "allowed in here!"]
    ],
    _SilphCo2FRocket1EndBattleText: [["text", "Tough!"], ["prompt"]],
    _SilphCo2FRocket1AfterBattleText: [
      ["text", "Diamond shaped"],
      ["line", "tiles are"],
      ["cont", "teleport blocks!"],
      ["para", "They're hi-tech"],
      ["line", "transporters!"]
    ],
    _SilphCo2FRocket2BattleText: [
      ["text", "Hey kid! What are"],
      ["line", "you doing here?"]
    ],
    _SilphCo2FRocket2EndBattleText: [["text", "I goofed!"], ["prompt"]],
    _SilphCo2FRocket2AfterBattleText: [
      ["text", "SILPH CO. will"],
      ["line", "be merged with"],
      ["cont", "TEAM ROCKET!"]
    ]
  }
};
