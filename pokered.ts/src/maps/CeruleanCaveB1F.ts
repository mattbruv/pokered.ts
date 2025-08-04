import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CERULEAN_CAVE_B1F_BLOCKS } from "../data/blocks/CeruleanCaveB1F";
import { OverworldSprite } from "../sprite";

export const CeruleanCaveB1F: Map = {
  width: 15,
  height: 9,
  borderBlock: 125,
  blocks: CERULEAN_CAVE_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  objects: {
    warps: [{ x: 3, y: 6, toMap: MapName.CeruleanCave1F, warpIndex: 8 }],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 27,
        y: 13,
        sprite: OverworldSprite.SPRITE_MONSTER,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_CERULEANCAVEB1F_MEWTWO",
        trainerId: "MEWTWO",
        trainerLevel: 70
      },
      {
        type: "item",
        x: 16,
        y: 9,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_CERULEANCAVEB1F_ULTRA_BALL",
        itemId: "ULTRA_BALL"
      },
      {
        type: "item",
        x: 18,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_CERULEANCAVEB1F_MAX_REVIVE",
        itemId: "MAX_REVIVE"
      }
    ]
  },
  text: { _MewtwoBattleText: [["text", "Mew!@"], ["text_end"]] }
};
