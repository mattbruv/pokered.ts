import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B3F_BLOCKS } from "../data/blocks/RocketHideoutB3F";
import { OverworldSprite } from "../sprite";

export const RocketHideoutB3F: Map = {
  width: 15,
  height: 14,
  borderBlock: 46,
  blocks: ROCKET_HIDEOUT_B3F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 25, y: 6, toMap: MapName.RocketHideoutB2F, warpIndex: 1 },
      { x: 19, y: 18, toMap: MapName.RocketHideoutB4F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 10,
        y: 22,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB3F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 26,
        y: 12,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB3F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 15
      },
      {
        type: "item",
        x: 26,
        y: 17,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB3F_TM_DOUBLE_EDGE",
        itemId: "TM_DOUBLE_EDGE"
      },
      {
        type: "item",
        x: 20,
        y: 14,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB3F_RARE_CANDY",
        itemId: "RARE_CANDY"
      }
    ]
  },
  text: {
    _RocketHideoutB3FRocket1BattleText: [
      ["text", "Stop meddling in"],
      ["line", "TEAM ROCKET's"],
      ["cont", "affairs!"]
    ],
    _RocketHideoutB3FRocket1EndBattleText: [
      ["text", "Oof!"],
      ["line", "Taken down!"],
      ["prompt"]
    ],
    _RocketHideoutB3FRocket1AfterBattleText: [
      ["text", "SILPH SCOPE?"],
      ["line", "The machine the"],
      ["cont", "BOSS stole. It's"],
      ["cont", "here somewhere."]
    ],
    _RocketHideout3BattleText: [
      ["text", "We got word from"],
      ["line", "upstairs that you"],
      ["cont", "were coming!"]
    ],
    _RocketHideout3EndBattleText3: [
      ["text", "What?"],
      ["line", "I lost? No!"],
      ["prompt"]
    ],
    _RocketHide3AfterBattleText3: [
      ["text", "Go ahead and go!"],
      ["line", "But, you need the"],
      ["cont", "LIFT KEY to run"],
      ["cont", "the elevator!"]
    ]
  }
};
