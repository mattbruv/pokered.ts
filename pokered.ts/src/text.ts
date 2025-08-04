export type MapText = Record<string, Text>;

export type Text = TextCommand[];

type TextCommand =
  | ["text", string]
  | ["line", string]
  | ["cont", string]
  | ["cont", string]
  | ["text_ram", string]
  | ["para", string]
  | ["prompt"]
  | ["text_start"]
  | ["text_decimal", string] // Only used in Daycare
  | ["text_bcd", string] // Only used in Daycare
  | ["text_end"];
