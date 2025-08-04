import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_20_BLOCKS } from "../data/blocks/Route20";
import { OverworldSprite } from "../sprite";

export const Route20: Map = {
  width: 50,
  height: 9,
  borderBlock: 67,
  blocks: ROUTE_20_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    west: { map: MapName.CinnabarIsland, yOffset: 0 },
    east: { map: MapName.Route19, yOffset: -18 }
  },
  objects: {
    warps: [
      { x: 48, y: 5, toMap: MapName.SeafoamIslands1F, warpIndex: 0 },
      { x: 58, y: 9, toMap: MapName.SeafoamIslands1F, warpIndex: 2 }
    ],
    backgroundItems: [
      { x: 51, y: 7, signId: "TEXT_ROUTE20_SEAFOAM_ISLANDS_WEST_SIGN" },
      { x: 57, y: 11, signId: "TEXT_ROUTE20_SEAFOAM_ISLANDS_EAST_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 87,
        y: 8,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER1",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 9
      },
      {
        type: "trainer",
        x: 68,
        y: 11,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER2",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 15
      },
      {
        type: "trainer",
        x: 45,
        y: 10,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER3",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 55,
        y: 14,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER4",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 24
      },
      {
        type: "trainer",
        x: 38,
        y: 13,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER5",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 87,
        y: 13,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER6",
        trainerId: "OPP_SWIMMER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 34,
        y: 9,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE20_COOLTRAINER_M",
        trainerId: "OPP_BIRD_KEEPER",
        trainerLevel: 11
      },
      {
        type: "trainer",
        x: 25,
        y: 7,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER7",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 24,
        y: 12,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER8",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 16
      },
      {
        type: "trainer",
        x: 15,
        y: 8,
        sprite: OverworldSprite.SPRITE_SWIMMER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE20_SWIMMER9",
        trainerId: "OPP_BEAUTY",
        trainerLevel: 8
      }
    ]
  },
  text: {
    _Route20Swimmer1BattleText: [
      ["text", "The water is"],
      ["line", "shallow here."]
    ],
    _Route20Swimmer1EndBattleText: [["text", "Splash!"], ["prompt"]],
    _Route20Swimmer1AfterBattleText: [
      ["text", "I wish I could"],
      ["line", "ride my #MON."]
    ],
    _Route20Swimmer2BattleText: [
      ["text", "SEAFOAM is a"],
      ["line", "quiet getaway!"]
    ],
    _Route20Swimmer2EndBattleText: [["text", "Quit it!"], ["prompt"]],
    _Route20Swimmer2AfterBattleText: [
      ["text", "There's a huge"],
      ["line", "cavern underneath"],
      ["cont", "this island."]
    ],
    _Route20Swimmer3BattleText: [
      ["text", "I love floating"],
      ["line", "with the fishes!"]
    ],
    _Route20Swimmer3EndBattleText: [["text", "Yowch!"], ["prompt"]],
    _Route20Swimmer3AfterBattleText: [
      ["text", "Want to float"],
      ["line", "with me?"]
    ],
    _Route20Swimmer4BattleText: [
      ["text", "Are you on"],
      ["line", "vacation too?"]
    ],
    _Route20Swimmer4EndBattleText: [
      ["text", "No"],
      ["line", "mercy at all!"],
      ["prompt"]
    ],
    _Route20Swimmer4AfterBattleText: [
      ["text", "SEAFOAM used to"],
      ["line", "be one island!"]
    ],
    _Route20Swimmer5BattleText: [
      ["text", "Check out my buff"],
      ["line", "physique!"]
    ],
    _Route20Swimmer5EndBattleText: [["text", "Wimpy!"], ["prompt"]],
    _Route20Swimmer5AfterBattleText: [
      ["text", "I should've been"],
      ["line", "buffing up my"],
      ["cont", "#MON, not me!"]
    ],
    _Route20Swimmer6BattleText: [
      ["text", "Why are you"],
      ["line", "riding a #MON?"],
      ["cont", "Can't you swim?"]
    ],
    _Route20Swimmer6EndBattleText: [
      ["text", "Ouch!"],
      ["line", "Torpedoed!"],
      ["prompt"]
    ],
    _Route20Swimmer6AfterBattleText: [
      ["text", "Riding a #MON"],
      ["line", "sure looks fun!"]
    ],
    _Route20CooltrainerMBattleText: [
      ["text", "I rode my bird"],
      ["line", "#MON here!"]
    ],
    _Route20CooltrainerMEndBattleText: [
      ["text", "Oh"],
      ["line", "no!"],
      ["prompt"]
    ],
    _Route20CooltrainerMAfterBattleText: [
      ["text", "My birds can't"],
      ["line", "FLY me back!"]
    ],
    _Route20Swimmer7BattleText: [
      ["text", "My boy friend gave"],
      ["line", "me big pearls!"]
    ],
    _Route20Swimmer7EndBattleText: [
      ["text", "Don't"],
      ["line", "touch my pearls!"],
      ["prompt"]
    ],
    _Route20Swimmer7AfterBattleText: [
      ["text", "Will my pearls"],
      ["line", "grow bigger"],
      ["cont", "inside CLOYSTER?"]
    ],
    _Route20Swimmer8BattleText: [
      ["text", "I swam here from"],
      ["line", "CINNABAR ISLAND!"]
    ],
    _Route20Swimmer8EndBattleText: [
      ["text", "I'm"],
      ["line", "so disappointed!"],
      ["prompt"]
    ],
    _Route20Swimmer8AfterBattleText: [
      ["text", "#MON have"],
      ["line", "taken over an"],
      ["cont", "abandoned mansion"],
      ["cont", "on CINNABAR!"]
    ],
    _Route20Swimmer9BattleText: [
      ["text", "CINNABAR, in the"],
      ["line", "west, has a LAB"],
      ["cont", "for #MON."]
    ],
    _Route20Swimmer9EndBattleText: [["text", "Wait!"], ["prompt"]],
    _Route20Swimmer9AfterBattleText: [
      ["text", "CINNABAR is a "],
      ["line", "volcanic island!"]
    ],
    _Route20SeafoamIslandsSignText: [["text", "SEAFOAM ISLANDS"]]
  }
};
