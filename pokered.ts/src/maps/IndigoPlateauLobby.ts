import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { INDIGO_PLATEAU_LOBBY_BLOCKS } from "../data/blocks/IndigoPlateauLobby";

export const IndigoPlateauLobby: Map = {
  width: 8,
  height: 6,
  borderBlock: 0,
  blocks: INDIGO_PLATEAU_LOBBY_BLOCKS,
  tileset: Tileset.MART,
  connections: {},
  objects: {
    warps: [
      { x: 7, y: 11, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 8, y: 11, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 8, y: 0, toMap: MapName.LoreleisRoom, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 7,
        y: 5,
        sprite: "SPRITE_NURSE",
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_NURSE"
      },
      {
        type: "sprite",
        x: 4,
        y: 9,
        sprite: "SPRITE_GYM_GUIDE",
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_GYM_GUIDE"
      },
      {
        type: "sprite",
        x: 5,
        y: 1,
        sprite: "SPRITE_COOLTRAINER_F",
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_COOLTRAINER_F"
      },
      {
        type: "sprite",
        x: 0,
        y: 5,
        sprite: "SPRITE_CLERK",
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_CLERK"
      },
      {
        type: "sprite",
        x: 13,
        y: 6,
        sprite: "SPRITE_LINK_RECEPTIONIST",
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
