import { BLOCKSETS } from "./gfx/blocksets";
import { ImageCache } from "./gfx/images";
import { BlockSet } from "./map";
import { SpriteName } from "./sprite";

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
  UNDERGROUND
}

type TilesetMetadata = {
  counterTiles: number[];
  grassTile: {
    tileId: number;
    imageKey: SpriteName;
  } | null;
  animation: TileAnimation;
};

enum TileAnimation {
  None,
  Water,
  WaterFlower
}

const TILESET_METADATA: Record<Tileset, TilesetMetadata> = {
  [Tileset.CAVERN]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.CEMETERY]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.CLUB]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.DOJO]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.FACILITY]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.FOREST]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.FOREST_GATE]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.GATE]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.GYM]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.HOUSE]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.INTERIOR]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.LAB]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.LOBBY]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.MANSION]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.MART]: {
    counterTiles: [0x18, 0x19, 0x1e],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.MUSEUM]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.OVERWORLD]: {
    counterTiles: [],
    grassTile: {
      imageKey: "sprites-grass_overworld",
      tileId: 0x52
    },
    animation: TileAnimation.WaterFlower
  },
  [Tileset.PLATEAU]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.POKECENTER]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.REDS_HOUSE_1]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.REDS_HOUSE_2]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.SHIP]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.SHIP_PORT]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  },
  [Tileset.UNDERGROUND]: {
    counterTiles: [],
    grassTile: null,
    animation: TileAnimation.None
  }
};

const TILESET_BLOCKSET_LOOKUP: Record<Tileset, keyof typeof BLOCKSETS> = {
  [Tileset.CAVERN]: "cavern",
  [Tileset.CEMETERY]: "cemetery",
  [Tileset.CLUB]: "club",
  [Tileset.DOJO]: "gym",
  [Tileset.FACILITY]: "facility",
  [Tileset.FOREST]: "forest",
  [Tileset.FOREST_GATE]: "gate", // shared blockset with gate
  [Tileset.GATE]: "gate",
  [Tileset.GYM]: "gym",
  [Tileset.HOUSE]: "house",
  [Tileset.INTERIOR]: "interior",
  [Tileset.LAB]: "lab",
  [Tileset.LOBBY]: "lobby",
  [Tileset.MANSION]: "mansion",
  [Tileset.MART]: "pokecenter", // shared blockset with pokecenter
  [Tileset.MUSEUM]: "gate", // shared blockset with gate
  [Tileset.OVERWORLD]: "overworld",
  [Tileset.PLATEAU]: "plateau",
  [Tileset.POKECENTER]: "pokecenter",
  [Tileset.REDS_HOUSE_1]: "reds_house",
  [Tileset.REDS_HOUSE_2]: "reds_house",
  [Tileset.SHIP]: "ship",
  [Tileset.SHIP_PORT]: "ship_port",
  [Tileset.UNDERGROUND]: "underground"
};

