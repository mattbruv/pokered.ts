import { PlayerData } from "../game";
import { MovementStatus } from "../render/sprite";
import { JoypadState } from "./joypad";

export type GameKey = "Up" | "Down" | "Left" | "Right";

export type InputState = Record<GameKey, boolean>;

const KEY_MAP: Record<GameKey, Set<string>> = {
  Up: new Set(["ArrowUp"]),
  Down: new Set(["ArrowDown"]),
  Left: new Set(["ArrowLeft"]),
  Right: new Set(["ArrowRight"])
};

type DebugCallbacks = {
  toggleWalkOnWalls: () => void;
  toggleBlockView: () => void;
};

export class GameInput {
  #pressed = new Set<string>();

  constructor(callbacks: DebugCallbacks) {
    window.addEventListener("keydown", (e) => {
      this.#pressed.add(e.key);
    });

    window.addEventListener("keyup", (e) => {
      this.#pressed.delete(e.key);

      if (e.key.toLowerCase() == "w") {
        callbacks.toggleWalkOnWalls();
      }

      if (e.key.toLowerCase() == "b") {
        callbacks.toggleBlockView();
      }
    });
  }

  getInput(joypad: JoypadState, player: PlayerData): InputState {
    const state: InputState = {
      Up: false,
      Down: false,
      Left: false,
      Right: false
    };

    // if we're scripting and the player is moving, return.
    if (
      joypad.scripted &&
      player.sprite.movementStatus === MovementStatus.Moving
    ) {
      return state;
    }

    // If the game engine is moving the player, return the next scripted key
    // and pop it out of the array
    if (
      joypad.scripted &&
      player.sprite.movementStatus === MovementStatus.Ready
    ) {
      // if we have no keys to simulate, something went wrong
      const nextKey = joypad.joypadStates.at(0);
      if (nextKey === undefined)
        throw Error("The joypad is being scripted but no keys remain!");

      state[nextKey] = true;

      return state;
    }

    for (const [key, bindings] of Object.entries(KEY_MAP)) {
      if (this.#pressed.intersection(bindings).size) {
        state[key as GameKey] = true;
      }
    }

    return state;
  }
}
