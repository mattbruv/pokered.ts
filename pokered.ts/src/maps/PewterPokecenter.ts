import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_POKECENTER_BLOCKS } from "../data/blocks/PewterPokecenter";
import { OverworldSprite } from "../sprite";

export const PewterPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: PEWTER_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 6 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_NURSE,
        movement: "STAY",
        textId: "TEXT_PEWTERPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 11,
        y: 7,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_PEWTERPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 1,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_FAIRY,
        movement: "STAY",
        textId: "TEXT_PEWTERPOKECENTER_JIGGLYPUFF"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_PEWTERPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  text: {
    _PewterPokecenterGentlemanText: [
      ["text", "What!?"],
      ["para", "TEAM ROCKET is"],
      ["line", "at MT.MOON? Huh?"],
      ["cont", "I'm on the phone!"],
      ["para", "Scram!"]
    ],
    _PewterPokecenterJigglypuffText: [
      ["text", "JIGGLYPUFF: Puu"],
      ["line", "pupuu!"]
    ]
  }
};
