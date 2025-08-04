import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_CAPTAINS_ROOM_BLOCKS } from "../data/blocks/SSAnneCaptainsRoom";
import { OverworldSprite } from "../sprite";

export const SSAnneCaptainsRoom: Map = {
  width: 3,
  height: 4,
  borderBlock: 12,
  blocks: SS_ANNE_CAPTAINS_ROOM_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [{ x: 0, y: 7, toMap: MapName.SSAnne2F, warpIndex: 8 }],
    backgroundItems: [
      { x: 4, y: 1, signId: "TEXT_SSANNECAPTAINSROOM_TRASH" },
      { x: 1, y: 2, signId: "TEXT_SSANNECAPTAINSROOM_SEASICK_BOOK" }
    ],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_CAPTAIN,
        movement: "STAY",
        textId: "TEXT_SSANNECAPTAINSROOM_CAPTAIN"
      }
    ]
  },
  text: {
    _SSAnneCaptainsRoomRubCaptainsBackText: [
      ["text", "CAPTAIN: Ooargh..."],
      ["line", "I feel hideous..."],
      ["cont", "Urrp! Seasick..."],
      ["para", "<PLAYER> rubbed"],
      ["line", "the CAPTAIN's"],
      ["cont", "back!"],
      ["para", "Rub-rub..."],
      ["line", "Rub-rub...@"],
      ["text_end"]
    ],
    _SSAnneCaptainsRoomCaptainIFeelMuchBetterText: [
      ["text", "CAPTAIN: Whew!"],
      ["line", "Thank you! I"],
      ["cont", "feel much better!"],
      ["para", "You want to see"],
      ["line", "my CUT technique?"],
      ["para", "I could show you"],
      ["line", "if I wasn't ill..."],
      ["para", "I know! You can"],
      ["line", "have this!"],
      ["para", "Teach it to your"],
      ["line", "#MON and you"],
      ["cont", "can see it CUT"],
      ["cont", "any time!"],
      ["prompt"]
    ],
    _SSAnneCaptainsRoomCaptainReceivedHM01Text: [
      ["text", "<PLAYER> got"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _SSAnneCaptainsRoomCaptainNotSickAnymoreText: [
      ["text", "CAPTAIN: Whew!"],
      ["para", "Now that I'm not"],
      ["line", "sick any more, I"],
      ["cont", "guess it's time."]
    ],
    _SSAnneCaptainsRoomCaptainHM01NoRoomText: [
      ["text", "Oh no! You have"],
      ["line", "no room for this!"]
    ],
    _SSAnneCaptainsRoomTrashText: [
      ["text", "Yuck! Shouldn't"],
      ["line", "have looked!"]
    ],
    _SSAnneCaptainsRoomSeasickBookText: [
      ["text", "How to Conquer"],
      ["line", "Seasickness..."],
      ["cont", "The CAPTAIN's"],
      ["cont", "reading this!"]
    ]
  }
};
