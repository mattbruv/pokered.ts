import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { GAME_CORNER_BLOCKS } from "../data/blocks/GameCorner";
import { OverworldSprite } from "../sprite";

export const GameCorner: Map = {
  width: 10,
  height: 9,
  borderBlock: 15,
  blocks: GAME_CORNER_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [
      { x: 15, y: 17, toMap: "LAST_MAP", warpIndex: 7 },
      { x: 16, y: 17, toMap: "LAST_MAP", warpIndex: 7 },
      { x: 17, y: 4, toMap: MapName.RocketHideoutB1F, warpIndex: 1 }
    ],
    backgroundItems: [{ x: 9, y: 4, signId: "TEXT_GAMECORNER_POSTER" }],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 6,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_BEAUTY1"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_CLERK1"
      },
      {
        type: "sprite",
        x: 2,
        y: 10,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_MAN,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_MIDDLE_AGED_MAN1"
      },
      {
        type: "sprite",
        x: 2,
        y: 13,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_BEAUTY2"
      },
      {
        type: "sprite",
        x: 5,
        y: 11,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_FISHING_GURU,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_FISHING_GURU"
      },
      {
        type: "sprite",
        x: 8,
        y: 11,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_WOMAN,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 8,
        y: 14,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_GYM_GUIDE"
      },
      {
        type: "sprite",
        x: 11,
        y: 15,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_GAMBLER"
      },
      {
        type: "sprite",
        x: 14,
        y: 11,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_CLERK2"
      },
      {
        type: "sprite",
        x: 17,
        y: 13,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_GAMECORNER_GENTLEMAN"
      },
      {
        type: "trainer",
        x: 9,
        y: 5,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_GAMECORNER_ROCKET",
        trainerId: "OPP_ROCKET",
        trainerLevel: 7
      }
    ]
  },
  text: {
    _GameCornerBeauty1Text: [
      ["text", "Welcome!"],
      ["para", "You can exchange"],
      ["line", "your coins for"],
      ["cont", "fabulous prizes"],
      ["cont", "next door."]
    ],
    _GameCornerClerk1DoYouNeedSomeGameCoinsText: [
      ["text", "Welcome to ROCKET"],
      ["line", "GAME CORNER!"],
      ["para", "Do you need some"],
      ["line", "game coins?"],
      ["para", "It's ¥1000 for 50"],
      ["line", "coins. Would you"],
      ["cont", "like some?"]
    ],
    _GameCornerClerk1ThanksHereAre50CoinsText: [
      ["text", "Thanks! Here are"],
      ["line", "your 50 coins!"]
    ],
    _GameCornerClerk1PleaseComePlaySometimeText: [
      ["text", "No? Please come"],
      ["line", "play sometime!"]
    ],
    _GameCornerClerk1CantAffordTheCoinsText: [
      ["text", "You can't afford"],
      ["line", "the coins!"]
    ],
    _GameCornerClerk1CoinCaseIsFullText: [
      ["text", "Oops! Your COIN"],
      ["line", "CASE is full."]
    ],
    _GameCornerClerk1DontHaveCoinCaseText: [
      ["text", "You don't have a"],
      ["line", "COIN CASE!"]
    ],
    _GameCornerMiddleAgedMan1Text: [
      ["text", "Keep this quiet."],
      ["para", "It's rumored that"],
      ["line", "this place is run"],
      ["cont", "by TEAM ROCKET."]
    ],
    _GameCornerBeauty2Text: [
      ["text", "I think these"],
      ["line", "machines have"],
      ["cont", "different odds."]
    ],
    _GameCornerFishingGuruWantToPlayText: [
      ["text", "Kid, do you want"],
      ["line", "to play?"],
      ["prompt"]
    ],
    _GameCornerFishingGuruReceived10CoinsText: [
      ["text", "<PLAYER> received"],
      ["line", "10 coins!@"],
      ["text_end"]
    ],
    _GameCornerFishingGuruDontNeedMyCoinsText: [
      ["text", "You don't need my"],
      ["line", "coins!"]
    ],
    _GameCornerFishingGuruWinsComeAndGoText: [
      ["text", "Wins seem to come"],
      ["line", "and go."]
    ],
    _GameCornerMiddleAgedWomanText: [
      ["text", "I'm having a"],
      ["line", "wonderful time!"]
    ],
    _GameCornerGymGuideChampInMakingText: [
      ["text", "Hey!"],
      ["para", "You have better"],
      ["line", "things to do,"],
      ["cont", "champ in making!"],
      ["para", "CELADON GYM's"],
      ["line", "LEADER is ERIKA!"],
      ["cont", "She uses grass-"],
      ["cont", "type #MON!"],
      ["para", "She might appear"],
      ["line", "docile, but don't"],
      ["cont", "be fooled!"]
    ],
    _GameCornerGymGuideTheyOfferRarePokemonText: [
      ["text", "They offer rare"],
      ["line", "#MON that can"],
      ["cont", "be exchanged for"],
      ["cont", "your coins."],
      ["para", "But, I just can't"],
      ["line", "seem to win!"]
    ],
    _GameCornerGamblerText: [
      ["text", "Games are scary!"],
      ["line", "It's so easy to"],
      ["cont", "get hooked!"]
    ],
    _GameCornerClerk2WantSomeCoinsText: [
      ["text", "What's up? Want"],
      ["line", "some coins?"],
      ["prompt"]
    ],
    _GameCornerClerk2Received20CoinsText: [
      ["text", "<PLAYER> received"],
      ["line", "20 coins!@"],
      ["text_end"]
    ],
    _GameCornerClerk2YouHaveLotsOfCoinsText: [
      ["text", "You have lots of"],
      ["line", "coins!"]
    ],
    _GameCornerClerk2INeedMoreCoinsText: [
      ["text", "Darn! I need more"],
      ["line", "coins for the"],
      ["cont", "#MON I want!"]
    ],
    _GameCornerGentlemanThrowingMeOffText: [
      ["text", "Hey, what? You're"],
      ["line", "throwing me off!"],
      ["cont", "Here are some"],
      ["cont", "coins, shoo!"],
      ["prompt"]
    ],
    _GameCornerGentlemanReceived20CoinsText: [
      ["text", "<PLAYER> received"],
      ["line", "20 coins!@"],
      ["text_end"]
    ],
    _GameCornerGentlemanYouGotYourOwnCoinsText: [
      ["text", "You've got your"],
      ["line", "own coins!"]
    ],
    _GameCornerGentlemanCloselyWatchTheReelsText: [
      ["text", "The trick is to"],
      ["line", "watch the reels"],
      ["cont", "closely!"]
    ],
    _GameCornerRocketImGuardingThisPosterText: [
      ["text", "I'm guarding this"],
      ["line", "poster!"],
      ["cont", "Go away, or else!"]
    ],
    _GameCornerRocketBattleEndText: [["text", "Dang!"], ["prompt"]],
    _GameCornerRocketAfterBattleText: [
      ["text", "Our hideout might"],
      ["line", "be discovered! I"],
      ["cont", "better tell BOSS!"]
    ],
    _GameCornerPosterSwitchBehindPosterText: [
      ["text", "Hey!"],
      ["para", "A switch behind"],
      ["line", "the poster!?"],
      ["cont", "Let's push it!@"],
      ["text_end"]
    ],
    _GameCornerOopsForgotCoinCaseText: [
      ["text", "Oops! Forgot the"],
      ["line", "COIN CASE!"]
    ]
  }
};
