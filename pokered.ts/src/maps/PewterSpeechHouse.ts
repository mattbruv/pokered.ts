import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_SPEECH_HOUSE_BLOCKS } from "../data/blocks/PewterSpeechHouse";
import { OverworldSprite } from "../sprite";

export const PewterSpeechHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: PEWTER_SPEECH_HOUSE_BLOCKS,
  tileset: Tileset.HOUSE,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 5 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_PEWTERSPEECHHOUSE_GAMBLER"
      },
      {
        type: "sprite",
        x: 4,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_PEWTERSPEECHHOUSE_YOUNGSTER"
      }
    ]
  },
  text: {
    _PewterSpeechHouseGamblerText: [
      ["text", "#MON learn new"],
      ["line", "techniques as"],
      ["cont", "they grow!"],
      ["para", "But, some moves"],
      ["line", "must be taught by"],
      ["cont", "the trainer!"]
    ],
    _PewterSpeechHouseYoungsterText: [
      ["text", "#MON become"],
      ["line", "easier to catch"],
      ["cont", "when they are"],
      ["cont", "hurt or asleep!"],
      ["para", "But, it's not a"],
      ["line", "sure thing!"]
    ]
  }
};
