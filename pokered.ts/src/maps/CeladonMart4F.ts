import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_4F_BLOCKS } from "../data/blocks/CeladonMart4F";
import { OverworldSprite } from "../sprite";

export const CeladonMart4F: Map = {
  width: 10,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_MART_4F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 12, y: 1, toMap: MapName.CeladonMart3F, warpIndex: 0 },
      { x: 16, y: 1, toMap: MapName.CeladonMart5F, warpIndex: 1 },
      { x: 1, y: 1, toMap: MapName.CeladonMartElevator, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 14, y: 1, signId: "TEXT_CELADONMART4F_CURRENT_FLOOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 7,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CELADONMART4F_CLERK"
      },
      {
        type: "sprite",
        x: 15,
        y: 5,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "WALK",
        textId: "TEXT_CELADONMART4F_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 5,
        y: 2,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_CELADONMART4F_YOUNGSTER"
      }
    ]
  },
  text: {
    _CeladonMart4FSuperNerdText: [
      ["text", "I'm getting a"],
      ["line", "# DOLL for my"],
      ["cont", "girl friend!"]
    ],
    _CeladonMart4FYoungsterText: [
      ["text", "I heard something"],
      ["line", "useful."],
      ["para", "You can run from"],
      ["line", "wild #MON by"],
      ["cont", "distracting them"],
      ["cont", "with a # DOLL!"]
    ],
    _CeladonMart4FCurrentFloorSignText: [
      ["text", "Express yourself"],
      ["line", "with gifts!"],
      ["para", "4F: WISEMAN GIFTS"],
      ["para", "Evolution Special!"],
      ["line", "Element STONEs on"],
      ["cont", "sale now!"]
    ]
  }
};
