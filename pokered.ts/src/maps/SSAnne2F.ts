import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_2F_BLOCKS } from "../data/blocks/SSAnne2F";
import { OverworldSprite } from "../sprite";

export const SSAnne2F: Map = {
  width: 20,
  height: 9,
  borderBlock: 12,
  blocks: SS_ANNE_2F_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [
      { x: 9, y: 11, toMap: MapName.SSAnne2FRooms, warpIndex: 0 },
      { x: 13, y: 11, toMap: MapName.SSAnne2FRooms, warpIndex: 2 },
      { x: 17, y: 11, toMap: MapName.SSAnne2FRooms, warpIndex: 4 },
      { x: 21, y: 11, toMap: MapName.SSAnne2FRooms, warpIndex: 6 },
      { x: 25, y: 11, toMap: MapName.SSAnne2FRooms, warpIndex: 8 },
      { x: 29, y: 11, toMap: MapName.SSAnne2FRooms, warpIndex: 10 },
      { x: 2, y: 4, toMap: MapName.SSAnne1F, warpIndex: 8 },
      { x: 2, y: 12, toMap: MapName.SSAnne3F, warpIndex: 1 },
      { x: 36, y: 4, toMap: MapName.SSAnneCaptainsRoom, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 7,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_WAITER,
        movement: "WALK",
        textId: "TEXT_SSANNE2F_WAITER"
      },
      {
        type: "trainer",
        x: 36,
        y: 4,
        sprite: OverworldSprite.SPRITE_BLUE,
        direction: "DOWN",
        movement: "STAY",
        textId: "TEXT_SSANNE2F_RIVAL",
        trainerId: "OPP_RIVAL1",
        trainerLevel: 1
      }
    ]
  },
  text: {
    _SSAnne2FWaiterText: [
      ["text", "This ship, she is"],
      ["line", "a luxury liner"],
      ["cont", "for trainers!"],
      ["para", "At every port, we"],
      ["line", "hold parties with"],
      ["cont", "invited trainers!"]
    ],
    _SSAnne2FRivalText: [
      ["text", "<RIVAL>: Bonjour!"],
      ["line", "<PLAYER>!"],
      ["para", "Imagine seeing"],
      ["line", "you here!"],
      ["para", "<PLAYER>, were you"],
      ["line", "really invited?"],
      ["para", "So how's your"],
      ["line", "#DEX coming?"],
      ["para", "I already caught"],
      ["line", "40 kinds, pal!"],
      ["para", "Different kinds"],
      ["line", "are everywhere!"],
      ["para", "Crawl around in"],
      ["line", "grassy areas!"]
    ],
    _SSAnne2FRivalDefeatedText: [
      ["text", "Humph!"],
      ["para", "At least you're"],
      ["line", "raising your"],
      ["cont", "#MON!"],
      ["prompt"]
    ],
    _SSAnne2FRivalVictoryText: [
      ["text", "<PLAYER>! What are"],
      ["line", "you, seasick?"],
      ["para", "You should shape"],
      ["line", "up, pal!"],
      ["prompt"]
    ],
    _SSAnne2FRivalCutMasterText: [
      ["text", "<RIVAL>: I heard"],
      ["line", "there was a CUT"],
      ["cont", "master on board."],
      ["para", "But, he was just a"],
      ["line", "seasick, old man!"],
      ["para", "But, CUT itself is"],
      ["line", "really useful!"],
      ["para", "You should go see"],
      ["line", "him! Smell ya!"]
    ]
  }
};
