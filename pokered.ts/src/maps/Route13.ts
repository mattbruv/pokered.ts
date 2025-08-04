import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_13_BLOCKS } from "../data/blocks/Route13";
import { OverworldSprite } from "../sprite";

export const Route13: Map = {
  width: 30,
  height: 9,
  borderBlock: 67,
  blocks: ROUTE_13_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route12, xOffset: 20 },
    west: { map: MapName.Route14, yOffset: 0 }
  },
  objects: {
    warps: [],
    backgroundItems: [
      { x: 15, y: 13, signId: "TEXT_ROUTE13_TRAINER_TIPS1" },
      { x: 33, y: 5, signId: "TEXT_ROUTE13_TRAINER_TIPS2" },
      { x: 31, y: 11, signId: "TEXT_ROUTE13_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 49,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_M1",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 48,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 12
      },
      {
        type: "trainer",
        x: 27,
        y: 9,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 13
      },
      {
        type: "trainer",
        x: 23,
        y: 10,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_F3",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 50,
        y: 5,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_F4",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 12,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_M2",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 33,
        y: 6,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_BEAUTY1",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 32,
        y: 6,
        sprite: OverworldSprite.SPRITE_BEAUTY,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE13_BEAUTY2",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 10,
        y: 7,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE13_BIKER",
        trainerId: "OPP_BIKER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 7,
        y: 13,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE13_COOLTRAINER_M3",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 3
      }
    ]
  },
  text: {
    _Route13CooltrainerM1BattleText: [
      ["text", "My bird #MON"],
      ["line", "want to scrap!"]
    ],
    _Route13CooltrainerM1EndBattleText: [
      ["text", "My"],
      ["line", "bird combo lost?"],
      ["prompt"]
    ],
    _Route13CooltrainerM1AfterBattleText: [
      ["text", "My #MON look"],
      ["line", "happy even though"],
      ["cont", "they lost."]
    ],
    _Route13CooltrainerF1BattleText: [
      ["text", "I'm told I'm good"],
      ["line", "for a kid!"]
    ],
    _Route13CooltrainerF1EndBattleText: [
      ["text", "Ohh!"],
      ["line", "I lost!"],
      ["prompt"]
    ],
    _Route13CooltrainerF1AfterBattleText: [
      ["text", "I want to become"],
      ["line", "a good trainer."],
      ["cont", "I'll train hard."]
    ],
    _Route13CooltrainerF2BattleText: [
      ["text", "Wow! Your BADGEs"],
      ["line", "are too cool!"]
    ],
    _Route13CooltrainerF2EndBattleText: [
      ["text", "Not"],
      ["line", "enough!"],
      ["prompt"]
    ],
    _Route13CooltrainerF2AfterBattleText: [
      ["text", "You got those"],
      ["line", "BADGEs from GYM"],
      ["cont", "LEADERs. I know!"]
    ],
    _Route13CooltrainerF3BattleText: [
      ["text", "My cute #MON"],
      ["line", "wish to make your"],
      ["cont", "acquaintance."]
    ],
    _Route13CooltrainerF3EndBattleText: [
      ["text", "Wow!"],
      ["line", "You totally won!"],
      ["prompt"]
    ],
    _Route13CooltrainerF3AfterBattleText: [
      ["text", "You have to make"],
      ["line", "#MON fight to"],
      ["cont", "toughen them up!"]
    ],
    _Route13CooltrainerF4BattleText: [
      ["text", "I found CARBOS in"],
      ["line", "a cave once."]
    ],
    _Route13CooltrainerF4EndBattleText: [
      ["text", "Just"],
      ["line", "messed up!"],
      ["prompt"]
    ],
    _Route13CooltrainerF4AfterBattleText: [
      ["text", "CARBOS boosted"],
      ["line", "the SPEED of my"],
      ["cont", "#MON."]
    ],
    _Route13CooltrainerM2BattleText: [
      ["text", "The wind's blowing"],
      ["line", "my way!"]
    ],
    _Route13CooltrainerM2EndBattleText: [
      ["text", "The"],
      ["line", "wind turned!"],
      ["prompt"]
    ],
    _Route13CooltrainerM2AfterBattleText: [
      ["text", "I'm beat. I guess"],
      ["line", "I'll FLY home."]
    ],
    _Route13Beauty1BattleText: [
      ["text", "Sure, I'll play"],
      ["line", "with you!"]
    ],
    _Route13Beauty1EndBattleText: [
      ["text", "Oh!"],
      ["line", "You little brute!"],
      ["prompt"]
    ],
    _Route13Beauty1AfterBattleText: [
      ["text", "I wonder which is"],
      ["line", "stronger, male or"],
      ["cont", "female #MON?"]
    ],
    _Route13Beauty2BattleText: [
      ["text", "Do you want to"],
      ["line", "#MON with me?"]
    ],
    _Route13Beauty2EndBattleText: [
      ["text", "It's over"],
      ["line", "already?"],
      ["prompt"]
    ],
    _Route13Beauty2AfterBattleText: [
      ["text", "I don't know"],
      ["line", "anything about"],
      ["cont", "#MON. I just"],
      ["cont", "like cool ones!"]
    ],
    _Route13BikerBattleText: [
      ["text", "What're you"],
      ["line", "lookin' at?"]
    ],
    _Route13BikerEndBattleText: [
      ["text", "Dang!"],
      ["line", "Stripped gears!"],
      ["prompt"]
    ],
    _Route13BikerAfterBattleText: [["text", "Get lost!"]],
    _Route13CooltrainerM3BattleText: [
      ["text", "I always go with"],
      ["line", "bird #MON!"]
    ],
    _Route13CooltrainerM3EndBattleText: [
      ["text", "Out"],
      ["line", "of power!"],
      ["prompt"]
    ],
    _Route13CooltrainerM3AfterBattleText: [
      ["text", "I wish I could"],
      ["line", "fly like PIDGEY"],
      ["cont", "and PIDGEOTTO..."]
    ],
    _Route13TrainerTips1Text: [
      ["text", "TRAINER TIPS"],
      ["para", "Look to the left"],
      ["line", "of that post!"]
    ],
    _Route13TrainerTips2Text: [
      ["text", "TRAINER TIPS"],
      ["para", "Use SELECT to"],
      ["line", "switch items in"],
      ["cont", "the ITEM window!"]
    ],
    _Route13SignText: [
      ["text", "ROUTE 13"],
      ["line", "North to SILENCE"],
      ["cont", "BRIDGE"]
    ]
  }
};
