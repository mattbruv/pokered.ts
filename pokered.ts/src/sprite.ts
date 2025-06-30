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
  [OverworldSprite.SPRITE_NONE]: "sprites-silph_worker_f", // TODO
  [OverworldSprite.SPRITE_RED]: "sprites-red",
  [OverworldSprite.SPRITE_BLUE]: "sprites-blue",
  [OverworldSprite.SPRITE_OAK]: "sprites-oak",
  [OverworldSprite.SPRITE_YOUNGSTER]: "sprites-youngster",
  [OverworldSprite.SPRITE_MONSTER]: "sprites-monster",
  [OverworldSprite.SPRITE_COOLTRAINER_F]: "sprites-cooltrainer_f",
  [OverworldSprite.SPRITE_COOLTRAINER_M]: "sprites-cooltrainer_m",
  [OverworldSprite.SPRITE_LITTLE_GIRL]: "sprites-little_girl",
  [OverworldSprite.SPRITE_BIRD]: "sprites-bird",
  [OverworldSprite.SPRITE_MIDDLE_AGED_MAN]: "sprites-middle_aged_man",
  [OverworldSprite.SPRITE_GAMBLER]: "sprites-gambler",
  [OverworldSprite.SPRITE_SUPER_NERD]: "sprites-super_nerd",
  [OverworldSprite.SPRITE_GIRL]: "sprites-girl",
  [OverworldSprite.SPRITE_HIKER]: "sprites-hiker",
  [OverworldSprite.SPRITE_BEAUTY]: "sprites-beauty",
  [OverworldSprite.SPRITE_GENTLEMAN]: "sprites-gentleman",
  [OverworldSprite.SPRITE_DAISY]: "sprites-daisy",
  [OverworldSprite.SPRITE_BIKER]: "sprites-biker",
  [OverworldSprite.SPRITE_SAILOR]: "sprites-sailor",
  [OverworldSprite.SPRITE_COOK]: "sprites-cook",
  [OverworldSprite.SPRITE_BIKE_SHOP_CLERK]: "sprites-bike_shop_clerk",
  [OverworldSprite.SPRITE_MR_FUJI]: "sprites-mr_fuji",
  [OverworldSprite.SPRITE_GIOVANNI]: "sprites-giovanni",
  [OverworldSprite.SPRITE_ROCKET]: "sprites-rocket",
  [OverworldSprite.SPRITE_CHANNELER]: "sprites-channeler",
  [OverworldSprite.SPRITE_WAITER]: "sprites-waiter",
  [OverworldSprite.SPRITE_SILPH_WORKER_F]: "sprites-silph_worker_f",
  [OverworldSprite.SPRITE_MIDDLE_AGED_WOMAN]: "sprites-middle_aged_woman",
  [OverworldSprite.SPRITE_BRUNETTE_GIRL]: "sprites-brunette_girl",
  [OverworldSprite.SPRITE_LANCE]: "sprites-lance",
  [OverworldSprite.SPRITE_UNUSED_SCIENTIST]: "sprites-scientist",
  [OverworldSprite.SPRITE_SCIENTIST]: "sprites-scientist",
  [OverworldSprite.SPRITE_ROCKER]: "sprites-rocker",
  [OverworldSprite.SPRITE_SWIMMER]: "sprites-swimmer",
  [OverworldSprite.SPRITE_SAFARI_ZONE_WORKER]: "sprites-safari_zone_worker",
  [OverworldSprite.SPRITE_GYM_GUIDE]: "sprites-gym_guide",
  [OverworldSprite.SPRITE_GRAMPS]: "sprites-gramps",
  [OverworldSprite.SPRITE_CLERK]: "sprites-clerk",
  [OverworldSprite.SPRITE_FISHING_GURU]: "sprites-fishing_guru",
  [OverworldSprite.SPRITE_GRANNY]: "sprites-granny",
  [OverworldSprite.SPRITE_NURSE]: "sprites-nurse",
  [OverworldSprite.SPRITE_LINK_RECEPTIONIST]: "sprites-link_receptionist",
  [OverworldSprite.SPRITE_SILPH_PRESIDENT]: "sprites-silph_president",
  [OverworldSprite.SPRITE_SILPH_WORKER_M]: "sprites-silph_worker_m",
  [OverworldSprite.SPRITE_WARDEN]: "sprites-warden",
  [OverworldSprite.SPRITE_CAPTAIN]: "sprites-captain",
  [OverworldSprite.SPRITE_FISHER]: "sprites-fisher",
  [OverworldSprite.SPRITE_KOGA]: "sprites-koga",
  [OverworldSprite.SPRITE_GUARD]: "sprites-guard",
  [OverworldSprite.SPRITE_UNUSED_GUARD]: "sprites-guard",
  [OverworldSprite.SPRITE_MOM]: "sprites-mom",
  [OverworldSprite.SPRITE_BALDING_GUY]: "sprites-balding_guy", // hey, that's me!
  [OverworldSprite.SPRITE_LITTLE_BOY]: "sprites-little_boy",
  [OverworldSprite.SPRITE_UNUSED_GAMEBOY_KID]: "sprites-gameboy_kid",
  [OverworldSprite.SPRITE_GAMEBOY_KID]: "sprites-gameboy_kid",
  [OverworldSprite.SPRITE_FAIRY]: "sprites-fairy",
  [OverworldSprite.SPRITE_AGATHA]: "sprites-agatha",
  [OverworldSprite.SPRITE_BRUNO]: "sprites-bruno",
  [OverworldSprite.SPRITE_LORELEI]: "sprites-lorelei",
  [OverworldSprite.SPRITE_SEEL]: "sprites-seel",
  [OverworldSprite.SPRITE_POKE_BALL]: "sprites-poke_ball",
  [OverworldSprite.SPRITE_FOSSIL]: "sprites-fossil",
  [OverworldSprite.SPRITE_BOULDER]: "sprites-boulder",
  [OverworldSprite.SPRITE_PAPER]: "sprites-paper",
  [OverworldSprite.SPRITE_POKEDEX]: "sprites-pokedex",
  [OverworldSprite.SPRITE_CLIPBOARD]: "sprites-clipboard",
  [OverworldSprite.SPRITE_SNORLAX]: "sprites-snorlax",
  [OverworldSprite.SPRITE_UNUSED_OLD_AMBER]: "sprites-old_amber",
  [OverworldSprite.SPRITE_OLD_AMBER]: "sprites-old_amber",
  [OverworldSprite.SPRITE_UNUSED_GAMBLER_ASLEEP_1]: "sprites-gambler_asleep",
  [OverworldSprite.SPRITE_UNUSED_GAMBLER_ASLEEP_2]: "sprites-gambler_asleep",
  [OverworldSprite.SPRITE_GAMBLER_ASLEEP]: "sprites-gambler_asleep"
};

export function getOverworldSpriteImage(
  sprite: OverworldSprite,
  images: ImageCache
): ImageBitmap {
  return images[OVERWORLD_SPRITE_LOOKUP[sprite]];
}
