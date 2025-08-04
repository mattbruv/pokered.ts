import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_11F_BLOCKS } from "../data/blocks/SilphCo11F";
import { OverworldSprite } from "../sprite";

export const SilphCo11F: Map = {
  width: 9,
  height: 9,
  borderBlock: 13,
  blocks: SILPH_CO_11F_BLOCKS,
  tileset: Tileset.INTERIOR,
  connections: {},
  objects: {
    warps: [
      { x: 9, y: 0, toMap: MapName.SilphCo10F, warpIndex: 1 },
      { x: 13, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 5, y: 5, toMap: "LAST_MAP", warpIndex: 9 },
      { x: 3, y: 2, toMap: MapName.SilphCo7F, warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 7,
        y: 5,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SILPH_PRESIDENT,
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_SILPH_PRESIDENT"
      },
      {
        type: "sprite",
        x: 10,
        y: 5,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_BEAUTY"
      },
      {
        type: "trainer",
        x: 6,
        y: 9,
        sprite: OverworldSprite.SPRITE_GIOVANNI,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_GIOVANNI",
        trainerId: "OPP_GIOVANNI",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 3,
        y: 16,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 41
      },
      {
        type: "trainer",
        x: 15,
        y: 9,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SILPHCO11F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 40
      }
    ]
  },
  text: {
    _SilphCo11FSilphPresidentText: [
      ["text", "PRESIDENT: Thank"],
      ["line", "you for saving"],
      ["cont", "SILPH!"],
      ["para", "I will never"],
      ["line", "forget you saved"],
      ["cont", "us in our moment"],
      ["cont", "of peril!"],
      ["para", "I have to thank"],
      ["line", "you in some way!"],
      ["para", "Because I am rich,"],
      ["line", "I can give you"],
      ["cont", "anything!"],
      ["para", "Here, maybe this"],
      ["line", "will do!"],
      ["prompt"]
    ],
    _SilphCo11FSilphPresidentReceivedMasterBallText: [
      ["text", "<PLAYER> got a"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _SilphCo11FSilphPresidentMasterBallDescriptionText: [
      ["text", "PRESIDENT: You"],
      ["line", "can't buy that"],
      ["cont", "anywhere!"],
      ["para", "It's our secret"],
      ["line", "prototype MASTER"],
      ["cont", "BALL!"],
      ["para", "It will catch any"],
      ["line", "#MON without"],
      ["cont", "fail!"],
      ["para", "You should be"],
      ["line", "quiet about using"],
      ["cont", "it, though."]
    ],
    _SilphCo11FSilphPresidentNoRoomText: [
      ["text", "You have no"],
      ["line", "room for this."]
    ],
    _SilphCo11FBeautyText: [
      ["text", "SECRETARY: Thank"],
      ["line", "you for rescuing"],
      ["cont", "all of us!"],
      ["para", "We admire your"],
      ["line", "courage."]
    ],
    _SilphCo11FGiovanniText: [
      ["text", "Ah <PLAYER>!"],
      ["line", "So we meet again!"],
      ["para", "The PRESIDENT and"],
      ["line", "I are discussing"],
      ["cont", "a vital business"],
      ["cont", "proposition."],
      ["para", "Keep your nose"],
      ["line", "out of grown-up"],
      ["cont", "matters..."],
      ["para", "Or, experience a"],
      ["line", "world of pain!"]
    ],
    _SilphCo10FGiovanniILostAgainText: [
      ["text", "Arrgh!!"],
      ["line", "I lost again!?"],
      ["prompt"]
    ],
    _SilphCo11FGiovanniYouRuinedOurPlansText: [
      ["text", "Blast it all!"],
      ["line", "You ruined our"],
      ["cont", "plans for SILPH!"],
      ["para", "But, TEAM ROCKET"],
      ["line", "will never fall!"],
      ["para", "<PLAYER>! Never"],
      ["line", "forget that all"],
      ["cont", "#MON exist"],
      ["cont", "for TEAM ROCKET!"],
      ["para", "I must go, but I"],
      ["line", "shall return!"]
    ],
    _SilphCo11FRocket1BattleText: [
      ["text", "Stop right there!"],
      ["line", "Don't you move!"]
    ],
    _SilphCo11FRocket1EndBattleText: [
      ["text", "Don't..."],
      ["line", "Please!"],
      ["prompt"]
    ],
    _SilphCo11FRocket1AfterBattleText: [
      ["text", "So, you want to"],
      ["line", "see my BOSS?"]
    ],
    _SilphCo11FRocket2BattleText: [
      ["text", "Halt! Do you have"],
      ["line", "an appointment"],
      ["cont", "with my BOSS?"]
    ],
    _SilphCo11FRocket2EndBattleText: [
      ["text", "Gaah!"],
      ["line", "Demolished!"],
      ["prompt"]
    ],
    _SilphCo11FRocket2AfterBattleText: [
      ["text", "Watch your step,"],
      ["line", "my BOSS likes his"],
      ["cont", "#MON tough!"]
    ],
    _SilphCo10FPorygonText: [
      ["text", "The monitor has"],
      ["line", "#MON on it!"]
    ]
  }
};
