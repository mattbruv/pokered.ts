import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BILLS_HOUSE_BLOCKS } from "../data/blocks/BillsHouse";
import { OverworldSprite } from "../sprite";

export const BillsHouse: Map = {
  width: 4,
  height: 4,
  borderBlock: 13,
  blocks: BILLS_HOUSE_BLOCKS,
  tileset: Tileset.INTERIOR,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "STAY",
        textId: "TEXT_BILLSHOUSE_BILL_POKEMON"
      },
      {
        type: "sprite",
        x: 4,
        y: 4,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_BILLSHOUSE_BILL_SS_TICKET"
      },
      {
        type: "sprite",
        x: 6,
        y: 5,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_BILLSHOUSE_BILL_CHECK_OUT_MY_RARE_POKEMON"
      }
    ]
  },
  text: {
    _BillsHouseBillImNotAPokemonText: [
      ["text", "Hiya! I'm a"],
      ["line", "#MON..."],
      ["cont", "...No I'm not!"],
      ["para", "Call me BILL!"],
      ["line", "I'm a true blue"],
      ["cont", "#MANIAC! Hey!"],
      ["cont", "What's with that"],
      ["cont", "skeptical look?"],
      ["para", "I'm not joshing"],
      ["line", "you, I screwed up"],
      ["cont", "an experiment and"],
      ["cont", "got combined with"],
      ["cont", "a #MON!"],
      ["para", "So, how about it?"],
      ["line", "Help me out here!"]
    ],
    _BillsHouseBillUseSeparationSystemText: [
      ["text", "When I'm in the"],
      ["line", "TELEPORTER, go to"],
      ["cont", "my PC and run the"],
      ["cont", "Cell Separation"],
      ["cont", "System!"]
    ],
    _BillsHouseBillNoYouGottaHelpText: [
      ["text", "No!? Come on, you"],
      ["line", "gotta help a guy"],
      ["cont", "in deep trouble!"],
      ["para", "What do you say,"],
      ["line", "chief? Please?"],
      ["cont", "OK? All right!"],
      ["prompt"]
    ],
    _BillsHouseBillThankYouText: [
      ["text", "BILL: Yeehah!"],
      ["line", "Thanks, bud! I"],
      ["cont", "owe you one!"],
      ["para", "So, did you come"],
      ["line", "to see my #MON"],
      ["cont", "collection?"],
      ["cont", "You didn't?"],
      ["cont", "That's a bummer."],
      ["para", "I've got to thank"],
      ["line", "you... Oh here,"],
      ["cont", "maybe this'll do."],
      ["prompt"]
    ],
    _SSTicketReceivedText: [
      ["text", "<PLAYER> received"],
      ["line", "an @"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _SSTicketNoRoomText: [
      ["text", "You've got too"],
      ["line", "much stuff, bud!"]
    ],
    _BillsHouseBillWhyDontYouGoInsteadOfMeText: [
      ["text", "That cruise ship,"],
      ["line", "S.S.ANNE, is in"],
      ["cont", "VERMILION CITY."],
      ["cont", "Its passengers"],
      ["cont", "are all trainers!"],
      ["para", "They invited me"],
      ["line", "to their party,"],
      ["cont", "but I can't stand"],
      ["cont", "fancy do's. Why"],
      ["cont", "don't you go"],
      ["cont", "instead of me?"]
    ],
    _BillsHouseBillCheckOutMyRarePokemonText: [
      ["text", "BILL: Look, bud,"],
      ["line", "just check out"],
      ["cont", "some of my rare"],
      ["cont", "#MON on my PC!"]
    ]
  }
};
