import { DebugData } from "../game";
import { ImageCache } from "../gfx/images";
import { Map } from "../map";
import { getBlockIndexAtPosition } from "../overworld/map";
import {
  getBlockSet,
  getTilesetImage,
  getTilesetMetadata,
  Tileset
} from "../tileset";
import { OverworldCache } from "./renderer";
import { drawSprite, FacingDirection, MovementStatus, Sprite } from "./sprite";

export const TILE_SIZE_PX = 8;
export const BLOCK_SIZE_PX = TILE_SIZE_PX * 4;

export function renderOverworld(
  screen: CanvasRenderingContext2D,
  images: ImageCache,
  currentMap: Map,
  cache: OverworldCache,
  playerSprite: Sprite,
  flowerIndex: number,
  debug: DebugData
) {
  const PLAYER_OFFSET = 4;
  const TILE_SIZE = 16; // each tile is 16x16
  const PLAYER_TILE_OFFSET = PLAYER_OFFSET * TILE_SIZE;

  //console.log(playerSprite.position);
  let dx = -(playerSprite.position.x * TILE_SIZE) + PLAYER_TILE_OFFSET;
  let dy = -(playerSprite.position.y * TILE_SIZE) + PLAYER_TILE_OFFSET;

  // If player walking, adjust dx/dy
  if (playerSprite.movementStatus !== MovementStatus.WalkingInPlace) {
    const offset = playerSprite.animationFrameCounter;

    const adjustmentMap: Record<FacingDirection, [number, number]> = {
      [FacingDirection.Down]: [0, -offset],
      [FacingDirection.Up]: [0, offset],
      [FacingDirection.Left]: [offset, 0],
      [FacingDirection.Right]: [-offset, 0]
    };

    const [walkXDelta, walkYDelta] = adjustmentMap[playerSprite.facing];

    dx += walkXDelta;
    dy += walkYDelta;
  }

  // First step: Cover background with the border block image.
  // Don't ask me how this works. I basically just spammed numbers until no magenta leaked through,
  // and I used the modulo of the relative offsets so that it appears that
  // the background is moving with the player as he walks. If you don't use modulo,
  // the background tiles stay in the same spot and they move independently of the map and it looks weird
  // we mod by 32 because that's the height/width of a block
  screen.drawImage(cache.outOfBounds, -32 + (dx % 32), -32 + (dy % 32));

  const temp = new OffscreenCanvas(
    cache.current.mapImage.width,
    cache.current.mapImage.height
  );

  const ct = temp.getContext("2d");
  if (ct) {
    ct.drawImage(cache.current.mapImage, 0, 0);

    // If we have flowers, draw their current animation
    if (cache.current.flowers) {
      const flower = cache.current.flowers[flowerIndex];
      ct.drawImage(flower, 0, 0);
    }

    // draw map objects to image
    ct.drawImage(cache.current.objectsImage, 0, 0);

    // draw current block outline if we are debugging
    if (debug.showMapOutlines) {
      const { x, y } = playerSprite.position;
      const block = getBlockIndexAtPosition(currentMap, x, y);
      const xOff = (block % currentMap.width) * 32;
      const yOffset = Math.floor(block / currentMap.width) * 32;
      //console.log(xOff, yOffset);
      // Let's render tiles we are debugging and the player isn't walking.
      // render warps
      ct.strokeStyle = "purple";
      ct.lineWidth = 1;
      for (const warp of currentMap.objects.warps) {
        const { x, y } = warp;
        ct.strokeRect(x * 16, y * 16, 16, 16);
      }
      ct.globalAlpha = 0.5;

      if (debug.currentTile && debug.currentTile.inBounds) {
        ct.fillStyle = "cyan";
        const baseX = (debug.currentTile.blockIndex % currentMap.width) * 32;
        const baseY =
          Math.floor(debug.currentTile.blockIndex / currentMap.width) * 32;
        const dx = debug.currentTile.blockX * 16;
        const dy = debug.currentTile.blockY * 16 + 8;
        ct.fillRect(baseX + dx, baseY + dy, 8, 8);
      }
      if (debug.nextTile && debug.nextTile.inBounds) {
        ct.fillStyle = "magenta";
        const baseX = (debug.nextTile.blockIndex % currentMap.width) * 32;
        const baseY =
          Math.floor(debug.nextTile.blockIndex / currentMap.width) * 32;
        const dx = debug.nextTile.blockX * 16;
        const dy = debug.nextTile.blockY * 16 + 8;
        ct.fillRect(baseX + dx, baseY + dy, 8, 8);
      }
      ct.globalAlpha = 1;
      ct.lineWidth = 1;
      ct.strokeStyle = "gray";
      ct.strokeRect(xOff, yOffset, 32, 32);
      // stroke whole map
      ct.strokeStyle = "purple";
      ct.lineWidth = 2;
      ct.strokeRect(
        0,
        0,
        cache.current.mapImage.width,
        cache.current.mapImage.height
      );
    }

    // Draw the map relative to the player's position within it.
    screen.drawImage(temp, dx, dy);
  }

  // Draw the connecting maps if there is something to draw.
  if (cache.north && currentMap.connections.north) {
    const deltaY = cache.north.mapImage.height;
    //console.log(dx, dy - deltaY);

    // If the north map has an offset, apply it
    // Offset is in blocks.
    const offset = currentMap.connections.north.xOffset * 32;

    screen.drawImage(cache.north.mapImage, dx + offset, dy - deltaY);
  }
  if (cache.south) {
    const deltaY = cache.current.mapImage.height;
    const offset = currentMap.connections.south!.xOffset * 32;
    //console.log(dx, dy - deltaY);
    screen.drawImage(cache.south.mapImage, dx + offset, dy + deltaY);
    //
  }
  if (cache.east) {
    const deltaX = cache.current.mapImage.width;
    const offset = currentMap.connections.east!.yOffset * 32;
    screen.drawImage(cache.east.mapImage, dx + deltaX, dy + offset);
    //
  }
  if (cache.west) {
    const deltaX = cache.west.mapImage.width;
    const offset = currentMap.connections.west!.yOffset * 32;
    screen.drawImage(cache.west.mapImage, dx - deltaX, dy + offset);
    //
  }

  // If walking on walls, draw the player at half opacity to make it obvious
  if (debug.walkOnWalls) screen.globalAlpha = 0.5;
  // Finally, draw the player sprite to the screen on top of everything.
  // The map is seemingly always rendered relative to the player.
  // The player is centered 4 tiles over, and 4 tiles down
  // The player is also offset by 4(?) pixels in the Y direction, so he's not perfectly centered.
  drawSprite(
    screen,
    playerSprite,
    images,
    PLAYER_OFFSET,
    PLAYER_OFFSET,
    false,
    0,
    -4
  );
  if (debug.walkOnWalls) screen.globalAlpha = 1;

  // if grass, draw it overtop everything and then draw the sprites.
  if (cache.current.grass) {
    const grass = cache.current.grass;
    screen.drawImage(grass, dx, dy);
    if (!debug.walkOnWalls) {
      drawSprite(
        screen,
        playerSprite,
        images,
        PLAYER_OFFSET,
        PLAYER_OFFSET,
        true,
        0,
        -4
      );
    }
  }
}

