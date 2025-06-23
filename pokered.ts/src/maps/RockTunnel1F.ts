import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCK_TUNNEL_1F_BLOCKS } from "../data/blocks/RockTunnel1F";

export const RockTunnel1F: Map = {
  width: 20,
  height: 18,
  blocks: ROCK_TUNNEL_1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
