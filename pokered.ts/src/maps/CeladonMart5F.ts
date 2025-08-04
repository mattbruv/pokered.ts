import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_5F_BLOCKS } from "../data/blocks/CeladonMart5F";
import { OverworldSprite } from "../sprite";

export const CeladonMart5F: Map = {
  width: 10,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_MART_5F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 12, y: 1, toMap: MapName.CeladonMartRoof, warpIndex: 0 },
      { x: 16, y: 1, toMap: MapName.CeladonMart4F, warpIndex: 1 },
      { x: 1, y: 1, toMap: MapName.CeladonMartElevator, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 14, y: 1, signId: "TEXT_CELADONMART5F_CURRENT_FLOOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 14,
        y: 5,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "WALK",
        textId: "TEXT_CELADONMART5F_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 2,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SAILOR,
        movement: "STAY",
        textId: "TEXT_CELADONMART5F_SAILOR"
      },
      {
        type: "sprite",
        x: 5,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CELADONMART5F_CLERK1"
      },
      {
        type: "sprite",
        x: 6,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CELADONMART5F_CLERK2"
      }
    ]
  },
  text: {
    _CeladonMart5FGentlemanText: [
      ["text", "#MON ability"],
      ["line", "enhancers can be"],
      ["cont", "bought only here."],
      ["para", "Use CALCIUM to"],
      ["line", "increase SPECIAL"],
      ["cont", "abilities."],
      ["para", "Use CARBOS to"],
      ["line", "increase SPEED."]
    ],
    _CeladonMart5FSailorText: [
      ["text", "I'm here for"],
      ["line", "#MON ability"],
      ["cont", "enhancers."],
      ["para", "PROTEIN increases"],
      ["line", "ATTACK power."],
      ["para", "IRON increases"],
      ["line", "DEFENSE!"]
    ],
    _CeladonMart5FCurrentFloorSignText: [["text", "5F: DRUG STORE"]]
  }
};