export type FlowerCache = [OffscreenCanvas, OffscreenCanvas, OffscreenCanvas];

const FLOWER_SPRITES: (keyof ImageCache)[] = [
  "tilesets-flower-flower1",
  "tilesets-flower-flower2",
  "tilesets-flower-flower3"
];

export type MapRender = {
  mapImage: OffscreenCanvas;
  grass: OffscreenCanvas | null;
  flowers: FlowerCache | null;
};

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
export function getMapRender(
  width: number,
  height: number,
  tilesetName: Tileset,
  blocks: number[],
  images: ImageCache
): MapRender {
  const blockset = getBlockSet(tilesetName);
  const tileset = getTilesetImage(tilesetName, images);

  const TILES_PER_ROW = tileset.width / TILE_SIZE_PX;

  const newMapCanvas = () =>
    new OffscreenCanvas(width * BLOCK_SIZE_PX, height * BLOCK_SIZE_PX);

  const canvas = newMapCanvas();

  // also we want to render out each flower animation
  const flower1 = newMapCanvas();
  const flower2 = newMapCanvas();
  const flower3 = newMapCanvas();

  const inOverworld = tilesetName === Tileset.OVERWORLD;

  const mapFlowers: FlowerCache | null = inOverworld
    ? [flower1, flower2, flower3]
    : null;

  const tilesetMetadata = getTilesetMetadata(tilesetName);

  const grass: OffscreenCanvas | null = tilesetMetadata.grassTile
    ? newMapCanvas()
    : null;

  const ctx = canvas.getContext("2d");

  for (let blockY = 0; blockY < height; blockY++) {
    for (let blockX = 0; blockX < width; blockX++) {
      const blockIndex = blockY * width + blockX;
      const mapBlock = blocks[blockIndex];
      const currentBlock = blockset[mapBlock];

      for (let tileY = 0; tileY < 4; tileY++) {
        for (let tileX = 0; tileX < 4; tileX++) {
          const tileIndex = tileY * 4 + tileX;
          const tile = currentBlock[tileIndex];

          // Source coordinates on the tileset
          const sx = (tile % TILES_PER_ROW) * TILE_SIZE_PX;
          const sy = Math.floor(tile / TILES_PER_ROW) * TILE_SIZE_PX;

          // Destination on the canvas
          const dx = blockX * BLOCK_SIZE_PX + tileX * TILE_SIZE_PX;
          const dy = blockY * BLOCK_SIZE_PX + tileY * TILE_SIZE_PX;

          ctx?.drawImage(
            tileset,
            sx,
            sy,
            TILE_SIZE_PX,
            TILE_SIZE_PX,
            dx,
            dy,
            TILE_SIZE_PX,
            TILE_SIZE_PX
          );

          if (
            grass &&
            tilesetMetadata.grassTile &&
            tile === tilesetMetadata?.grassTile.tileId
          ) {
            const grassMask = images[tilesetMetadata.grassTile.imageKey];
            //console.log(tile, tilesetName, tilesetMetadata.grassTile.imageKey);
            const grassCtx = grass.getContext("2d");
            grassCtx?.drawImage(grassMask, 0, 0, 8, 8, dx, dy, 8, 8);
          }

          // If this is a flower tile, render out our flowers.
          if (inOverworld && mapFlowers && tile === 3) {
            for (let i = 0; i < 3; i++) {
              const flowerMap = mapFlowers[i];
              const flowerImage = images[FLOWER_SPRITES[i]];
              const flowerCtx = flowerMap.getContext("2d");
              flowerCtx?.drawImage(flowerImage, 0, 0, 8, 8, dx, dy, 8, 8);
            }
          }
        }
      }
    }
  }

  return {
    mapImage: canvas,
    grass,
    flowers: mapFlowers
  };
}
