import { Tileset } from "./tileset";

export type Map = {
  /** Width of the map in blocks */
  width: number;
  /** Height of the map in blocks */
  height: number;
  /**
   * Represents a width * height array of indices into the blocks array for this map's tileset.
   */
  blocks: BlockIndex[];
  tileset: Tileset;

  connections: MapConnections;

  object: MapObject;
  textPointers: unknown[];
  script: () => void;
};

export type MapObject = {
  //
};

type BaseConnection = {
  map: MapName;
};

export type VerticalConnection = BaseConnection & {
  yOffset: number;
};

export type HorizontalConnection = BaseConnection & {
  xOffset: number;
};

export type MapConnections = {
  north?: VerticalConnection;
  south?: VerticalConnection;
  east?: HorizontalConnection;
  west?: HorizontalConnection;
};

export enum MapName {
  AgathasRoom,
  BikeShop,
  BillsHouse,
  BluesHouse,
  BrunosRoom,
  CeladonChiefHouse,
  CeladonCity,
  CeladonDiner,
  CeladonGym,
  CeladonHotel,
  CeladonMansion1F,
  CeladonMansion2F,
  CeladonMansion3F,
  CeladonMansionRoof,
  CeladonMansionRoofHouse,
  CeladonMart1F,
  CeladonMart2F,
  CeladonMart3F,
  CeladonMart4F,
  CeladonMart5F,
  CeladonMartElevator,
  CeladonMartRoof,
  CeladonPokecenter,
  CeruleanBadgeHouse,
  CeruleanCave1F,
  CeruleanCave2F,
  CeruleanCaveB1F,
  CeruleanCity,
  CeruleanGym,
  CeruleanMart,
  CeruleanPokecenter,
  CeruleanTradeHouse,
  CeruleanTrashedHouse,
  ChampionsRoom,
  CinnabarGym,
  CinnabarIsland,
  CinnabarLab,
  CinnabarLabFossilRoom,
  CinnabarLabMetronomeRoom,
  CinnabarLabTradeRoom,
  CinnabarMart,
  CinnabarPokecenter,
  Colosseum,
  CopycatsHouse1F,
  CopycatsHouse2F,
  Daycare,
  DiglettsCave,
  DiglettsCaveRoute11,
  DiglettsCaveRoute2,
  FightingDojo,
  FuchsiaBillsGrandpasHouse,
  FuchsiaCity,
  FuchsiaGoodRodHouse,
  FuchsiaGym,
  FuchsiaMart,
  FuchsiaMeetingRoom,
  FuchsiaPokecenter,
  GameCorner,
  GameCornerPrizeRoom,
  HallOfFame,
  IndigoPlateau,
  IndigoPlateauLobby,
  LancesRoom,
  LavenderCuboneHouse,
  LavenderMart,
  LavenderPokecenter,
  LavenderTown,
  LoreleisRoom,
  MrFujisHouse,
  MrPsychicsHouse,
  MtMoon1F,
  MtMoonB1F,
  MtMoonB2F,
  MtMoonPokecenter,
  Museum1F,
  Museum2F,
  NameRatersHouse,
  OaksLab,
  PalletTown,
  PewterCity,
  PewterGym,
  PewterMart,
  PewterNidoranHouse,
  PewterPokecenter,
  PewterSpeechHouse,
  PokemonFanClub,
  PokemonMansion1F,
  PokemonMansion2F,
  PokemonMansion3F,
  PokemonMansionB1F,
  PokemonTower1F,
  PokemonTower2F,
  PokemonTower3F,
  PokemonTower4F,
  PokemonTower5F,
  PokemonTower6F,
  PokemonTower7F,
  PowerPlant,
  RedsHouse1F,
  RedsHouse2F,
  RockTunnel1F,
  RockTunnelB1F,
  RockTunnelPokecenter,
  RocketHideoutB1F,
  RocketHideoutB2F,
  RocketHideoutB3F,
  RocketHideoutB4F,
  RocketHideoutElevator,
  Route1,
  Route10,
  Route11,
  Route11Gate1F,
  Route11Gate2F,
  Route12,
  Route12Gate1F,
  Route12Gate2F,
  Route12SuperRodHouse,
  Route13,
  Route14,
  Route15,
  Route15Gate1F,
  Route15Gate2F,
  Route16,
  Route16FlyHouse,
  Route16Gate1F,
  Route16Gate2F,
  Route17,
  Route18,
  Route18Gate1F,
  Route18Gate2F,
  Route19,
  Route2,
  Route20,
  Route21,
  Route22,
  Route22Gate,
  Route23,
  Route24,
  Route25,
  Route2Gate,
  Route2TradeHouse,
  Route3,
  Route4,
  Route5,
  Route5Gate,
  Route6,
  Route6Gate,
  Route7,
  Route7Gate,
  Route8,
  Route8Gate,
  Route9,
  SSAnne1F,
  SSAnne1FRooms,
  SSAnne2F,
  SSAnne2FRooms,
  SSAnne3F,
  SSAnneB1F,
  SSAnneB1FRooms,
  SSAnneBow,
  SSAnneCaptainsRoom,
  SSAnneKitchen,
  SafariZoneCenter,
  SafariZoneCenterRestHouse,
  SafariZoneEast,
  SafariZoneEastRestHouse,
  SafariZoneGate,
  SafariZoneNorth,
  SafariZoneNorthRestHouse,
  SafariZoneSecretHouse,
  SafariZoneWest,
  SafariZoneWestRestHouse,
  SaffronCity,
  SaffronGym,
  SaffronMart,
  SaffronPidgeyHouse,
  SaffronPokecenter,
  SeafoamIslands1F,
  SeafoamIslandsB1F,
  SeafoamIslandsB2F,
  SeafoamIslandsB3F,
  SeafoamIslandsB4F,
  SilphCo10F,
  SilphCo11F,
  SilphCo1F,
  SilphCo2F,
  SilphCo3F,
  SilphCo4F,
  SilphCo5F,
  SilphCo6F,
  SilphCo7F,
  SilphCo8F,
  SilphCo9F,
  SilphCoElevator,
  TradeCenter,
  UndergroundPathNorthSouth,
  UndergroundPathRoute5,
  UndergroundPathRoute6,
  UndergroundPathRoute7,
  UndergroundPathRoute7Copy,
  UndergroundPathRoute8,
  UndergroundPathWestEast,
  VermilionCity,
  VermilionDock,
  VermilionGym,
  VermilionMart,
  VermilionOldRodHouse,
  VermilionPidgeyHouse,
  VermilionPokecenter,
  VermilionTradeHouse,
  VictoryRoad1F,
  VictoryRoad2F,
  VictoryRoad3F,
  ViridianCity,
  ViridianForest,
  ViridianForestNorthGate,
  ViridianForestSouthGate,
  ViridianGym,
  ViridianMart,
  ViridianNicknameHouse,
  ViridianPokecenter,
  ViridianSchoolHouse,
  WardensHouse,
}

export type BlockIndex = number;

/** A single tile index (0-255) into the tileset */
export type TileIndex = number;

/**
 * A BlockSet is an array of Blocks
 */
export type BlockSet = readonly Block[];

/**
 * A block contains 16 tile indices,
 * where each one is an offset into the tiles from the tileset.
 */
// make a tuple to ensure 4x4 structure at compile time
export type Block = readonly [
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex,
  TileIndex
];
