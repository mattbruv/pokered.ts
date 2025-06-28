import { ImageCache } from "../gfx/images";
import { Map } from "../map";
import { getBlockSet, getTilesetImage } from "../tileset";
import { OverworldCache } from "./renderer";
import { drawSprite, FacingDirection, SpriteData } from "./sprite";

export function renderOverworld(
  screen: CanvasRenderingContext2D,
  images: ImageCache,
  cache: OverworldCache,
  playerSprite: SpriteData
) {
  const PLAYER_OFFSET = 4;
  const TILE_SIZE = 16; // each tile is 16x16
  const PLAYER_TILE_OFFSET = PLAYER_OFFSET * TILE_SIZE;

  //console.log(playerSprite.position);
  let dx = -(playerSprite.position.x * TILE_SIZE) + PLAYER_TILE_OFFSET;
  let dy = -(playerSprite.position.y * TILE_SIZE) + PLAYER_TILE_OFFSET;

  // If player walking, adjust dx/dy
  if (playerSprite.animationFrameCounter) {
    const offset = playerSprite.animationFrameCounter;

    const adjustmentMap: Record<FacingDirection, [number, number]> = {
      [FacingDirection.Down]: [0, -offset],
      [FacingDirection.Up]: [0, offset],
      [FacingDirection.Left]: [offset, 0],
      [FacingDirection.Right]: [-offset, 0],
    };

    const [walkXDelta, walkYDelta] = adjustmentMap[playerSprite.facing];

    dx += walkXDelta;
    dy += walkYDelta;
  }

  // Draw the map relative to the player's position within it.
  screen.drawImage(cache.current.mapImage, dx, dy);

  // Draw the connecting maps if there is something to draw.
  if (cache.north) {
    const deltaY = cache.north.mapImage.height;
    //console.log(dx, dy - deltaY);
    screen.drawImage(cache.north.mapImage, dx, dy - deltaY);
  }
  if (cache.south) {
    const deltaY = cache.current.mapImage.height;
    //console.log(dx, dy - deltaY);
    screen.drawImage(cache.south.mapImage, dx, dy + deltaY);
    //
  }
  if (cache.east) {
    const deltaX = cache.current.mapImage.width;
    screen.drawImage(cache.east.mapImage, dx + deltaX, dy);
    //
  }
  if (cache.west) {
    const deltaX = cache.west.mapImage.width;
    screen.drawImage(cache.west.mapImage, dx - deltaX, dy);
    //
  }

  // Finally, draw the player sprite to the screen on top of everything.
  // The map is seemingly always rendered relative to the player.
  // The player is centered 4 tiles over, and 4 tiles down
  // The player is also offset by 4(?) pixels in the Y direction, so he's not perfectly centered.
  drawSprite(screen, playerSprite, images, PLAYER_OFFSET, PLAYER_OFFSET, 0, -4);
}

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

  const blockset = getBlockSet(map.tileset);
  const tileset = getTilesetImage(map.tileset, images);

  const TILE_SIZE = 8;
  const BLOCK_SIZE = TILE_SIZE * 4;
  const TILES_PER_ROW = tileset.width / TILE_SIZE;

  const canvas = new OffscreenCanvas(width * BLOCK_SIZE, height * BLOCK_SIZE);
  const ctx = canvas.getContext("2d");

  for (let blockY = 0; blockY < height; blockY++) {
    for (let blockX = 0; blockX < width; blockX++) {
      const blockIndex = blockY * width + blockX;
      const mapBlock = map.blocks[blockIndex];
      const currentBlock = blockset[mapBlock];

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
