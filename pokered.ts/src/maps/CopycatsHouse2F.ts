import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { COPYCATS_HOUSE_2F_BLOCKS } from "../data/blocks/CopycatsHouse2F";
import { OverworldSprite } from "../sprite";

export const CopycatsHouse2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: COPYCATS_HOUSE_2F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_2,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 1, toMap: MapName.CopycatsHouse1F, warpIndex: 2 }],
    backgroundItems: [
      { x: 3, y: 5, signId: "TEXT_COPYCATSHOUSE2F_SNES" },
      { x: 0, y: 1, signId: "TEXT_COPYCATSHOUSE2F_PC" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 3,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        movement: "WALK",
        textId: "TEXT_COPYCATSHOUSE2F_COPYCAT"
      },
      {
        type: "sprite",
        x: 4,
        y: 6,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_BIRD,
        movement: "WALK",
        textId: "TEXT_COPYCATSHOUSE2F_DODUO"
      },
      {
        type: "sprite",
        x: 5,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_COPYCATSHOUSE2F_MONSTER"
      },
      {
        type: "sprite",
        x: 2,
        y: 0,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_BIRD,
        movement: "STAY",
        textId: "TEXT_COPYCATSHOUSE2F_BIRD"
      },
      {
        type: "sprite",
        x: 1,
        y: 6,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_FAIRY,
        movement: "STAY",
        textId: "TEXT_COPYCATSHOUSE2F_FAIRY"
      }
    ]
  },
  text: {
    _CopycatsHouse2FCopycatDoYouLikePokemonText: [
      ["text", "<PLAYER>: Hi! Do"],
      ["line", "you like #MON?"],
      ["para", "<PLAYER>: Uh no, I"],
      ["line", "just asked you."],
      ["para", "<PLAYER>: Huh?"],
      ["line", "You're strange!"],
      ["para", "COPYCAT: Hmm?"],
      ["line", "Quit mimicking?"],
      ["para", "But, that's my"],
      ["line", "favorite hobby!"],
      ["prompt"]
    ],
    _CopycatsHouse2FCopycatTM31PreReceiveText: [
      ["text", "Oh wow!"],
      ["line", "A # DOLL!"],
      ["para", "For me?"],
      ["line", "Thank you!"],
      ["para", "You can have"],
      ["line", "this, then!"],
      ["prompt"]
    ],
    _CopycatsHouse2FCopycatReceivedTM31Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _CopycatsHouse2FCopycatTM31Explanation1Text: [
      ["text_start"],
      ["para", "TM31 contains my"],
      ["line", "favorite, MIMIC!"],
      ["para", "Use it on a good"],
      ["line", "#MON!@"],
      ["text_end"]
    ],
    _CopycatsHouse2FCopycatTM31Explanation2Text: [
      ["text", "<PLAYER>: Hi!"],
      ["line", "Thanks for TM31!"],
      ["para", "<PLAYER>: Pardon?"],
      ["para", "<PLAYER>: Is it"],
      ["line", "that fun to mimic"],
      ["cont", "my every move?"],
      ["para", "COPYCAT: You bet!"],
      ["line", "It's a scream!"]
    ],
    _CopycatsHouse2FCopycatTM31NoRoomText: [
      ["text", "Don't you want"],
      ["line", "this?@"],
      ["text_end"]
    ],
    _CopycatsHouse2FDoduoText: [
      ["text", "DODUO: Giiih!"],
      ["para", "MIRROR MIRROR ON"],
      ["line", "THE WALL, WHO IS"],
      ["cont", "THE FAIREST ONE"],
      ["cont", "OF ALL?"]
    ],
    _CopycatsHouse2FRareDollText: [
      ["text", "This is a rare"],
      ["line", "#MON! Huh?"],
      ["cont", "It's only a doll!"]
    ],
    _CopycatsHouse2FSNESText: [
      ["text", "A game with MARIO"],
      ["line", "wearing a bucket"],
      ["cont", "on his head!"]
    ],
    _CopycatsHouse2FPCMySecretsText: [
      ["text", "..."],
      ["para", "My Secrets!"],
      ["para", "Skill: Mimicry!"],
      ["line", "Hobby: Collecting"],
      ["cont", "dolls!"],
      ["cont", "Favorite #MON:"],
      ["cont", "CLEFAIRY!"]
    ],
    _CopycatsHouse2FPCCantSeeText: [["text", "Huh? Can't see!"]]
  }
};
