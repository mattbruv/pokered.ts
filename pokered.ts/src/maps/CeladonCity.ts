import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_CITY_BLOCKS } from "../data/blocks/CeladonCity";
import { OverworldSprite } from "../sprite";

export const CeladonCity: Map = {
  width: 25,
  height: 18,
  borderBlock: 15,
  blocks: CELADON_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.Route16, yOffset: 4 },
    east: { map: MapName.Route7, yOffset: 4 }
  },
  objects: {
    warps: [
      { x: 8, y: 13, toMap: MapName.CeladonMart1F, warpIndex: 0 },
      { x: 10, y: 13, toMap: MapName.CeladonMart1F, warpIndex: 2 },
      { x: 24, y: 9, toMap: MapName.CeladonMansion1F, warpIndex: 0 },
      { x: 24, y: 3, toMap: MapName.CeladonMansion1F, warpIndex: 2 },
      { x: 25, y: 3, toMap: MapName.CeladonMansion1F, warpIndex: 2 },
      { x: 41, y: 9, toMap: MapName.CeladonPokecenter, warpIndex: 0 },
      { x: 12, y: 27, toMap: MapName.CeladonGym, warpIndex: 0 },
      { x: 28, y: 19, toMap: MapName.GameCorner, warpIndex: 0 },
      { x: 39, y: 19, toMap: MapName.CeladonMart5F, warpIndex: 0 },
      { x: 33, y: 19, toMap: MapName.GameCornerPrizeRoom, warpIndex: 0 },
      { x: 31, y: 27, toMap: MapName.CeladonDiner, warpIndex: 0 },
      { x: 35, y: 27, toMap: MapName.CeladonChiefHouse, warpIndex: 0 },
      { x: 43, y: 27, toMap: MapName.CeladonHotel, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 27, y: 15, signId: "TEXT_CELADONCITY_TRAINER_TIPS1" },
      { x: 19, y: 15, signId: "TEXT_CELADONCITY_SIGN" },
      { x: 42, y: 9, signId: "TEXT_CELADONCITY_POKECENTER_SIGN" },
      { x: 13, y: 29, signId: "TEXT_CELADONCITY_GYM_SIGN" },
      { x: 21, y: 9, signId: "TEXT_CELADONCITY_MANSION_SIGN" },
      { x: 12, y: 13, signId: "TEXT_CELADONCITY_DEPTSTORE_SIGN" },
      { x: 39, y: 21, signId: "TEXT_CELADONCITY_TRAINER_TIPS2" },
      { x: 33, y: 21, signId: "TEXT_CELADONCITY_PRIZEEXCHANGE_SIGN" },
      { x: 27, y: 21, signId: "TEXT_CELADONCITY_GAMECORNER_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 17,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "WALK",
        textId: "TEXT_CELADONCITY_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 11,
        y: 28,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_GRAMPS1"
      },
      {
        type: "sprite",
        x: 14,
        y: 19,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_CELADONCITY_GIRL"
      },
      {
        type: "sprite",
        x: 25,
        y: 22,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_GRAMPS2"
      },
      {
        type: "sprite",
        x: 22,
        y: 16,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_GRAMPS3"
      },
      {
        type: "sprite",
        x: 32,
        y: 12,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_FISHER"
      },
      {
        type: "sprite",
        x: 30,
        y: 12,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_CELADONCITY_POLIWRATH"
      },
      {
        type: "sprite",
        x: 32,
        y: 29,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "WALK",
        textId: "TEXT_CELADONCITY_ROCKET1"
      },
      {
        type: "sprite",
        x: 42,
        y: 14,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "WALK",
        textId: "TEXT_CELADONCITY_ROCKET2"
      }
    ]
  },
  text: {
    _CeladonCityLittleGirlText: [
      ["text", "I got my KOFFING"],
      ["line", "in CINNABAR!"],
      ["para", "It's nice, but it"],
      ["line", "breathes poison"],
      ["cont", "when it's angry!"]
    ],
    _CeladonCityGramps1Text: [
      ["text", "Heheh! This GYM"],
      ["line", "is great! It's"],
      ["cont", "full of women!"]
    ],
    _CeladonCityGirlText: [
      ["text", "The GAME CORNER"],
      ["line", "is bad for our"],
      ["cont", "city's image!"]
    ],
    _CeladonCityGramps2Text: [
      ["text", "Moan! I blew it"],
      ["line", "all at the slots!"],
      ["para", "I knew I should"],
      ["line", "have cashed in my"],
      ["cont", "coins for prizes!"]
    ],
    _CeladonCityGramps3Text: [
      ["text", "Hello, there!"],
      ["para", "I've seen you,"],
      ["line", "but I never had a"],
      ["cont", "chance to talk!"],
      ["para", "Here's a gift for"],
      ["line", "dropping by!"],
      ["prompt"]
    ],
    _CeladonCityGramps3ReceivedTM41Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _CeladonCityGramps3TM41ExplanationText: [
      ["text", "TM41 teaches"],
      ["line", "SOFTBOILED!"],
      ["para", "Only one #MON"],
      ["line", "can use it!"],
      ["para", "That #MON is"],
      ["line", "CHANSEY!"]
    ],
    _CeladonCityGramps3TM41NoRoomText: [
      ["text", "Oh, your pack is"],
      ["line", "full of items!"]
    ],
    _CeladonCityFisherText: [
      ["text", "This is my trusted"],
      ["line", "pal, POLIWRATH!"],
      ["para", "It evolved from"],
      ["line", "POLIWHIRL when I"],
      ["cont", "used WATER STONE!"]
    ],
    _CeladonCityPoliwrathText: [
      ["text", "POLIWRATH: Ribi"],
      ["line", "ribit!@"],
      ["text_end"]
    ],
    _CeladonCityRocket1Text: [
      ["text", "What are you"],
      ["line", "staring at?"]
    ],
    _CeladonCityRocket2Text: [
      ["text", "Keep out of TEAM"],
      ["line", "ROCKET's way!"]
    ],
    _CeladonCityTrainerTips1Text: [
      ["text", "TRAINER TIPS"],
      ["para", "X ACCURACY boosts"],
      ["line", "the accuracy of"],
      ["cont", "techniques!"],
      ["para", "DIRE HIT jacks up"],
      ["line", "the likelihood of"],
      ["cont", "critical hits!"],
      ["para", "Get your items at"],
      ["line", "CELADON DEPT."],
      ["cont", "STORE!"]
    ],
    _CeladonCitySignText: [
      ["text", "CELADON CITY"],
      ["line", "The City of"],
      ["cont", "Rainbow Dreams"]
    ],
    _CeladonCityGymSignText: [
      ["text", "CELADON CITY"],
      ["line", "#MON GYM"],
      ["cont", "LEADER: ERIKA"],
      ["para", "The Nature Loving"],
      ["line", "Princess!"]
    ],
    _CeladonCityMansionSignText: [["text", "CELADON MANSION"]],
    _CeladonCityDeptStoreSignText: [
      ["text", "Find what you"],
      ["line", "need at CELADON"],
      ["cont", "DEPT. STORE!"]
    ],
    _CeladonCityTrainerTips2Text: [
      ["text", "TRAINER TIPS"],
      ["para", "GUARD SPEC."],
      ["line", "protects #MON"],
      ["cont", "against SPECIAL"],
      ["cont", "attacks such as"],
      ["cont", "fire and water!"],
      ["para", "Get your items at"],
      ["line", "CELADON DEPT."],
      ["cont", "STORE!"]
    ],
    _CeladonCityPrizeExchangeSignText: [
      ["text", "Coins exchanged"],
      ["line", "for prizes!"],
      ["cont", "PRIZE EXCHANGE"]
    ],
    _CeladonCityGameCornerSignText: [
      ["text", "ROCKET GAME CORNER"],
      ["line", "The playground"],
      ["cont", "for grown-ups!"]
    ]
  }
};
