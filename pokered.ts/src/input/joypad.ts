import { GameKey } from "./input";

export type JoypadState = {
  scripted: boolean;
  joypadStates: GameKey[];
  onSimulationEnd: (() => void) | null;
};

export function SimulateJoypad(
  state: JoypadState,
  buffer: GameKey[],
  onSimulationEnd: () => void
) {
  state.scripted = true;
  state.joypadStates = buffer;
  state.onSimulationEnd = onSimulationEnd;
}
