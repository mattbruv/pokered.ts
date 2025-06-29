import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VICTORY_ROAD_1F_BLOCKS } from "../data/blocks/VictoryRoad1F";

export const VictoryRoad1F: Map = {
  width: 10,
  height: 9,
  borderBlock: 125,
  blocks: VICTORY_ROAD_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [
      { x: 8, y: 17, toMap: "LAST_MAP", warpId: 3 },
      { x: 9, y: 17, toMap: "LAST_MAP", warpId: 3 },
      { x: 1, y: 1, toMap: "VICTORY_ROAD_2F", warpId: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 7,
        y: 5,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_COOLTRAINER_F",
        trainerId: "OPP_COOLTRAINER_F",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 3,
        y: 2,
        sprite: "SPRITE_COOLTRAINER_M",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_COOLTRAINER_M",
        trainerId: "OPP_COOLTRAINER_M",
        trainerLevel: 5
      },
      {
        type: "item",
        x: 11,
        y: 0,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_TM_SKY_ATTACK",
        itemId: "TM_SKY_ATTACK"
      },
      {
        type: "item",
        x: 9,
        y: 2,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "sprite",
        x: 5,
        y: 15,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_BOULDER1"
      },
      {
        type: "sprite",
        x: 14,
        y: 2,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_BOULDER2"
      },
      {
        type: "sprite",
        x: 2,
        y: 10,
        sprite: "SPRITE_BOULDER",
        movement: "STAY",
        textId: "TEXT_VICTORYROAD1F_BOULDER3"
      }
    ]
  },
  textPointers: []
};
