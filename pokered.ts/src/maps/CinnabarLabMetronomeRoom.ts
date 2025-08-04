import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_LAB_METRONOME_ROOM_BLOCKS } from "../data/blocks/CinnabarLabMetronomeRoom";
import { OverworldSprite } from "../sprite";

export const CinnabarLabMetronomeRoom: Map = {
  width: 4,
  height: 4,
  borderBlock: 23,
  blocks: CINNABAR_LAB_METRONOME_ROOM_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: MapName.CinnabarLab, warpIndex: 3 },
      { x: 3, y: 7, toMap: MapName.CinnabarLab, warpIndex: 3 }
    ],
    backgroundItems: [
      { x: 0, y: 4, signId: "TEXT_CINNABARLABMETRONOMEROOM_PC_KEYBOARD" },
      { x: 1, y: 4, signId: "TEXT_CINNABARLABMETRONOMEROOM_PC_MONITOR" },
      { x: 2, y: 1, signId: "TEXT_CINNABARLABMETRONOMEROOM_AMBER_PIPE" }
    ],
    objects: [
      {
        type: "sprite",
        x: 7,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_CINNABARLABMETRONOMEROOM_SCIENTIST1"
      },
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "WALK",
        textId: "TEXT_CINNABARLABMETRONOMEROOM_SCIENTIST2"
      }
    ]
  },
  text: {
    _CinnabarLabMetronomeRoomScientist1Text: [
      ["text", "Tch-tch-tch!"],
      ["line", "I made a cool TM!"],
      ["para", "It can cause all"],
      ["line", "kinds of fun!"],
      ["prompt"]
    ],
    _CinnabarLabMetronomeRoomScientist1ReceivedTM35Text: [
      ["text", "<PLAYER> received "],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _CinnabarLabMetronomeRoomScientist1TM35ExplanationText: [
      ["text", "Tch-tch-tch!"],
      ["line", "That's the sound"],
      ["cont", "of a METRONOME!"],
      ["para", "It tweaks your"],
      ["line", "#MON's brain"],
      ["cont", "into using moves"],
      ["cont", "it doesn't know!"]
    ],
    _CinnabarLabMetronomeRoomScientist1TM35NoRoomText: [
      ["text", "Your pack is"],
      ["line", "crammed full!"]
    ],
    _CinnabarLabMetronomeRoomScientist2Text: [
      ["text", "EEVEE can evolve"],
      ["line", "into 1 of 3 kinds"],
      ["cont", "of #MON."]
    ],
    _CinnabarLabMetronomeRoomPCText: [
      ["text", "There's an e-mail"],
      ["line", "message!"],
      ["para", "..."],
      ["para", "The 3 legendary"],
      ["line", "bird #MON are"],
      ["cont", "ARTICUNO, ZAPDOS"],
      ["cont", "and MOLTRES."],
      ["para", "Their whereabouts"],
      ["line", "are unknown."],
      ["para", "We plan to explore"],
      ["line", "the cavern close"],
      ["cont", "to CERULEAN."],
      ["para", "From: #MON"],
      ["line", "RESEARCH TEAM"],
      ["para", "..."]
    ],
    _CinnabarLabMetronomeRoomAmberPipeText: [["text", "An amber pipe!"]]
  }
};
