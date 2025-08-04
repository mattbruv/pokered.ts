import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B2F_BLOCKS } from "../data/blocks/RocketHideoutB2F";
import { OverworldSprite } from "../sprite";

export const RocketHideoutB2F: Map = {
  width: 15,
  height: 14,
  borderBlock: 46,
  blocks: ROCKET_HIDEOUT_B2F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 27, y: 8, toMap: MapName.RocketHideoutB1F, warpIndex: 0 },
      { x: 21, y: 8, toMap: MapName.RocketHideoutB3F, warpIndex: 0 },
      { x: 24, y: 19, toMap: MapName.RocketHideoutElevator, warpIndex: 0 },
      { x: 21, y: 22, toMap: MapName.RocketHideoutB1F, warpIndex: 3 },
      { x: 25, y: 19, toMap: MapName.RocketHideoutElevator, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 20,
        y: 12,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_ROCKET",
        trainerId: "OPP_ROCKET",
        trainerLevel: 13
      },
      {
        type: "item",
        x: 1,
        y: 11,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_MOON_STONE",
        itemId: "MOON_STONE"
      },
      {
        type: "item",
        x: 16,
        y: 8,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_NUGGET",
        itemId: "NUGGET"
      },
      {
        type: "item",
        x: 6,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_TM_HORN_DRILL",
        itemId: "TM_HORN_DRILL"
      },
      {
        type: "item",
        x: 3,
        y: 21,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB2F_SUPER_POTION",
        itemId: "SUPER_POTION"
      }
    ]
  },
  text: {
    _RocketHideoutB2FRocketBattleText: [
      ["text", "BOSS said you can"],
      ["line", "see GHOSTs with"],
      ["cont", "the SILPH SCOPE!"]
    ],
    _RocketHideoutB2FRocketEndBattleText: [
      ["text", "I"],
      ["line", "surrender!"],
      ["prompt"]
    ],
    _RocketHideoutB2FRocketAfterBattleText: [
      ["text", "The TEAM ROCKET"],
      ["line", "HQ has 4 basement"],
      ["cont", "floors. Can you"],
      ["cont", "reach the BOSS?"]
    ]
  }
};
