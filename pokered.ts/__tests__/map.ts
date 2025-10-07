import { loadImageBitmaps } from "../src/gfx/images";
import { MapName } from "../src/map";
import { getMap } from "../src/mapLookup";
import { getMapRender } from "../src/render/map";

describe("map renderer", () => {
  test("maps render correctly", async () => {
    expect(MapName[0]).toBe("AgathasRoom");

    const values = Object.entries(MapName);
    const cache = await loadImageBitmaps();

    for (const [key, name] of values) {
      const map = getMap(MapName[name as keyof typeof MapName]);
      const mapRender = getMapRender(
        map.width,
        map.height,
        map.tileset,
        map.blocks,
        cache
      );
    }

    expect(Object.keys(MapName).length).toBe(3);
  });
});
