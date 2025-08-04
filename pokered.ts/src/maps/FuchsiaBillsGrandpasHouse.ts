import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_BILLS_GRANDPAS_HOUSE_BLOCKS } from "../data/blocks/FuchsiaBillsGrandpasHouse";
import { OverworldSprite } from "../sprite";

export const FuchsiaBillsGrandpasHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: FUCHSIA_BILLS_GRANDPAS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_WOMAN,
        movement: "STAY",
        textId: "TEXT_FUCHSIABILLSGRANDPASHOUSE_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_FUCHSIABILLSGRANDPASHOUSE_BILLS_GRANDPA"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_FUCHSIABILLSGRANDPASHOUSE_YOUNGSTER"
      }
    ]
  },
  text: {
    _FuchsiaBillsGrandpasHouseMiddleAgedWomanText: [
      ["text", "SAFARI ZONE's"],
      ["line", "WARDEN is old,"],
      ["cont", "but still active!"],
      ["para", "All his teeth are"],
      ["line", "false, though."]
    ],
    _FuchsiaBillsGrandpasHouseBillsGrandpaText: [
      ["text", "Hmm? You've met"],
      ["line", "BILL?"],
      ["para", "He's my grandson!"],
      ["para", "He always liked"],
      ["line", "collecting things"],
      ["cont", "even as a child!"]
    ],
    _FuchsiaBillsGrandpasHouseYoungsterText: [
      ["text", "BILL files his"],
      ["line", "own #MON data"],
      ["cont", "on his PC!"],
      ["para", "Did he show you?"]
    ]
  }
};
