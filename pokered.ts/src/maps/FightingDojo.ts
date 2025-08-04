import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { FIGHTING_DOJO_BLOCKS } from "../data/blocks/FightingDojo";
import { OverworldSprite } from "../sprite";

export const FightingDojo: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: FIGHTING_DOJO_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 5, y: 11, toMap: "LAST_MAP", warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 5,
        y: 3,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_KARATE_MASTER",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 3,
        y: 4,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_BLACKBELT1",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 3,
        y: 6,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_BLACKBELT2",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 5,
        y: 5,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_BLACKBELT3",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 4
      },
      {
        type: "trainer",
        x: 5,
        y: 7,
        sprite: OverworldSprite.SPRITE_HIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_BLACKBELT4",
        trainerId: "OPP_BLACKBELT",
        trainerLevel: 5
      },
      {
        type: "sprite",
        x: 4,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_HITMONLEE_POKE_BALL"
      },
      {
        type: "sprite",
        x: 5,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_FIGHTINGDOJO_HITMONCHAN_POKE_BALL"
      }
    ]
  },
  text: {
    _FightingDojoKarateMasterText: [
      ["text", "Grunt!"],
      ["para", "I am the KARATE"],
      ["line", "MASTER! I am the"],
      ["cont", "LEADER here!"],
      ["para", "You wish to"],
      ["line", "challenge us?"],
      ["cont", "Expect no mercy!"],
      ["para", "Fwaaa!"]
    ],
    _FightingDojoKarateMasterDefeatedText: [
      ["text", "Hwa!"],
      ["line", "Arrgh! Beaten!"],
      ["prompt"]
    ],
    _FightingDojoKarateMasterIWillGiveYouAPokemonText: [
      ["text", "Indeed, I have"],
      ["line", "lost!"],
      ["para", "But, I beseech"],
      ["line", "you, do not take"],
      ["cont", "our emblem as"],
      ["cont", "your trophy!"],
      ["para", "In return, I will"],
      ["line", "give you a prized"],
      ["cont", "fighting #MON!"],
      ["para", "Choose whichever"],
      ["line", "one you like!"]
    ],
    _FightingDojoKarateMasterStayAndTrainWithUsText: [
      ["text", "Ho!"],
      ["para", "Stay and train at"],
      ["line", "Karate with us!"]
    ],
    _FightingDojoBlackbelt1BattleText: [
      ["text", "Hoargh! Take your"],
      ["line", "shoes off!"]
    ],
    _FightingDojoBlackbelt1EndBattleText: [
      ["text", "I give"],
      ["line", "up!"],
      ["prompt"]
    ],
    _FightingDojoBlackbelt1AfterBattleText: [
      ["text", "You wait 'til you"],
      ["line", "see our Master!"],
      ["para", "I'm a small fry"],
      ["line", "compared to him!"]
    ],
    _FightingDojoBlackbelt2BattleText: [
      ["text", "I hear you're"],
      ["line", "good! Show me!"]
    ],
    _FightingDojoBlackbelt2EndBattleText: [
      ["text", "Judge!"],
      ["line", "1 point!"],
      ["prompt"]
    ],
    _FightingDojoBlackbelt2AfterBattleText: [
      ["text", "Our Master is a"],
      ["line", "pro fighter!"]
    ],
    _FightingDojoBlackbelt3BattleText: [
      ["text", "Nothing tough"],
      ["line", "frightens me!"],
      ["para", "I break boulders"],
      ["line", "for training!"]
    ],
    _FightingDojoBlackbelt3EndBattleText: [
      ["text", "Yow!"],
      ["line", "Stubbed fingers!"],
      ["prompt"]
    ],
    _FightingDojoBlackbelt3AfterBattleText: [
      ["text", "The only thing"],
      ["line", "that frightens us"],
      ["cont", "is psychic power!"]
    ],
    _FightingDojoBlackbelt4BattleText: [
      ["text", "Hoohah!"],
      ["para", "You're trespassing"],
      ["line", "in our FIGHTING"],
      ["cont", "DOJO!"]
    ],
    _FightingDojoBlackbelt4EndBattleText: [
      ["text", "Oof!"],
      ["line", "I give up!"],
      ["prompt"]
    ],
    _FightingDojoBlackbelt4AfterBattleText: [
      ["text", "The prime fighters"],
      ["line", "across the land"],
      ["cont", "train here."]
    ],
    _FightingDojoHitmonleePokeBallText: [
      ["text", "You want the"],
      ["line", "hard kicking"],
      ["cont", "HITMONLEE?"]
    ],
    _FightingDojoHitmonchanPokeBallText: [
      ["text", "You want the"],
      ["line", "piston punching"],
      ["cont", "HITMONCHAN?"]
    ],
    _FightingDojoBetterNotGetGreedyText: [
      ["text", "Better not get"],
      ["line", "greedy..."]
    ]
  }
};
