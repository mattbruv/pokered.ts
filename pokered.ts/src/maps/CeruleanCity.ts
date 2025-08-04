import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CITY_BLOCKS } from "../data/blocks/CeruleanCity";
import { OverworldSprite } from "../sprite";

export const CeruleanCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 15,
  blocks: CERULEAN_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route24, xOffset: 5 },
    south: { map: MapName.Route5, xOffset: 5 },
    west: { map: MapName.Route4, yOffset: 4 },
    east: { map: MapName.Route9, yOffset: 4 }
  },
  objects: {
    warps: [
      { x: 27, y: 11, toMap: MapName.CeruleanTrashedHouse, warpIndex: 0 },
      { x: 13, y: 15, toMap: MapName.CeruleanTradeHouse, warpIndex: 0 },
      { x: 19, y: 17, toMap: MapName.CeruleanPokecenter, warpIndex: 0 },
      { x: 30, y: 19, toMap: MapName.CeruleanGym, warpIndex: 0 },
      { x: 13, y: 25, toMap: MapName.BikeShop, warpIndex: 0 },
      { x: 25, y: 25, toMap: MapName.CeruleanMart, warpIndex: 0 },
      { x: 4, y: 11, toMap: MapName.CeruleanCave1F, warpIndex: 0 },
      { x: 27, y: 9, toMap: MapName.CeruleanTrashedHouse, warpIndex: 2 },
      { x: 9, y: 11, toMap: MapName.CeruleanBadgeHouse, warpIndex: 1 },
      { x: 9, y: 9, toMap: MapName.CeruleanBadgeHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 23, y: 19, signId: "TEXT_CERULEANCITY_SIGN" },
      { x: 17, y: 29, signId: "TEXT_CERULEANCITY_TRAINER_TIPS" },
      { x: 26, y: 25, signId: "TEXT_CERULEANCITY_MART_SIGN" },
      { x: 20, y: 17, signId: "TEXT_CERULEANCITY_POKECENTER_SIGN" },
      { x: 11, y: 25, signId: "TEXT_CERULEANCITY_BIKESHOP_SIGN" },
      { x: 27, y: 21, signId: "TEXT_CERULEANCITY_GYM_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 20,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_BLUE,
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_RIVAL"
      },
      {
        type: "trainer",
        x: 30,
        y: 8,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "NONE",
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_ROCKET",
        trainerId: "OPP_ROCKET",
        trainerLevel: 5
      },
      {
        type: "sprite",
        x: 31,
        y: 20,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 15,
        y: 18,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "WALK",
        textId: "TEXT_CERULEANCITY_SUPER_NERD1"
      },
      {
        type: "sprite",
        x: 9,
        y: 21,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "WALK",
        textId: "TEXT_CERULEANCITY_SUPER_NERD2"
      },
      {
        type: "sprite",
        x: 28,
        y: 12,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_GUARD1"
      },
      {
        type: "sprite",
        x: 29,
        y: 26,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_COOLTRAINER_F1"
      },
      {
        type: "sprite",
        x: 28,
        y: 26,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_SLOWBRO"
      },
      {
        type: "sprite",
        x: 9,
        y: 27,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "WALK",
        textId: "TEXT_CERULEANCITY_COOLTRAINER_F2"
      },
      {
        type: "sprite",
        x: 4,
        y: 12,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_SUPER_NERD3"
      },
      {
        type: "sprite",
        x: 27,
        y: 12,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GUARD,
        movement: "STAY",
        textId: "TEXT_CERULEANCITY_GUARD2"
      }
    ]
  },
  text: {
    _CeruleanCityRivalPreBattleText: [
      ["text", "<RIVAL>: Yo!"],
      ["line", "<PLAYER>!"],
      ["para", "You're still"],
      ["line", "struggling along"],
      ["cont", "back here?"],
      ["para", "I'm doing great!"],
      ["line", "I caught a bunch"],
      ["cont", "of strong and"],
      ["cont", "smart #MON!"],
      ["para", "Here, let me see"],
      ["line", "what you caught,"],
      ["cont", "<PLAYER>!"]
    ],
    _CeruleanCityRivalDefeatedText: [
      ["text", "Hey!"],
      ["line", "Take it easy!"],
      ["cont", "You won already!"],
      ["prompt"]
    ],
    _CeruleanCityRivalVictoryText: [
      ["text", "Heh!"],
      ["line", "You're no match"],
      ["cont", "for my genius!"],
      ["prompt"]
    ],
    _CeruleanCityRivalIWentToBillsText: [
      ["text", "<RIVAL>: Hey,"],
      ["line", "guess what?"],
      ["para", "I went to BILL's"],
      ["line", "and got him to"],
      ["cont", "show me his rare"],
      ["cont", "#MON!"],
      ["para", "That added a lot"],
      ["line", "of pages to my"],
      ["cont", "#DEX!"],
      ["para", "After all, BILL's"],
      ["line", "world famous as a"],
      ["cont", "#MANIAC!"],
      ["para", "He invented the"],
      ["line", "#MON Storage"],
      ["cont", "System on PC!"],
      ["para", "Since you're using"],
      ["line", "his system, go"],
      ["cont", "thank him!"],
      ["para", "Well, I better"],
      ["line", "get rolling!"],
      ["cont", "Smell ya later!"]
    ],
    _CeruleanCityRocketText: [
      ["text", "Hey! Stay out!"],
      ["line", "It's not your"],
      ["cont", "yard! Huh? Me?"],
      ["para", "I'm an innocent"],
      ["line", "bystander! Don't"],
      ["cont", "you believe me?"]
    ],
    _CeruleanCityRocketReceivedTM28Text: [
      ["text", "<PLAYER> recovered"],
      ["line", "TM28!@"],
      ["text_end"]
    ],
    _CeruleanCityRocketIBetterGetMovingText: [
      ["text_start"],
      ["para", "I better get"],
      ["line", "moving! Bye!@"],
      ["text_end"]
    ],
    _CeruleanCityRocketTM28NoRoomText: [
      ["text", "Make room for"],
      ["line", "this!"],
      ["para", "I can't run until"],
      ["line", "I give it to you!"]
    ],
    _CeruleanCityRocketIGiveUpText: [
      ["text", "Stop!"],
      ["line", "I give up! I'll"],
      ["cont", "leave quietly!"],
      ["prompt"]
    ],
    _CeruleanCityRocketIllReturnTheTMText: [
      ["text", "OK! I'll return"],
      ["line", "the TM I stole!"],
      ["prompt"]
    ],
    _CeruleanCityCooltrainerMText: [
      ["text", "You're a trainer"],
      ["line", "too? Collecting,"],
      ["cont", "fighting, it's a"],
      ["cont", "tough life."]
    ],
    _CeruleanCitySuperNerd1Text: [
      ["text", "That bush in"],
      ["line", "front of the shop"],
      ["cont", "is in the way."],
      ["para", "There might be a"],
      ["line", "way around."]
    ],
    _CeruleanCitySuperNerd2Text: [
      ["text", "You're making an"],
      ["line", "encyclopedia on"],
      ["cont", "#MON? That"],
      ["cont", "sounds amusing."]
    ],
    _CeruleanCityGuardText: [
      ["text", "The people here"],
      ["line", "were robbed."],
      ["para", "It's obvious that"],
      ["line", "TEAM ROCKET is"],
      ["cont", "behind this most"],
      ["cont", "heinous crime!"],
      ["para", "Even our POLICE"],
      ["line", "force has trouble"],
      ["cont", "with the ROCKETs!"]
    ],
    _CeruleanCityCooltrainerF1SlowbroUseSonicboomText: [
      ["text", "OK! SLOWBRO!"],
      ["line", "Use SONICBOOM!"],
      ["cont", "Come on, SLOWBRO"],
      ["cont", "pay attention!"]
    ],
    _CeruleanCityCooltrainerF1SlowbroPunchText: [
      ["text", "SLOWBRO punch!"],
      ["line", "No! You blew it"],
      ["cont", "again!"]
    ],
    _CeruleanCityCooltrainerF1SlowbroWithdrawText: [
      ["text", "SLOWBRO, WITHDRAW!"],
      ["line", "No! That's wrong!"],
      ["para", "It's so hard to"],
      ["line", "control #MON!"],
      ["para", "Your #MON's"],
      ["line", "obedience depends"],
      ["cont", "on your abilities"],
      ["cont", "as a trainer!"]
    ],
    _CeruleanCitySlowbroTookASnoozeText: [
      ["text", "SLOWBRO took a"],
      ["line", "snooze..."]
    ],
    _CeruleanCitySlowbroIsLoafingAroundText: [
      ["text", "SLOWBRO is"],
      ["line", "loafing around..."]
    ],
    _CeruleanCitySlowbroTurnedAwayText: [
      ["text", "SLOWBRO turned"],
      ["line", "away..."]
    ],
    _CeruleanCitySlowbroIgnoredOrdersText: [
      ["text", "SLOWBRO"],
      ["line", "ignored orders..."]
    ],
    _CeruleanCityCooltrainerF2Text: [
      ["text", "I want a bright"],
      ["line", "red BICYCLE!"],
      ["para", "I'll keep it at"],
      ["line", "home, so it won't"],
      ["cont", "get dirty!"]
    ],
    _CeruleanCitySuperNerd3Text: [
      ["text", "This is CERULEAN"],
      ["line", "CAVE! Horribly"],
      ["cont", "strong #MON"],
      ["cont", "live in there!"],
      ["para", "The #MON LEAGUE"],
      ["line", "champion is the"],
      ["cont", "only person who"],
      ["cont", "is allowed in!"]
    ],
    _CeruleanCitySignText: [
      ["text", "CERULEAN CITY"],
      ["line", "A Mysterious,"],
      ["cont", "Blue Aura"],
      ["cont", "Surrounds It"]
    ],
    _CeruleanCityTrainerTipsText: [
      ["text", "TRAINER TIPS"],
      ["para", "Pressing B Button"],
      ["line", "during evolution"],
      ["cont", "cancels the whole"],
      ["cont", "process."]
    ],
    _CeruleanCityBikeShopSign: [
      ["text", "Grass and caves"],
      ["line", "handled easily!"],
      ["cont", "BIKE SHOP"]
    ],
    _CeruleanCityGymSign: [
      ["text", "CERULEAN CITY"],
      ["line", "#MON GYM"],
      ["cont", "LEADER: MISTY"],
      ["para", "The Tomboyish"],
      ["line", "Mermaid!"]
    ]
  }
};
