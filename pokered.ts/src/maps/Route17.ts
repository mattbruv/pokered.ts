import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_17_BLOCKS } from "../data/blocks/Route17";
import { OverworldSprite } from "../sprite";

export const Route17: Map = {
  width: 10,
  height: 72,
  borderBlock: 67,
  blocks: ROUTE_17_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route16, xOffset: 0 },
    south: { map: MapName.Route18, xOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [
      { x: 9, y: 51, signId: "TEXT_ROUTE17_NOTICE_SIGN1" },
      { x: 9, y: 63, signId: "TEXT_ROUTE17_TRAINER_TIPS1" },
      { x: 9, y: 75, signId: "TEXT_ROUTE17_TRAINER_TIPS2" },
      { x: 9, y: 87, signId: "TEXT_ROUTE17_SIGN" },
      { x: 9, y: 111, signId: "TEXT_ROUTE17_NOTICE_SIGN2" },
      { x: 9, y: 141, signId: "TEXT_ROUTE17_CYCLING_ROAD_ENDS_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 19,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER1",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 11,
        y: 16,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER2",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 4,
        y: 18,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER3",
        trainerId: "OPP_BIKER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 7,
        y: 32,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER4",
        trainerId: "OPP_BIKER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 14,
        y: 34,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER5",
        trainerId: "OPP_BIKER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 17,
        y: 58,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER6",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 2,
        y: 68,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER7",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 14,
        y: 98,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER8",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 5,
        y: 98,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER9",
        trainerId: "OPP_BIKER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 10,
        y: 118,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE17_BIKER10",
        trainerId: "OPP_BIKER",
        trainerLevel: 12
      }
    ]
  },
  text: {
    _Route17Biker1BattleText: [
      ["text", "There's no money"],
      ["line", "in fighting kids!"]
    ],
    _Route17Biker1EndBattleText: [
      ["text", "Burned"],
      ["line", "out!"],
      ["prompt"]
    ],
    _Route17Biker1AfterBattleText: [
      ["text", "Good stuff is"],
      ["line", "lying around on"],
      ["cont", "CYCLING ROAD!"]
    ],
    _Route17Biker2BattleText: [
      ["text", "What do you want,"],
      ["line", "kiddo?"]
    ],
    _Route17Biker2EndBattleText: [["text", "Whoo!"], ["prompt"]],
    _Route17Biker2AfterBattleText: [
      ["text", "I could belly-"],
      ["line", "bump you outta"],
      ["cont", "here!"]
    ],
    _Route17Biker3BattleText: [
      ["text", "You heading to"],
      ["line", "FUCHSIA?"]
    ],
    _Route17Biker3EndBattleText: [
      ["text", "Crash and"],
      ["line", "burn!"],
      ["prompt"]
    ],
    _Route17Biker3AfterBattleText: [
      ["text", "I love racing"],
      ["line", "downhill!"]
    ],
    _Route17Biker4BattleText: [
      ["text", "We're BIKERs!"],
      ["line", "Highway stars!"]
    ],
    _Route17Biker4EndBattleText: [["text", "Smoked!"], ["prompt"]],
    _Route17Biker4AfterBattleText: [
      ["text", "Are you looking"],
      ["line", "for adventure?"]
    ],
    _Route17Biker5BattleText: [
      ["text", "Let VOLTORB"],
      ["line", "electrify you!"]
    ],
    _Route17Biker5EndBattleText: [
      ["text", "Grounded"],
      ["line", "out!"],
      ["prompt"]
    ],
    _Route17Biker5AfterBattleText: [
      ["text", "I got my VOLTORB"],
      ["line", "at the abandoned"],
      ["cont", "POWER PLANT."]
    ],
    _Route17Biker6BattleText: [
      ["text", "My #MON won't"],
      ["line", "evolve! Why?"]
    ],
    _Route17Biker6EndBattleText: [
      ["text", "Why,"],
      ["line", "you!"],
      ["prompt"]
    ],
    _Route17Biker6AfterBattleText: [
      ["text", "Maybe some #MON"],
      ["line", "need element"],
      ["cont", "STONEs to evolve."]
    ],
    _Route17Biker7BattleText: [
      ["text", "I need a little"],
      ["line", "exercise!"]
    ],
    _Route17Biker7EndBattleText: [
      ["text", "Whew!"],
      ["line", "Good workout!"],
      ["prompt"]
    ],
    _Route17Biker7AfterBattleText: [
      ["text", "I'm sure I lost"],
      ["line", "weight there!"]
    ],
    _Route17Biker8BattleText: [["text", "Be a rebel!"]],
    _Route17Biker8EndBattleText: [["text", "Aaaargh!"], ["prompt"]],
    _Route17Biker8AfterBattleText: [
      ["text", "Be ready to fight"],
      ["line", "for your beliefs!"]
    ],
    _Route17Biker9BattleText: [
      ["text", "Nice BIKE!"],
      ["line", "How's it handle?"]
    ],
    _Route17Biker9EndBattleText: [["text", "Shoot!"], ["prompt"]],
    _Route17Biker9AfterBattleText: [
      ["text", "The slope makes"],
      ["line", "it hard to steer!"]
    ],
    _Route17Biker10BattleText: [
      ["text", "Get lost kid!"],
      ["line", "I'm bushed!"]
    ],
    _Route17Biker10EndBattleText: [
      ["text", "Are you"],
      ["line", "satisfied?"],
      ["prompt"]
    ],
    _Route17Biker10AfterBattleText: [
      ["text", "I need to catch"],
      ["line", "a few Zs!"]
    ],
    _Route17NoticeSign1Text: [
      ["text", "It's a notice!"],
      ["para", "Watch out for"],
      ["line", "discarded items!"]
    ],
    _Route17TrainerTips1Text: [
      ["text", "TRAINER TIPS"],
      ["para", "All #MON are"],
      ["line", "unique."],
      ["para", "Even #MON of"],
      ["line", "the same type and"],
      ["cont", "level grow at"],
      ["cont", "different rates."]
    ],
    _Route17TrainerTips2Text: [
      ["text", "TRAINER TIPS"],
      ["para", "Press the A or B"],
      ["line", "Button to stay in"],
      ["cont", "place while on a"],
      ["cont", "slope."]
    ],
    _Route17SignText: [
      ["text", "ROUTE 17"],
      ["line", "CELADON CITY -"],
      ["cont", "FUCHSIA CITY"]
    ],
    _Route17NoticeSign2Text: [
      ["text", "It's a notice!"],
      ["para", "Don't throw the"],
      ["line", "game, throw #"],
      ["cont", "BALLs instead!"]
    ],
    _Route17CyclingRoadEndsSignText: [
      ["text", "CYCLING ROAD"],
      ["line", "Slope ends here!"]
    ]
  }
};
