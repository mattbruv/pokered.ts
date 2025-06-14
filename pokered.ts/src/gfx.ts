import { graphicsBase64 } from "./gfxBase64";

export type ImageCache = Record<keyof typeof graphicsBase64, ImageBitmap>;

export async function loadImageBitmaps(): Promise<ImageCache> {
  const entries = await Promise.all(
    Object.entries(graphicsBase64).map(async ([key, base64]) => {
      const response = await fetch(`data:image/png;base64,${base64}`);
      const blob = await response.blob();
      const bitmap = await createImageBitmap(blob);
      return [key, bitmap] as const;
    })
  );

  return Object.fromEntries(entries) as ImageCache;
}
