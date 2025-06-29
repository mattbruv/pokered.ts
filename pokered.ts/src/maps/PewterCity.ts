import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_CITY_BLOCKS } from "../data/blocks/PewterCity";

export const PewterCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 10,
  blocks: PEWTER_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.Route2, yOffset: 5 },
    east: { map: MapName.Route3, xOffset: 4 }
  },
  objects: {
    warps: [
      { x: 14, y: 7, toMap: "MUSEUM_1F", warpId: 1 },
      { x: 19, y: 5, toMap: "MUSEUM_1F", warpId: 3 },
      { x: 16, y: 17, toMap: "PEWTER_GYM", warpId: 1 },
      { x: 29, y: 13, toMap: "PEWTER_NIDORAN_HOUSE", warpId: 1 },
      { x: 23, y: 17, toMap: "PEWTER_MART", warpId: 1 },
      { x: 7, y: 29, toMap: "PEWTER_SPEECH_HOUSE", warpId: 1 },
      { x: 13, y: 25, toMap: "PEWTER_POKECENTER", warpId: 1 }
    ],
    backgroundItems: [
      { x: 19, y: 29, signId: "TEXT_PEWTERCITY_TRAINER_TIPS" },
      { x: 33, y: 19, signId: "TEXT_PEWTERCITY_POLICE_NOTICE_SIGN" },
      { x: 24, y: 17, signId: "TEXT_PEWTERCITY_MART_SIGN" },
      { x: 14, y: 25, signId: "TEXT_PEWTERCITY_POKECENTER_SIGN" },
      { x: 15, y: 9, signId: "TEXT_PEWTERCITY_MUSEUM_SIGN" },
      { x: 11, y: 17, signId: "TEXT_PEWTERCITY_GYM_SIGN" },
      { x: 25, y: 23, signId: "TEXT_PEWTERCITY_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 15,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_PEWTERCITY_COOLTRAINER_F"
      },
      {
        type: "sprite",
        x: 17,
        y: 25,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_PEWTERCITY_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 27,
        y: 17,
        sprite: "SPRITE_SUPER_NERD",
        movement: "STAY",
        textId: "TEXT_PEWTERCITY_SUPER_NERD1"
      },
      {
        type: "sprite",
        x: 26,
        y: 25,
        sprite: "SPRITE_SUPER_NERD",
        movement: "WALK",
        textId: "TEXT_PEWTERCITY_SUPER_NERD2"
      },
      {
        type: "sprite",
        x: 35,
        y: 16,
        sprite: "SPRITE_YOUNGSTER",
        movement: "STAY",
        textId: "TEXT_PEWTERCITY_YOUNGSTER"
      }
    ]
  },
  textPointers: []
};
