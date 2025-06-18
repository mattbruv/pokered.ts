import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCK_TUNNEL_POKECENTER_BLOCKS } from "../data/blocks/RockTunnelPokecenter";

export const RockTunnelPokecenter: Map = {
  width: 7,
  height: 4,
  blocks: ROCK_TUNNEL_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  object: {},
  textPointers: [],
  script: () => {},
};
