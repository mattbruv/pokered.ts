import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { OAKS_LAB_BLOCKS } from "../data/blocks/OaksLab";
import { OverworldSprite } from "../sprite";

export const OaksLab: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: OAKS_LAB_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 5, y: 11, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 3,
        sprite: OverworldSprite.SPRITE_BLUE,
        direction: "NONE",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_RIVAL",
        trainerId: "OPP_RIVAL1",
        trainerLevel: 1
      },
      {
        type: "sprite",
        x: 6,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_CHARMANDER_POKE_BALL"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_SQUIRTLE_POKE_BALL"
      },
      {
        type: "sprite",
        x: 8,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_BULBASAUR_POKE_BALL"
      },
      {
        type: "sprite",
        x: 5,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_OAK,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_OAK1"
      },
      {
        type: "sprite",
        x: 2,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_POKEDEX1"
      },
      {
        type: "sprite",
        x: 3,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_POKEDEX2"
      },
      {
        type: "sprite",
        x: 5,
        y: 10,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_OAK,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_OAK2"
      },
      {
        type: "sprite",
        x: 1,
        y: 9,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_OAKSLAB_GIRL"
      },
      {
        type: "sprite",
        x: 2,
        y: 10,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_SCIENTIST1"
      },
      {
        type: "sprite",
        x: 8,
        y: 10,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_SCIENTIST2"
      }
    ]
  },
  textPointers: []
};
