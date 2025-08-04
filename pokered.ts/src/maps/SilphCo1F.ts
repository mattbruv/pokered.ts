import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SILPH_CO_1F_BLOCKS } from "../data/blocks/SilphCo1F";
import { OverworldSprite } from "../sprite";

export const SilphCo1F: Map = {
  width: 15,
  height: 9,
  borderBlock: 46,
  blocks: SILPH_CO_1F_BLOCKS,
  tileset: Tileset.FACILITY,
  connections: {},
  objects: {
    warps: [
      { x: 10, y: 17, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 11, y: 17, toMap: "LAST_MAP", warpIndex: 5 },
      { x: 26, y: 0, toMap: MapName.SilphCo2F, warpIndex: 0 },
      { x: 20, y: 0, toMap: MapName.SilphCoElevator, warpIndex: 0 },
      { x: 16, y: 10, toMap: MapName.SilphCo3F, warpIndex: 6 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_SILPHCO1F_LINK_RECEPTIONIST"
      }
    ]
  },
  text: {
    _SilphCo1FLinkReceptionistText: [
      ["text", "Welcome!"],
      ["para", "The PRESIDENT is"],
      ["line", "in the boardroom"],
      ["cont", "on 11F!"]
    ]
  }
};
