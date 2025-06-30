import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCKET_HIDEOUT_B3F_BLOCKS } from "../data/blocks/RocketHideoutB3F";
import { OverworldSprite } from "../sprite";

export const RocketHideoutB3F: Map = {
  width: 15,
  height: 14,
  borderBlock: 46,
  blocks: ROCKET_HIDEOUT_B3F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 25, y: 6, toMap: MapName.RocketHideoutB2F, warpIndex: 1 },
      { x: 19, y: 18, toMap: MapName.RocketHideoutB4F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 10,
        y: 22,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB3F_ROCKET1",
        trainerId: "OPP_ROCKET",
        trainerLevel: 14
      },
      {
        type: "trainer",
        x: 26,
        y: 12,
        sprite: OverworldSprite.SPRITE_ROCKET,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB3F_ROCKET2",
        trainerId: "OPP_ROCKET",
        trainerLevel: 15
      },
      {
        type: "item",
        x: 26,
        y: 17,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB3F_TM_DOUBLE_EDGE",
        itemId: "TM_DOUBLE_EDGE"
      },
      {
        type: "item",
        x: 20,
        y: 14,
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_ROCKETHIDEOUTB3F_RARE_CANDY",
        itemId: "RARE_CANDY"
      }
    ]
  },
  textPointers: []
};
