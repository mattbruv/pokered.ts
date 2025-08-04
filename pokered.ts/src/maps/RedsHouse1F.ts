import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { REDS_HOUSE_1F_BLOCKS } from "../data/blocks/RedsHouse1F";
import { OverworldSprite } from "../sprite";

export const RedsHouse1F: Map = {
  width: 4,
  height: 4,
  borderBlock: 10,
  blocks: REDS_HOUSE_1F_BLOCKS,
  tileset: Tileset.REDS_HOUSE_1,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 7, y: 1, toMap: MapName.RedsHouse2F, warpIndex: 0 }
    ],
    backgroundItems: [{ x: 3, y: 1, signId: "TEXT_REDSHOUSE1F_TV" }],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 4,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_MOM,
        movement: "STAY",
        textId: "TEXT_REDSHOUSE1F_MOM"
      }
    ]
  },
  text: {
    _RedsHouse1FMomWakeUpText: [
      ["text", "MOM: Right."],
      ["line", "All boys leave"],
      ["cont", "home some day."],
      ["cont", "It said so on TV."],
      ["para", "PROF.OAK, next"],
      ["line", "door, is looking"],
      ["cont", "for you."]
    ],
    _RedsHouse1FMomYouShouldRestText: [
      ["text", "MOM: <PLAYER>!"],
      ["line", "You should take a"],
      ["cont", "quick rest."],
      ["prompt"]
    ],
    _RedsHouse1FMomLookingGreatText: [
      ["text", "MOM: Oh good!"],
      ["line", "You and your"],
      ["cont", "#MON are"],
      ["cont", "looking great!"],
      ["cont", "Take care now!"]
    ],
    _RedsHouse1FTVStandByMeMovieText: [
      ["text", "There's a movie"],
      ["line", "on TV. Four boys"],
      ["cont", "are walking on"],
      ["cont", "railroad tracks."],
      ["para", "I better go too."]
    ],
    _RedsHouse1FTVWrongSideText: [["text", "Oops, wrong side."]]
  }
};
