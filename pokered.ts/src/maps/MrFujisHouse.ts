import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MR_FUJIS_HOUSE_BLOCKS } from "../data/blocks/MrFujisHouse";
import { OverworldSprite } from "../sprite";

export const MrFujisHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: MR_FUJIS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 6,
        y: 3,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_LITTLE_GIRL"
      },
      {
        type: "sprite",
        x: 6,
        y: 4,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_PSYDUCK"
      },
      {
        type: "sprite",
        x: 1,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_NIDORINO"
      },
      {
        type: "sprite",
        x: 3,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MR_FUJI,
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_MR_FUJI"
      },
      {
        type: "sprite",
        x: 3,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_MRFUJISHOUSE_POKEDEX"
      }
    ]
  },
  text: {
    _MrFujisHouseSuperNerdMrFujiIsntHereText: [
      ["text", "That's odd, MR.FUJI"],
      ["line", "isn't here."],
      ["cont", "Where'd he go?"]
    ],
    _MrFujisHouseSuperNerdMrFujiHadBeenPrayingText: [
      ["text", "MR.FUJI had been"],
      ["line", "praying alone for"],
      ["cont", "CUBONE's mother."]
    ],
    _MrFujisHouseLittleGirlThisIsMrFujisHouseText: [
      ["text", "This is really"],
      ["line", "MR.FUJI's house."],
      ["para", "He's really kind!"],
      ["para", "He looks after"],
      ["line", "abandoned and"],
      ["cont", "orphaned #MON!"]
    ],
    _MrFujisHouseLittleGirlPokemonAreNiceToHugText: [
      ["text", "It's so warm!"],
      ["line", "#MON are so"],
      ["cont", "nice to hug!"]
    ],
    _MrFujisHousePsyduckText: [["text", "PSYDUCK: Gwappa!@"], ["text_end"]],
    _MrFujisHouseNidorinoText: [["text", "NIDORINO: Gaoo!@"], ["text_end"]],
    _MrFujisHouseMrFujiIThinkThisMayHelpYourQuestText: [
      ["text", "MR.FUJI: <PLAYER>."],
      ["para", "Your #DEX quest"],
      ["line", "may fail without"],
      ["cont", "love for your"],
      ["cont", "#MON."],
      ["para", "I think this may"],
      ["line", "help your quest."],
      ["prompt"]
    ],
    _MrFujisHouseMrFujiReceivedPokeFluteText: [
      ["text", "<PLAYER> received"],
      ["line", "a @"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _MrFujisHouseMrFujiPokeFluteExplanationText: [
      ["text_start"],
      ["para", "Upon hearing #"],
      ["line", "FLUTE, sleeping"],
      ["cont", "#MON will"],
      ["cont", "spring awake."],
      ["para", "It works on all"],
      ["line", "sleeping #MON."]
    ],
    _MrFujisHouseMrFujiPokeFluteNoRoomText: [
      ["text", "You must make"],
      ["line", "room for this!"]
    ],
    _MrFujisHouseMrFujiHasMyFluteHelpedYouText: [
      ["text", "MR.FUJI: Has my"],
      ["line", "FLUTE helped you?"]
    ],
    _MrFujisHouseMrFujiPokedexText: [
      ["text", "#MON Monthly"],
      ["line", "Grand Prize"],
      ["cont", "Drawing!"],
      ["para", "The application"],
      ["line", "form is..."],
      ["para", "Gone! It's been"],
      ["line", "clipped out!"]
    ]
  }
};
