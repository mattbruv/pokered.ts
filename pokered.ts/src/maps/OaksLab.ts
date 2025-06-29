import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { OAKS_LAB_BLOCKS } from "../data/blocks/OaksLab";

export const OaksLab: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: OAKS_LAB_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: "LAST_MAP", warpId: 3 },
      { x: 5, y: 11, toMap: "LAST_MAP", warpId: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 3,
        sprite: "SPRITE_BLUE",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_RIVAL",
        trainerId: "OPP_RIVAL1",
        trainerLevel: 1
      },
      {
        type: "sprite",
        x: 6,
        y: 3,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_CHARMANDER_POKE_BALL"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_SQUIRTLE_POKE_BALL"
      },
      {
        type: "sprite",
        x: 8,
        y: 3,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_BULBASAUR_POKE_BALL"
      },
      {
        type: "sprite",
        x: 5,
        y: 2,
        sprite: "SPRITE_OAK",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_OAK1"
      },
      {
        type: "sprite",
        x: 2,
        y: 1,
        sprite: "SPRITE_POKEDEX",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_POKEDEX1"
      },
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: "SPRITE_POKEDEX",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_POKEDEX2"
      },
      {
        type: "sprite",
        x: 5,
        y: 10,
        sprite: "SPRITE_OAK",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_OAK2"
      },
      {
        type: "sprite",
        x: 1,
        y: 9,
        sprite: "SPRITE_GIRL",
        movement: "WALK",
        textId: "TEXT_OAKSLAB_GIRL"
      },
      {
        type: "sprite",
        x: 2,
        y: 10,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_SCIENTIST1"
      },
      {
        type: "sprite",
        x: 8,
        y: 10,
        sprite: "SPRITE_SCIENTIST",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_SCIENTIST2"
      }
    ]
  },
  textPointers: []
};
