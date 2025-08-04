import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { POKEMON_TOWER_1F_BLOCKS } from "../data/blocks/PokemonTower1F";
import { OverworldSprite } from "../sprite";

export const PokemonTower1F: Map = {
  width: 10,
  height: 9,
  borderBlock: 1,
  blocks: POKEMON_TOWER_1F_BLOCKS,
  tileset: Tileset.CEMETERY,
  connections: {},
  objects: {
    warps: [
      { x: 10, y: 17, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 11, y: 17, toMap: "LAST_MAP", warpIndex: 1 },
      { x: 18, y: 9, toMap: MapName.PokemonTower2F, warpIndex: 1 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 15,
        y: 13,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER1F_RECEPTIONIST"
      },
      {
        type: "sprite",
        x: 6,
        y: 8,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_MIDDLE_AGED_WOMAN,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER1F_MIDDLE_AGED_WOMAN"
      },
      {
        type: "sprite",
        x: 8,
        y: 12,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_BALDING_GUY,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER1F_BALDING_GUY"
      },
      {
        type: "sprite",
        x: 13,
        y: 7,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER1F_GIRL"
      },
      {
        type: "sprite",
        x: 17,
        y: 7,
        direction: "LEFT",
        sprite: OverworldSprite.SPRITE_CHANNELER,
        movement: "STAY",
        textId: "TEXT_POKEMONTOWER1F_CHANNELER"
      }
    ]
  },
  text: {
    _PokemonTower1FReceptionistText: [
      ["text", "#MON TOWER was"],
      ["line", "erected in the"],
      ["cont", "memory of #MON"],
      ["cont", "that had died."]
    ],
    _PokemonTower1FMiddleAgedWomanText: [
      ["text", "Did you come to"],
      ["line", "pay respects?"],
      ["cont", "Bless you!"]
    ],
    _PokemonTower1FBaldingGuyText: [
      ["text", "I came to pray"],
      ["line", "for my CLEFAIRY."],
      ["para", "Sniff! I can't"],
      ["line", "stop crying..."]
    ],
    _PokemonTower1FGirlText: [
      ["text", "My GROWLITHE..."],
      ["line", "Why did you die?"]
    ],
    _PokemonTower1FChannelerText: [
      ["text", "I am a CHANNELER!"],
      ["line", "There are spirits"],
      ["cont", "up to mischief!"]
    ]
  }
};
