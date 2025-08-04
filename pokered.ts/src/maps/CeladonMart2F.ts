import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_2F_BLOCKS } from "../data/blocks/CeladonMart2F";
import { OverworldSprite } from "../sprite";

export const CeladonMart2F: Map = {
  width: 10,
  height: 4,
  borderBlock: 15,
  blocks: CELADON_MART_2F_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 12, y: 1, toMap: MapName.CeladonMart1F, warpIndex: 4 },
      { x: 16, y: 1, toMap: MapName.CeladonMart3F, warpIndex: 1 },
      { x: 1, y: 1, toMap: MapName.CeladonMartElevator, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 14, y: 1, signId: "TEXT_CELADONMART2F_CURRENT_FLOOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CELADONMART2F_CLERK1"
      },
      {
        type: "sprite",
        x: 6,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_CELADONMART2F_CLERK2"
      },
      {
        type: "sprite",
        x: 19,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_CELADONMART2F_MIDDLE_AGED_MAN"
      },
      {
        type: "sprite",
        x: 14,
        y: 4,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_CELADONMART2F_GIRL"
      }
    ]
  },
  text: {
    _CeladonMart2FMiddleAgedManText: [
      ["text", "SUPER REPEL keeps"],
      ["line", "weak #MON at"],
      ["cont", "bay..."],
      ["para", "Hmm, it's a more"],
      ["line", "powerful REPEL!"]
    ],
    _CeladonMart2FGirlText: [
      ["text", "For long outings,"],
      ["line", "you should buy"],
      ["cont", "REVIVE."]
    ],
    _CeladonMart2FCurrentFloorSignText: [
      ["text", "Top Grade Items"],
      ["line", "for Trainers!"],
      ["para", "2F: TRAINER'S"],
      ["line", "    MARKET"]
    ]
  }
};
