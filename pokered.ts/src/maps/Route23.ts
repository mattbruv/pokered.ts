import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_23_BLOCKS } from "../data/blocks/Route23";
import { OverworldSprite } from "../sprite";

export const Route23: Map = {
  width: 10,
  height: 72,
  borderBlock: 15,
  blocks: ROUTE_23_BLOCKS,
  tileset: Tileset.PLATEAU,
  connections: {
    north: { map: MapName.IndigoPlateau, xOffset: 0 },
    south: { map: MapName.Route22, xOffset: 0 }
  },
  objects: {
    warps: [
      { x: 7, y: 139, toMap: MapName.Route22Gate, warpIndex: 2 },
      { x: 8, y: 139, toMap: MapName.Route22Gate, warpIndex: 3 },
      { x: 4, y: 31, toMap: MapName.VictoryRoad1F, warpIndex: 0 },
      { x: 14, y: 31, toMap: MapName.VictoryRoad2F, warpIndex: 1 }
    ],
    backgroundItems: [
      { x: 3, y: 33, signId: "TEXT_ROUTE23_VICTORY_ROAD_GATE_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 35,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD1"
      },
      {
        type: "sprite",
        x: 10,
        y: 56,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD2"
      },
      {
        type: "sprite",
        x: 8,
        y: 85,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SWIMMER,
        movement: "STAY",
        textId: "TEXT_ROUTE23_SWIMMER1"
      },
      {
        type: "sprite",
        x: 11,
        y: 96,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SWIMMER,
        movement: "STAY",
        textId: "TEXT_ROUTE23_SWIMMER2"
      },
      {
        type: "sprite",
        x: 12,
        y: 105,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD3"
      },
      {
        type: "sprite",
        x: 8,
        y: 119,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD4"
      },
      {
        type: "sprite",
        x: 8,
        y: 136,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_ROUTE23_GUARD5"
      }
    ]
  },
  text: {
    _Route23YouDontHaveTheBadgeYetText: [
      ["text", "You can pass here"],
      ["line", "only if you have"],
      ["cont", "the @"],
      ["text_ram", "wNameBuffer"],
      ["text", "!"],
      ["para", "You don't have the"],
      ["line", "@"],
      ["text_ram", "wNameBuffer"],
      ["text", " yet!"],
      ["para", "You have to have"],
      ["line", "it to get to"],
      ["cont", "#MON LEAGUE!@"],
      ["text_end"]
    ],
    _Route23OhThatIsTheBadgeText: [
      ["text", "You can pass here"],
      ["line", "only if you have"],
      ["cont", "the @"],
      ["text_ram", "wNameBuffer"],
      ["text", "!"],
      ["para", "Oh! That is the"],
      ["line", "@"],
      ["text_ram", "wNameBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _Route23GoRightAheadText: [
      ["text_start"],
      ["para", "OK then! Please,"],
      ["line", "go right ahead!"]
    ],
    _Route23VictoryRoadGateSignText: [
      ["text", "VICTORY ROAD GATE"],
      ["line", "- #MON LEAGUE"]
    ]
  }
};
