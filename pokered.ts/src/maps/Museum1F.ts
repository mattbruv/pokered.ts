import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { MUSEUM_1F_BLOCKS } from "../data/blocks/Museum1F";
import { OverworldSprite } from "../sprite";

export const Museum1F: Map = {
  width: 10,
  height: 4,
  borderBlock: 10,
  blocks: MUSEUM_1F_BLOCKS,
  tileset: Tileset.MUSEUM,
  connections: {},
  objects: {
    warps: [
      { x: 10, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 11, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 16, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 17, y: 7, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 7, y: 7, toMap: MapName.Museum2F, warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 12,
        y: 4,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_SCIENTIST1"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_GAMBLER"
      },
      {
        type: "sprite",
        x: 15,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_SCIENTIST2"
      },
      {
        type: "sprite",
        x: 17,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_SCIENTIST3"
      },
      {
        type: "sprite",
        x: 16,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_OLD_AMBER,
        movement: "STAY",
        textId: "TEXT_MUSEUM1F_OLD_AMBER"
      }
    ]
  },
  text: {
    _Museum1FScientist1ComeAgainText: [["text", "Come again!"]],
    _Museum1FScientist1WouldYouLikeToComeInText: [
      ["text", "It's ¥50 for a"],
      ["line", "child's ticket."],
      ["para", "Would you like to"],
      ["line", "come in?"]
    ],
    _Museum1FScientist1ThankYouText: [
      ["text", "Right, ¥50!"],
      ["line", "Thank you!"]
    ],
    _Museum1FScientist1DontHaveEnoughMoneyText: [
      ["text", "You don't have"],
      ["line", "enough money."],
      ["prompt"]
    ],
    _Museum1FScientist1DoYouKnowWhatAmberIsText: [
      ["text", "You can't sneak"],
      ["line", "in the back way!"],
      ["para", "Oh, whatever!"],
      ["line", "Do you know what"],
      ["cont", "AMBER is?"]
    ],
    _Museum1FScientist1TheresALabSomewhereText: [
      ["text", "There's a lab"],
      ["line", "somewhere trying"],
      ["cont", "to resurrect"],
      ["cont", "ancient #MON"],
      ["cont", "from AMBER."]
    ],
    _Museum1FScientist1AmberIsFossilizedTreeSapText: [
      ["text", "AMBER is fossil-"],
      ["line", "ized tree sap."]
    ],
    _Museum1FScientist1GoToOtherSideText: [
      ["text", "Please go to the"],
      ["line", "other side!"]
    ],
    _Museum1FScientist1TakePlentyOfTimeText: [
      ["text", "Take plenty of"],
      ["line", "time to look!"]
    ],
    _Museum1FGamblerText: [
      ["text", "That is one"],
      ["line", "magnificent"],
      ["cont", "fossil!"]
    ],
    _Museum1FScientist2TakeThisToAPokemonLabText: [
      ["text", "Ssh! I think that"],
      ["line", "this chunk of"],
      ["cont", "AMBER contains"],
      ["cont", "#MON DNA!"],
      ["para", "It would be great"],
      ["line", "if #MON could"],
      ["cont", "be resurrected"],
      ["cont", "from it!"],
      ["para", "But, my colleagues"],
      ["line", "just ignore me!"],
      ["para", "So I have a favor"],
      ["line", "to ask!"],
      ["para", "Take this to a"],
      ["line", "#MON LAB and"],
      ["cont", "get it examined!"],
      ["prompt"]
    ],
    _Museum1FScientist2ReceivedOldAmberText: [
      ["text", "<PLAYER> received"],
      ["line", "OLD AMBER!@"],
      ["text_end"]
    ],
    _Museum1FScientist2GetTheOldAmberCheckText: [
      ["text", "Ssh! Get the OLD"],
      ["line", "AMBER checked!"]
    ],
    _Museum1FScientist2YouDontHaveSpaceText: [
      ["text", "You don't have"],
      ["line", "space for this!"]
    ],
    _Museum1FScientist3Text: [
      ["text", "We are proud of 2"],
      ["line", "fossils of very"],
      ["cont", "rare, prehistoric"],
      ["cont", "#MON!"]
    ],
    _Museum1FOldAmberText: [
      ["text", "The AMBER is"],
      ["line", "clear and gold!"]
    ]
  }
};
