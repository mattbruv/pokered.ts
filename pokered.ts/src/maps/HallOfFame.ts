import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { HALL_OF_FAME_BLOCKS } from "../data/blocks/HallOfFame";
import { OverworldSprite } from "../sprite";

export const HallOfFame: Map = {
  width: 5,
  height: 4,
  borderBlock: 3,
  blocks: HALL_OF_FAME_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 7, toMap: MapName.ChampionsRoom, warpIndex: 2 },
      { x: 5, y: 7, toMap: MapName.ChampionsRoom, warpIndex: 3 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 5,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_OAK,
        movement: "STAY",
        textId: "TEXT_HALLOFFAME_OAK"
      }
    ]
  },
  text: {
    _HallOfFameOakText: [
      ["text", "OAK: Er-hem!"],
      ["line", "Congratulations"],
      ["cont", "<PLAYER>!"],
      ["para", "This floor is the"],
      ["line", "#MON HALL OF"],
      ["cont", "FAME!"],
      ["para", "#MON LEAGUE"],
      ["line", "champions are"],
      ["cont", "honored for their"],
      ["cont", "exploits here!"],
      ["para", "Their #MON are"],
      ["line", "also recorded in"],
      ["cont", "the HALL OF FAME!"],
      ["para", "<PLAYER>! You have"],
      ["line", "endeavored hard"],
      ["cont", "to become the new"],
      ["cont", "LEAGUE champion!"],
      ["para", "Congratulations,"],
      ["line", "<PLAYER>, you and"],
      ["cont", "your #MON are"],
      ["cont", "HALL OF FAMERs!"]
    ]
  }
};
