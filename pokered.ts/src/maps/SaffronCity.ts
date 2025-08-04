import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_CITY_BLOCKS } from "../data/blocks/SaffronCity";
import { OverworldSprite } from "../sprite";

export const SaffronCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 15,
  blocks: SAFFRON_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route5, xOffset: 5 },
    south: { map: MapName.Route6, xOffset: 5 },
    west: { map: MapName.Route7, yOffset: 4 },
    east: { map: MapName.Route8, yOffset: 4 }
  },
  objects: {
    warps: [
      { x: 7, y: 5, toMap: MapName.CopycatsHouse1F, warpIndex: 0 },
      { x: 26, y: 3, toMap: MapName.FightingDojo, warpIndex: 0 },
      { x: 34, y: 3, toMap: MapName.SaffronGym, warpIndex: 0 },
      { x: 13, y: 11, toMap: MapName.SaffronPidgeyHouse, warpIndex: 0 },
      { x: 25, y: 11, toMap: MapName.SaffronMart, warpIndex: 0 },
      { x: 18, y: 21, toMap: MapName.SilphCo1F, warpIndex: 0 },
      { x: 9, y: 29, toMap: MapName.SaffronPokecenter, warpIndex: 0 },
      { x: 29, y: 29, toMap: MapName.MrPsychicsHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 17, y: 5, signId: "TEXT_SAFFRONCITY_SIGN" },
      { x: 27, y: 5, signId: "TEXT_SAFFRONCITY_FIGHTING_DOJO_SIGN" },
      { x: 35, y: 5, signId: "TEXT_SAFFRONCITY_GYM_SIGN" },
      { x: 26, y: 11, signId: "TEXT_SAFFRONCITY_MART_SIGN" },
      { x: 39, y: 19, signId: "TEXT_SAFFRONCITY_TRAINER_TIPS1" },
      { x: 5, y: 21, signId: "TEXT_SAFFRONCITY_TRAINER_TIPS2" },
      { x: 15, y: 21, signId: "TEXT_SAFFRONCITY_SILPH_CO_SIGN" },
      { x: 10, y: 29, signId: "TEXT_SAFFRONCITY_POKECENTER_SIGN" },
      { x: 27, y: 29, signId: "TEXT_SAFFRONCITY_MR_PSYCHICS_HOUSE_SIGN" },
      { x: 1, y: 19, signId: "TEXT_SAFFRONCITY_SILPH_CO_LATEST_PRODUCT_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 7,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET1"
      },
      {
        type: "sprite",
        x: 20,
        y: 8,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_ROCKET2"
      },
      {
        type: "sprite",
        x: 34,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET3"
      },
      {
        type: "sprite",
        x: 13,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET4"
      },
      {
        type: "sprite",
        x: 11,
        y: 25,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_ROCKET5"
      },
      {
        type: "sprite",
        x: 32,
        y: 13,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_ROCKET6"
      },
      {
        type: "sprite",
        x: 18,
        y: 30,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_ROCKET7"
      },
      {
        type: "sprite",
        x: 8,
        y: 14,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_SCIENTIST"
      },
      {
        type: "sprite",
        x: 23,
        y: 23,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_SILPH_WORKER_M"
      },
      {
        type: "sprite",
        x: 17,
        y: 30,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_F,
        movement: "WALK",
        textId: "TEXT_SAFFRONCITY_SILPH_WORKER_F"
      },
      {
        type: "sprite",
        x: 30,
        y: 12,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 31,
        y: 12,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_BIRD,
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_PIDGEOT"
      },
      {
        type: "sprite",
        x: 18,
        y: 8,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_ROCKER,
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKER"
      },
      {
        type: "sprite",
        x: 18,
        y: 22,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET8"
      },
      {
        type: "sprite",
        x: 19,
        y: 22,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_SAFFRONCITY_ROCKET9"
      }
    ]
  },
  text: {
    _SaffronCityRocket1Text: [
      ["text", "What do you want?"],
      ["line", "Get lost!"]
    ],
    _SaffronCityRocket2Text: [
      ["text", "BOSS said he'll"],
      ["line", "take this town!"]
    ],
    _SaffronCityRocket3Text: [
      ["text", "Get out of the"],
      ["line", "way!"]
    ],
    _SaffronCityRocket4Text: [
      ["text", "SAFFRON belongs"],
      ["line", "to TEAM ROCKET!"]
    ],
    _SaffronCityRocket5Text: [
      ["text", "Being evil makes"],
      ["line", "me feel so alive!"]
    ],
    _SaffronCityRocket6Text: [
      ["text", "Ow! Watch where"],
      ["line", "you're walking!"]
    ],
    _SaffronCityRocket7Text: [
      ["text", "With SILPH under"],
      ["line", "control, we can"],
      ["cont", "exploit #MON"],
      ["cont", "around the world!"]
    ],
    _SaffronCityScientistText: [
      ["text", "You beat TEAM"],
      ["line", "ROCKET all alone?"],
      ["cont", "That's amazing!"]
    ],
    _SaffronCitySilphWorkerMText: [
      ["text", "Yeah! TEAM ROCKET"],
      ["line", "is gone!"],
      ["cont", "It's safe to go"],
      ["cont", "out again!"]
    ],
    _SaffronCitySilphWorkerFText: [
      ["text", "People should be"],
      ["line", "flocking back to"],
      ["cont", "SAFFRON now."]
    ],
    _SaffronCityGentlemanText: [
      ["text", "I flew here on my"],
      ["line", "PIDGEOT when I"],
      ["cont", "read about SILPH."],
      ["para", "It's already over?"],
      ["line", "I missed the"],
      ["cont", "media action."]
    ],
    _SaffronCityPidgeotText: [["text", "PIDGEOT: Bi bibii!@"], ["text_end"]],
    _SaffronCityRockerText: [
      ["text", "I saw ROCKET"],
      ["line", "BOSS escaping"],
      ["cont", "SILPH's building."]
    ],
    _SaffronCityRocket8Text: [
      ["text", "I'm a security"],
      ["line", "guard."],
      ["para", "Suspicious kids I"],
      ["line", "don't allow in!"]
    ],
    _SaffronCityRocket9Text: [
      ["text", "..."],
      ["line", "Snore..."],
      ["para", "Hah! He's taking"],
      ["line", "a snooze!"]
    ],
    _SaffronCitySignText: [
      ["text", "SAFFRON CITY"],
      ["line", "Shining, Golden"],
      ["cont", "Land of Commerce"]
    ],
    _SaffronCityFightingDojoSignText: [["text", "FIGHTING DOJO"]],
    _SaffronCityGymSignText: [
      ["text", "SAFFRON CITY"],
      ["line", "#MON GYM"],
      ["cont", "LEADER: SABRINA"],
      ["para", "The Master of"],
      ["line", "Psychic #MON!"]
    ],
    _SaffronCityTrainerTips1Text: [
      ["text", "TRAINER TIPS"],
      ["para", "FULL HEAL cures"],
      ["line", "all ailments like"],
      ["cont", "sleep and burns."],
      ["para", "It costs a bit"],
      ["line", "more, but it's"],
      ["cont", "more convenient."]
    ],
    _SaffronCityTrainerTips2Text: [
      ["text", "TRAINER TIPS"],
      ["para", "New GREAT BALL"],
      ["line", "offers improved"],
      ["cont", "capture rates."],
      ["para", "Try it on those"],
      ["line", "hard-to-catch"],
      ["cont", "#MON."]
    ],
    _SaffronCitySilphCoSignText: [
      ["text", "SILPH CO."],
      ["line", "OFFICE BUILDING"]
    ],
    _SaffronCityMrPsychicsHouseSignText: [
      ["text", "MR.PSYCHIC's"],
      ["line", "HOUSE"]
    ],
    _SaffronCitySilphCoLatestProductSignText: [
      ["text", "SILPH's latest"],
      ["line", "product!"],
      ["para", "Release to be"],
      ["line", "determined..."]
    ]
  }
};
