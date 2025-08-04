import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B4F_BLOCKS } from "../data/blocks/RocketHideoutB4F";
import { OverworldSprite } from "../sprite";

export const RocketHideoutB4F: Map = {
  width: 15,
  height: 12,
  borderBlock: 46,
  blocks: ROCKET_HIDEOUT_B4F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 19, y: 10, toMap: MapName.RocketHideoutB3F, warpIndex: 1 },
      { x: 24, y: 15, toMap: MapName.RocketHideoutElevator, warpIndex: 0 },
      { x: 25, y: 15, toMap: MapName.RocketHideoutElevator, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 25,
        y: 3,
        sprite: OverworldSprite.SPRITE_GIOVANNI,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB4F_GIOVANNI",
        trainerId: "OPP_GIOVANNI",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 23,
        y: 12,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB4F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 16
      },
      {
        type: "trainer",
        x: 26,
        y: 12,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB4F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 17
      },
      {
        type: "trainer",
        x: 11,
        y: 2,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB4F_ROCKET3",
        trainerId: "OPP_ROCKET",
        trainerLevel: 18
      },
      {
        type: "item",
        x: 10,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB4F_HP_UP",
        itemId: "HP_UP"
      },
      {
        type: "item",
        x: 9,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB4F_TM_RAZOR_WIND",
        itemId: "TM_RAZOR_WIND"
      },
      {
        type: "item",
        x: 12,
        y: 20,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB4F_IRON",
        itemId: "IRON"
      },
      {
        type: "item",
        x: 25,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB4F_SILPH_SCOPE",
        itemId: "SILPH_SCOPE"
      },
      {
        type: "item",
        x: 10,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB4F_LIFT_KEY",
        itemId: "LIFT_KEY"
      }
    ]
  },
  text: {
    _RocketHideoutB4FGiovanniImpressedYouGotHereText: [
      ["text", "So! I must say, I"],
      ["line", "am impressed you"],
      ["cont", "got here!"]
    ],
    _RocketHideoutB4FGiovanniWhatCannotBeText: [
      ["text", "WHAT!"],
      ["line", "This cannot be!"],
      ["prompt"]
    ],
    _RocketHideoutB4FGiovanniHopeWeMeetAgainText: [
      ["text", "I see that you"],
      ["line", "raise #MON"],
      ["cont", "with utmost care."],
      ["para", "A child like you"],
      ["line", "would never"],
      ["cont", "understand what I"],
      ["cont", "hope to achieve."],
      ["para", "I shall step"],
      ["line", "aside this time!"],
      ["para", "I hope we meet"],
      ["line", "again..."]
    ],
    _RocketHideoutB4FRocket1BattleText: [
      ["text", "I know you! You"],
      ["line", "ruined our plans"],
      ["cont", "at MT.MOON!"]
    ],
    _RocketHideoutB4FRocket1EndBattleText: [
      ["text", "Burned"],
      ["line", "again!"],
      ["prompt"]
    ],
    _RocketHideoutB4FRocket1AfterBattleText: [
      ["text", "Do you have"],
      ["line", "something against"],
      ["cont", "TEAM ROCKET?"]
    ],
    _RocketHideoutB4FRocket2BattleText: [
      ["text", "How can you not"],
      ["line", "see the beauty of"],
      ["cont", "our evil?"]
    ],
    _RocketHideoutB4FRocket2EndBattleText: [["text", "Ayaya!"], ["prompt"]],
    _RocketHideoutB4FRocket2AfterBattleText: [
      ["text", "BOSS! I'm sorry I"],
      ["line", "failed you!"]
    ],
    _RocketHideoutB4FRocket3BattleText: [
      ["text", "The elevator"],
      ["line", "doesn't work? Who"],
      ["cont", "has the LIFT KEY?"]
    ],
    _RocketHideoutB4FRocket3EndBattleText: [["text", "No!"], ["prompt"]],
    _RocketHideoutB4FRocket3AfterBattleText: [
      ["text", "Oh no! I dropped"],
      ["line", "the LIFT KEY!"]
    ]
  }
};
