import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_MART_BLOCKS } from "../data/blocks/ViridianMart";
import { OverworldSprite } from "../sprite";

export const ViridianMart: Map = {
  width: 4,
  height: 4,
  borderBlock: 0,
  blocks: VIRIDIAN_MART_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 1 }
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
        textId: "TEXT_VIRIDIANMART_CLERK"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_VIRIDIANMART_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 3,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_VIRIDIANMART_COOLTRAINER_M"
      }
    ]
  },
  text: {
    _ViridianMartClerkSayHiToOakText: [
      ["text", "Okay! Say hi to"],
      ["line", "PROF.OAK for me!"]
    ],
    _ViridianMartClerkYouCameFromPalletTownText: [
      ["text", "Hey! You came from"],
      ["line", "PALLET TOWN?"]
    ],
    _ViridianMartClerkParcelQuestText: [
      ["text", "You know PROF."],
      ["line", "OAK, right?"],
      ["para", "His order came in."],
      ["line", "Will you take it"],
      ["cont", "to him?"],
      ["para", "<PLAYER> got"],
      ["line", "OAK's PARCEL!@"],
      ["text_end"]
    ],
    _ViridianMartYoungsterText: [
      ["text", "This shop sells"],
      ["line", "many ANTIDOTEs."]
    ],
    _ViridianMartCooltrainerMText: [
      ["text", "No! POTIONs are"],
      ["line", "all sold out."]
    ]
  }
};
