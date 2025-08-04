import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_POKECENTER_BLOCKS } from "../data/blocks/SaffronPokecenter";
import { OverworldSprite } from "../sprite";

export const SaffronPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: SAFFRON_POKECENTER_BLOCKS,
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
        textId: "TEXT_SAFFRONPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "STAY",
        textId: "TEXT_SAFFRONPOKECENTER_BEAUTY"
      },
      {
        type: "sprite",
        x: 8,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_SAFFRONPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_SAFFRONPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  text: {
    _SaffronPokecenterBeautyText: [
      ["text", "#MON growth"],
      ["line", "rates differ from"],
      ["cont", "specie to specie."]
    ],
    _SaffronPokecenterGentlemanText: [
      ["text", "SILPH CO. is very"],
      ["line", "famous. That's"],
      ["cont", "why it attracted"],
      ["cont", "TEAM ROCKET!"]
    ]
  }
};
