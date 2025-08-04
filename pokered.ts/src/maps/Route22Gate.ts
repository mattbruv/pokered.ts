import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_22_GATE_BLOCKS } from "../data/blocks/Route22Gate";
import { OverworldSprite } from "../sprite";

export const Route22Gate: Map = {
  width: 5,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_22_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 4, y: 0, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 5, y: 0, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 2,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_ROUTE22GATE_GUARD"
      }
    ]
  },
  text: {
    _Route22GateGuardNoBoulderbadgeText: [
      ["text", "Only truly skilled"],
      ["line", "trainers are"],
      ["cont", "allowed through."],
      ["para", "You don't have the"],
      ["line", "BOULDERBADGE yet!@"],
      ["text_end"]
    ],
    _Route22GateGuardICantLetYouPassText: [
      ["text_start"],
      ["para", "The rules are"],
      ["line", "rules. I can't"],
      ["cont", "let you pass."]
    ],
    _Route22GateGuardGoRightAheadText: [
      ["text", "Oh! That is the"],
      ["line", "BOULDERBADGE!"],
      ["cont", "Go right ahead!@"],
      ["text_end"]
    ]
  }
};
