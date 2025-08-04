import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { VERMILION_CITY_BLOCKS } from "../data/blocks/VermilionCity";
import { OverworldSprite } from "../sprite";

export const VermilionCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 67,
  blocks: VERMILION_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    north: { map: MapName.Route6, xOffset: 5 },
    east: { map: MapName.Route11, yOffset: 4 }
  },
  objects: {
    warps: [
      { x: 11, y: 3, toMap: MapName.VermilionPokecenter, warpIndex: 0 },
      { x: 9, y: 13, toMap: MapName.PokemonFanClub, warpIndex: 0 },
      { x: 23, y: 13, toMap: MapName.VermilionMart, warpIndex: 0 },
      { x: 12, y: 19, toMap: MapName.VermilionGym, warpIndex: 0 },
      { x: 23, y: 19, toMap: MapName.VermilionPidgeyHouse, warpIndex: 0 },
      { x: 18, y: 31, toMap: MapName.VermilionDock, warpIndex: 0 },
      { x: 19, y: 31, toMap: MapName.VermilionDock, warpIndex: 0 },
      { x: 15, y: 13, toMap: MapName.VermilionTradeHouse, warpIndex: 0 },
      { x: 7, y: 3, toMap: MapName.VermilionOldRodHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 27, y: 3, signId: "TEXT_VERMILIONCITY_SIGN" },
      { x: 37, y: 13, signId: "TEXT_VERMILIONCITY_NOTICE_SIGN" },
      { x: 24, y: 13, signId: "TEXT_VERMILIONCITY_MART_SIGN" },
      { x: 12, y: 3, signId: "TEXT_VERMILIONCITY_POKECENTER_SIGN" },
      { x: 7, y: 13, signId: "TEXT_VERMILIONCITY_POKEMON_FAN_CLUB_SIGN" },
      { x: 7, y: 19, signId: "TEXT_VERMILIONCITY_GYM_SIGN" },
      { x: 29, y: 15, signId: "TEXT_VERMILIONCITY_HARBOR_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 19,
        y: 7,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_BEAUTY,
        movement: "WALK",
        textId: "TEXT_VERMILIONCITY_BEAUTY"
      },
      {
        type: "sprite",
        x: 14,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_VERMILIONCITY_GAMBLER1"
      },
      {
        type: "sprite",
        x: 19,
        y: 30,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_SAILOR,
        movement: "STAY",
        textId: "TEXT_VERMILIONCITY_SAILOR1"
      },
      {
        type: "sprite",
        x: 30,
        y: 7,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GAMBLER,
        movement: "STAY",
        textId: "TEXT_VERMILIONCITY_GAMBLER2"
      },
      {
        type: "sprite",
        x: 29,
        y: 9,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_MONSTER,
        movement: "WALK",
        textId: "TEXT_VERMILIONCITY_MACHOP"
      },
      {
        type: "sprite",
        x: 25,
        y: 27,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_SAILOR,
        movement: "WALK",
        textId: "TEXT_VERMILIONCITY_SAILOR2"
      }
    ]
  },
  text: {
    _VermilionCityBeautyText: [
      ["text", "We're careful"],
      ["line", "about pollution!"],
      ["para", "We've heard GRIMER"],
      ["line", "multiplies in"],
      ["cont", "toxic sludge!"]
    ],
    _VermilionCityGambler1DidYouSeeText: [
      ["text", "Did you see S.S."],
      ["line", "ANNE moored in"],
      ["cont", "the harbor?"]
    ],
    _VermilionCityGambler1SSAnneDepartedText: [
      ["text", "So, S.S.ANNE has"],
      ["line", "departed!"],
      ["para", "She'll be back in"],
      ["line", "about a year."]
    ],
    _VermilionCitySailor1WelcomeToSSAnneText: [
      ["text", "Welcome to S.S."],
      ["line", "ANNE!"]
    ],
    _VermilionCitySailor1DoYouHaveATicketText: [
      ["text", "Welcome to S.S."],
      ["line", "ANNE!"],
      ["para", "Excuse me, do you"],
      ["line", "have a ticket?"],
      ["prompt"]
    ],
    _VermilionCitySailor1FlashedTicketText: [
      ["text", "<PLAYER> flashed"],
      ["line", "the S.S.TICKET!"],
      ["para", "Great! Welcome to"],
      ["line", "S.S.ANNE!"]
    ],
    _VermilionCitySailor1YouNeedATicketText: [
      ["text", "<PLAYER> doesn't"],
      ["line", "have the needed"],
      ["cont", "S.S.TICKET."],
      ["para", "Sorry!"],
      ["para", "You need a ticket"],
      ["line", "to get aboard."]
    ],
    _VermilionCitySailor1ShipSetSailText: [["text", "The ship set sail."]],
    _VermilionCityGambler2Text: [
      ["text", "I'm putting up a"],
      ["line", "building on this"],
      ["cont", "plot of land."],
      ["para", "My #MON is"],
      ["line", "tamping the land."]
    ],
    _VermilionCityMachopText: [
      ["text", "MACHOP: Guoh!"],
      ["line", "Gogogoh!@"],
      ["text_end"]
    ],
    _VermilionCityMachopStompingTheLandFlatText: [
      ["text_start"],
      ["para", "A MACHOP is"],
      ["line", "stomping the land"],
      ["cont", "flat."]
    ],
    _VermilionCitySailor2Text: [
      ["text", "S.S.ANNE is a"],
      ["line", "famous luxury"],
      ["cont", "cruise ship."],
      ["para", "We visit VERMILION"],
      ["line", "once a year."]
    ],
    _VermilionCitySignText: [
      ["text", "VERMILION CITY"],
      ["line", "The Port of"],
      ["cont", "Exquisite Sunsets"]
    ],
    _VermilionCityNoticeSignText: [
      ["text", "NOTICE!"],
      ["para", "ROUTE 12 may be"],
      ["line", "blocked off by a"],
      ["cont", "sleeping #MON."],
      ["para", "Detour through"],
      ["line", "ROCK TUNNEL to"],
      ["cont", "LAVENDER TOWN."],
      ["para", "VERMILION POLICE"]
    ],
    _VermilionCityPokemonFanClubSignText: [
      ["text", "#MON FAN CLUB"],
      ["line", "All #MON fans"],
      ["cont", "welcome!"]
    ],
    _VermilionCityGymSignText: [
      ["text", "VERMILION CITY"],
      ["line", "#MON GYM"],
      ["cont", "LEADER: LT.SURGE"],
      ["para", "The Lightning "],
      ["line", "American!"]
    ],
    _VermilionCityHarborSignText: [["text", "VERMILION HARBOR"]]
  }
};
