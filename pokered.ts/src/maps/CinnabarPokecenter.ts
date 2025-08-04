import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_POKECENTER_BLOCKS } from "../data/blocks/CinnabarPokecenter";
import { OverworldSprite } from "../sprite";

export const CinnabarPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: CINNABAR_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 3 }
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
        textId: "TEXT_CINNABARPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 9,
        y: 4,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "WALK",
        textId: "TEXT_CINNABARPOKECENTER_COOLTRAINER_F"
      },
      {
        type: "sprite",
        x: 2,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_CINNABARPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_CINNABARPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  text: {
    _CinnabarPokecenterCooltrainerFText: [
      ["text", "You can cancel"],
      ["line", "evolution."],
      ["para", "When a #MON is"],
      ["line", "evolving, you can"],
      ["cont", "stop it and leave"],
      ["cont", "it the way it is."]
    ],
    _CinnabarPokecenterGentlemanText: [
      ["text", "Do you have any"],
      ["line", "friends?"],
      ["para", "#MON you get"],
      ["line", "in trades grow"],
      ["cont", "very quickly."],
      ["para", "I think it's"],
      ["line", "worth a try!"]
    ]
  }
};
