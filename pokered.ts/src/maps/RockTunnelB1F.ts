import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCK_TUNNEL_B1F_BLOCKS } from "../data/blocks/RockTunnelB1F";

export const RockTunnelB1F: Map = {
  width: 20,
  height: 18,
  blocks: ROCK_TUNNEL_B1F_BLOCKS,
  tileset: Tileset.CAVERN,
  connections: {},
  object: {},
  textPointers: [],
};
