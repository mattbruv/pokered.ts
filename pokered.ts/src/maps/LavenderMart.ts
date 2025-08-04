import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { LAVENDER_MART_BLOCKS } from "../data/blocks/LavenderMart";
import { OverworldSprite } from "../sprite";

export const LavenderMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: LAVENDER_MART_BLOCKS,
  tileset: Tileset.MART,
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
        x: 0,
        y: 5,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_LAVENDERMART_CLERK"
      },
      {
        type: "sprite",
        x: 3,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BALDING_GUY,
        movement: "STAY",
        textId: "TEXT_LAVENDERMART_BALDING_GUY"
      },
      {
        type: "sprite",
        x: 7,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_LAVENDERMART_COOLTRAINER_M"
      }
    ]
  },
  text: {
    _LavenderMartBaldingGuyText: [
      ["text", "I'm searching for"],
      ["line", "items that raise"],
      ["cont", "the abilities of"],
      ["cont", "#MON during a"],
      ["cont", "single battle."],
      ["para", "X ATTACK, X"],
      ["line", "DEFEND, X SPEED"],
      ["cont", "and X SPECIAL are"],
      ["cont", "what I'm after."],
      ["para", "Do you know where"],
      ["line", "I can get them?"]
    ],
    _LavenderMartCooltrainerMReviveText: [
      ["text", "You know REVIVE?"],
      ["line", "It revives any"],
      ["cont", "fainted #MON!"]
    ],
    _LavenderMartCooltrainerMNuggetText: [
      ["text", "I found a NUGGET"],
      ["line", "in the mountains."],
      ["para", "I thought it was"],
      ["line", "useless, but it"],
      ["cont", "sold for ¥5000!"]
    ]
  }
};
