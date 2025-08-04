import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { BIKE_SHOP_BLOCKS } from "../data/blocks/BikeShop";
import { OverworldSprite } from "../sprite";

export const BikeShop: Map = {
  width: 4,
  height: 4,
  borderBlock: 14,
  blocks: BIKE_SHOP_BLOCKS,
  tileset: Tileset.CLUB,
  connections: {},
  objects: {
    warps: [
      { x: 2, y: 7, toMap: "LAST_MAP", warpIndex: 4 },
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 4 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 6,
        y: 2,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BIKE_SHOP_CLERK,
        movement: "STAY",
        textId: "TEXT_BIKESHOP_CLERK"
      },
      {
        type: "sprite",
        x: 5,
        y: 6,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_WOMAN,
        movement: "WALK",
        textId: "TEXT_BIKESHOP_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 1,
        y: 3,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_BIKESHOP_YOUNGSTER"
      }
    ]
  },
  text: {
    _BikeShopClerkWelcomeText: [
      ["text", "Hi! Welcome to"],
      ["line", "our BIKE SHOP."],
      ["para", "Have we got just"],
      ["line", "the BIKE for you!"],
      ["prompt"]
    ],
    _BikeShopClerkDoYouLikeItText: [
      ["text", "It's a cool BIKE!"],
      ["line", "Do you want it?"]
    ],
    _BikeShopCantAffordText: [
      ["text", "Sorry! You can't"],
      ["line", "afford it!"],
      ["prompt"]
    ],
    _BikeShopClerkOhThatsAVoucherText: [
      ["text", "Oh, that's..."],
      ["para", "A BIKE VOUCHER!"],
      ["para", "OK! Here you go!"],
      ["prompt"]
    ],
    _BikeShopExchangedVoucherText: [
      ["text", "<PLAYER> exchanged"],
      ["line", "the BIKE VOUCHER"],
      ["cont", "for a BICYCLE.@"],
      ["text_end"]
    ],
    _BikeShopComeAgainText: [
      ["text", "Come back again"],
      ["line", "some time!"]
    ],
    _BikeShopClerkHowDoYouLikeYourBicycleText: [
      ["text", "How do you like"],
      ["line", "your new BICYCLE?"],
      ["para", "You can take it"],
      ["line", "on CYCLING ROAD"],
      ["cont", "and in caves!"]
    ],
    _BikeShopBagFullText: [
      ["text", "You better make"],
      ["line", "room for this!"]
    ],
    _BikeShopMiddleAgedWomanText: [
      ["text", "A plain city BIKE"],
      ["line", "is good enough"],
      ["cont", "for me!"],
      ["para", "You can't put a"],
      ["line", "shopping basket"],
      ["cont", "on an MTB!"]
    ],
    _BikeShopYoungsterTheseBikesAreExpensiveText: [
      ["text", "These BIKEs are"],
      ["line", "cool, but they're"],
      ["cont", "way expensive!"]
    ],
    _BikeShopYoungsterCoolBikeText: [
      ["text", "Wow. Your BIKE is"],
      ["line", "really cool!"]
    ]
  }
};
