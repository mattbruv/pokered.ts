import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_5F_BLOCKS } from "../data/blocks/SilphCo5F";
import { OverworldSprite } from "../sprite";

export const SilphCo5F: Map = {
  width: 15,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_5F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 24, y: 0, toMap: MapName.SilphCo6F, warpIndex: 1 },
      { x: 26, y: 0, toMap: MapName.SilphCo4F, warpIndex: 1 },
      { x: 20, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 27, y: 3, toMap: MapName.SilphCo7F, warpIndex: 5 },
      { x: 9, y: 15, toMap: MapName.SilphCo9F, warpIndex: 4 },
      { x: 11, y: 5, toMap: MapName.SilphCo3F, warpIndex: 4 },
      { x: 3, y: 15, toMap: MapName.SilphCo3F, warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 13,
        y: 9,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SILPH_WORKER_M,
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_SILPH_WORKER_M"
      },
      {
        type: "trainer",
        x: 8,
        y: 16,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 28
      },
      {
        type: "trainer",
        x: 8,
        y: 3,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 18,
        y: 10,
        sprite: OverworldSprite.SPRITE_ROCKER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_ROCKER",
        trainerId: "OPP_JUGGLER",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 28,
        y: 4,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 29
      },
      {
        type: "item",
        x: 2,
        y: 13,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_TM_TAKE_DOWN",
        itemId: "TM_TAKE_DOWN"
      },
      {
        type: "item",
        x: 4,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_PROTEIN",
        itemId: "PROTEIN"
      },
      {
        type: "item",
        x: 21,
        y: 16,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_CARD_KEY",
        itemId: "CARD_KEY"
      },
      {
        type: "sprite",
        x: 22,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_CLIPBOARD,
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_POKEMON_REPORT1"
      },
      {
        type: "sprite",
        x: 25,
        y: 10,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_CLIPBOARD,
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_POKEMON_REPORT2"
      },
      {
        type: "sprite",
        x: 24,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_CLIPBOARD,
        movement: "STAY",
        textId: "TEXT_SILPHCO5F_POKEMON_REPORT3"
      }
    ]
  },
  text: {
    _SilphCo5FSilphWorkerMThatsYouRightText: [
      ["text", "TEAM ROCKET is"],
      ["line", "in an uproar over"],
      ["cont", "some intruder."],
      ["cont", "That's you right?"]
    ],
    _SilphCo5FSilphWorkerMYoureOurHeroText: [
      ["text", "TEAM ROCKET took"],
      ["line", "off! You're our"],
      ["cont", "hero! Thank you!"]
    ],
    _SilphCo5FRocket1BattleText: [
      ["text", "I heard a kid was"],
      ["line", "wandering around."]
    ],
    _SilphCo5FRocket1EndBattleText: [["text", "Boom!"], ["prompt"]],
    _SilphCo5FRocket1AfterBattleText: [
      ["text", "It's not smart"],
      ["line", "to pick a fight"],
      ["cont", "with TEAM ROCKET!"]
    ],
    _SilphCo5FScientistBattleText: [
      ["text", "We study #"],
      ["line", "BALL technology"],
      ["cont", "on this floor!"]
    ],
    _SilphCo5FScientistEndBattleText: [
      ["text", "Dang!"],
      ["line", "Blast it!"],
      ["prompt"]
    ],
    _SilphCo5FScientistAfterBattleText: [
      ["text", "We worked on the"],
      ["line", "ultimate #"],
      ["cont", "BALL which would"],
      ["cont", "catch anything!"]
    ],
    _SilphCo5FRockerBattleText: [
      ["text", "Whaaat? There"],
      ["line", "shouldn't be any"],
      ["cont", "children here?"]
    ]
  }
};
