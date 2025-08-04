import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_FOREST_BLOCKS } from "../data/blocks/ViridianForest";
import { OverworldSprite } from "../sprite";

export const ViridianForest: Map = {
  width: 17,
  height: 24,
  borderBlock: 3,
  blocks: VIRIDIAN_FOREST_BLOCKS,
  tileset: Tileset.FOREST,
  connections: {},
  objects: {
    warps: [
      { x: 1, y: 0, toMap: MapName.ViridianForestNorthGate, warpIndex: 2 },
      { x: 2, y: 0, toMap: MapName.ViridianForestNorthGate, warpIndex: 3 },
      { x: 15, y: 47, toMap: MapName.ViridianForestSouthGate, warpIndex: 1 },
      { x: 16, y: 47, toMap: MapName.ViridianForestSouthGate, warpIndex: 1 },
      { x: 17, y: 47, toMap: MapName.ViridianForestSouthGate, warpIndex: 1 },
      { x: 18, y: 47, toMap: MapName.ViridianForestSouthGate, warpIndex: 1 }
    ],
    backgroundItems: [
      { x: 24, y: 40, signId: "TEXT_VIRIDIANFOREST_TRAINER_TIPS1" },
      { x: 16, y: 32, signId: "TEXT_VIRIDIANFOREST_USE_ANTIDOTE_SIGN" },
      { x: 26, y: 17, signId: "TEXT_VIRIDIANFOREST_TRAINER_TIPS2" },
      { x: 4, y: 24, signId: "TEXT_VIRIDIANFOREST_TRAINER_TIPS3" },
      { x: 18, y: 45, signId: "TEXT_VIRIDIANFOREST_TRAINER_TIPS4" },
      { x: 2, y: 1, signId: "TEXT_VIRIDIANFOREST_LEAVING_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 16,
        y: 43,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER1"
      },
      {
        type: "trainer",
        x: 30,
        y: 33,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER2",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 30,
        y: 19,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER3",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 2,
        y: 18,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER4",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 3
      },
      {
        type: "item",
        x: 25,
        y: 11,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_ANTIDOTE",
        itemId: "ANTIDOTE"
      },
      {
        type: "item",
        x: 12,
        y: 29,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_POTION",
        itemId: "POTION"
      },
      {
        type: "item",
        x: 1,
        y: 31,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_POKE_BALL",
        itemId: "POKE_BALL"
      },
      {
        type: "sprite",
        x: 27,
        y: 40,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_VIRIDIANFOREST_YOUNGSTER5"
      }
    ]
  },
  text: {
    _ViridianForestYoungster1Text: [
      ["text", "I came here with"],
      ["line", "some friends!"],
      ["para", "They're out for"],
      ["line", "#MON fights!"]
    ],
    _ViridianForestYoungster2BattleText: [
      ["text", "Hey! You have"],
      ["line", "#MON! Come on!"],
      ["cont", "Let's battle'em!"]
    ],
    _ViridianForestYoungster2EndBattleText: [
      ["text", "No!"],
      ["line", "CATERPIE can't"],
      ["cont", "cut it!"],
      ["prompt"]
    ],
    _ViridianForestYoungster2AfterBattleText: [
      ["text", "Ssh! You'll scare"],
      ["line", "the bugs away!"]
    ],
    _ViridianForestYoungster3BattleText: [
      ["text", "Yo! You can't jam"],
      ["line", "out if you're a"],
      ["cont", "#MON trainer!"]
    ],
    _ViridianForestYoungster3EndBattleText: [
      ["text", "Huh?"],
      ["line", "I ran out of"],
      ["cont", "#MON!"],
      ["prompt"]
    ],
    _ViridianForestYoungster3AfterBattleText: [
      ["text", "Darn! I'm going"],
      ["line", "to catch some"],
      ["cont", "stronger ones!"]
    ],
    _ViridianForestYoungster4BattleText: [
      ["text", "Hey, wait up!"],
      ["line", "What's the hurry?"]
    ],
    _ViridianForestYoungster4EndBattleText: [
      ["text", "I"],
      ["line", "give! You're good"],
      ["cont", "at this!"],
      ["prompt"]
    ],
    _ViridianForestYoungster4AfterBattleText: [
      ["text", "Sometimes, you"],
      ["line", "can find stuff on"],
      ["cont", "the ground!"],
      ["para", "I'm looking for"],
      ["line", "the stuff I"],
      ["cont", "dropped!"]
    ],
    _ViridianForestYoungster5Text: [
      ["text", "I ran out of #"],
      ["line", "BALLs to catch"],
      ["cont", "#MON with!"],
      ["para", "You should carry"],
      ["line", "extras!"]
    ],
    _ViridianForestTrainerTips1Text: [
      ["text", "TRAINER TIPS"],
      ["para", "If you want to"],
      ["line", "avoid battles,"],
      ["cont", "stay away from"],
      ["cont", "grassy areas!"]
    ],
    _ViridianForestUseAntidoteSignText: [
      ["text", "For poison, use"],
      ["line", "ANTIDOTE! Get it"],
      ["cont", "at #MON MARTs!"]
    ],
    _ViridianForestTrainerTips2Text: [
      ["text", "TRAINER TIPS"],
      ["para", "Contact PROF.OAK"],
      ["line", "via PC to get"],
      ["cont", "your #DEX"],
      ["cont", "evaluated!"]
    ],
    _ViridianForestTrainerTips3Text: [
      ["text", "TRAINER TIPS"],
      ["para", "No stealing of"],
      ["line", "#MON from"],
      ["cont", "other trainers!"],
      ["cont", "Catch only wild"],
      ["cont", "#MON!"]
    ],
    _ViridianForestTrainerTips4Text: [
      ["text", "TRAINER TIPS"],
      ["para", "Weaken #MON"],
      ["line", "before attempting"],
      ["cont", "capture!"],
      ["para", "When healthy,"],
      ["line", "they may escape!"]
    ],
    _ViridianForestLeavingSignText: [
      ["text", "LEAVING"],
      ["line", "VIRIDIAN FOREST"],
      ["cont", "PEWTER CITY AHEAD"]
    ]
  }
};
