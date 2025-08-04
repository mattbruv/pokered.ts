import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_MART_BLOCKS } from "../data/blocks/SaffronMart";
import { OverworldSprite } from "../sprite";

export const SaffronMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: SAFFRON_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 0,
        y: 5,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_SAFFRONMART_CLERK"
      },
      {
        type: "sprite",
        x: 4,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_SAFFRONMART_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 6,
        y: 5,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "WALK",
        textId: "TEXT_SAFFRONMART_COOLTRAINER_F"
      }
    ]
  },
  text: {
    _SaffronMartSuperNerdText: [
      ["text", "MAX REPEL lasts"],
      ["line", "longer than SUPER"],
      ["cont", "REPEL for keeping"],
      ["cont", "weaker #MON"],
      ["cont", "away!"]
    ],
    _SaffronMartCooltrainerFText: [
      ["text", "REVIVE is costly,"],
      ["line", "but it revives"],
      ["cont", "fainted #MON!"]
    ]
  }
};
