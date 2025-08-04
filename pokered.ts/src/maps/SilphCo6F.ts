import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_6F_BLOCKS } from "../data/blocks/SilphCo6F";
import { OverworldSprite } from "../sprite";

export const SilphCo6F: Map = {
  width: 13,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_6F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 16, y: 0, toMap: MapName.SilphCo7F, warpIndex: 1 },
      { x: 14, y: 0, toMap: MapName.SilphCo5F, warpIndex: 0 },
      { x: 18, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 3, y: 3, toMap: MapName.SilphCo4F, warpIndex: 4 },
      { x: 23, y: 3, toMap: MapName.SilphCo2F, warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_M1"
      },
      {
        type: "sprite",
        x: 20,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_M2"
      },
      {
        type: "sprite",
        x: 21,
        y: 6,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_F1"
      },
      {
        type: "sprite",
        x: 11,
        y: 10,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_F2"
      },
      {
        type: "sprite",
        x: 18,
        y: 13,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SILPH_WORKER_M3"
      },
      {
        type: "trainer",
        x: 17,
        y: 3,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 30
      },
      {
        type: "trainer",
        x: 7,
        y: 8,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 14,
        y: 15,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 31
      },
      {
        type: "item",
        x: 3,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_HP_UP",
        itemId: "HP_UP"
      },
      {
        type: "item",
        x: 2,
        y: 15,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SILPHCO6F_X_ACCURACY",
        itemId: "X_ACCURACY"
      }
    ]
  },
  text: {
    _SilphCo6FSilphWorkerM1TookOverTheBuildingText: [
      ["text", "The ROCKETs came"],
      ["line", "and took over the"],
      ["cont", "building!"]
    ],
    _SilphCo6FSilphWorkerM1BackToWorkText: [
      ["text", "Well, better get"],
      ["line", "back to work!"]
    ],
    _SilphCo6FSilphWorkerMHelpMePleaseText: [
      ["text", "Oh dear, oh dear."],
      ["line", "Help me please!"]
    ],
    _SilphCo6FSilphWorkerMWeGotEngagedText: [
      ["text", "We got engaged!"],
      ["line", "Heheh!"]
    ],
    _SilphCo6FSilphWorkerF1SuchACowardText: [
      ["text", "Look at him! He's"],
      ["line", "such a coward!"]
    ],
    _SilphCo6FSilphWorkerF1HaveToMarryHimText: [
      ["text", "I feel so sorry"],
      ["line", "for him, I have"],
      ["cont", "to marry him!"]
    ],
    _SilphCo6FSilphWorkerF2TeamRocketConquerWorldText: [
      ["text", "TEAM ROCKET is"],
      ["line", "trying to conquer"],
      ["cont", "the world with"],
      ["cont", "#MON!"]
    ],
    _SilphCo6FSilphWorkerF2TeamRocketRanText: [
      ["text", "TEAM ROCKET ran"],
      ["line", "because of you!"]
    ],
    _SilphCo6FSilphWorkerM3TargetedSilphText: [
      ["text", "They must have"],
      ["line", "targeted SILPH"],
      ["cont", "for our #MON"],
      ["cont", "products."]
    ],
    _SilphCo6FSilphWorkerM3WorkForSilphText: [
      ["text", "Come work for"],
      ["line", "SILPH when you"],
      ["cont", "get older!"]
    ],
    _SilphCo6FRocket1BattleText: [
      ["text", "I am one of the 4"],
      ["line", "ROCKET BROTHERS!"]
    ],
    _SilphCo6FRocket1EndBattleText: [
      ["text", "Flame"],
      ["line", "out!"],
      ["prompt"]
    ],
    _SilphCo6FRocket1AfterBattleText: [
      ["text", "No matter!"],
      ["line", "My brothers will"],
      ["cont", "avenge me!"]
    ],
    _SilphCo6FScientistBattleText: [
      ["text", "That rotten"],
      ["line", "PRESIDENT!"],
      ["para", "He shouldn't have"],
      ["line", "sent me to the"],
      ["cont", "TIKSI BRANCH!"]
    ],
    _SilphCo6FScientistEndBattleText: [["text", "Shoot!"], ["prompt"]],
    _SilphCo6FScientistAfterBattleText: [
      ["text", "TIKSI BRANCH?"],
      ["line", "It's in Russian"],
      ["cont", "no man's land!"]
    ],
    _SilphCo6FRocket2BattleText: [
      ["text", "You dare betray"],
      ["line", "TEAM ROCKET?"]
    ],
    _SilphCo6FRocket2EndBattleText: [
      ["text", "You"],
      ["line", "traitor!"],
      ["prompt"]
    ],
    _SilphCo6FRocket2AfterBattleText: [
      ["text", "If you stand for"],
      ["line", "justice, you"],
      ["cont", "betray evil!"]
    ]
  }
};
