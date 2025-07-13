import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Select,
  Text,
  Group,
  NumberInput,
  type ComboboxItem,
} from "@mantine/core";
import { MapName } from "pokered.ts";
import { useState } from "react";
import { useCallback } from "react";

type WarpCallback = (map: MapName, x: number, y: number) => void;

const warpData: ComboboxItem[] = Object.keys(MapName)
  .filter((key) => isNaN(Number(key))) // keep string keys only
  .map(
    (key): ComboboxItem => ({
      label: key,
      value: MapName[key as keyof typeof MapName].toString(),
    })
  );

export function WarpTo({ warpCallback }: { warpCallback: WarpCallback }) {
  const [opened, { open, close }] = useDisclosure(false);
  const [warpMap, setWarpMap] = useState<MapName>(MapName.AgathasRoom);
  const [warpX, setWarpX] = useState(0);
  const [warpY, setWarpY] = useState(0);

  function setWarp(value: string | null) {
    console.log(warpMap, value);
    if (value == null) setWarpMap(MapName.PalletTown);
    else setWarpMap(value as any as MapName);
  }

  const handleWarpChange = useCallback(setWarp, []);

  const handleWarp = () => {
    if (!warpMap) {
      alert("Fill in warp map");
      return;
    }
    warpCallback(warpMap, warpX, warpY);
  };

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
        <Text size="sm" fw={500}>
          Warp To
        </Text>
        <Select
          data={warpData}
          placeholder="Choose Destination Map"
          onChange={handleWarpChange}
          searchable
        />
        <Group grow mt="xs">
          <NumberInput
            label="X"
            placeholder="X pos"
            value={warpX}
            onChange={(e) => setWarpX(Number(e))}
          />
          <NumberInput
            label="Y"
            placeholder="Y pos"
            value={warpY}
            onChange={(e) => setWarpY(Number(e))}
          />
        </Group>
        <Button fullWidth mt="sm" onClick={handleWarp}>
          Warp
        </Button>
      </Modal>

      <Button variant="default" onClick={open}>
        Warp To Map
      </Button>
    </>
  );
}
