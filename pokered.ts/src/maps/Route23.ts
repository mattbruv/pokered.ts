import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_23_BLOCKS } from "../data/blocks/Route23";

export const Route23: Map = {
  width: 10,
  height: 72,
  borderBlock: 15,
  blocks: ROUTE_23_BLOCKS,
  tileset: Tileset.PLATEAU,
  connections: {
    north: { map: MapName.IndigoPlateau, yOffset: 0 },
    south: { map: MapName.Route22, yOffset: 0 }
  },
  objects: {
    warps: [
      { x: 7, y: 139, toMap: "ROUTE_22_GATE", warpId: 3 },
      { x: 8, y: 139, toMap: "ROUTE_22_GATE", warpId: 4 },
      { x: 4, y: 31, toMap: "VICTORY_ROAD_1F", warpId: 1 },
      { x: 14, y: 31, toMap: "VICTORY_ROAD_2F", warpId: 2 }
    ],
    backgroundItems: [
      { x: 3, y: 33, signId: "TEXT_ROUTE23_VICTORY_ROAD_GATE_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 35,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD1"
      },
      {
        type: "sprite",
        x: 10,
        y: 56,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD2"
      },
      {
        type: "sprite",
        x: 8,
        y: 85,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE23_SWIMMER1"
      },
      {
        type: "sprite",
        x: 11,
        y: 96,
        sprite: "SPRITE_SWIMMER",
        movement: "STAY",
        textId: "TEXT_ROUTE23_SWIMMER2"
      },
      {
        type: "sprite",
        x: 12,
        y: 105,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD3"
      },
      {
        type: "sprite",
        x: 8,
        y: 119,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD4"
      },
      {
        type: "sprite",
        x: 8,
        y: 136,
        sprite: "SPRITE_GUARD",
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD5"
      }
    ]
  },
  textPointers: []
};
