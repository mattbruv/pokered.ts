import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Select, Text, type ComboboxItem } from "@mantine/core";
import { OverworldSprite } from "pokered.ts";

const spriteData: ComboboxItem[] = Object.keys(OverworldSprite)
  .filter((key) => isNaN(Number(key))) // keep string keys only
  .map(
    (key): ComboboxItem => ({
      label: key,
      value: OverworldSprite[key as keyof typeof OverworldSprite].toString(),
    })
  );

type SpriteCallback = (sprite: OverworldSprite) => void;

export function SetSprite({
  spriteCallback,
}: {
  spriteCallback: SpriteCallback;
}) {
  const [opened, { open, close }] = useDisclosure(false);

  function setSprite(value: string | null) {
    if (value == null) spriteCallback(OverworldSprite.SPRITE_RED);
    else spriteCallback(value as any as OverworldSprite);
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Player Sprite">
        {/* Modal content */}
        <Text size="sm" fw={500}>
          Sprite
        </Text>
        <Select
          data={spriteData}
          placeholder="Choose Player Sprite"
          onChange={(e) => setSprite(e)}
          searchable
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Set Player Sprite
      </Button>
    </>
  );
}
