import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_POKECENTER_BLOCKS } from "../data/blocks/CeladonPokecenter";
import { OverworldSprite } from "../sprite";

export const CeladonPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: CELADON_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 5 }
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
        textId: "TEXT_CELADONPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "WALK",
        textId: "TEXT_CELADONPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 10,
        y: 5,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "WALK",
        textId: "TEXT_CELADONPOKECENTER_BEAUTY"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_CELADONPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  text: {
    _CeladonPokecenterGentlemanText: [
      ["text", "# FLUTE awakens"],
      ["line", "#MON with a"],
      ["cont", "sound that only"],
      ["cont", "they can hear!"]
    ],
    _CeladonPokecenterBeautyText: [
      ["text", "I rode uphill on"],
      ["line", "CYCLING ROAD from"],
      ["cont", "FUCHSIA!"]
    ]
  }
};
