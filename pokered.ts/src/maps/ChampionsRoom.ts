import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CHAMPIONS_ROOM_BLOCKS } from "../data/blocks/ChampionsRoom";
import { OverworldSprite } from "../sprite";

export const ChampionsRoom: Map = {
  width: 4,
  height: 4,
  borderBlock: 3,
  blocks: CHAMPIONS_ROOM_BLOCKS,
  tileset: Tileset.GYM,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: MapName.LancesRoom, warpIndex: 1 },
      { x: 4, y: 7, toMap: MapName.LancesRoom, warpIndex: 2 },
      { x: 3, y: 0, toMap: MapName.HallOfFame, warpIndex: 0 },
      { x: 4, y: 0, toMap: MapName.HallOfFame, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 4,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_BLUE,
        movement: "STAY",
        textId: "TEXT_CHAMPIONSROOM_RIVAL"
      },
      {
        type: "sprite",
        x: 3,
        y: 7,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_OAK,
        movement: "STAY",
        textId: "TEXT_CHAMPIONSROOM_OAK"
      }
    ]
  },
  text: {
    _ChampionsRoomRivalIntroText: [
      ["text", "<RIVAL>: Hey!"],
      ["para", "I was looking"],
      ["line", "forward to seeing"],
      ["cont", "you, <PLAYER>!"],
      ["para", "My rival should"],
      ["line", "be strong to keep"],
      ["cont", "me sharp!"],
      ["para", "While working on"],
      ["line", "#DEX, I looked"],
      ["cont", "all over for"],
      ["cont", "powerful #MON!"],
      ["para", "Not only that, I"],
      ["line", "assembled teams"],
      ["cont", "that would beat"],
      ["cont", "any #MON type!"],
      ["para", "And now!"],
      ["para", "I'm the #MON"],
      ["line", "LEAGUE champion!"],
      ["para", "<PLAYER>! Do you"],
      ["line", "know what that"],
      ["cont", "means?"],
      ["para", "I'll tell you!"],
      ["para", "I am the most"],
      ["line", "powerful trainer"],
      ["cont", "in the world!"]
    ],
    _RivalDefeatedText: [
      ["text", "NO!"],
      ["line", "That can't be!"],
      ["cont", "You beat my best!"],
      ["para", "After all that"],
      ["line", "work to become"],
      ["cont", "LEAGUE champ?"],
      ["para", "My reign is over"],
      ["line", "already?"],
      ["cont", "It's not fair!"],
      ["prompt"]
    ],
    _RivalVictoryText: [
      ["text", "Hahaha!"],
      ["line", "I won, I won!"],
      ["para", "I'm too good for"],
      ["line", "you, <PLAYER>!"],
      ["para", "You did well to"],
      ["line", "even reach me,"],
      ["cont", "<RIVAL>, the"],
      ["cont", "#MON genius!"],
      ["para", "Nice try, loser!"],
      ["line", "Hahaha!"],
      ["prompt"]
    ],
    _ChampionsRoomRivalAfterBattleText: [
      ["text", "Why?"],
      ["line", "Why did I lose?"],
      ["para", "I never made any"],
      ["line", "mistakes raising"],
      ["cont", "my #MON..."],
      ["para", "Darn it! You're"],
      ["line", "the new #MON"],
      ["cont", "LEAGUE champion!"],
      ["para", "Although I don't"],
      ["line", "like to admit it."]
    ],
    _ChampionsRoomOakText: [["text", "OAK: <PLAYER>!"]],
    _ChampionsRoomOakCongratulatesPlayerText: [
      ["text", "OAK: So, you won!"],
      ["line", "Congratulations!"],
      ["cont", "You're the new"],
      ["cont", "#MON LEAGUE"],
      ["cont", "champion!"],
      ["para", "You've grown up so"],
      ["line", "much since you"],
      ["cont", "first left with"],
      ["cont", "@"],
      ["text_ram", "wNameBuffer"],
      ["text", "!"],
      ["para", "<PLAYER>, you have"],
      ["line", "come of age!"]
    ],
    _ChampionsRoomOakDisappointedWithRivalText: [
      ["text", "OAK: <RIVAL>! I'm"],
      ["line", "disappointed!"],
      ["para", "I came when I"],
      ["line", "heard you beat"],
      ["cont", "the ELITE FOUR!"],
      ["para", "But, when I got"],
      ["line", "here, you had"],
      ["cont", "already lost!"],
      ["para", "<RIVAL>! Do you"],
      ["line", "understand why"],
      ["cont", "you lost?"],
      ["para", "You have forgotten"],
      ["line", "to treat your"],
      ["cont", "#MON with"],
      ["cont", "trust and love!"],
      ["para", "Without them, you"],
      ["line", "will never become"],
      ["cont", "a champ again!"]
    ],
    _ChampionsRoomOakComeWithMeText: [
      ["text", "OAK: <PLAYER>!"],
      ["para", "You understand"],
      ["line", "that your victory"],
      ["cont", "was not just your"],
      ["cont", "own doing!"],
      ["para", "The bond you share"],
      ["line", "with your #MON"],
      ["cont", "is marvelous!"],
      ["para", "<PLAYER>!"],
      ["line", "Come with me!"]
    ]
  }
};
