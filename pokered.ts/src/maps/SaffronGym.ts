import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFFRON_GYM_BLOCKS } from "../data/blocks/SaffronGym";
import { OverworldSprite } from "../sprite";

export const SaffronGym: Map = {
  width: 10,
  height: 9,
  borderBlock: 46,
  blocks: SAFFRON_GYM_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 8, y: 17, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 9, y: 17, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 1, y: 3, toMap: MapName.SaffronGym, warpIndex: 22 },
      { x: 5, y: 3, toMap: MapName.SaffronGym, warpIndex: 15 },
      { x: 1, y: 5, toMap: MapName.SaffronGym, warpIndex: 18 },
      { x: 5, y: 5, toMap: MapName.SaffronGym, warpIndex: 8 },
      { x: 1, y: 9, toMap: MapName.SaffronGym, warpIndex: 27 },
      { x: 5, y: 9, toMap: MapName.SaffronGym, warpIndex: 16 },
      { x: 1, y: 11, toMap: MapName.SaffronGym, warpIndex: 5 },
      { x: 5, y: 11, toMap: MapName.SaffronGym, warpIndex: 13 },
      { x: 1, y: 15, toMap: MapName.SaffronGym, warpIndex: 23 },
      { x: 5, y: 15, toMap: MapName.SaffronGym, warpIndex: 30 },
      { x: 1, y: 17, toMap: MapName.SaffronGym, warpIndex: 17 },
      { x: 5, y: 17, toMap: MapName.SaffronGym, warpIndex: 9 },
      { x: 9, y: 3, toMap: MapName.SaffronGym, warpIndex: 26 },
      { x: 11, y: 3, toMap: MapName.SaffronGym, warpIndex: 3 },
      { x: 9, y: 5, toMap: MapName.SaffronGym, warpIndex: 7 },
      { x: 11, y: 5, toMap: MapName.SaffronGym, warpIndex: 12 },
      { x: 11, y: 11, toMap: MapName.SaffronGym, warpIndex: 4 },
      { x: 11, y: 15, toMap: MapName.SaffronGym, warpIndex: 31 },
      { x: 15, y: 3, toMap: MapName.SaffronGym, warpIndex: 24 },
      { x: 19, y: 3, toMap: MapName.SaffronGym, warpIndex: 28 },
      { x: 15, y: 5, toMap: MapName.SaffronGym, warpIndex: 2 },
      { x: 19, y: 5, toMap: MapName.SaffronGym, warpIndex: 10 },
      { x: 15, y: 9, toMap: MapName.SaffronGym, warpIndex: 20 },
      { x: 19, y: 9, toMap: MapName.SaffronGym, warpIndex: 29 },
      { x: 15, y: 11, toMap: MapName.SaffronGym, warpIndex: 14 },
      { x: 19, y: 11, toMap: MapName.SaffronGym, warpIndex: 6 },
      { x: 15, y: 15, toMap: MapName.SaffronGym, warpIndex: 21 },
      { x: 19, y: 15, toMap: MapName.SaffronGym, warpIndex: 25 },
      { x: 15, y: 17, toMap: MapName.SaffronGym, warpIndex: 11 },
      { x: 19, y: 17, toMap: MapName.SaffronGym, warpIndex: 19 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 9,
        y: 8,
        sprite: OverworldSprite.SPRITE_GIRL,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_SABRINA",
        trainerId: "OPP_SABRINA",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 10,
        y: 1,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_CHANNELER1",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 22
      },
      {
        type: "trainer",
        x: 17,
        y: 1,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_YOUNGSTER1",
        trainerId: "OPP_PSYCHIC_TR",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 3,
        y: 7,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_CHANNELER2",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 23
      },
      {
        type: "trainer",
        x: 17,
        y: 7,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_YOUNGSTER2",
        trainerId: "OPP_PSYCHIC_TR",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 3,
        y: 13,
        sprite: OverworldSprite.SPRITE_CHANNELER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_CHANNELER3",
        trainerId: "OPP_CHANNELER",
        trainerLevel: 24
      },
      {
        type: "trainer",
        x: 17,
        y: 13,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_YOUNGSTER3",
        trainerId: "OPP_PSYCHIC_TR",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 3,
        y: 1,
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_YOUNGSTER4",
        trainerId: "OPP_PSYCHIC_TR",
        trainerLevel: 4
      },
      {
        type: "sprite",
        x: 10,
        y: 15,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_SAFFRONGYM_GYM_GUIDE"
      }
    ]
  },
  text: {
    _SaffronGymSabrinaText: [
      ["text", "I had a vision of"],
      ["line", "your arrival!"],
      ["para", "I have had psychic"],
      ["line", "powers since I"],
      ["cont", "was a child."],
      ["para", "I first learned"],
      ["line", "to bend spoons"],
      ["cont", "with my mind."],
      ["para", "I dislike fight-"],
      ["line", "ing, but if you"],
      ["cont", "wish, I will show"],
      ["cont", "you my powers!"]
    ],
    _SaffronGymSabrinaReceivedMarshBadgeText: [
      ["text", "I'm"],
      ["line", "shocked!"],
      ["cont", "But, a loss is a"],
      ["cont", "loss."],
      ["para", "I admit I didn't"],
      ["line", "work hard enough"],
      ["cont", "to win!"],
      ["para", "You earned the"],
      ["line", "MARSHBADGE!@"],
      ["text_end"]
    ],
    _SaffronGymSabrinaPostBattleAdviceText: [
      ["text", "Everyone has"],
      ["line", "psychic power!"],
      ["cont", "People just don't"],
      ["cont", "realize it!"]
    ],
    _SaffronGymSabrinaMarshBadgeInfoText: [
      ["text", "The MARSHBADGE"],
      ["line", "makes #MON up"],
      ["cont", "to L70 obey you!"],
      ["para", "Stronger #MON"],
      ["line", "will become wild,"],
      ["cont", "ignoring your"],
      ["cont", "orders in battle!"],
      ["para", "Just don't raise"],
      ["line", "your #MON too"],
      ["cont", "much!"],
      ["para", "Wait, please take"],
      ["line", "this TM with you!"]
    ],
    _SaffronGymSabrinaReceivedTM46Text: [
      ["text", "<PLAYER> received"],
      ["line", "TM46!@"],
      ["text_end"]
    ],
    _TM46ExplanationText: [
      ["text_start"],
      ["para", "TM46 is PSYWAVE!"],
      ["line", "It uses powerful"],
      ["cont", "psychic waves to"],
      ["cont", "inflict damage!"]
    ],
    _SaffronGymSabrinaTM46NoRoomText: [
      ["text", "Your pack is full"],
      ["line", "of other items!"]
    ],
    _SaffronGymGuideChampInMakingText: [
      ["text", "Yo! Champ in"],
      ["line", "making!"],
      ["para", "SABRINA's #MON"],
      ["line", "use psychic power"],
      ["cont", "instead of force!"],
      ["para", "Fighting #MON"],
      ["line", "are weak against"],
      ["cont", "psychic #MON!"],
      ["para", "They get creamed"],
      ["line", "before they can"],
      ["cont", "even aim a punch!"]
    ],
    _SaffronGymGuideBeatSabrinaText: [
      ["text", "Psychic power,"],
      ["line", "huh?"],
      ["para", "If I had that,"],
      ["line", "I'd make a bundle"],
      ["cont", "at the slots!"]
    ],
    _SaffronGymChanneler1BattleText: [
      ["text", "SABRINA is younger"],
      ["line", "than I, but I"],
      ["cont", "respect her!"]
    ],
    _SaffronGymChanneler1EndBattleText: [
      ["text", "Not"],
      ["line", "good enough!"],
      ["prompt"]
    ],
    _SaffronGymChanneler1AfterBattleText: [
      ["text", "In a battle of"],
      ["line", "equals, the one"],
      ["cont", "with the stronger"],
      ["cont", "will wins!"],
      ["para", "If you wish"],
      ["line", "to beat SABRINA,"],
      ["cont", "focus on winning!"]
    ],
    _SaffronGymYoungster1BattleText: [
      ["text", "Does our unseen"],
      ["line", "power scare you?"]
    ],
    _SaffronGymYoungster1EndBattleText: [
      ["text", "I never"],
      ["line", "foresaw this!"],
      ["prompt"]
    ],
    _SaffronGymYoungster1AfterBattleText: [
      ["text", "Psychic #MON"],
      ["line", "fear only ghosts"],
      ["cont", "and bugs!"]
    ],
    _SaffronGymChanneler2BattleText: [
      ["text", "#MON take on"],
      ["line", "the appearance of"],
      ["cont", "their trainers."],
      ["para", "Your #MON must"],
      ["line", "be tough, then!"]
    ],
    _SaffronGymChanneler2EndBattleText: [
      ["text", "I knew"],
      ["line", "it!"],
      ["prompt"]
    ],
    _SaffronGymChanneler2AfterBattleText: [
      ["text", "I must teach"],
      ["line", "better techniques"],
      ["cont", "to my #MON!"]
    ],
    _SaffronGymYoungster2BattleText: [
      ["text", "You know that"],
      ["line", "power alone isn't"],
      ["cont", "enough!"]
    ],
    _SaffronGymYoungster2EndBattleText: [
      ["text", "I don't"],
      ["line", "believe this!"],
      ["prompt"]
    ],
    _SaffronGymYoungster2AfterBattleText: [
      ["text", "SABRINA just wiped"],
      ["line", "out the KARATE"],
      ["cont", "MASTER next door!"]
    ],
    _SaffronGymChanneler3BattleText: [
      ["text", "You and I, our"],
      ["line", "#MON shall"],
      ["cont", "fight!"]
    ],
    _SaffronGymChanneler3EndBattleText: [
      ["text", "I lost"],
      ["line", "after all!"],
      ["prompt"]
    ],
    _SaffronGymChanneler3AfterBattleText: [
      ["text", "I knew that this"],
      ["line", "was going to take"],
      ["cont", "place."]
    ],
    _SaffronGymYoungster3BattleText: [
      ["text", "SABRINA is young,"],
      ["line", "but she's also"],
      ["cont", "our LEADER!"],
      ["para", "You won't reach"],
      ["line", "her easily!"]
    ],
    _SaffronGymYoungster3EndBattleText: [
      ["text", "I lost"],
      ["line", "my concentration!"],
      ["prompt"]
    ],
    _SaffronGymYoungster3AfterBattleText: [
      ["text", "There used to be"],
      ["line", "2 #MON GYMs in"],
      ["cont", "SAFFRON."],
      ["para", "The FIGHTING DOJO"],
      ["line", "next door lost"],
      ["cont", "its GYM status"],
      ["cont", "when we went and"],
      ["cont", "creamed them!"]
    ],
    _SaffronGymYoungster4BattleText: [
      ["text", "SAFFRON #MON"],
      ["line", "GYM is famous for"],
      ["cont", "its psychics!"],
      ["para", "You want to see"],
      ["line", "SABRINA!"],
      ["cont", "I can tell!"]
    ],
    _SaffronGymYoungster4EndBattleText: [["text", "Arrrgh!"], ["prompt"]],
    _SaffronGymYoungster4AfterBattleText: [
      ["text", "That's right! I"],
      ["line", "used telepathy to"],
      ["cont", "read your mind!"]
    ]
  }
};
