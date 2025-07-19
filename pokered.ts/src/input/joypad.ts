import { GameKey } from "./input";

export type JoypadState = {
  scripted: boolean;
  joypadStates: GameKey[];
};

export function SimulateJoypad(state: JoypadState, buffer: GameKey[]) {
  state.scripted = true;
  state.joypadStates = buffer;
}
