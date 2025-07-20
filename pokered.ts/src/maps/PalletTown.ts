import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PALLET_TOWN_BLOCKS } from "../data/blocks/PalletTown";
import { OverworldSprite } from "../sprite";

export const PalletTown: Map = {
  width: 10,
  height: 9,
  borderBlock: 11,
  blocks: PALLET_TOWN_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route1, xOffset: 0 },
    south: { map: MapName.Route21, xOffset: 0 }
  },
  objects: {
    warps: [
      { x: 5, y: 5, toMap: MapName.RedsHouse1F, warpIndex: 0 },
      { x: 13, y: 5, toMap: MapName.BluesHouse, warpIndex: 0 },
      { x: 12, y: 11, toMap: MapName.OaksLab, warpIndex: 1 }
    ],
    backgroundItems: [
      { x: 13, y: 13, signId: "TEXT_PALLETTOWN_OAKSLAB_SIGN" },
      { x: 7, y: 9, signId: "TEXT_PALLETTOWN_SIGN" },
      { x: 3, y: 5, signId: "TEXT_PALLETTOWN_PLAYERSHOUSE_SIGN" },
      { x: 11, y: 5, signId: "TEXT_PALLETTOWN_RIVALSHOUSE_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_OAK,
        movement: "STAY",
        textId: "TEXT_PALLETTOWN_OAK"
      },
      {
        type: "sprite",
        x: 3,
        y: 8,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_PALLETTOWN_GIRL"
      },
      {
        type: "sprite",
        x: 11,
        y: 14,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "WALK",
        textId: "TEXT_PALLETTOWN_FISHER"
      }
    ]
  },
  textPointers: []
};
