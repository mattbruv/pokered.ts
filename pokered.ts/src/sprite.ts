import { ImageCache } from "./gfx/images";

export type SpriteName = Extract<keyof ImageCache, `sprites-${string}`>;

export enum OverworldSprite {
  SPRITE_NONE, // $00
  SPRITE_RED, // $01
  SPRITE_BLUE, // $02
  SPRITE_OAK, // $03
  SPRITE_YOUNGSTER, // $04
  SPRITE_MONSTER, // $05
  SPRITE_COOLTRAINER_F, // $06
  SPRITE_COOLTRAINER_M, // $07
  SPRITE_LITTLE_GIRL, // $08
  SPRITE_BIRD, // $09
  SPRITE_MIDDLE_AGED_MAN, // $0a
  SPRITE_GAMBLER, // $0b
  SPRITE_SUPER_NERD, // $0c
  SPRITE_GIRL, // $0d
  SPRITE_HIKER, // $0e
  SPRITE_BEAUTY, // $0f
  SPRITE_GENTLEMAN, // $10
  SPRITE_DAISY, // $11
  SPRITE_BIKER, // $12
  SPRITE_SAILOR, // $13
  SPRITE_COOK, // $14
  SPRITE_BIKE_SHOP_CLERK, // $15
  SPRITE_MR_FUJI, // $16
  SPRITE_GIOVANNI, // $17
  SPRITE_ROCKET, // $18
  SPRITE_CHANNELER, // $19
  SPRITE_WAITER, // $1a
  SPRITE_SILPH_WORKER_F, // $1b
  SPRITE_MIDDLE_AGED_WOMAN, // $1c
  SPRITE_BRUNETTE_GIRL, // $1d
  SPRITE_LANCE, // $1e
  SPRITE_UNUSED_SCIENTIST, // $1f
  SPRITE_SCIENTIST, // $20
  SPRITE_ROCKER, // $21
  SPRITE_SWIMMER, // $22
  SPRITE_SAFARI_ZONE_WORKER, // $23
  SPRITE_GYM_GUIDE, // $24
  SPRITE_GRAMPS, // $25
  SPRITE_CLERK, // $26
  SPRITE_FISHING_GURU, // $27
  SPRITE_GRANNY, // $28
  SPRITE_NURSE, // $29
  SPRITE_LINK_RECEPTIONIST, // $2a
  SPRITE_SILPH_PRESIDENT, // $2b
  SPRITE_SILPH_WORKER_M, // $2c
  SPRITE_WARDEN, // $2d
  SPRITE_CAPTAIN, // $2e
  SPRITE_FISHER, // $2f
  SPRITE_KOGA, // $30
  SPRITE_GUARD, // $31
  SPRITE_UNUSED_GUARD, // $32
  SPRITE_MOM, // $33
  SPRITE_BALDING_GUY, // $34
  SPRITE_LITTLE_BOY, // $35
  SPRITE_UNUSED_GAMEBOY_KID, // $36
  SPRITE_GAMEBOY_KID, // $37
  SPRITE_FAIRY, // $38
  SPRITE_AGATHA, // $39
  SPRITE_BRUNO, // $3a
  SPRITE_LORELEI, // $3b
  SPRITE_SEEL, // $3c
  SPRITE_POKE_BALL, // $3d
  SPRITE_FOSSIL, // $3e
  SPRITE_BOULDER, // $3f
  SPRITE_PAPER, // $40
  SPRITE_POKEDEX, // $41
  SPRITE_CLIPBOARD, // $42
  SPRITE_SNORLAX, // $43
  SPRITE_UNUSED_OLD_AMBER, // $44
  SPRITE_OLD_AMBER, // $45
  SPRITE_UNUSED_GAMBLER_ASLEEP_1, // $46
  SPRITE_UNUSED_GAMBLER_ASLEEP_2, // $47
  SPRITE_GAMBLER_ASLEEP // $48
}

const OVERWORLD_SPRITE_LOOKUP: Record<OverworldSprite, SpriteName> = {
  [OverworldSprite.SPRITE_NONE]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_RED]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_BLUE]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_OAK]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_YOUNGSTER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_MONSTER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_COOLTRAINER_F]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_COOLTRAINER_M]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_LITTLE_GIRL]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_BIRD]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_MIDDLE_AGED_MAN]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GAMBLER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SUPER_NERD]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GIRL]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_HIKER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_BEAUTY]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GENTLEMAN]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_DAISY]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_BIKER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SAILOR]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_COOK]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_BIKE_SHOP_CLERK]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_MR_FUJI]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GIOVANNI]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_ROCKET]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_CHANNELER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_WAITER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SILPH_WORKER_F]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_MIDDLE_AGED_WOMAN]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_BRUNETTE_GIRL]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_LANCE]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_UNUSED_SCIENTIST]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SCIENTIST]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_ROCKER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SWIMMER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SAFARI_ZONE_WORKER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GYM_GUIDE]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GRAMPS]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_CLERK]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_FISHING_GURU]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GRANNY]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_NURSE]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_LINK_RECEPTIONIST]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SILPH_PRESIDENT]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SILPH_WORKER_M]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_WARDEN]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_CAPTAIN]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_FISHER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_KOGA]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GUARD]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_UNUSED_GUARD]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_MOM]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_BALDING_GUY]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_LITTLE_BOY]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_UNUSED_GAMEBOY_KID]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GAMEBOY_KID]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_FAIRY]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_AGATHA]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_BRUNO]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_LORELEI]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SEEL]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_POKE_BALL]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_FOSSIL]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_BOULDER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_PAPER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_POKEDEX]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_CLIPBOARD]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_SNORLAX]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_UNUSED_OLD_AMBER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_OLD_AMBER]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_UNUSED_GAMBLER_ASLEEP_1]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_UNUSED_GAMBLER_ASLEEP_2]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_GAMBLER_ASLEEP]: "sprites-silph_worker_f"
};

export function getOverworldSpriteImage(
  sprite: OverworldSprite,
  images: ImageCache
): ImageBitmap {
  return images[OVERWORLD_SPRITE_LOOKUP[sprite]];
}
