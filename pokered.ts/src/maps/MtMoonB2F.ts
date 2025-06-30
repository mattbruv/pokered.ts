import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MT_MOON_B2F_BLOCKS } from "../data/blocks/MtMoonB2F";
import { OverworldSprite } from "../sprite";

export const MtMoonB2F: Map = {
  width: 20,
  height: 18,
  borderBlock: 3,
  blocks: MT_MOON_B2F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 25, y: 9, toMap: MapName.MtMoonB1F, warpIndex: 1 },
      { x: 21, y: 17, toMap: MapName.MtMoonB1F, warpIndex: 4 },
      { x: 15, y: 27, toMap: MapName.MtMoonB1F, warpIndex: 5 },
      { x: 5, y: 7, toMap: MapName.MtMoonB1F, warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 12,
        y: 8,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_SUPER_NERD",
        trainerId: "OPP_SUPER_NERD",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 11,
        y: 16,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 15,
        y: 22,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 29,
        y: 11,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_ROCKET3",
        trainerId: "OPP_ROCKET",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 29,
        y: 17,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_ROCKET4",
        trainerId: "OPP_ROCKET",
        trainerLevel: 4
      },
      {
        type: "sprite",
        x: 12,
        y: 6,
        sprite: OverworldSprite.SPRITE_FOSSIL,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_DOME_FOSSIL"
      },
      {
        type: "sprite",
        x: 13,
        y: 6,
        sprite: OverworldSprite.SPRITE_FOSSIL,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_HELIX_FOSSIL"
      },
      {
        type: "item",
        x: 25,
        y: 21,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_HP_UP",
        itemId: "HP_UP"
      },
      {
        type: "item",
        x: 29,
        y: 5,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_MTMOONB2F_TM_MEGA_PUNCH",
        itemId: "TM_MEGA_PUNCH"
      }
    ]
  },
  textPointers: []
};
