import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_ROOF_HOUSE_BLOCKS } from "../data/blocks/CeladonMansionRoofHouse";
import { OverworldSprite } from "../sprite";

export const CeladonMansionRoofHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: CELADON_MANSION_ROOF_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: MapName.CeladonMansionRoof, warpIndex: 2 },
      { x: 3, y: 7, toMap: MapName.CeladonMansionRoof, warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_HIKER,
        movement: "STAY",
        textId: "TEXT_CELADONMANSION_ROOF_HOUSE_HIKER"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_CELADONMANSION_ROOF_HOUSE_EEVEE_POKEBALL"
      }
    ]
  },
  textPointers: []
};
