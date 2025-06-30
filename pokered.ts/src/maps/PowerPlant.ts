import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POWER_PLANT_BLOCKS } from "../data/blocks/PowerPlant";
import { OverworldSprite } from "../sprite";

export const PowerPlant: Map = {
  width: 20,
  height: 18,
  borderBlock: 46,
  blocks: POWER_PLANT_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 35, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 5, y: 35, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 0, y: 11, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 9,
        y: 20,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_VOLTORB1",
        trainerId: "VOLTORB",
        trainerLevel: 40
      },
      {
        type: "trainer",
        x: 32,
        y: 18,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_VOLTORB2",
        trainerId: "VOLTORB",
        trainerLevel: 40
      },
      {
        type: "trainer",
        x: 21,
        y: 25,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_VOLTORB3",
        trainerId: "VOLTORB",
        trainerLevel: 40
      },
      {
        type: "trainer",
        x: 25,
        y: 18,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_ELECTRODE1",
        trainerId: "ELECTRODE",
        trainerLevel: 43
      },
      {
        type: "trainer",
        x: 23,
        y: 34,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_VOLTORB4",
        trainerId: "VOLTORB",
        trainerLevel: 40
      },
      {
        type: "trainer",
        x: 26,
        y: 28,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_VOLTORB5",
        trainerId: "VOLTORB",
        trainerLevel: 40
      },
      {
        type: "trainer",
        x: 21,
        y: 14,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_ELECTRODE2",
        trainerId: "ELECTRODE",
        trainerLevel: 43
      },
      {
        type: "trainer",
        x: 37,
        y: 32,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_VOLTORB6",
        trainerId: "VOLTORB",
        trainerLevel: 40
      },
      {
        type: "trainer",
        x: 4,
        y: 9,
        sprite: OverworldSprite.SPRITE_BIRD,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_ZAPDOS",
        trainerId: "ZAPDOS",
        trainerLevel: 50
      },
      {
        type: "item",
        x: 7,
        y: 25,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_CARBOS",
        itemId: "CARBOS"
      },
      {
        type: "item",
        x: 28,
        y: 3,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_HP_UP",
        itemId: "HP_UP"
      },
      {
        type: "item",
        x: 34,
        y: 3,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "item",
        x: 26,
        y: 32,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_TM_THUNDER",
        itemId: "TM_THUNDER"
      },
      {
        type: "item",
        x: 20,
        y: 32,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_POWERPLANT_TM_REFLECT",
        itemId: "TM_REFLECT"
      }
    ]
  },
  textPointers: []
};
