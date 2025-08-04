import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { INDIGO_PLATEAU_BLOCKS } from "../data/blocks/IndigoPlateau";
import { OverworldSprite } from "../sprite";

export const IndigoPlateau: Map = {
  width: 10,
  height: 9,
  borderBlock: 14,
  blocks: INDIGO_PLATEAU_BLOCKS,
  tileset: Tileset.PLATEAU,
  connections: {
    south: { map: MapName.Route23, xOffset: 0 }
  },
  objects: {
    warps: [
      { x: 9, y: 5, toMap: MapName.IndigoPlateauLobby, warpIndex: 0 },
      { x: 10, y: 5, toMap: MapName.IndigoPlateauLobby, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: []
  },
  text: {}
};
