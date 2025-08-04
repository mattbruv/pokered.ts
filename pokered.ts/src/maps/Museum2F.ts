import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MUSEUM_2F_BLOCKS } from "../data/blocks/Museum2F";
import { OverworldSprite } from "../sprite";

export const Museum2F: Map = {
  width: 7,
  height: 4,
  borderBlock: 10,
  blocks: MUSEUM_2F_BLOCKS,
  tileset: Tileset.MUSEUM,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 7, toMap: MapName.Museum1F, warpIndex: 4 }],
    backgroundItems: [
      { x: 11, y: 2, signId: "TEXT_MUSEUM2F_SPACE_SHUTTLE_SIGN" },
      { x: 2, y: 5, signId: "TEXT_MUSEUM2F_MOON_STONE_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 7,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_MUSEUM2F_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 0,
        y: 5,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GRAMPS,
        movement: "STAY",
        textId: "TEXT_MUSEUM2F_GRAMPS"
      },
      {
        type: "sprite",
        x: 7,
        y: 5,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_MUSEUM2F_SCIENTIST"
      },
      {
        type: "sprite",
        x: 11,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        movement: "STAY",
        textId: "TEXT_MUSEUM2F_BRUNETTE_GIRL"
      },
      {
        type: "sprite",
        x: 12,
        y: 5,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_HIKER,
        movement: "STAY",
        textId: "TEXT_MUSEUM2F_HIKER"
      }
    ]
  },
  text: {
    _Museum2FYoungsterText: [
      ["text", "MOON STONE?"],
      ["para", "What's so special"],
      ["line", "about it?"]
    ],
    _Museum2FGrampsText: [
      ["text", "July 20, 1969!"],
      ["para", "The 1st lunar"],
      ["line", "landing!"],
      ["para", "I bought a color"],
      ["line", "TV to watch it!"]
    ],
    _Museum2FScientistText: [
      ["text", "We have a space"],
      ["line", "exhibit now."]
    ],
    _Museum2FBrunetteGirlText: [
      ["text", "I want a PIKACHU!"],
      ["line", "It's so cute!"],
      ["para", "I asked my Daddy"],
      ["line", "to catch me one!"]
    ],
    _Museum2FHikerText: [
      ["text", "Yeah, a PIKACHU"],
      ["line", "soon, I promise!"]
    ],
    _Museum2FSpaceShuttleSignText: [
      ["text", "SPACE SHUTTLE"],
      ["line", "COLUMBIA"]
    ],
    _Museum2FMoonStoneSignText: [
      ["text", "Meteorite that"],
      ["line", "fell on MT.MOON."],
      ["cont", "(MOON STONE?)"]
    ]
  }
};
