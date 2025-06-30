import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { ROCK_TUNNEL_POKECENTER_BLOCKS } from "../data/blocks/RockTunnelPokecenter";
import { OverworldSprite } from "../sprite";

export const RockTunnelPokecenter: Map = {
  width: 7,
  height: 4,
  borderBlock: 0,
  blocks: ROCK_TUNNEL_POKECENTER_BLOCKS,
  tileset: Tileset.POKECENTER,
  connections: {},
  objects: {
    warps: [
      { x: 3, y: 7, toMap: "LAST_MAP", warpIndex: 0 },
      { x: 4, y: 7, toMap: "LAST_MAP", warpIndex: 0 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "sprite",
        x: 3,
        y: 1,
        sprite: OverworldSprite.SPRITE_NURSE,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELPOKECENTER_NURSE"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        sprite: OverworldSprite.SPRITE_GENTLEMAN,
        movement: "WALK",
        textId: "TEXT_ROCKTUNNELPOKECENTER_GENTLEMAN"
      },
      {
        type: "sprite",
        x: 2,
        y: 5,
        sprite: OverworldSprite.SPRITE_FISHER,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELPOKECENTER_FISHER"
      },
      {
        type: "sprite",
        x: 11,
        y: 2,
        sprite: OverworldSprite.SPRITE_LINK_RECEPTIONIST,
        movement: "STAY",
        textId: "TEXT_ROCKTUNNELPOKECENTER_LINK_RECEPTIONIST"
      }
    ]
  },
  textPointers: []
};
