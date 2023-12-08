import { newComponent } from '../utils';

export function colorPaletteToCssVarMap(p: Record<string, string>) {
  return newComponent({
    ...Object.entries(p).reduce<Record<string, string>>((acc, [k, v]) => {
      const key = k.toLowerCase().replace(/[/_]/g, '-');

      acc[`--${key}`] = v;

      return acc;
    }, {}),
  });
}
