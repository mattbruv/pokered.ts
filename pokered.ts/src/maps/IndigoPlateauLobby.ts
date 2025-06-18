import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { INDIGO_PLATEAU_LOBBY_BLOCKS } from "../data/blocks/IndigoPlateauLobby";

export const IndigoPlateauLobby: Map = {
  width: 8,
  height: 6,
  blocks: INDIGO_PLATEAU_LOBBY_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
