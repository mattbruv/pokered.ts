import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_NICKNAME_HOUSE_BLOCKS } from "../data/blocks/ViridianNicknameHouse";
import { OverworldSprite } from "../sprite";

export const ViridianNicknameHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: VIRIDIAN_NICKNAME_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BALDING_GUY,
        movement: "STAY",
        textId: "TEXT_VIRIDIANNICKNAMEHOUSE_BALDING_GUY"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "WALK",
        textId: "TEXT_VIRIDIANNICKNAMEHOUSE_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_BIRD,
        movement: "WALK",
        textId: "TEXT_VIRIDIANNICKNAMEHOUSE_SPEAROW"
      },
      {
        type: "sprite",
        x: 4,
        y: 0,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_CLIPBOARD,
        movement: "STAY",
        textId: "TEXT_VIRIDIANNICKNAMEHOUSE_SPEARY_SIGN"
      }
    ]
  },
  text: {
    _ViridianNicknameHouseBaldingGuyText: [
      ["text", "Coming up with"],
      ["line", "nicknames is fun,"],
      ["cont", "but hard."],
      ["para", "Simple names are"],
      ["line", "the easiest to"],
      ["cont", "remember."]
    ],
    _ViridianNicknameHouseLittleGirlText: [
      ["text", "My Daddy loves"],
      ["line", "#MON too."]
    ],
    _ViridianNicknameHouseSpearowText: [["text", "SPEARY: Tetweet!"]],
    _ViridianNicknameHouseSpearySignText: [
      ["text", "SPEAROW"],
      ["line", "Name: SPEARY"]
    ]
  }
};
