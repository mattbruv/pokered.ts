import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_POKECENTER_BLOCKS } from "../data/blocks/CeruleanPokecenter";
import { OverworldSprite } from "../sprite";

export const CeruleanPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: CERULEAN_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 2 }
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
        textId: "TEXT_CERULEANPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 10,
        y: 5,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "WALK",
        textId: "TEXT_CERULEANPOKECENTER_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_CERULEANPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_CERULEANPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  text: {
    _CeruleanPokecenterSuperNerdText: [
      ["text", "That BILL!"],
      ["para", "I heard that"],
      ["line", "he'll do whatever"],
      ["cont", "it takes to get"],
      ["cont", "rare #MON!"]
    ],
    _CeruleanPokecenterGentlemanText: [
      ["text", "Have you heard"],
      ["line", "about BILL?"],
      ["para", "Everyone calls"],
      ["line", "him a #MANIAC!"],
      ["para", "I think people"],
      ["line", "are just jealous"],
      ["cont", "of BILL, though."],
      ["para", "Who wouldn't want"],
      ["line", "to boast about"],
      ["cont", "their #MON?"]
    ]
  }
};
