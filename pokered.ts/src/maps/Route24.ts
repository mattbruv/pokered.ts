import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_24_BLOCKS } from "../data/blocks/Route24";
import { OverworldSprite } from "../sprite";

export const Route24: Map = {
  width: 10,
  height: 18,
  borderBlock: 44,
  blocks: ROUTE_24_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.CeruleanCity, xOffset: -5 },
    east: { map: MapName.Route25, yOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 11,
        y: 15,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_M1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 5,
        y: 20,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_M2",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 11,
        y: 19,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_M3",
        trainerId: "OPP_JR_TRAINER_M",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 10,
        y: 22,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 11,
        y: 25,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE24_YOUNGSTER1",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 10,
        y: 28,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE24_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 11,
        y: 31,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE24_YOUNGSTER2",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 9
      },
      {
        type: "item",
        x: 10,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROUTE24_TM_THUNDER_WAVE",
        itemId: "TM_THUNDER_WAVE"
      }
    ]
  },
  text: {
    _Route24CooltrainerM1YouBeatOurContestText: [
      ["text", "Congratulations!"],
      ["line", "You beat our 5"],
      ["cont", "contest trainers!@"],
      ["text_end"]
    ],
    _Route24CooltrainerM1YouJustEarnedAPrizeText: [
      ["text_start"],
      ["para", "You just earned a"],
      ["line", "fabulous prize!"],
      ["prompt"]
    ],
    _Route24CooltrainerM1ReceivedNuggetText: [
      ["text", "<PLAYER> received"],
      ["line", "a @"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _Route24CooltrainerM1NoRoomText: [
      ["text", "You don't have"],
      ["line", "any room!"]
    ],
    _Route24CooltrainerM1JoinTeamRocketText: [
      ["text", "By the way, would"],
      ["line", "you like to join"],
      ["cont", "TEAM ROCKET?"],
      ["para", "We're a group"],
      ["line", "dedicated to evil"],
      ["cont", "using #MON!"],
      ["para", "Want to join?"],
      ["para", "Are you sure?"],
      ["para", "Come on, join us!"],
      ["para", "I'm telling you"],
      ["line", "to join!"],
      ["para", "OK, you need"],
      ["line", "convincing!"],
      ["para", "I'll make you an"],
      ["line", "offer you can't"],
      ["cont", "refuse!"]
    ],
    _Route24CooltrainerM1DefeatedText: [
      ["text", "Arrgh!"],
      ["line", "You are good!"],
      ["prompt"]
    ],
    _Route24CooltrainerM1YouCouldBecomeATopLeaderText: [
      ["text", "With your ability,"],
      ["line", "you could become"],
      ["cont", "a top leader in"],
      ["cont", "TEAM ROCKET!"]
    ],
    _Route24CooltrainerM2BattleText: [
      ["text", "I saw your feat"],
      ["line", "from the grass!"]
    ]
  }
};
