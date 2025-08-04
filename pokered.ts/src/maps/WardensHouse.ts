import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { WARDENS_HOUSE_BLOCKS } from "../data/blocks/WardensHouse";
import { OverworldSprite } from "../sprite";

export const WardensHouse: Map = {
  width: 5,
  height: 4,
  borderBlock: 23,
  blocks: WARDENS_HOUSE_BLOCKS,
  tileset: Tileset.LAB,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 3 },
      { x: 5, y: 7, toMap: "LAST_MAP", warpIndex: 3 }
    ],
    backgroundItems: [
      { x: 4, y: 3, signId: "TEXT_WARDENSHOUSE_DISPLAY_LEFT" },
      { x: 5, y: 3, signId: "TEXT_WARDENSHOUSE_DISPLAY_RIGHT" }
    ],
    objects: [
      {
        type: "sprite",
        x: 2,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_WARDEN,
        movement: "STAY",
        textId: "TEXT_WARDENSHOUSE_WARDEN"
      },
      {
        type: "item",
        x: 8,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_WARDENSHOUSE_RARE_CANDY",
        itemId: "RARE_CANDY"
      },
      {
        type: "sprite",
        x: 8,
        y: 4,
        direction: "BOULDER_MOVEMENT_BYTE_2",
        sprite: OverworldSprite.SPRITE_BOULDER,
        movement: "STAY",
        textId: "TEXT_WARDENSHOUSE_BOULDER"
      }
    ]
  },
  text: {
    _WardensHouseWardenGibberish1Text: [
      ["text", "WARDEN: Hif fuff"],
      ["line", "hefifoo!"],
      ["para", "Ha lof ha feef ee"],
      ["line", "hafahi ho. Heff"],
      ["cont", "hee fwee!"]
    ],
    _WardensHouseWardenGibberish2Text: [
      ["text", "Ah howhee ho hoo!"],
      ["line", "Eef ee hafahi ho!"]
    ],
    _WardensHouseWardenGibberish3Text: [
      ["text", "Ha? He ohay heh"],
      ["line", "ha hoo ee haheh!"]
    ],
    _WardensHouseWardenGaveTheGoldTeethText: [
      ["text", "<PLAYER> gave the"],
      ["line", "GOLD TEETH to the"],
      ["cont", "WARDEN!@"],
      ["text_end"]
    ],
    _WardensHouseWardenTeethPoppedInHisTeethText: [
      ["text_start"],
      ["para", "The WARDEN popped"],
      ["line", "in his teeth!"],
      ["prompt"]
    ],
    _WardensHouseWardenThanksText: [
      ["text", "WARDEN: Thanks,"],
      ["line", "kid! No one could"],
      ["cont", "understand a word"],
      ["cont", "that I said."],
      ["para", "I couldn't work"],
      ["line", "that way."],
      ["cont", "Let me give you"],
      ["cont", "something for"],
      ["cont", "your trouble."],
      ["prompt"]
    ],
    _WardensHouseWardenReceivedHM04Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _WardensHouseWardenHM04ExplanationText: [
      ["text", "WARDEN: HM04"],
      ["line", "teaches STRENGTH!"],
      ["para", "It lets #MON"],
      ["line", "move boulders"],
      ["cont", "when you're out-"],
      ["cont", "side of battle."],
      ["para", "Oh yes, did you"],
      ["line", "find SECRET HOUSE"],
      ["cont", "in SAFARI ZONE?"],
      ["para", "If you do, you"],
      ["line", "win an HM!"],
      ["para", "I hear it's the"],
      ["line", "rare SURF HM."]
    ],
    _WardensHouseWardenHM04NoRoomText: [
      ["text", "Your pack is"],
      ["line", "stuffed full!"]
    ],
    _WardensHouseDisplayPhotosAndFossilsText: [
      ["text", "#MON photos"],
      ["line", "and fossils."]
    ],
    _WardensHouseDisplayMerchandiseText: [
      ["text", "Old #MON"],
      ["line", "merchandise."]
    ]
  }
};
