import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BLUES_HOUSE_BLOCKS } from "../data/blocks/BluesHouse";
import { OverworldSprite } from "../sprite";

export const BluesHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: BLUES_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_DAISY,
        movement: "STAY",
        textId: "TEXT_BLUESHOUSE_DAISY_SITTING"
      },
      {
        type: "item",
        x: 6,
        y: 4,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_DAISY,
        movement: "WALK",
        textId: "TEXT_BLUESHOUSE_DAISY_WALKING",
        itemId: "0"
      },
      {
        type: "item",
        x: 3,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_BLUESHOUSE_TOWN_MAP",
        itemId: "0"
      }
    ]
  },
  text: {
    _BluesHouseDaisyRivalAtLabText: [
      ["text", "Hi <PLAYER>!"],
      ["line", "<RIVAL> is out at"],
      ["cont", "Grandpa's lab."]
    ],
    _BluesHouseDaisyOfferMapText: [
      ["text", "Grandpa asked you"],
      ["line", "to run an errand?"],
      ["cont", "Here, this will"],
      ["cont", "help you!"],
      ["prompt"]
    ],
    _GotMapText: [
      ["text", "<PLAYER> got a"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _BluesHouseDaisyBagFullText: [
      ["text", "You have too much"],
      ["line", "stuff with you."]
    ],
    _BluesHouseDaisyUseMapText: [
      ["text", "Use the TOWN MAP"],
      ["line", "to find out where"],
      ["cont", "you are."]
    ],
    _BluesHouseDaisyWalkingText: [
      ["text", "#MON are living"],
      ["line", "things! If they"],
      ["cont", "get tired, give"],
      ["cont", "them a rest!"]
    ],
    _BluesHouseTownMapText: [
      ["text", "It's a big map!"],
      ["line", "This is useful!"]
    ]
  }
};
