import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_10_BLOCKS } from "../data/blocks/Route10";
import { OverworldSprite } from "../sprite";

export const Route10: Map = {
  width: 10,
  height: 36,
  borderBlock: 44,
  blocks: ROUTE_10_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.LavenderTown, xOffset: 0 },
    west: { map: MapName.Route9, yOffset: 0 }
  },
  objects: {
    warps: [
      { x: 11, y: 19, toMap: MapName.RockTunnelPokecenter, warpIndex: 0 },
      { x: 8, y: 17, toMap: MapName.RockTunnel1F, warpIndex: 0 },
      { x: 8, y: 53, toMap: MapName.RockTunnel1F, warpIndex: 2 },
      { x: 6, y: 39, toMap: MapName.PowerPlant, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 7, y: 19, signId: "TEXT_ROUTE10_ROCKTUNNEL_NORTH_SIGN" },
      { x: 12, y: 19, signId: "TEXT_ROUTE10_POKECENTER_SIGN" },
      { x: 9, y: 55, signId: "TEXT_ROUTE10_ROCKTUNNEL_SOUTH_SIGN" },
      { x: 5, y: 41, signId: "TEXT_ROUTE10_POWERPLANT_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 10,
        y: 44,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE10_SUPER_NERD1",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 3,
        y: 57,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE10_HIKER1",
        trainerId: "OPP_HIKER",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 14,
        y: 64,
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE10_SUPER_NERD2",
        trainerId: "OPP_POKEMANIAC",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 7,
        y: 25,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE10_COOLTRAINER_F1",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 7
      },
      {
        type: "trainer",
        x: 3,
        y: 61,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE10_HIKER2",
        trainerId: "OPP_HIKER",
        trainerLevel: 8
      },
      {
        type: "trainer",
        x: 7,
        y: 54,
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROUTE10_COOLTRAINER_F2",
        trainerId: "OPP_JR_TRAINER_F",
        trainerLevel: 8
      }
    ]
  },
  text: {
    _Route10SuperNerd1BattleText: [
      ["text", "Wow, are you a"],
      ["line", "#MANIAC too?"],
      ["cont", "Want to see my"],
      ["cont", "collection?"]
    ],
    _Route10SuperNerd1EndBattleText: [
      ["text", "Humph."],
      ["line", "I'm not angry!"],
      ["prompt"]
    ],
    _Route10SuperNerd1AfterBattleText: [
      ["text", "I have more rare"],
      ["line", "#MON at home!"]
    ],
    _Route10Hiker1BattleText: [["text", "Ha-hahah-ah-ha!"]],
    _Route10Hiker1EndBattleText: [
      ["text", "Ha-haha!"],
      ["line", "Not laughing!"],
      ["cont", "Ha-hay fever!"],
      ["cont", "Haha-ha-choo!"],
      ["prompt"]
    ],
    _Route10Hiker1AfterBattleText: [
      ["text", "Haha-ha-choo!"],
      ["line", "Ha-choo!"],
      ["cont", "Snort! Snivel!"]
    ],
    _Route10SuperNerd2BattleText: [
      ["text", "Hi kid, want to"],
      ["line", "see my #MON?"]
    ],
    _Route10SuperNerd2EndBattleText: [
      ["text", "Oh no!"],
      ["line", "My #MON!"],
      ["prompt"]
    ],
    _Route10SuperNerd2AfterBattleText: [
      ["text", "I don't like you"],
      ["line", "for beating me!"]
    ],
    _Route10CooltrainerF1BattleText: [
      ["text", "I've been to a"],
      ["line", "#MON GYM a few"],
      ["cont", "times. But, I"],
      ["cont", "lost each time."]
    ],
    _Route10CooltrainerF1EndBattleText: [
      ["text", "Ohh!"],
      ["line", "Blew it again!"],
      ["prompt"]
    ],
    _Route10CooltrainerF1AfterBattleText: [
      ["text", "I noticed some"],
      ["line", "#MANIACs"],
      ["cont", "prowling around."]
    ],
    _Route10Hiker2BattleText: [
      ["text", "Ah! This mountain"],
      ["line", "air is delicious!"]
    ],
    _Route10Hiker2EndBattleText: [
      ["text", "That"],
      ["line", "cleared my head!"],
      ["prompt"]
    ],
    _Route10Hiker2AfterBattleText: [
      ["text", "I feel bloated on"],
      ["line", "mountain air!"]
    ],
    _Route10CooltrainerF2BattleText: [
      ["text", "I'm feeling a bit"],
      ["line", "faint from this"],
      ["cont", "tough hike."]
    ],
    _Route10CooltrainerF2EndBattleText: [
      ["text", "I'm"],
      ["line", "not up to it!"],
      ["prompt"]
    ],
    _Route10CooltrainerF2AfterBattleText: [
      ["text", "The #MON here"],
      ["line", "are so chunky!"],
      ["cont", "There should be a"],
      ["cont", "pink one with a"],
      ["cont", "floral pattern!"]
    ],
    _Route10RockTunnelSignText: [["text", "ROCK TUNNEL"]],
    _Route10PowerPlantSignText: [["text", "POWER PLANT"]]
  }
};
