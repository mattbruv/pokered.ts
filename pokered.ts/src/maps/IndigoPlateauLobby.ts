import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { INDIGO_PLATEAU_LOBBY_BLOCKS } from "../data/blocks/IndigoPlateauLobby";
import { OverworldSprite } from "../sprite";

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
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_NURSE,
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_NURSE"
      },
      {
        type: "sprite",
        x: 4,
        y: 9,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GYM_GUIDE,
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_GYM_GUIDE"
      },
      {
        type: "sprite",
        x: 5,
        y: 1,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_COOLTRAINER_F"
      },
      {
        type: "sprite",
        x: 0,
        y: 5,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_CLERK,
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_CLERK"
      },
      {
        type: "sprite",
        x: 13,
        y: 6,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_INDIGOPLATEAULOBBY_LINK_RECEPTIONIST"
      }
    ]
  },
  text: {
    _IndigoPlateauLobbyGymGuideText: [
      ["text", "Yo! Champ in"],
      ["line", "making!"],
      ["para", "At #MON LEAGUE,"],
      ["line", "you have to face"],
      ["cont", "the ELITE FOUR in"],
      ["cont", "succession."],
      ["para", "If you lose, you"],
      ["line", "have to start all"],
      ["cont", "over again! This"],
      ["cont", "is it! Go for it!"]
    ],
    _IndigoPlateauLobbyCooltrainerFText: [
      ["text", "From here on, you"],
      ["line", "face the ELITE"],
      ["cont", "FOUR one by one!"],
      ["para", "If you win, a"],
      ["line", "door opens to the"],
      ["cont", "next trainer!"],
      ["cont", "Good luck!"]
    ]
  }
};
