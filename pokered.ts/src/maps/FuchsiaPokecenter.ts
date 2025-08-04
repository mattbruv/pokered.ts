import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_POKECENTER_BLOCKS } from "../data/blocks/FuchsiaPokecenter";
import { OverworldSprite } from "../sprite";

export const FuchsiaPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: FUCHSIA_POKECENTER_BLOCKS,
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
        textId: "TEXT_FUCHSIAPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_ROCKER,
        movement: "STAY",
        textId: "TEXT_FUCHSIAPOKECENTER_ROCKER"
      },
      {
        type: "sprite",
        x: 6,
        y: 5,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "WALK",
        textId: "TEXT_FUCHSIAPOKECENTER_COOLTRAINER_F"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_FUCHSIAPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  text: {
    _FuchsiaPokecenterRockerText: [
      ["text", "You can't win"],
      ["line", "with just one"],
      ["cont", "strong #MON."],
      ["para", "It's tough, but"],
      ["line", "you have to raise"],
      ["cont", "them evenly."]
    ],
    _FuchsiaPokecenterCooltrainerFText: [
      ["text", "There's a narrow"],
      ["line", "trail west of"],
      ["cont", "VIRIDIAN CITY."],
      ["para", "It goes to #MON"],
      ["line", "LEAGUE HQ."],
      ["cont", "The HQ governs"],
      ["cont", "all trainers."]
    ]
  }
};
