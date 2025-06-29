import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MANSION_ROOF_HOUSE_BLOCKS } from "../data/blocks/CeladonMansionRoofHouse";

export const CeladonMansionRoofHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: CELADON_MANSION_ROOF_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "CELADON_MANSION_ROOF", warpId: 3 },
      { x: 3, y: 7, toMap: "CELADON_MANSION_ROOF", warpId: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 2,
        sprite: "SPRITE_HIKER",
        movement: "STAY",
        textId: "TEXT_CELADONMANSION_ROOF_HOUSE_HIKER"
      },
      {
        type: "sprite",
        x: 4,
        y: 3,
        sprite: "SPRITE_POKE_BALL",
        movement: "STAY",
        textId: "TEXT_CELADONMANSION_ROOF_HOUSE_EEVEE_POKEBALL"
      }
    ]
  },
  textPointers: []
};
