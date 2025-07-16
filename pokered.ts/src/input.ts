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
};

export class GameInput {
  #pressed = new Set<string>();

  constructor(callbacks: DebugCallbacks) {
    window.addEventListener("keydown", (e) => {
      this.#pressed.add(e.key);
    });

    window.addEventListener("keyup", (e) => {
      this.#pressed.delete(e.key);

      if (e.key == "w") {
        callbacks.toggleWalkOnWalls();
      }
    });
  }

  getInput(): InputState {
    const state: InputState = {
      Up: false,
      Down: false,
      Left: false,
      Right: false
    };

    for (const [key, bindings] of Object.entries(KEY_MAP)) {
      if (this.#pressed.intersection(bindings).size) {
        state[key as GameKey] = true;
      }
    }

    return state;
  }
}
