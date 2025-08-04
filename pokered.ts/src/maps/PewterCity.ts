import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { PEWTER_CITY_BLOCKS } from "../data/blocks/PewterCity";
import { OverworldSprite } from "../sprite";

export const PewterCity: Map = {
  width: 20,
  height: 18,
  borderBlock: 10,
  blocks: PEWTER_CITY_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.Route2, xOffset: 5 },
    east: { map: MapName.Route3, yOffset: 4 }
  },
  objects: {
    warps: [
      { x: 14, y: 7, toMap: MapName.Museum1F, warpIndex: 0 },
      { x: 19, y: 5, toMap: MapName.Museum1F, warpIndex: 2 },
      { x: 16, y: 17, toMap: MapName.PewterGym, warpIndex: 0 },
      { x: 29, y: 13, toMap: MapName.PewterNidoranHouse, warpIndex: 0 },
      { x: 23, y: 17, toMap: MapName.PewterMart, warpIndex: 0 },
      { x: 7, y: 29, toMap: MapName.PewterSpeechHouse, warpIndex: 0 },
      { x: 13, y: 25, toMap: MapName.PewterPokecenter, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 19, y: 29, signId: "TEXT_PEWTERCITY_TRAINER_TIPS" },
      { x: 33, y: 19, signId: "TEXT_PEWTERCITY_POLICE_NOTICE_SIGN" },
      { x: 24, y: 17, signId: "TEXT_PEWTERCITY_MART_SIGN" },
      { x: 14, y: 25, signId: "TEXT_PEWTERCITY_POKECENTER_SIGN" },
      { x: 15, y: 9, signId: "TEXT_PEWTERCITY_MUSEUM_SIGN" },
      { x: 11, y: 17, signId: "TEXT_PEWTERCITY_GYM_SIGN" },
      { x: 25, y: 23, signId: "TEXT_PEWTERCITY_SIGN" }
    ],
    objects: [
      {
        type: "sprite",
        x: 8,
        y: 15,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_F,
        movement: "STAY",
        textId: "TEXT_PEWTERCITY_COOLTRAINER_F"
      },
      {
        type: "sprite",
        x: 17,
        y: 25,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_COOLTRAINER_M,
        movement: "STAY",
        textId: "TEXT_PEWTERCITY_COOLTRAINER_M"
      },
      {
        type: "sprite",
        x: 27,
        y: 17,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "STAY",
        textId: "TEXT_PEWTERCITY_SUPER_NERD1"
      },
      {
        type: "sprite",
        x: 26,
        y: 25,
        direction: "LEFT_RIGHT",
        sprite: OverworldSprite.SPRITE_SUPER_NERD,
        movement: "WALK",
        textId: "TEXT_PEWTERCITY_SUPER_NERD2"
      },
      {
        type: "sprite",
        x: 35,
        y: 16,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_YOUNGSTER,
        movement: "STAY",
        textId: "TEXT_PEWTERCITY_YOUNGSTER"
      }
    ]
  },
  text: {
    _PewterCityCooltrainerFText: [
      ["text", "It's rumored that"],
      ["line", "CLEFAIRYs came"],
      ["cont", "from the moon!"],
      ["para", "They appeared "],
      ["line", "after MOON STONE"],
      ["cont", "fell on MT.MOON."]
    ],
    _PewterCityCooltrainerMText: [
      ["text", "There aren't many"],
      ["line", "serious #MON"],
      ["cont", "trainers here!"],
      ["para", "They're all like"],
      ["line", "BUG CATCHERs,"],
      ["cont", "but PEWTER GYM's"],
      ["cont", "BROCK is totally"],
      ["cont", "into it!"]
    ],
    _PewterCitySuperNerd1DidYouCheckOutMuseumText: [
      ["text", "Did you check out"],
      ["line", "the MUSEUM?"]
    ],
    _PewterCitySuperNerd1WerentThoseFossilsAmazingText: [
      ["text", "Weren't those"],
      ["line", "fossils from MT."],
      ["cont", "MOON amazing?"]
    ],
    _PewterCitySuperNerd1YouHaveToGoText: [
      ["text", "Really?"],
      ["line", "You absolutely"],
      ["cont", "have to go!"]
    ],
    _PewterCitySuperNerd1ItsRightHereText: [
      ["text", "It's right here!"],
      ["line", "You have to pay"],
      ["cont", "to get in, but"],
      ["cont", "it's worth it!"],
      ["cont", "See you around!"]
    ],
    _PewterCitySuperNerd2DoYouKnowWhatImDoingText: [
      ["text", "Psssst!"],
      ["line", "Do you know what"],
      ["cont", "I'm doing?"]
    ],
    _PewterCitySuperNerd2ThatsRightText: [
      ["text", "That's right!"],
      ["line", "It's hard work!"]
    ],
    _PewterCitySuperNerd2ImSprayingRepelText: [
      ["text", "I'm spraying REPEL"],
      ["line", "to keep #MON"],
      ["cont", "out of my garden!"]
    ],
    _PewterCityYoungsterYoureATrainerFollowMeText: [
      ["text", "You're a trainer"],
      ["line", "right? BROCK's"],
      ["cont", "looking for new"],
      ["cont", "challengers!"],
      ["cont", "Follow me!"]
    ],
    _PewterCityYoungsterGoTakeOnBrockText: [
      ["text", "If you have the"],
      ["line", "right stuff, go"],
      ["cont", "take on BROCK!"]
    ],
    _PewterCityTrainerTipsText: [
      ["text", "TRAINER TIPS"],
      ["para", "Any #MON that"],
      ["line", "takes part in"],
      ["cont", "battle, however"],
      ["cont", "short, earns EXP!"]
    ],
    _PewterCityPoliceNoticeSignText: [
      ["text", "NOTICE!"],
      ["para", "Thieves have been"],
      ["line", "stealing #MON"],
      ["cont", "fossils at MT."],
      ["cont", "MOON! Please call"],
      ["cont", "PEWTER POLICE"],
      ["cont", "with any info!"]
    ],
    _PewterCityMuseumSignText: [
      ["text", "PEWTER MUSEUM"],
      ["line", "OF SCIENCE"]
    ],
    _PewterCityGymSignText: [
      ["text", "PEWTER CITY"],
      ["line", "#MON GYM"],
      ["cont", "LEADER: BROCK"],
      ["para", "The Rock Solid"],
      ["line", "#MON Trainer!"]
    ],
    _PewterCitySignText: [
      ["text", "PEWTER CITY"],
      ["line", "A Stone Gray"],
      ["cont", "City"]
    ]
  }
};
