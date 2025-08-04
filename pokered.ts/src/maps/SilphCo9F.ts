import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_9F_BLOCKS } from "../data/blocks/SilphCo9F";
import { OverworldSprite } from "../sprite";

export const SilphCo9F: Map = {
  width: 13,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_9F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 14, y: 0, toMap: MapName.SilphCo10F, warpIndex: 0 },
      { x: 16, y: 0, toMap: MapName.SilphCo8F, warpIndex: 0 },
      { x: 18, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 9, y: 3, toMap: MapName.SilphCo3F, warpIndex: 7 },
      { x: 17, y: 15, toMap: MapName.SilphCo5F, warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 14,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_NURSE,
        movement: "STAY",
        textId: "TEXT_SILPHCO9F_NURSE"
      },
      {
        type: "trainer",
        x: 2,
        y: 4,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SILPHCO9F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 37
      },
      {
        type: "trainer",
        x: 21,
        y: 13,
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SILPHCO9F_SCIENTIST",
        trainerId: "OPP_SCIENTIST",
        trainerLevel: 10
      },
      {
        type: "trainer",
        x: 13,
        y: 16,
        sprite: OverworldSprite.SPRITE_ROCKET,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_SILPHCO9F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 38
      }
    ]
  },
  text: {
    SilphCo9FNurseYouLookTiredText: [
      ["text", "You look tired!"],
      ["line", "You should take a"],
      ["cont", "quick nap!"],
      ["prompt"]
    ],
    SilphCo9FNurseDontGiveUpText: [["text", "Don't give up!"]],
    SilphCo9FNurseThankYouText: [
      ["text", "Thank you so"],
      ["line", "much!"]
    ],
    _SilphCo9FRocket1BattleText: [
      ["text", "Your #MON seem"],
      ["line", "to adore you, kid!"]
    ],
    _SilphCo9FRocket1EndBattleText: [["text", "Ghaaah!"], ["prompt"]],
    _SilphCo9FRocket1AfterBattleText: [
      ["text", "If I had started"],
      ["line", "as a trainer at"],
      ["cont", "your age..."]
    ],
    _SilphCo9FScientistBattleText: [
      ["text", "Your #MON have"],
      ["line", "weak points! I"],
      ["cont", "can nail them!"]
    ],
    _SilphCo9FScientistEndBattleText: [
      ["text", "You"],
      ["line", "hammered me!"],
      ["prompt"]
    ],
    _SilphCo9FScientistAfterBattleText: [
      ["text", "Exploiting weak"],
      ["line", "spots does work!"],
      ["cont", "Think about"],
      ["cont", "element types!"]
    ],
    _SilphCo9FRocket2BattleText: [
      ["text", "I am one of the 4"],
      ["line", "ROCKET BROTHERS!"]
    ],
    _SilphCo9FRocket2EndBattleText: [
      ["text", "Warg!"],
      ["line", "Brothers, I lost!"],
      ["prompt"]
    ],
    _SilphCo9FRocket2AfterBattleText: [
      ["text", "My brothers will"],
      ["line", "avenge me!"]
    ]
  }
};