const TILESET_COLLISION_LOOKUP: Record<Tileset, number[]> = {
  [Tileset.CAVERN]: [
    0x05, 0x15, 0x18, 0x1a, 0x20, 0x21, 0x22, 0x2a, 0x2d, 0x30
  ],
  [Tileset.CEMETERY]: [0x01, 0x10, 0x13, 0x1b, 0x22, 0x42, 0x52],
  [Tileset.CLUB]: [
    0x0f, 0x1a, 0x1f, 0x26, 0x28, 0x29, 0x2c, 0x2d, 0x2e, 0x2f, 0x41
  ],
  [Tileset.DOJO]: [
    0x11, 0x16, 0x19, 0x2b, 0x3c, 0x3d, 0x3f, 0x4a, 0x4c, 0x4d, 0x03
  ],
  [Tileset.FACILITY]: [
    0x01, 0x10, 0x11, 0x13, 0x1b, 0x20, 0x21, 0x22, 0x30, 0x31, 0x32, 0x42,
    0x43, 0x48, 0x52, 0x55, 0x58, 0x5e
  ],
  [Tileset.FOREST]: [
    0x1e, 0x20, 0x2e, 0x30, 0x34, 0x37, 0x39, 0x3a, 0x40, 0x51, 0x52, 0x5a,
    0x5c, 0x5e, 0x5f
  ],
  [Tileset.FOREST_GATE]: [
    0x01, 0x12, 0x14, 0x1a, 0x1c, 0x37, 0x38, 0x3b, 0x3c, 0x5e
  ],
  [Tileset.GATE]: [0x01, 0x12, 0x14, 0x1a, 0x1c, 0x37, 0x38, 0x3b, 0x3c, 0x5e],
  [Tileset.GYM]: [
    0x11, 0x16, 0x19, 0x2b, 0x3c, 0x3d, 0x3f, 0x4a, 0x4c, 0x4d, 0x03
  ],
  [Tileset.HOUSE]: [0x01, 0x12, 0x14, 0x28, 0x32, 0x37, 0x44, 0x54, 0x5c],
  [Tileset.INTERIOR]: [0x04, 0x0f, 0x15, 0x1f, 0x3b, 0x45, 0x47, 0x55, 0x56],
  [Tileset.LAB]: [0x0c, 0x26, 0x16, 0x1e, 0x34, 0x37],
  [Tileset.LOBBY]: [0x14, 0x17, 0x1a, 0x1c, 0x20, 0x38, 0x45],
  [Tileset.MANSION]: [0x01, 0x05, 0x11, 0x12, 0x14, 0x1a, 0x1c, 0x2c, 0x53],
  [Tileset.MART]: [0x11, 0x1a, 0x1c, 0x3c, 0x5e],
  [Tileset.MUSEUM]: [
    0x01, 0x12, 0x14, 0x1a, 0x1c, 0x37, 0x38, 0x3b, 0x3c, 0x5e
  ],
  [Tileset.OVERWORLD]: [
    0x00, 0x10, 0x1b, 0x20, 0x21, 0x23, 0x2c, 0x2d, 0x2e, 0x30, 0x31, 0x33,
    0x39, 0x3c, 0x3e, 0x52, 0x54, 0x58, 0x5b
  ],
  [Tileset.PLATEAU]: [0x1b, 0x23, 0x2c, 0x2d, 0x3b, 0x45],
  [Tileset.POKECENTER]: [0x11, 0x1a, 0x1c, 0x3c, 0x5e],
  [Tileset.REDS_HOUSE_1]: [
    0x01, 0x02, 0x03, 0x11, 0x12, 0x13, 0x14, 0x1c, 0x1a
  ],
  [Tileset.REDS_HOUSE_2]: [
    0x01, 0x02, 0x03, 0x11, 0x12, 0x13, 0x14, 0x1c, 0x1a
  ],
  [Tileset.SHIP]: [0x04, 0x0d, 0x17, 0x1d, 0x1e, 0x23, 0x34, 0x37, 0x39, 0x4a],
  [Tileset.SHIP_PORT]: [0x0a, 0x1a, 0x32, 0x3b],
  [Tileset.UNDERGROUND]: [0x0b, 0x0c, 0x13, 0x15, 0x18]
};

export function getTilesetMetadata(tileset: Tileset): TilesetMetadata {
  return TILESET_METADATA[tileset];
}

export function getTileCollisions(tileset: Tileset): Readonly<number[]> {
  return TILESET_COLLISION_LOOKUP[tileset];
}

export function getBlockSet(tileset: Tileset): BlockSet {
  return BLOCKSETS[TILESET_BLOCKSET_LOOKUP[tileset]];
}

export function getTilesetImage(
  tileset: Tileset,
  images: ImageCache
): ImageBitmap {
  const lookup: Record<Tileset, ImageBitmap> = {
    [Tileset.CAVERN]: images["tilesets-cavern"],
    [Tileset.CEMETERY]: images["tilesets-cemetery"],
    [Tileset.CLUB]: images["tilesets-club"],
    [Tileset.DOJO]: images["tilesets-gym"],
    [Tileset.FACILITY]: images["tilesets-facility"],
    [Tileset.FOREST]: images["tilesets-forest"],
    [Tileset.FOREST_GATE]: images["tilesets-gate"],
    [Tileset.GATE]: images["tilesets-gate"],
    [Tileset.GYM]: images["tilesets-gym"],
    [Tileset.HOUSE]: images["tilesets-house"],
    [Tileset.INTERIOR]: images["tilesets-interior"],
    [Tileset.LAB]: images["tilesets-lab"],
    [Tileset.LOBBY]: images["tilesets-lobby"],
    [Tileset.MANSION]: images["tilesets-mansion"],
    [Tileset.MART]: images["tilesets-pokecenter"],
    [Tileset.MUSEUM]: images["tilesets-gate"],
    [Tileset.OVERWORLD]: images["tilesets-overworld"],
    [Tileset.PLATEAU]: images["tilesets-plateau"],
    [Tileset.POKECENTER]: images["tilesets-pokecenter"],
    [Tileset.REDS_HOUSE_1]: images["tilesets-reds_house"],
    [Tileset.REDS_HOUSE_2]: images["tilesets-reds_house"],
    [Tileset.SHIP]: images["tilesets-ship"],
    [Tileset.SHIP_PORT]: images["tilesets-ship_port"],
    [Tileset.UNDERGROUND]: images["tilesets-underground"]
  };

  return lookup[tileset];
}
