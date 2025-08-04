import { Map, MapName } from "../map";
import { Tileset } from "../tileset";
import { OAKS_LAB_BLOCKS } from "../data/blocks/OaksLab";
import { OverworldSprite } from "../sprite";

export const OaksLab: Map = {
  width: 5,
  height: 6,
  borderBlock: 3,
  blocks: OAKS_LAB_BLOCKS,
  tileset: Tileset.DOJO,
  connections: {},
  objects: {
    warps: [
      { x: 4, y: 11, toMap: "LAST_MAP", warpIndex: 2 },
      { x: 5, y: 11, toMap: "LAST_MAP", warpIndex: 2 }
    ],
    backgroundItems: [],
    objects: [
      {
        type: "trainer",
        x: 4,
        y: 3,
        sprite: OverworldSprite.SPRITE_BLUE,
        direction: "NONE",
        movement: "STAY",
        textId: "TEXT_OAKSLAB_RIVAL",
        trainerId: "OPP_RIVAL1",
        trainerLevel: 1
      },
      {
        type: "sprite",
        x: 6,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_CHARMANDER_POKE_BALL"
      },
      {
        type: "sprite",
        x: 7,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_SQUIRTLE_POKE_BALL"
      },
      {
        type: "sprite",
        x: 8,
        y: 3,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKE_BALL,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_BULBASAUR_POKE_BALL"
      },
      {
        type: "sprite",
        x: 5,
        y: 2,
        direction: "DOWN",
        sprite: OverworldSprite.SPRITE_OAK,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_OAK1"
      },
      {
        type: "sprite",
        x: 2,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_POKEDEX1"
      },
      {
        type: "sprite",
        x: 3,
        y: 1,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_POKEDEX,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_POKEDEX2"
      },
      {
        type: "sprite",
        x: 5,
        y: 10,
        direction: "UP",
        sprite: OverworldSprite.SPRITE_OAK,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_OAK2"
      },
      {
        type: "sprite",
        x: 1,
        y: 9,
        direction: "UP_DOWN",
        sprite: OverworldSprite.SPRITE_GIRL,
        movement: "WALK",
        textId: "TEXT_OAKSLAB_GIRL"
      },
      {
        type: "sprite",
        x: 2,
        y: 10,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_SCIENTIST1"
      },
      {
        type: "sprite",
        x: 8,
        y: 10,
        direction: "NONE",
        sprite: OverworldSprite.SPRITE_SCIENTIST,
        movement: "STAY",
        textId: "TEXT_OAKSLAB_SCIENTIST2"
      }
    ]
  },
  text: {
    _OaksLabRivalGrampsIsntAroundText: [
      ["text", "<RIVAL>: Yo"],
      ["line", "<PLAYER>! Gramps"],
      ["cont", "isn't around!"]
    ],
    _OaksLabRivalGoAheadAndChooseText: [
      ["text", "<RIVAL>: Heh, I"],
      ["line", "don't need to be"],
      ["cont", "greedy like you!"],
      ["para", "Go ahead and"],
      ["line", "choose, <PLAYER>!"]
    ],
    _OaksLabRivalMyPokemonLooksStrongerText: [
      ["text", "<RIVAL>: My"],
      ["line", "#MON looks a"],
      ["cont", "lot stronger."]
    ],
    _OaksLabThoseArePokeBallsText: [
      ["text", "Those are #"],
      ["line", "BALLs. They"],
      ["cont", "contain #MON!"]
    ],
    _OaksLabYouWantCharmanderText: [
      ["text", "So! You want the"],
      ["line", "fire #MON,"],
      ["cont", "CHARMANDER?"]
    ],
    _OaksLabYouWantSquirtleText: [
      ["text", "So! You want the"],
      ["line", "water #MON,"],
      ["cont", "SQUIRTLE?"]
    ],
    _OaksLabYouWantBulbasaurText: [
      ["text", "So! You want the"],
      ["line", "plant #MON,"],
      ["cont", "BULBASAUR?"]
    ],
    _OaksLabMonEnergeticText: [
      ["text", "This #MON is"],
      ["line", "really energetic!"],
      ["prompt"]
    ],
    _OaksLabReceivedMonText: [
      ["text", "<PLAYER> received"],
      ["line", "a @"],
      ["text_ram", "wNameBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _OaksLabLastMonText: [
      ["text", "That's PROF.OAK's"],
      ["line", "last #MON!"]
    ],
    _OaksLabOak1WhichPokemonDoYouWantText: [
      ["text", "OAK: Now, <PLAYER>,"],
      ["line", "which #MON do"],
      ["cont", "you want?"]
    ],
    _OaksLabOak1YourPokemonCanFightText: [
      ["text", "OAK: If a wild"],
      ["line", "#MON appears,"],
      ["cont", "your #MON can"],
      ["cont", "fight against it!"]
    ],
    _OaksLabOak1RaiseYourYoungPokemonText: [
      ["text", "OAK: <PLAYER>,"],
      ["line", "raise your young"],
      ["cont", "#MON by making"],
      ["cont", "it fight!"]
    ],
    _OaksLabOak1DeliverParcelText: [
      ["text", "OAK: Oh, <PLAYER>!"],
      ["para", "How is my old"],
      ["line", "#MON?"],
      ["para", "Well, it seems to"],
      ["line", "like you a lot."],
      ["para", "You must be"],
      ["line", "talented as a"],
      ["cont", "#MON trainer!"],
      ["para", "What? You have"],
      ["line", "something for me?"],
      ["para", "<PLAYER> delivered"],
      ["line", "OAK's PARCEL.@"],
      ["text_end"]
    ],
    _OaksLabOak1ParcelThanksText: [
      ["text_start"],
      ["para", "Ah! This is the"],
      ["line", "custom # BALL"],
      ["cont", "I ordered!"],
      ["cont", "Thank you!"]
    ],
    _OaksLabOak1PokemonAroundTheWorldText: [
      ["text", "#MON around the"],
      ["line", "world wait for"],
      ["cont", "you, <PLAYER>!"]
    ],
    _OaksLabOak1ReceivedPokeballsText: [
      ["text", "OAK: You can't get"],
      ["line", "detailed data on"],
      ["cont", "#MON by just"],
      ["cont", "seeing them."],
      ["para", "You must catch"],
      ["line", "them! Use these"],
      ["cont", "to capture wild"],
      ["cont", "#MON."],
      ["para", "<PLAYER> got 5"],
      ["line", "# BALLs!@"],
      ["text_end"]
    ],
    _OaksLabGivePokeballsExplanationText: [
      ["text_start"],
      ["para", "When a wild"],
      ["line", "#MON appears,"],
      ["cont", "it's fair game."],
      ["para", "Just throw a #"],
      ["line", "BALL at it and try"],
      ["line", "to catch it!"],
      ["para", "This won't always"],
      ["line", "work, though."],
      ["para", "A healthy #MON"],
      ["line", "could escape. You"],
      ["cont", "have to be lucky!"]
    ],
    _OaksLabOak1ComeSeeMeSometimesText: [
      ["text", "OAK: Come see me"],
      ["line", "sometimes."],
      ["para", "I want to know how"],
      ["line", "your #DEX is"],
      ["cont", "coming along."]
    ],
    _OaksLabOak1HowIsYourPokedexComingText: [
      ["text", "OAK: Good to see "],
      ["line", "you! How is your "],
      ["cont", "#DEX coming? "],
      ["cont", "Here, let me take"],
      ["cont", "a look!"],
      ["prompt"]
    ],
    _OaksLabPokedexText: [
      ["text", "It's encyclopedia-"],
      ["line", "like, but the"],
      ["cont", "pages are blank!"]
    ],
    _OaksLabOak2Text: [["text", "?"]],
    _OaksLabGirlText: [
      ["text", "PROF.OAK is the"],
      ["line", "authority on"],
      ["cont", "#MON!"],
      ["para", "Many #MON"],
      ["line", "trainers hold him"],
      ["cont", "in high regard!"]
    ],
    _OaksLabRivalFedUpWithWaitingText: [
      ["text", "<RIVAL>: Gramps!"],
      ["line", "I'm fed up with"],
      ["cont", "waiting!"]
    ],
    _OaksLabOakChooseMonText: [
      ["text", "OAK: <RIVAL>?"],
      ["line", "Let me think..."],
      ["para", "Oh, that's right,"],
      ["line", "I told you to"],
      ["cont", "come! Just wait!"],
      ["para", "Here, <PLAYER>!"],
      ["para", "There are 3"],
      ["line", "#MON here!"],
      ["para", "Haha!"],
      ["para", "They are inside"],
      ["line", "the # BALLs."],
      ["para", "When I was young,"],
      ["line", "I was a serious"],
      ["cont", "#MON trainer!"],
      ["para", "In my old age, I"],
      ["line", "have only 3 left,"],
      ["cont", "but you can have"],
      ["cont", "one! Choose!"]
    ],
    _OaksLabRivalWhatAboutMeText: [
      ["text", "<RIVAL>: Hey!"],
      ["line", "Gramps! What"],
      ["cont", "about me?"]
    ],
    _OaksLabOakBePatientText: [
      ["text", "OAK: Be patient!"],
      ["line", "<RIVAL>, you can"],
      ["cont", "have one too!"]
    ],
    _OaksLabOakDontGoAwayYetText: [
      ["text", "OAK: Hey! Don't go"],
      ["line", "away yet!"]
    ],
    _OaksLabRivalIllTakeThisOneText: [
      ["text", "<RIVAL>: I'll take"],
      ["line", "this one, then!"]
    ],
    _OaksLabRivalReceivedMonText: [
      ["text", "<RIVAL> received"],
      ["line", "a @"],
      ["text_ram", "wNameBuffer"],
      ["text", "!@"],
      ["text_end"]
    ],
    _OaksLabRivalIllTakeYouOnText: [
      ["text", "<RIVAL>: Wait"],
      ["line", "<PLAYER>!"],
      ["cont", "Let's check out"],
      ["cont", "our #MON!"],
      ["para", "Come on, I'll take"],
      ["line", "you on!"]
    ],
    _OaksLabRivalIPickedTheWrongPokemonText: [
      ["text", "WHAT?"],
      ["line", "Unbelievable!"],
      ["cont", "I picked the"],
      ["cont", "wrong #MON!"],
      ["prompt"]
    ],
    _OaksLabRivalAmIGreatOrWhatText: [
      ["text", "<RIVAL>: Yeah! Am"],
      ["line", "I great or what?"],
      ["prompt"]
    ],
    _OaksLabRivalSmellYouLaterText: [
      ["text", "<RIVAL>: Okay!"],
      ["line", "I'll make my"],
      ["cont", "#MON fight to"],
      ["cont", "toughen it up!"],
      ["para", "<PLAYER>! Gramps!"],
      ["line", "Smell you later!"]
    ],
    _OaksLabRivalGrampsText: [["text", "<RIVAL>: Gramps!"]],
    _OaksLabRivalWhatDidYouCallMeForText: [
      ["text", "<RIVAL>: What did"],
      ["line", "you call me for?"]
    ],
    _OaksLabOakIHaveARequestText: [
      ["text", "OAK: Oh right! I"],
      ["line", "have a request"],
      ["cont", "of you two."]
    ],
    _OaksLabOakMyInventionPokedexText: [
      ["text", "On the desk there"],
      ["line", "is my invention,"],
      ["cont", "#DEX!"],
      ["para", "It automatically"],
      ["line", "records data on"],
      ["cont", "#MON you've"],
      ["cont", "seen or caught!"],
      ["para", "It's a hi-tech"],
      ["line", "encyclopedia!"]
    ],
    _OaksLabOakGotPokedexText: [
      ["text", "OAK: <PLAYER> and"],
      ["line", "<RIVAL>! Take"],
      ["cont", "these with you!"],
      ["para", "<PLAYER> got"],
      ["line", "#DEX from OAK!@"],
      ["text_end"]
    ],
    _OaksLabOakThatWasMyDreamText: [
      ["text", "To make a complete"],
      ["line", "guide on all the"],
      ["cont", "#MON in the"],
      ["cont", "world..."],
      ["para", "That was my dream!"],
      ["para", "But, I'm too old!"],
      ["line", "I can't do it!"],
      ["para", "So, I want you two"],
      ["line", "to fulfill my"],
      ["cont", "dream for me!"],
      ["para", "Get moving, you"],
      ["line", "two!"],
      ["para", "This is a great"],
      ["line", "undertaking in"],
      ["cont", "#MON history!"]
    ],
    _OaksLabRivalLeaveItAllToMeText: [
      ["text", "<RIVAL>: Alright"],
      ["line", "Gramps! Leave it"],
      ["cont", "all to me!"],
      ["para", "<PLAYER>, I hate to"],
      ["line", "say it, but I"],
      ["cont", "don't need you!"],
      ["para", "I know! I'll"],
      ["line", "borrow a TOWN MAP"],
      ["cont", "from my sis!"],
      ["para", "I'll tell her not"],
      ["line", "to lend you one,"],
      ["cont", "<PLAYER>! Hahaha!"]
    ],
    _OaksLabScientistText: [
      ["text", "I study #MON as"],
      ["line", "PROF.OAK's AIDE."]
    ]
  }
};
