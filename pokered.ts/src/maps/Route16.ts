import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROUTE_16_BLOCKS } from "../data/blocks/Route16";
import { OverworldSprite } from "../sprite";

export const Route16: Map = {
  width: 20,
  height: 9,
  borderBlock: 15,
  blocks: ROUTE_16_BLOCKS,
  tileset: Tileset.OVERWORLD,
  connections: {
    south: { map: MapName.Route17, xOffset: 0 },
    east: { map: MapName.CeladonCity, yOffset: -4 }
  },
  objects: {
    warps: [
      { x: 17, y: 10, toMap: MapName.Route16Gate1F, warpIndex: 0 },
      { x: 17, y: 11, toMap: MapName.Route16Gate1F, warpIndex: 1 },
      { x: 24, y: 10, toMap: MapName.Route16Gate1F, warpIndex: 2 },
      { x: 24, y: 11, toMap: MapName.Route16Gate1F, warpIndex: 3 },
      { x: 17, y: 4, toMap: MapName.Route16Gate1F, warpIndex: 4 },
      { x: 17, y: 5, toMap: MapName.Route16Gate1F, warpIndex: 5 },
      { x: 24, y: 4, toMap: MapName.Route16Gate1F, warpIndex: 6 },
      { x: 24, y: 5, toMap: MapName.Route16Gate1F, warpIndex: 7 },
      { x: 7, y: 5, toMap: MapName.Route16FlyHouse, warpIndex: 0 }
    ],
    backgroundItems: [
      { x: 27, y: 11, signId: "TEXT_ROUTE16_CYCLING_ROAD_SIGN" },
      { x: 5, y: 17, signId: "TEXT_ROUTE16_SIGN" }
    ],
    objects: [
      {
        type: "trainer",
        x: 17,
        y: 12,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER1",
        trainerId: "OPP_BIKER",
        trainerLevel: 5
      },
      {
        type: "trainer",
        x: 14,
        y: 13,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER2",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 1
      },
      {
        type: "trainer",
        x: 11,
        y: 12,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "UP",
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER3",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 2
      },
      {
        type: "trainer",
        x: 9,
        y: 11,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "LEFT",
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER4",
        trainerId: "OPP_BIKER",
        trainerLevel: 6
      },
      {
        type: "trainer",
        x: 6,
        y: 10,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER5",
        trainerId: "OPP_CUE_BALL",
        trainerLevel: 3
      },
      {
        type: "trainer",
        x: 3,
        y: 12,
        sprite: OverworldSprite.SPRITE_BIKER,
        direction: "RIGHT",
        movement: "STAY",
        textId: "TEXT_ROUTE16_BIKER6",
        trainerId: "OPP_BIKER",
        trainerLevel: 7
      },
      {
        type: "sprite",
        x: 26,
        y: 10,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_SNORLAX,
        movement: "STAY",
        textId: "TEXT_ROUTE16_SNORLAX"
      }
    ]
  },
  text: {
    _Route16Biker1BattleText: [["text", "What do you want?"]],
    _Route16Biker1EndBattleText: [
      ["text", "Don't you"],
      ["line", "dare laugh!"],
      ["prompt"]
    ],
    _Route16Biker1AfterBattleText: [
      ["text", "We like just"],
      ["line", "hanging here,"],
      ["cont", "what's it to you?"]
    ],
    _Route16Biker2BattleText: [
      ["text", "Nice BIKE!"],
      ["line", "Hand it over!"]
    ],
    _Route16Biker2EndBattleText: [
      ["text", "Knock"],
      ["line", "out!"],
      ["prompt"]
    ],
    _Route16Biker2AfterBattleText: [
      ["text", "Forget it, who"],
      ["line", "needs your BIKE!"]
    ],
    _Route16Biker3BattleText: [
      ["text", "Come out and play,"],
      ["line", "little mouse!"]
    ],
    _Route16Biker3EndBattleText: [
      ["text", "You"],
      ["line", "little rat!"],
      ["prompt"]
    ],
    _Route16Biker3AfterBattleText: [
      ["text", "I hate losing!"],
      ["line", "Get away from me!"]
    ],
    _Route16biker4BattleText: [
      ["text", "Hey, you just"],
      ["line", "bumped me!"]
    ],
    _Route16Biker4EndBattleText: [["text", "Kaboom!"], ["prompt"]],
    _Route16Biker4AfterBattleText: [
      ["text", "You can also get"],
      ["line", "to FUCHSIA from"],
      ["cont", "VERMILION using a"],
      ["cont", "coastal road."]
    ],
    _Route16Biker5BattleText: [
      ["text", "I'm feeling"],
      ["line", "hungry and mean!"]
    ],
    _Route16Biker5EndBattleText: [
      ["text", "Bad,"],
      ["line", "bad, bad!"],
      ["prompt"]
    ],
    _Route16Biker5AfterBattleText: [
      ["text", "I like my #MON"],
      ["line", "ferocious! They"],
      ["cont", "tear up enemies!"]
    ],
    _Route16Biker6BattleText: [["text", "Sure, I'll go!"]],
    _Route16Biker6EndBattleText: [
      ["text", "Don't make"],
      ["line", "me mad!"],
      ["prompt"]
    ],
    _Route16Biker6AfterBattleText: [
      ["text", "I like harassing"],
      ["line", "people with my"],
      ["cont", "vicious #MON!"]
    ],
    _Route16Text7: [
      ["text", "A sleeping #MON"],
      ["line", "blocks the way!"]
    ],
    _Route16SnorlaxWokeUpText: [
      ["text", "SNORLAX woke up!"],
      ["para", "It attacked in a"],
      ["line", "grumpy rage!"]
    ],
    _Route16SnorlaxReturnedToMountainsText: [
      ["text", "With a big yawn,"],
      ["line", "SNORLAX returned"],
      ["cont", "to the mountains!"]
    ],
    _Route16CyclingRoadSignText: [
      ["text", "Enjoy the slope!"],
      ["line", "CYCLING ROAD"]
    ],
    _Route16SignText: [
      ["text", "ROUTE 16"],
      ["line", "CELADON CITY -"],
      ["cont", "FUCHSIA CITY"]
    ]
  }
};
