import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_BOW_BLOCKS } from "../data/blocks/SSAnneBow";
import { OverworldSprite } from "../sprite";

export const SSAnneBow: Map = {
  width: 10,
  height: 7,
  borderBlock: 35,
  blocks: SS_ANNE_BOW_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 13, y: 6, toMap: MapName.SSAnne3F, warpIndex: 0 },
      { x: 13, y: 7, toMap: MapName.SSAnne3F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 2,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 4,
        y: 9,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SAILOR,
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_SAILOR1"
      },
      {
        type: "sprite",
        x: 7,
        y: 11,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_COOLTRAINER_M"
      },
      {
        type: "trainer",
        x: 4,
        y: 4,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_SAILOR2",
        trainerId: "OPP_SAILOR",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 10,
        y: 8,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SSANNEBOW_SAILOR3",
        trainerId: "OPP_SAILOR",
        trainerLevel: 2
      }
    ]
  },
  text: {
    _SSAnneBowSuperNerdText: [
      ["text", "The party's over."],
      ["line", "The ship will be"],
      ["cont", "departing soon."]
    ],
    _SSAnneBowSailor1Text: [
      ["text", "Scrubbing decks"],
      ["line", "is hard work!"]
    ],
    _SSAnneBowCooltrainerMText: [
      ["text", "Urf. I feel ill."],
      ["para", "I stepped out to"],
      ["line", "get some air."]
    ],
    _SSAnneBowSailor2BattleText: [
      ["text", "Hey matey!"],
      ["para", "Let's do a little"],
      ["line", "jig!"]
    ],
    _SSAnneBowSailor2EndBattleText: [
      ["text", "You're"],
      ["line", "impressive!"],
      ["prompt"]
    ],
    _SSAnneBowSailor2AfterBattleText: [
      ["text", "How many kinds of"],
      ["line", "#MON do you"],
      ["cont", "think there are?"]
    ],
    _SSAnneBowSailor3BattleText: [
      ["text", "Ahoy there!"],
      ["line", "Are you seasick?"]
    ],
    _SSAnneBowSailor3EndBattleText: [
      ["text", "I was"],
      ["line", "just careless!"],
      ["prompt"]
    ],
    _SSAnneBowSailor3AfterBattleText: [
      ["text", "My Pa said there"],
      ["line", "are 100 kinds of"],
      ["cont", "#MON. I think"],
      ["cont", "there are more."]
    ]
  }
};
