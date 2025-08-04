import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_MART_BLOCKS } from "../data/blocks/VermilionMart";
import { OverworldSprite } from "../sprite";

export const VermilionMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: VERMILION_MART_BLOCKS,
  tileset: Tileset.MART,
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
        x: 0,
        y: 5,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_VERMILIONMART_CLERK"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_VERMILIONMART_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 3,
        y: 3,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "WALK",
        textId: "TEXT_VERMILIONMART_COOLTRAINER_F"
      }
    ]
  },
  text: {
    _VermilionMartCooltrainerMText: [
      ["text", "There are evil"],
      ["line", "people who will"],
      ["cont", "use #MON for"],
      ["cont", "criminal acts."],
      ["para", "TEAM ROCKET"],
      ["line", "traffics in rare"],
      ["cont", "#MON."],
      ["para", "They also abandon"],
      ["line", "#MON that they"],
      ["cont", "consider not to"],
      ["cont", "be popular or"],
      ["cont", "useful."]
    ],
    _VermilionMartCooltrainerFText: [
      ["text", "I think #MON"],
      ["line", "can be good or"],
      ["cont", "evil. It depends"],
      ["cont", "on the trainer."]
    ]
  }
};
