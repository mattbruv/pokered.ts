import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_FAN_CLUB_BLOCKS } from "../data/blocks/PokemonFanClub";
import { OverworldSprite } from "../sprite";

export const PokemonFanClub: Map = {
  width: 4,
  height: 4,
  borderBlock: 13,
  blocks: POKEMON_FAN_CLUB_BLOCKS,
  tileset: Tileset.INTERIOR,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [
      { x: 1, y: 0, signId: "TEXT_POKEMONFANCLUB_SIGN_1" },
      { x: 6, y: 0, signId: "TEXT_POKEMONFANCLUB_SIGN_2" }
    ],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 3,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_PIKACHU_FAN"
      },
      {
        type: "sprite",
        x: 1,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_SEEL_FAN"
      },
      {
        type: "sprite",
        x: 6,
        y: 4,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_FAIRY,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_PIKACHU"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_SEEL,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_SEEL"
      },
      {
        type: "sprite",
        x: 3,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_CHAIRMAN"
      },
      {
        type: "sprite",
        x: 5,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_POKEMONFANCLUB_RECEPTIONIST"
      }
    ]
  },
  text: {
    _PokemonFanClubPikachuFanNormalText: [
      ["text", "Won't you admire"],
      ["line", "my PIKACHU's"],
      ["cont", "adorable tail?"]
    ],
    _PokemonFanClubPikachuFanBetterText: [
      ["text", "Humph! My PIKACHU"],
      ["line", "is twice as cute"],
      ["cont", "as that one!"]
    ],
    _PokemonFanClubSeelFanNormalText: [
      ["text", "I just love my"],
      ["line", "SEEL!"],
      ["para", "It squeals when I"],
      ["line", "hug it!"]
    ],
    _PokemonFanClubSeelFanBetterText: [
      ["text", "Oh dear!"],
      ["para", "My SEEL is far"],
      ["line", "more attractive!"]
    ],
    _PokemonFanClubPikachuText: [
      ["text", "PIKACHU: Chu!"],
      ["line", "Pikachu!"]
    ],
    _PokemonFanClubSeelText: [["text", "SEEL: Kyuoo!"]],
    _PokemonFanClubChairmanIntroText: [
      ["text", "I chair the"],
      ["line", "#MON Fan Club!"],
      ["para", "I have collected"],
      ["line", "over 100 #MON!"],
      ["para", "I'm very fussy"],
      ["line", "when it comes to"],
      ["cont", "#MON!"],
      ["para", "So..."],
      ["para", "Did you come"],
      ["line", "visit to hear"],
      ["cont", "about my #MON?"]
    ],
    _PokemonFanClubChairmanStoryText: [
      ["text", "Good!"],
      ["line", "Then listen up!"],
      ["para", "My favorite"],
      ["line", "RAPIDASH..."],
      ["para", "It...cute..."],
      ["line", "lovely...smart..."],
      ["cont", "plus...amazing..."],
      ["cont", "you think so?..."],
      ["cont", "oh yes...it..."],
      ["cont", "stunning..."],
      ["cont", "kindly..."],
      ["cont", "love it!"],
      ["para", "Hug it...when..."],
      ["cont", "sleeping...warm"],
      ["cont", "and cuddly..."],
      ["cont", "spectacular..."],
      ["cont", "ravishing..."],
      ["cont", "...Oops! Look at"],
      ["cont", "the time! I kept"],
      ["cont", "you too long!"],
      ["para", "Thanks for hearing"],
      ["line", "me out! I want"],
      ["cont", "you to have this!"],
      ["prompt"]
    ],
    _PokemonFanClubReceivedBikeVoucherText: [
      ["text", "<PLAYER> received"],
      ["line", "a @"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _PokemonFanClubExplainBikeVoucherText: [
      ["text_start"],
      ["para", "Exchange that for"],
      ["line", "a BICYCLE!"],
      ["para", "Don't worry, my"],
      ["line", "FEAROW will FLY"],
      ["cont", "me anywhere!"],
      ["para", "So, I don't need a"],
      ["line", "BICYCLE!"],
      ["para", "I hope you like"],
      ["line", "cycling!"]
    ],
    _PokemonFanClubNoStoryText: [
      ["text", "Oh. Come back"],
      ["line", "when you want to"],
      ["cont", "hear my story!"]
    ],
    _PokemonFanClubChairFinalText: [
      ["text", "Hello, <PLAYER>!"],
      ["para", "Did you come see"],
      ["line", "me about my"],
      ["cont", "#MON again?"],
      ["para", "No? Too bad!"]
    ],
    _PokemonFanClubBagFullText: [
      ["text", "Make room for"],
      ["line", "this!"]
    ],
    _PokemonFanClubReceptionistText: [
      ["text", "Our Chairman is"],
      ["line", "very vocal about"],
      ["cont", "#MON."]
    ],
    _PokemonFanClubSign1Text: [
      ["text", "Let's all listen"],
      ["line", "politely to other"],
      ["cont", "trainers!"]
    ],
    _PokemonFanClubSign2Text: [
      ["text", "If someone brags,"],
      ["line", "brag right back!"]
    ]
  }
};
