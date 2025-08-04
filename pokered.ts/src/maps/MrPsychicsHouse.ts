import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MR_PSYCHICS_HOUSE_BLOCKS } from "../data/blocks/MrPsychicsHouse";
import { OverworldSprite } from "../sprite";

export const MrPsychicsHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: MR_PSYCHICS_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 7 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 7 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 3,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_FISHING_GURU,
        movement: "STAY",
        textId: "TEXT_MRPSYCHICSHOUSE_MR_PSYCHIC"
      }
    ]
  },
  text: {
    _MrPsychicsHouseMrPsychicYouWantedThisText: [
      ["text", "...Wait! Don't"],
      ["line", "say a word!"],
      ["para", "You wanted this!"],
      ["prompt"]
    ],
    _MrPsychicsHouseMrPsychicReceivedTM29Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _MrPsychicsHouseMrPsychicTM29ExplanationText: [
      ["text", "TM29 is PSYCHIC!"],
      ["para", "It can lower the"],
      ["line", "target's SPECIAL"],
      ["cont", "abilities."]
    ],
    _MrPsychicsHouseMrPsychicTM29NoRoomText: [
      ["text", "Where do you plan"],
      ["line", "to put this?"]
    ]
  }
};
