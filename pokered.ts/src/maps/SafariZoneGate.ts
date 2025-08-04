import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SAFARI_ZONE_GATE_BLOCKS } from "../data/blocks/SafariZoneGate";
import { OverworldSprite } from "../sprite";

export const SafariZoneGate: Map = {
  width: 4,
  height: 3,
  borderBlock: 10,
  blocks: SAFARI_ZONE_GATE_BLOCKS,
  tileset: Tileset.GATE,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 5, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 4, y: 5, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 3, y: 0, toMap: MapName.SafariZoneCenter, warpIndex: 0 },
      { x: 4, y: 0, toMap: MapName.SafariZoneCenter, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 2,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_SAFARI_ZONE_WORKER,
        movement: "STAY",
        textId: "TEXT_SAFARIZONEGATE_SAFARI_ZONE_WORKER1"
      },
      {
        type: "sprite",
        x: 1,
        y: 4,
        direction: "RIGHT",
        sprite: OverworldSprite.SPRITE_SAFARI_ZONE_WORKER,
        movement: "STAY",
        textId: "TEXT_SAFARIZONEGATE_SAFARI_ZONE_WORKER2"
      }
    ]
  },
  text: {
    _SafariZoneGateSafariZoneWorker1Text: [
      ["text", "Welcome to the"],
      ["line", "SAFARI ZONE!"]
    ],
    _SafariZoneGateSafariZoneWorker1WouldYouLikeToJoinText: [
      ["text", "For just ¥500,"],
      ["line", "you can catch all"],
      ["cont", "the #MON you"],
      ["cont", "want in the park!"],
      ["para", "Would you like to"],
      ["line", "join the hunt?@"],
      ["text_end"]
    ],
    _SafariZoneGateSafariZoneWorker1ThatllBe500PleaseText: [
      ["text", "That'll be ¥500"],
      ["line", "please!"],
      ["para", "We only use a"],
      ["line", "special # BALL"],
      ["cont", "here."],
      ["para", "<PLAYER> received"],
      ["line", "30 SAFARI BALLs!@"],
      ["text_end"]
    ],
    _SafariZoneGateSafariZoneWorker1CallYouOnThePAText: [
      ["text_start"],
      ["para", "We'll call you on"],
      ["line", "the PA when you"],
      ["cont", "run out of time"],
      ["cont", "or SAFARI BALLs!"]
    ],
    _SafariZoneGateSafariZoneWorker1PleaseComeAgainText: [
      ["text", "OK! Please come"],
      ["line", "again!"]
    ],
    _SafariZoneGateSafariZoneWorker1NotEnoughMoneyText: [
      ["text", "Oops! Not enough"],
      ["line", "money!"]
    ],
    _SafariZoneGateSafariZoneWorker1LeavingEarlyText: [
      ["text", "Leaving early?@"],
      ["text_end"]
    ],
    _SafariZoneGateSafariZoneWorker1ReturnSafariBallsText: [
      ["text", "Please return any"],
      ["line", "SAFARI BALLs you"],
      ["cont", "have left."]
    ],
    _SafariZoneGateSafariZoneWorker1GoodLuckText: [["text", "Good Luck!"]],
    _SafariZoneGateSafariZoneWorker1GoodHaulComeAgainText: [
      ["text", "Did you get a"],
      ["line", "good haul?"],
      ["cont", "Come again!"]
    ],
    _SafariZoneGateSafariZoneWorker2FirstTimeHereText: [
      ["text", "Hi! Is it your"],
      ["line", "first time here?"]
    ],
    _SafariZoneGateSafariZoneWorker2SafariZoneExplanationText: [
      ["text", "SAFARI ZONE has 4"],
      ["line", "zones in it."],
      ["para", "Each zone has"],
      ["line", "different kinds"],
      ["cont", "of #MON. Use"],
      ["cont", "SAFARI BALLs to"],
      ["cont", "catch them!"],
      ["para", "When you run out"],
      ["line", "of time or SAFARI"],
      ["cont", "BALLs, it's game"],
      ["cont", "over for you!"],
      ["para", "Before you go,"],
      ["line", "open an unused"],
      ["cont", "#MON BOX so"],
      ["cont", "there's room for"],
      ["cont", "new #MON!"]
    ],
    _SafariZoneGateSafariZoneWorker2YoureARegularHereText: [
      ["text", "Sorry, you're a"],
      ["line", "regular here!"]
    ]
  }
};
