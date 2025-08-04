import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_11_GATE_2F_BLOCKS } from "../data/blocks/Route11Gate2F";
import { OverworldSprite } from "../sprite";

export const Route11Gate2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_11_GATE_2F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 7, toMap: MapName.Route11Gate1F, warpIndex: 4 }],
    backgroundItems: [
      { x: 1, y: 2, signId: "TEXT_ROUTE11GATE2F_LEFT_BINOCULARS" },
      { x: 6, y: 2, signId: "TEXT_ROUTE11GATE2F_RIGHT_BINOCULARS" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "WALK",
        textId: "TEXT_ROUTE11GATE2F_YOUNGSTER"
      },
      {
        type: "sprite",
        x: 2,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_ROUTE11GATE2F_OAKS_AIDE"
      }
    ]
  },
  text: {
    _Route11Gate2FOaksAideItemfinderDescriptionText: [
      ["text", "There are items on"],
      ["line", "the ground that"],
      ["cont", "can't be seen."],
      ["para", "ITEMFINDER will"],
      ["line", "detect an item"],
      ["cont", "close to you."],
      ["para", "It can't pinpoint"],
      ["line", "it, so you have"],
      ["cont", "to look yourself!"]
    ],
    _Route11Gate2FLeftBinocularsSnorlaxText: [
      ["text", "Looked into the"],
      ["line", "binoculars."],
      ["para", "A big #MON is"],
      ["line", "asleep on a road!"]
    ],
    _Route11Gate2FLeftBinocularsNoSnorlaxText: [
      ["text", "Looked into the"],
      ["line", "binoculars."],
      ["para", "It's a beautiful"],
      ["line", "view!"]
    ],
    _Route11Gate2FRightBinocularsText: [
      ["text", "Looked into the"],
      ["line", "binoculars."],
      ["para", "The only way to"],
      ["line", "get from CERULEAN"],
      ["cont", "CITY to LAVENDER"],
      ["cont", "is by way of the"],
      ["cont", "ROCK TUNNEL."]
    ]
  }
};
