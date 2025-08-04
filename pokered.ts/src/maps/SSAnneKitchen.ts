import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { SS_ANNE_KITCHEN_BLOCKS } from "../data/blocks/SSAnneKitchen";
import { OverworldSprite } from "../sprite";

export const SSAnneKitchen: Map = {
  width: 7,
  height: 8,
  borderBlock: 12,
  blocks: SS_ANNE_KITCHEN_BLOCKS,
  tileset: Tileset.SHIP,
  connections: {},
  objects: {
    warps: [{ x: 6, y: 0, toMap: MapName.SSAnne1F, warpIndex: 10 }],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 1,
        y: 8,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "WALK",
        textId: "TEXT_SSANNEKITCHEN_COOK1"
      },
      {
        type: "sprite",
        x: 5,
        y: 8,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "WALK",
        textId: "TEXT_SSANNEKITCHEN_COOK2"
      },
      {
        type: "sprite",
        x: 9,
        y: 7,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "WALK",
        textId: "TEXT_SSANNEKITCHEN_COOK3"
      },
      {
        type: "sprite",
        x: 13,
        y: 6,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "STAY",
        textId: "TEXT_SSANNEKITCHEN_COOK4"
      },
      {
        type: "sprite",
        x: 13,
        y: 8,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "STAY",
        textId: "TEXT_SSANNEKITCHEN_COOK5"
      },
      {
        type: "sprite",
        x: 13,
        y: 10,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "STAY",
        textId: "TEXT_SSANNEKITCHEN_COOK6"
      },
      {
        type: "sprite",
        x: 11,
        y: 13,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_COOK,
        movement: "STAY",
        textId: "TEXT_SSANNEKITCHEN_COOK7"
      }
    ]
  },
  text: {
    _SSAnneKitchenCook1Text: [
      ["text", "You, mon petit!"],
      ["line", "We're busy here!"],
      ["cont", "Out of the way!"]
    ],
    _SSAnneKitchenCook2Text: [
      ["text", "I saw an odd ball"],
      ["line", "in the trash."]
    ],
    _SSAnneKitchenCook3Text: [
      ["text", "I'm so busy I'm"],
      ["line", "getting dizzy!"]
    ],
    _SSAnneKitchenCook4Text: [
      ["text", "Hum-de-hum-de-"],
      ["line", "ho..."],
      ["para", "I peel spuds"],
      ["line", "every day!"],
      ["cont", "Hum-hum..."]
    ],
    _SSAnneKitchenCook5Text: [
      ["text", "Did you hear about"],
      ["line", "SNORLAX?"],
      ["para", "All it does is"],
      ["line", "eat and sleep!"]
    ],
    _SSAnneKitchenCook6Text: [
      ["text", "Snivel...Sniff..."],
      ["para", "I only get to"],
      ["line", "peel onions..."],
      ["cont", "Snivel..."]
    ],
    _SSAnneKitchenCook7MainCourseIsText: [
      ["text", "Er-hem! Indeed I"],
      ["line", "am le CHEF!"],
      ["para", "Le main course is"],
      ["prompt"]
    ],
    SSAnneKitchenCook7SalmonDuSaladText: [
      ["text", "Salmon du Salad!"],
      ["para", "Les guests may"],
      ["line", "gripe it's fish"],
      ["cont", "again, however!"]
    ],
    SSAnneKitchenCook7EelsAuBarbecueText: [
      ["text", "Eels au Barbecue!"],
      ["para", "Les guests will"],
      ["line", "mutiny, I fear."]
    ],
    SSAnneKitchenCook7PrimeBeefSteakText: [
      ["text", "Prime Beef Steak!"],
      ["para", "But, have I enough"],
      ["line", "fillets du beef?"]
    ]
  }
};
