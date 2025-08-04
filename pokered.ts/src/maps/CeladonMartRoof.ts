import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { CELADON_MART_ROOF_BLOCKS } from "../data/blocks/CeladonMartRoof";
import { OverworldSprite } from "../sprite";

export const CeladonMartRoof: Map = {
  width: 10,
  height: 4,
  borderBlock: 66,
  blocks: CELADON_MART_ROOF_BLOCKS,
  tileset: Tileset.LOBBY,
  connections: {},
  objects: {
    warps: [{ x: 15, y: 2, toMap: MapName.CeladonMart5F, warpIndex: 0 }],
    backgroundItems: [
      { x: 10, y: 1, signId: "TEXT_CELADONMARTROOF_VENDING_MACHINE1" },
      { x: 11, y: 1, signId: "TEXT_CELADONMARTROOF_VENDING_MACHINE2" },
      { x: 12, y: 2, signId: "TEXT_CELADONMARTROOF_VENDING_MACHINE3" },
      { x: 13, y: 2, signId: "TEXT_CELADONMARTROOF_CURRENT_FLOOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 10,
        y: 4,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_CELADONMARTROOF_SUPER_NERD"
      },
      {
        type: "sprite",
        x: 5,
        y: 5,
        direction: "ANY_DIR",
        sprite: OverworldSprite.SPRITE_LITTLE_GIRL,
        movement: "WALK",
        textId: "TEXT_CELADONMARTROOF_LITTLE_GIRL"
      }
    ]
  },
  text: {
    _CeladonMartRoofLittleGirlGiveHerWhichDrinkText: [
      ["text", "Give her which"],
      ["line", "drink?"]
    ],
    _CeladonMartRoofLittleGirlYayFreshWaterText: [
      ["text", "Yay!"],
      ["para", "FRESH WATER!"],
      ["para", "Thank you!"],
      ["para", "You can have this"],
      ["line", "from me!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlReceivedTM13Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlTM13ExplanationText: [
      ["text_start"],
      ["para", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", " contains"],
      ["line", "ICE BEAM!"],
      ["para", "It can freeze the"],
      ["line", "target sometimes!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlYaySodaPopText: [
      ["text", "Yay!"],
      ["para", "SODA POP!"],
      ["para", "Thank you!"],
      ["para", "You can have this"],
      ["line", "from me!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlReceivedTM48Text: [
      ["text", "<PLAYER> received"],
      ["line", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlTM48ExplanationText: [
      ["text_start"],
      ["para", "@"],
      ["text_ram", "wStringBuffer"],
      ["text", " contains"],
      ["line", "ROCK SLIDE!"],
      ["para", "It can spook the"],
      ["line", "target sometimes!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlYayLemonadeText: [
      ["text", "Yay!"],
      ["para", "LEMONADE!"],
      ["para", "Thank you!"],
      ["para", "You can have this"],
      ["line", "from me!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlReceivedTM49Text: [
      ["text", "<PLAYER> received"],
      ["line", "TM49!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlTM49ExplanationText: [
      ["text_start"],
      ["para", "TM49 contains"],
      ["line", "TRI ATTACK!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlNoRoomText: [
      ["text", "You don't have"],
      ["line", "space for this!@"],
      ["text_end"]
    ],
    _CeladonMartRoofLittleGirlImNotThirstyText: [
      ["text", "No thank you!"],
      ["line", "I'm not thirsty"],
      ["cont", "after all!@"],
      ["text_end"]
    ],
    _CeladonMartRoofSuperNerdText: [
      ["text", "My sister is a"],
      ["line", "trainer, believe"],
      ["cont", "it or not."],
      ["para", "But, she's so"],
      ["line", "immature, she"],
      ["cont", "drives me nuts!"]
    ],
    _CeladonMartRoofLittleGirlImThirstyText: [
      ["text", "I'm thirsty!"],
      ["line", "I want something"],
      ["cont", "to drink!"]
    ],
    _CeladonMartRoofLittleGirlGiveHerADrinkText: [
      ["text", "I'm thirsty!"],
      ["line", "I want something"],
      ["cont", "to drink!"],
      ["para", "Give her a drink?"]
    ],
    _CeladonMartRoofCurrentFloorSignText: [
      ["text", "ROOFTOP SQUARE:"],
      ["line", "VENDING MACHINES"]
    ],
    _VendingMachineText1: [
      ["text", "A vending machine!"],
      ["line", "Here's the menu!"],
      ["prompt"]
    ],
    _VendingMachineText4: [
      ["text", "Oops, not enough"],
      ["line", "money!"]
    ],
    _VendingMachineText5: [
      ["text_ram", "wStringBuffer"],
      ["text_start"],
      ["line", "popped out!"]
    ],
    _VendingMachineText6: [
      ["text", "There's no more"],
      ["line", "room for stuff!"]
    ],
    _VendingMachineText7: [["text", "Not thirsty!"]]
  }
};
