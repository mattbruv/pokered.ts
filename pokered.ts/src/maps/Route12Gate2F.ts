import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_12_GATE_2F_BLOCKS } from "../data/blocks/Route12Gate2F";
import { OverworldSprite } from "../sprite";

export const Route12Gate2F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: ROUTE_12_GATE_2F_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [{ x: 7, y: 7, toMap: MapName.Route12Gate1F, warpIndex: 4 }],
    backgroundItems: [
      { x: 1, y: 2, signId: "TEXT_ROUTE12GATE2F_LEFT_BINOCULARS" },
      { x: 6, y: 2, signId: "TEXT_ROUTE12GATE2F_RIGHT_BINOCULARS" }
    ],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 4,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_BRUNETTE_GIRL,
        movement: "WALK",
        textId: "TEXT_ROUTE12GATE2F_BRUNETTE_GIRL"
      }
    ]
  },
  text: {
    _Route12Gate2FBrunetteGirlYouCanHaveThisText: [
      ["text", "My #MON's"],
      ["line", "ashes are stored"],
      ["cont", "in #MON TOWER."],
      ["para", "You can have this"],
      ["line", "TM. I don't need"],
      ["cont", "it any more..."],
      ["prompt"]
    ],
    _Route12Gate2FBrunetteGirlReceivedTM39Text: [
      ["text", "<PLAYER> received"],
      ["line", "TM39!@"],
      ["text_end"]
    ],
    _Route12Gate2FBrunetteGirlTM39ExplanationText: [
      ["text", "TM39 is a move"],
      ["line", "called SWIFT."],
      ["para", "It's very accurate,"],
      ["line", "so use it during"],
      ["cont", "battles you can't"],
      ["cont", "afford to lose."]
    ],
    _Route12Gate2FBrunetteGirlTM39NoRoomText: [
      ["text", "You don't have"],
      ["line", "room for this."]
    ],
    _Route12Gate2FLeftBinocularsText: [
      ["text", "Looked into the"],
      ["line", "binoculars."],
      ["para", "A man fishing!"]
    ],
    _Route12Gate2FRightBinocularsText: [
      ["text", "Looked into the"],
      ["line", "binoculars."],
      ["para", "It's #MON TOWER!"]
    ]
  }
};
