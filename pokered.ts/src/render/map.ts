import { ImageCache } from "../gfx/images";
import { Map } from "../map";
import { getBlockSet, getTilesetImage } from "../tileset";
/*
1. Find its tileset in its header (stored at data/maps/headers/
2. Read the tileset in as a 2 bits per pixel format file.
    Pixels are spread across neighboring bytes. 
    Tiles are stored as 8x8 pixels, and read in from top-left to bottom-right.
    A square is represented by 2x2 tiles
3. Read in the blockset, 16 bytes at a time. 
    Each 16 byte unit is a block.
    These blocks measure 4x4 tiles - each byte is an index into the tileset read above.
    Blocksets are also read from top-left to bottom-right. 
    Blocks measure 2x2 squares
4. Read in the map file. 
    Each byte in the map file is an index into the blockset for the block to show at that location.
    Maps are also read from top-left to bottom-right
*/

export function getMapImage(map: Map, images: ImageCache): OffscreenCanvas {
  const { width, height } = map;
  const canvas = new OffscreenCanvas(width * 8 * 4, height * 8 * 4);
  const blockset = getBlockSet(map.tileset);
  const tileset = getTilesetImage(map.tileset, images);

  const ctx = canvas.getContext("2d");

  const TILE_SIZE = 8;
  const BLOCK_SIZE = TILE_SIZE * 4;
  const TILES_PER_ROW = tileset.width / TILE_SIZE;
  //console.log(TILE_SIZE, BLOCK_SIZE, TILES_PER_ROW);

  for (let blockY = 0; blockY < height; blockY++) {
    for (let blockX = 0; blockX < width; blockX++) {
      //debugger;
      const blockIndex = blockY * width + blockX;
      const currentBlock = blockset[blockIndex];

      for (let tileY = 0; tileY < 4; tileY++) {
        for (let tileX = 0; tileX < 4; tileX++) {
          const tileIndex = tileY * 4 + tileX;
          const tile = currentBlock[tileIndex];

          // Source coordinates on the tileset
          const sx = (tile % TILES_PER_ROW) * TILE_SIZE;
          const sy = Math.floor(tile / TILES_PER_ROW) * TILE_SIZE;

          // Destination on the canvas
          const dx = blockX * BLOCK_SIZE + tileX * TILE_SIZE;
          const dy = blockY * BLOCK_SIZE + tileY * TILE_SIZE;

          ctx?.drawImage(
            tileset,
            sx,
            sy,
            TILE_SIZE,
            TILE_SIZE,
            dx,
            dy,
            TILE_SIZE,
            TILE_SIZE
          );
        }
      }
    }
  }

  return canvas;
}

//const TILESET_BLOCKSET_LOOKUP: Record<Tileset, keyof typeof BLOCKSETS> = {
