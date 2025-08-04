import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_1F_BLOCKS } from "../data/blocks/SSAnne1F";
import { OverworldSprite } from "../sprite";

export const SSAnne1F: Map = {
  width: 20,
  height: 9,
  borderBlock: 12,
  blocks: SS_ANNE_1F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 26, y: 0, toMap: MapName.VermilionDock, warpIndex: 1 },
      { x: 27, y: 0, toMap: MapName.VermilionDock, warpIndex: 1 },
      { x: 31, y: 8, toMap: MapName.SSAnne1FRooms, warpIndex: 0 },
      { x: 23, y: 8, toMap: MapName.SSAnne1FRooms, warpIndex: 1 },
      { x: 19, y: 8, toMap: MapName.SSAnne1FRooms, warpIndex: 2 },
      { x: 15, y: 8, toMap: MapName.SSAnne1FRooms, warpIndex: 3 },
      { x: 11, y: 8, toMap: MapName.SSAnne1FRooms, warpIndex: 4 },
      { x: 7, y: 8, toMap: MapName.SSAnne1FRooms, warpIndex: 5 },
      { x: 2, y: 6, toMap: MapName.SSAnne2F, warpIndex: 6 },
      { x: 37, y: 15, toMap: MapName.SSAnneB1F, warpIndex: 5 },
      { x: 3, y: 16, toMap: MapName.SSAnneKitchen, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 12,
        y: 6,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_WAITER,
        movement: "WALK",
        textId: "TEXT_SSANNE1F_WAITER"
      },
      {
        type: "sprite",
        x: 27,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SAILOR,
        movement: "STAY",
        textId: "TEXT_SSANNE1F_SAILOR"
      }
    ]
  },
  text: {
    _SSAnne1FWaiterText: [
      ["text", "Bonjour!"],
      ["line", "I am le waiter on"],
      ["cont", "this ship!"],
      ["para", "I will be happy"],
      ["line", "to serve you any-"],
      ["cont", "thing you please!"],
      ["para", "Ah! Le strong"],
      ["line", "silent type!"]
    ],
    _SSAnne1FSailorText: [
      ["text", "The passengers"],
      ["line", "are restless!"],
      ["para", "You might be"],
      ["line", "challenged by the"],
      ["cont", "more bored ones!"]
    ]
  }
};
