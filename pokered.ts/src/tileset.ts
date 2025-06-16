import { BLOCKSETS } from "./gfx/blocksets";
import { BlockSet } from "./map";

export enum Tileset {
  CAVERN,
  CEMETERY,
  CLUB,
  DOJO,
  FACILITY,
  FOREST,
  FOREST_GATE,
  GATE,
  GYM,
  HOUSE,
  INTERIOR,
  LAB,
  LOBBY,
  MANSION,
  MART,
  MUSEUM,
  OVERWORLD,
  PLATEAU,
  POKECENTER,
  REDS_HOUSE_1,
  REDS_HOUSE_2,
  SHIP,
  SHIP_PORT,
  UNDERGROUND,
}

const TILESET_BLOCKSET_LOOKUP: Record<Tileset, keyof typeof BLOCKSETS> = {
  [Tileset.CAVERN]: "cavern",
  [Tileset.CEMETERY]: "cemetery",
  [Tileset.CLUB]: "club",
  [Tileset.DOJO]: "overworld", // TODO
  [Tileset.FACILITY]: "facility",
  [Tileset.FOREST]: "forest",
  [Tileset.FOREST_GATE]: "overworld", // TODO
  [Tileset.GATE]: "gate",
  [Tileset.GYM]: "gym",
  [Tileset.HOUSE]: "house",
  [Tileset.INTERIOR]: "interior",
  [Tileset.LAB]: "lab",
  [Tileset.LOBBY]: "lobby",
  [Tileset.MANSION]: "mansion",
  [Tileset.MART]: "cavern", // TODO
  [Tileset.MUSEUM]: "cavern", // TODO
  [Tileset.OVERWORLD]: "overworld",
  [Tileset.PLATEAU]: "plateau",
  [Tileset.POKECENTER]: "pokecenter",
  [Tileset.REDS_HOUSE_1]: "reds_house",
  [Tileset.REDS_HOUSE_2]: "reds_house",
  [Tileset.SHIP]: "ship",
  [Tileset.SHIP_PORT]: "ship_port",
  [Tileset.UNDERGROUND]: "underground",
};

export function getBlockSet(tileset: Tileset): BlockSet {
  return BLOCKSETS[TILESET_BLOCKSET_LOOKUP[tileset]];
}
