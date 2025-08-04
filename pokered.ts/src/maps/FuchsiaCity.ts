import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FUCHSIA_CITY_BLOCKS } from "../data/blocks/FuchsiaCity";
import { OverworldSprite } from "../sprite";

export const FuchsiaCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 15,
  blocks: FUCHSIA_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.Route19, xOffset: 5 },
    west: { map: MapName.Route18, yOffset: 4 },
    east: { map: MapName.Route15, yOffset: 4 }
  },
  objects: {
    warps: [
      { x: 5, y: 13, toMap: MapName.FuchsiaMart, warpIndex: 0 },
      { x: 11, y: 27, toMap: MapName.FuchsiaBillsGrandpasHouse, warpIndex: 0 },
      { x: 19, y: 27, toMap: MapName.FuchsiaPokecenter, warpIndex: 0 },
      { x: 27, y: 27, toMap: MapName.WardensHouse, warpIndex: 0 },
      { x: 18, y: 3, toMap: MapName.SafariZoneGate, warpIndex: 0 },
      { x: 5, y: 27, toMap: MapName.FuchsiaGym, warpIndex: 0 },
      { x: 22, y: 13, toMap: MapName.FuchsiaMeetingRoom, warpIndex: 0 },
      { x: 31, y: 27, toMap: MapName.FuchsiaGoodRodHouse, warpIndex: 1 },
      { x: 31, y: 24, toMap: MapName.FuchsiaGoodRodHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 15, y: 23, signId: "TEXT_FUCHSIACITY_SIGN1" },
      { x: 25, y: 15, signId: "TEXT_FUCHSIACITY_SIGN2" },
      { x: 17, y: 5, signId: "TEXT_FUCHSIACITY_SAFARI_GAME_SIGN" },
      { x: 6, y: 13, signId: "TEXT_FUCHSIACITY_MART_SIGN" },
      { x: 20, y: 27, signId: "TEXT_FUCHSIACITY_POKECENTER_SIGN" },
      { x: 27, y: 29, signId: "TEXT_FUCHSIACITY_WARDENS_HOME_SIGN" },
      { x: 21, y: 15, signId: "TEXT_FUCHSIACITY_SAFARI_ZONE_SIGN" },
      { x: 5, y: 29, signId: "TEXT_FUCHSIACITY_GYM_SIGN" },
      { x: 33, y: 7, signId: "TEXT_FUCHSIACITY_CHANSEY_SIGN" },
      { x: 27, y: 7, signId: "TEXT_FUCHSIACITY_VOLTORB_SIGN" },
      { x: 13, y: 7, signId: "TEXT_FUCHSIACITY_KANGASKHAN_SIGN" },
      { x: 31, y: 13, signId: "TEXT_FUCHSIACITY_SLOWPOKE_SIGN" },
      { x: 13, y: 15, signId: "TEXT_FUCHSIACITY_LAPRAS_SIGN" },
      { x: 7, y: 7, signId: "TEXT_FUCHSIACITY_FOSSIL_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 12,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_YOUNGSTER1"
      },
      {
        type: "sprite",
        x: 28,
        y: 17,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_GAMBLER"
      },
      {
        type: "sprite",
        x: 30,
        y: 14,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_FUCHSIACITY_ERIK"
      },
      {
        type: "sprite",
        x: 24,
        y: 8,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_FUCHSIACITY_YOUNGSTER2"
      },
      {
        type: "sprite",
        x: 31,
        y: 5,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_FAIRY,
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_CHANSEY"
      },
      {
        type: "sprite",
        x: 25,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_FUCHSIACITY_VOLTORB"
      },
      {
        type: "sprite",
        x: 12,
        y: 6,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_KANGASKHAN"
      },
      {
        type: "sprite",
        x: 30,
        y: 12,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_SLOWPOKE"
      },
      {
        type: "sprite",
        x: 8,
        y: 17,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_SEEL,
        movement: "WALK",
        textId: "TEXT_FUCHSIACITY_LAPRAS"
      },
      {
        type: "sprite",
        x: 6,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_FOSSIL,
        movement: "STAY",
        textId: "TEXT_FUCHSIACITY_FOSSIL"
      }
    ]
  },
  text: {
    _FuchsiaCityYoungster1Text: [
      ["text", "Did you try the"],
      ["line", "SAFARI GAME? Some"],
      ["cont", "#MON can only"],
      ["cont", "be caught there."]
    ],
    _FuchsiaCityGamblerText: [
      ["text", "SAFARI ZONE has a"],
      ["line", "zoo in front of"],
      ["cont", "the entrance."],
      ["para", "Out back is the"],
      ["line", "SAFARI GAME for"],
      ["cont", "catching #MON."]
    ],
    _FuchsiaCityErikText: [
      ["text", "ERIK: Where's"],
      ["line", "SARA? I said I'd"],
      ["cont", "meet her here."]
    ],
    _FuchsiaCityYoungster2Text: [
      ["text", "That item ball in"],
      ["line", "there is really a"],
      ["cont", "#MON."]
    ],
    _FuchsiaCityPokemonText: [["text", "!"]],
    _FuchsiaCitySignText: [
      ["text", "FUCHSIA CITY"],
      ["line", "Behold! It's"],
      ["cont", "Passion Pink!"]
    ],
    _FuchsiaCitySafariGameSignText: [
      ["text", "SAFARI GAME"],
      ["line", "#MON-U-CATCH!"]
    ],
    _FuchsiaCityWardensHomeSignText: [
      ["text", "SAFARI ZONE"],
      ["line", "WARDEN's HOME"]
    ],
    _FuchsiaCitySafariZoneSignText: [
      ["text", "#MON PARADISE"],
      ["line", "SAFARI ZONE"]
    ],
    _FuchsiaCityGymSignText: [
      ["text", "FUCHSIA CITY"],
      ["line", "#MON GYM"],
      ["cont", "LEADER: KOGA"],
      ["para", "The Poisonous"],
      ["line", "Ninja Master"]
    ],
    _FuchsiaCityChanseySignText: [
      ["text", "Name: CHANSEY"],
      ["para", "Catching one is"],
      ["line", "all up to chance."],
      ["prompt"]
    ],
    _FuchsiaCityVoltorbSignText: [
      ["text", "Name: VOLTORB"],
      ["para", "The very image of"],
      ["line", "a # BALL."],
      ["prompt"]
    ],
    _FuchsiaCityKangaskhanSignText: [
      ["text", "Name: KANGASKHAN"],
      ["para", "A maternal #MON"],
      ["line", "that raises its"],
      ["cont", "young in a pouch"],
      ["cont", "on its belly."],
      ["prompt"]
    ],
    _FuchsiaCitySlowpokeSignText: [
      ["text", "Name: SLOWPOKE"],
      ["para", "Friendly and very"],
      ["line", "slow moving."],
      ["prompt"]
    ],
    _FuchsiaCityLaprasSignText: [
      ["text", "Name: LAPRAS"],
      ["para", "A.K.A. the king"],
      ["line", "of the seas."],
      ["prompt"]
    ],
    _FuchsiaCityFossilSignOmanyteText: [
      ["text", "Name: OMANYTE"],
      ["para", "A #MON that"],
      ["line", "was resurrected"],
      ["cont", "from a fossil."],
      ["prompt"]
    ],
    _FuchsiaCityFossilSignKabutoText: [
      ["text", "Name: KABUTO"],
      ["para", "A #MON that"],
      ["line", "was resurrected"],
      ["cont", "from a fossil."],
      ["prompt"]
    ],
    _FuchsiaCityFossilSignUndeterminedText: [["text", "..."]]
  }
};
