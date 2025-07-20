import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_B1F_ROOMS_BLOCKS } from "../data/blocks/SSAnneB1FRooms";
import { OverworldSprite } from "../sprite";

export const SSAnneB1FRooms: Map = {
  width: 12,
  height: 8,
  borderBlock: 12,
  blocks: SS_ANNE_B1F_ROOMS_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 4 },
      { x: 3, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 4 },
      { x: 12, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 3 },
      { x: 13, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 3 },
      { x: 22, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 2 },
      { x: 23, y: 5, toMap: MapName.SSAnneB1F, warpIndex: 2 },
      { x: 2, y: 15, toMap: MapName.SSAnneB1F, warpIndex: 1 },
      { x: 3, y: 15, toMap: MapName.SSAnneB1F, warpIndex: 1 },
      { x: 12, y: 15, toMap: MapName.SSAnneB1F, warpIndex: 0 },
      { x: 13, y: 15, toMap: MapName.SSAnneB1F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 0,
        y: 13,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR1",
        trainerId: "OPP_SAILOR",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 2,
        y: 11,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR2",
        trainerId: "OPP_SAILOR",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 12,
        y: 3,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR3",
        trainerId: "OPP_SAILOR",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 22,
        y: 2,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR4",
        trainerId: "OPP_SAILOR",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 0,
        y: 2,
        sprite: OverworldSprite.SPRITE_SAILOR,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SAILOR5",
        trainerId: "OPP_SAILOR",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 0,
        y: 4,
        sprite: OverworldSprite.SPRITE_FISHER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_FISHER",
        trainerId: "OPP_FISHER",
        trainerLevel: 2
      },
      {
        type: "sprite",
        x: 10,
        y: 13,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 11,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_MACHOKE"
      },
      {
        type: "item",
        x: 20,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_ETHER",
        itemId: "ETHER"
      },
      {
        type: "item",
        x: 10,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_TM_REST",
        itemId: "TM_REST"
      },
      {
        type: "item",
        x: 12,
        y: 11,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SSANNEB1FROOMS_MAX_POTION",
        itemId: "MAX_POTION"
      }
    ]
  },
  textPointers: []
};
