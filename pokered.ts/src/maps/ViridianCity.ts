import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_CITY_BLOCKS } from "../data/blocks/ViridianCity";

export const ViridianCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 15,
  blocks: VIRIDIAN_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route2, yOffset: 5 },
    south: { map: MapName.Route1, yOffset: 5 },
    west: { map: MapName.Route22, xOffset: 4 }
  },
  objects: {
    warps: [
      { x: 23, y: 25, toMap: MapName.ViridianPokecenter, warpId: 1 },
      { x: 29, y: 19, toMap: MapName.ViridianMart, warpId: 1 },
      { x: 21, y: 15, toMap: MapName.ViridianSchoolHouse, warpId: 1 },
      { x: 21, y: 9, toMap: MapName.ViridianNicknameHouse, warpId: 1 },
      { x: 32, y: 7, toMap: MapName.ViridianGym, warpId: 1 }
    ],
    backgroundItems: [
      { x: 17, y: 17, signId: "TEXT_VIRIDIANCITY_SIGN" },
      { x: 19, y: 1, signId: "TEXT_VIRIDIANCITY_TRAINER_TIPS1" },
      { x: 21, y: 29, signId: "TEXT_VIRIDIANCITY_TRAINER_TIPS2" },
      { x: 30, y: 19, signId: "TEXT_VIRIDIANCITY_MART_SIGN" },
      { x: 24, y: 25, signId: "TEXT_VIRIDIANCITY_POKECENTER_SIGN" },
      { x: 27, y: 7, signId: "TEXT_VIRIDIANCITY_GYM_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 13,
        y: 20,
        sprite: "SPRITE_YOUNGSTER",
        movement: "WALK",
        textId: "TEXT_VIRIDIANCITY_YOUNGSTER1"
      },
      {
        type: "sprite",
        x: 30,
        y: 8,
        sprite: "SPRITE_GAMBLER",
        movement: "STAY",
        textId: "TEXT_VIRIDIANCITY_GAMBLER1"
      },
      {
        type: "sprite",
        x: 30,
        y: 25,
        sprite: "SPRITE_YOUNGSTER",
        movement: "WALK",
        textId: "TEXT_VIRIDIANCITY_YOUNGSTER2"
      },
      {
        type: "sprite",
        x: 17,
        y: 9,
        sprite: "SPRITE_GIRL",
        movement: "STAY",
        textId: "TEXT_VIRIDIANCITY_GIRL"
      },
      {
        type: "sprite",
        x: 18,
        y: 9,
        sprite: "SPRITE_GAMBLER_ASLEEP",
        movement: "STAY",
        textId: "TEXT_VIRIDIANCITY_OLD_MAN_SLEEPY"
      },
      {
        type: "sprite",
        x: 6,
        y: 23,
        sprite: "SPRITE_FISHER",
        movement: "STAY",
        textId: "TEXT_VIRIDIANCITY_FISHER"
      },
      {
        type: "sprite",
        x: 17,
        y: 5,
        sprite: "SPRITE_GAMBLER",
        movement: "WALK",
        textId: "TEXT_VIRIDIANCITY_OLD_MAN"
      }
    ]
  },
  textPointers: []
};
