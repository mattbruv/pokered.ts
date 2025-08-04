import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CINNABAR_LAB_FOSSIL_ROOM_BLOCKS } from "../data/blocks/CinnabarLabFossilRoom";
import { OverworldSprite } from "../sprite";

export const CinnabarLabFossilRoom: Map = {
  width: 4,
  height: 4,
  borderBlock: 23,
  blocks: CINNABAR_LAB_FOSSIL_ROOM_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: MapName.CinnabarLab, warpIndex: 4 },
      { x: 3, y: 7, toMap: MapName.CinnabarLab, warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 2,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "WALK",
        textId: "TEXT_CINNABARLABFOSSILROOM_SCIENTIST1"
      },
      {
        type: "sprite",
        x: 7,
        y: 6,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_CINNABARLABFOSSILROOM_SCIENTIST2"
      }
    ]
  },
  text: {
    _CinnabarLabFossilRoomScientist1Text: [
      ["text", "Hiya!"],
      ["para", "I am important"],
      ["line", "doctor!"],
      ["para", "I study here rare"],
      ["line", "#MON fossils!"],
      ["para", "You! Have you a"],
      ["line", "fossil for me?"],
      ["prompt"]
    ],
    _CinnabarLabFossilRoomScientist1NoFossilsText: [
      ["text", "No! Is too bad!"]
    ],
    _CinnabarLabFossilRoomScientist1GoForAWalkText: [
      ["text", "I take a little"],
      ["line", "time!"],
      ["para", "You go for walk a"],
      ["line", "little while!"]
    ],
    _CinnabarLabFossilRoomScientist1FossilIsBackToLifeText: [
      ["text", "Where were you?"],
      ["para", "Your fossil is"],
      ["line", "back to life!"],
      ["para", "It was @"],
      ["text_ram", "wStringBuffer"],
      ["text_start"],
      ["line", "like I think!"],
      ["prompt"]
    ],
    _CinnabarLabFossilRoomScientist1SeesFossilText: [
      ["text", "Oh! That is"],
      ["line", "@"],
      ["text_ram", "wNameBuffer"],
      ["text", "!"],
      ["para", "It is fossil of"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", ", a"],
      ["cont", "#MON that is"],
      ["cont", "already extinct!"],
      ["para", "My Resurrection"],
      ["line", "Machine will make"],
      ["cont", "that #MON live"],
      ["cont", "again!"]
    ],
    _CinnabarLabFossilRoomScientist1TakesFossilText: [
      ["text", "So! You hurry and"],
      ["line", "give me that!"],
      ["para", "<PLAYER> handed"],
      ["line", "over @"],
      ["text_ram", "wNameBuffer"],
      ["text", "!"],
      ["prompt"]
    ],
    _CinnabarLabFossilRoomScientist1GoForAWalkText2: [
      ["text", "I take a little"],
      ["line", "time!"],
      ["para", "You go for walk a"],
      ["line", "little while!"]
    ],
    _CinnabarLabFossilRoomScientist1ComeAgainText: [
      ["text", "Aiyah! You come"],
      ["line", "again!"]
    ]
  }
};
