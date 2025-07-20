import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B1F_BLOCKS } from "../data/blocks/RocketHideoutB1F";
import { OverworldSprite } from "../sprite";

export const RocketHideoutB1F: Map = {
  width: 15,
  height: 14,
  borderBlock: 46,
  blocks: ROCKET_HIDEOUT_B1F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 23, y: 2, toMap: MapName.RocketHideoutB2F, warpIndex: 0 },
      { x: 21, y: 2, toMap: MapName.GameCorner, warpIndex: 2 },
      { x: 24, y: 19, toMap: MapName.RocketHideoutElevator, warpIndex: 0 },
      { x: 21, y: 24, toMap: MapName.RocketHideoutB2F, warpIndex: 3 },
      { x: 25, y: 19, toMap: MapName.RocketHideoutElevator, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 26,
        y: 8,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB1F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 12,
        y: 6,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB1F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 18,
        y: 17,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB1F_ROCKET3",
        trainerId: "OPP_ROCKET",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 15,
        y: 25,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB1F_ROCKET4",
        trainerId: "OPP_ROCKET",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 28,
        y: 18,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB1F_ROCKET5",
        trainerId: "OPP_ROCKET",
        trainerLevel: 12
      },
      {
        type: "item",
        x: 11,
        y: 14,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB1F_ESCAPE_ROPE",
        itemId: "ESCAPE_ROPE"
      },
      {
        type: "item",
        x: 9,
        y: 17,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB1F_HYPER_POTION",
        itemId: "HYPER_POTION"
      }
    ]
  },
  textPointers: []
};
