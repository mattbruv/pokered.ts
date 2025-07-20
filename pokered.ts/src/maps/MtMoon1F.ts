import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_1F_BLOCKS } from "../data/blocks/MtMoon1F";
import { OverworldSprite } from "../sprite";

export const MtMoon1F: Map = {
  width: 20,
  height: 18,
  borderBlock: 3,
  blocks: MT_MOON_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 14, y: 35, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 15, y: 35, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 5, y: 5, toMap: MapName.MtMoonB1F, warpIndex: 0 },
      { x: 17, y: 11, toMap: MapName.MtMoonB1F, warpIndex: 2 },
      { x: 25, y: 15, toMap: MapName.MtMoonB1F, warpIndex: 3 }
    ],
    backgroundItems: [
      { x: 15, y: 23, signId: "TEXT_MTMOON1F_BEWARE_ZUBAT_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 6,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_MTMOON1F_HIKER",
        trainerId: "OPP_HIKER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 12,
        y: 16,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_MTMOON1F_YOUNGSTER1",
        trainerId: "OPP_YOUNGSTER",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 30,
        y: 4,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_MTMOON1F_COOLTRAINER_F1",
        trainerId: "OPP_LASS",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 24,
        y: 31,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_MTMOON1F_SUPER_NERD",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 16,
        y: 23,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_MTMOON1F_COOLTRAINER_F2",
        trainerId: "OPP_LASS",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 7,
        y: 22,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_MTMOON1F_YOUNGSTER2",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 30,
        y: 27,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_MTMOON1F_YOUNGSTER3",
        trainerId: "OPP_BUG_CATCHER",
        trainerLevel: 8
      },
      {
        type: "item",
        x: 2,
        y: 20,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOON1F_POTION1",
        itemId: "POTION"
      },
      {
        type: "item",
        x: 2,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOON1F_MOON_STONE",
        itemId: "MOON_STONE"
      },
      {
        type: "item",
        x: 35,
        y: 31,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOON1F_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "item",
        x: 36,
        y: 23,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOON1F_ESCAPE_ROPE",
        itemId: "ESCAPE_ROPE"
      },
      {
        type: "item",
        x: 20,
        y: 33,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOON1F_POTION2",
        itemId: "POTION"
      },
      {
        type: "item",
        x: 5,
        y: 32,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOON1F_TM_WATER_GUN",
        itemId: "TM_WATER_GUN"
      }
    ]
  },
  textPointers: []
};
