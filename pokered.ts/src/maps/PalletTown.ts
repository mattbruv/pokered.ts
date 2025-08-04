import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PALLET_TOWN_BLOCKS } from "../data/blocks/PalletTown";
import { OverworldSprite } from "../sprite";

export const PalletTown: Map = {
  width: 10,
  height: 9,
  borderBlock: 11,
  blocks: PALLET_TOWN_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route1, xOffset: 0 },
    south: { map: MapName.Route21, xOffset: 0 }
  },
  objects: {
    warps: [
      { x: 5, y: 5, toMap: MapName.RedsHouse1F, warpIndex: 0 },
      { x: 13, y: 5, toMap: MapName.BluesHouse, warpIndex: 0 },
      { x: 12, y: 11, toMap: MapName.OaksLab, warpIndex: 1 }
    ],
    backgroundItems: [
      { x: 13, y: 13, signId: "TEXT_PALLETTOWN_OAKSLAB_SIGN" },
      { x: 7, y: 9, signId: "TEXT_PALLETTOWN_SIGN" },
      { x: 3, y: 5, signId: "TEXT_PALLETTOWN_PLAYERSHOUSE_SIGN" },
      { x: 11, y: 5, signId: "TEXT_PALLETTOWN_RIVALSHOUSE_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_OAK,
        movement: "STAY",
        textId: "TEXT_PALLETTOWN_OAK"
      },
      {
        type: "sprite",
        x: 3,
        y: 8,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_PALLETTOWN_GIRL"
      },
      {
        type: "sprite",
        x: 11,
        y: 14,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "WALK",
        textId: "TEXT_PALLETTOWN_FISHER"
      }
    ]
  },
  text: {
    _PalletTownOakHeyWaitDontGoOutText: [
      ["text", "OAK: Hey! Wait!"],
      ["line", "Don't go out!@"],
      ["text_end"]
    ],
    _PalletTownOakItsUnsafeText: [
      ["text", "OAK: It's unsafe!"],
      ["line", "Wild #MON live"],
      ["cont", "in tall grass!"],
      ["para", "You need your own"],
      ["line", "#MON for your"],
      ["cont", "protection."],
      ["cont", "I know!"],
      ["para", "Here, come with"],
      ["line", "me!"]
    ],
    _PalletTownGirlText: [
      ["text", "I'm raising"],
      ["line", "#MON too!"],
      ["para", "When they get"],
      ["line", "strong, they can"],
      ["cont", "protect me!"]
    ],
    _PalletTownFisherText: [
      ["text", "Technology is"],
      ["line", "incredible!"],
      ["para", "You can now store"],
      ["line", "and recall items"],
      ["cont", "and #MON as"],
      ["cont", "data via PC!"]
    ],
    _PalletTownOaksLabSignText: [
      ["text", "OAK #MON"],
      ["line", "RESEARCH LAB"]
    ],
    _PalletTownSignText: [
      ["text", "PALLET TOWN"],
      ["line", "Shades of your"],
      ["cont", "journey await!"]
    ],
    _PalletTownPlayersHouseSignText: [["text", "<PLAYER>'s house "]],
    _PalletTownRivalsHouseSignText: [["text", "<RIVAL>'s house "]]
  }
};
