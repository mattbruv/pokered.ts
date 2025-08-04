import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VIRIDIAN_CITY_BLOCKS } from "../data/blocks/ViridianCity";
import { OverworldSprite } from "../sprite";

export const ViridianCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 15,
  blocks: VIRIDIAN_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route2, xOffset: 5 },
    south: { map: MapName.Route1, xOffset: 5 },
    west: { map: MapName.Route22, yOffset: 4 }
  },
  objects: {
    warps: [
      { x: 23, y: 25, toMap: MapName.ViridianPokecenter, warpIndex: 0 },
      { x: 29, y: 19, toMap: MapName.ViridianMart, warpIndex: 0 },
      { x: 21, y: 15, toMap: MapName.ViridianSchoolHouse, warpIndex: 0 },
      { x: 21, y: 9, toMap: MapName.ViridianNicknameHouse, warpIndex: 0 },
      { x: 32, y: 7, toMap: MapName.ViridianGym, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 17, y: 17, signId: "TEXT_VIRIDIANCITY_SIGN" },
      { x: 19, y: 1, signId: "TEXT_VIRIDIANCITY_TRAINER_TIPS1" },
      { x: 21, y: 29, signId: "TEXT_VIRIDIANCITY_TRAINER_TIPS2" },
      { x: 30, y: 19, signId: "TEXT_VIRIDIANCITY_MART_SIGN" },
      { x: 24, y: 25, signId: "TEXT_VIRIDIANCITY_POKECENTER_SIGN" },
      { x: 27, y: 7, signId: "TEXT_VIRIDIANCITY_GYM_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 13,
        y: 20,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_VIRIDIANCITY_YOUNGSTER1"
      },
      {
        type: "sprite",
        x: 30,
        y: 8,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_VIRIDIANCITY_GAMBLER1"
      },
      {
        type: "sprite",
        x: 30,
        y: 25,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_VIRIDIANCITY_YOUNGSTER2"
      },
      {
        type: "sprite",
        x: 17,
        y: 9,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_VIRIDIANCITY_GIRL"
      },
      {
        type: "sprite",
        x: 18,
        y: 9,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GAMBLER_ASLEEP,
        movement: "STAY",
        textId: "TEXT_VIRIDIANCITY_OLD_MAN_SLEEPY"
      },
      {
        type: "sprite",
        x: 6,
        y: 23,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_VIRIDIANCITY_FISHER"
      },
      {
        type: "sprite",
        x: 17,
        y: 5,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "WALK",
        textId: "TEXT_VIRIDIANCITY_OLD_MAN"
      }
    ]
  },
  text: {
    _ViridianCityYoungster1Text: [
      ["text", "Those # BALLs"],
      ["line", "at your waist!"],
      ["cont", "You have #MON!"],
      ["para", "It's great that"],
      ["line", "you can carry and"],
      ["cont", "use #MON any"],
      ["cont", "time, anywhere!"]
    ],
    _ViridianCityGambler1GymAlwaysClosedText: [
      ["text", "This #MON GYM"],
      ["line", "is always closed."],
      ["para", "I wonder who the"],
      ["line", "LEADER is?"]
    ],
    _ViridianCityGambler1GymLeaderReturnedText: [
      ["text", "VIRIDIAN GYM's"],
      ["line", "LEADER returned!"]
    ],
    _ViridianCityYoungster2YouWantToKnowAboutText: [
      ["text", "You want to know"],
      ["line", "about the 2 kinds"],
      ["cont", "of caterpillar"],
      ["cont", "#MON?"]
    ],
    ViridianCityYoungster2OkThenText: [["text", "Oh, OK then!"]],
    ViridianCityYoungster2CaterpieAndWeedleDescriptionText: [
      ["text", "CATERPIE has no"],
      ["line", "poison, but"],
      ["cont", "WEEDLE does."],
      ["para", "Watch out for its"],
      ["line", "POISON STING!"]
    ],
    _ViridianCityGirlHasntHadHisCoffeeYetText: [
      ["text", "Oh Grandpa! Don't"],
      ["line", "be so mean!"],
      ["cont", "He hasn't had his"],
      ["cont", "coffee yet."]
    ],
    _ViridianCityGirlWhenIGoShopText: [
      ["text", "When I go shop in"],
      ["line", "PEWTER CITY, I"],
      ["cont", "have to take the"],
      ["cont", "winding trail in"],
      ["cont", "VIRIDIAN FOREST."]
    ],
    _ViridianCityOldManSleepyPrivatePropertyText: [
      ["text", "You can't go"],
      ["line", "through here!"],
      ["para", "This is private"],
      ["line", "property!"]
    ],
    ViridianCityFisherYouCanHaveThisText: [
      ["text", "Yawn!"],
      ["line", "I must have dozed"],
      ["cont", "off in the sun."],
      ["para", "I had this dream"],
      ["line", "about a DROWZEE"],
      ["cont", "eating my dream."],
      ["cont", "What's this?"],
      ["cont", "Where did this TM"],
      ["cont", "come from?"],
      ["para", "This is spooky!"],
      ["line", "Here, you can"],
      ["cont", "have this TM."],
      ["prompt"]
    ],
    _ViridianCityFisherReceivedTM42Text: [
      ["text", "<PLAYER> received"],
      ["line", "TM42!@"],
      ["text_end"]
    ],
    _ViridianCityFisherTM42ExplanationText: [
      ["text", "TM42 contains"],
      ["line", "DREAM EATER..."],
      ["cont", "...Snore..."]
    ],
    _ViridianCityFisherTM42NoRoomText: [
      ["text", "You have too much"],
      ["line", "stuff already."]
    ],
    _ViridianCityOldManHadMyCoffeeNowText: [
      ["text", "Ahh, I've had my"],
      ["line", "coffee now and I"],
      ["cont", "feel great!"],
      ["para", "Sure you can go"],
      ["line", "through!"],
      ["para", "Are you in a"],
      ["line", "hurry?"]
    ],
    _ViridianCityOldManKnowHowToCatchPokemonText: [
      ["text", "I see you're using"],
      ["line", "a #DEX."],
      ["para", "When you catch a"],
      ["line", "#MON, #DEX"],
      ["cont", "is automatically"],
      ["cont", "updated."],
      ["para", "What? Don't you"],
      ["line", "know how to catch"],
      ["cont", "#MON?"],
      ["para", "I'll show you"],
      ["line", "how to then."]
    ],
    _ViridianCityOldManTimeIsMoneyText: [
      ["text", "Time is money..."],
      ["line", "Go along then."]
    ],
    _ViridianCityOldManYouNeedToWeakenTheTargetText: [
      ["text", "First, you need"],
      ["line", "to weaken the"],
      ["cont", "target #MON."]
    ],
    _ViridianCitySignText: [
      ["text", "VIRIDIAN CITY "],
      ["line", "The Eternally"],
      ["cont", "Green Paradise"]
    ],
    _ViridianCityTrainerTips1Text: [
      ["text", "TRAINER TIPS"],
      ["para", "Catch #MON"],
      ["line", "and expand your"],
      ["cont", "collection!"],
      ["para", "The more you have,"],
      ["line", "the easier it is"],
      ["cont", "to fight!"]
    ],
    _ViridianCityTrainerTips2Text: [
      ["text", "TRAINER TIPS"],
      ["para", "The battle moves"],
      ["line", "of #MON are"],
      ["cont", "limited by their"],
      ["cont", "POWER POINTs, PP."],
      ["para", "To replenish PP,"],
      ["line", "rest your tired"],
      ["cont", "#MON at a"],
      ["cont", "#MON CENTER!"]
    ],
    _ViridianCityGymSignText: [
      ["text", "VIRIDIAN CITY"],
      ["line", "#MON GYM"]
    ],
    _ViridianCityGymLockedText: [
      ["text", "The GYM's doors"],
      ["line", "are locked..."]
    ]
  }
};
