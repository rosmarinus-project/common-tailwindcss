import { colorPaletteToCssVarMap } from '../src/components/colors';

describe('color', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('colorPaletteToCssVarMap', () => {
    expect(
      colorPaletteToCssVarMap({
        'neutral/100': '#ffffff',
        'NEUTRAL/400/100': '#ffffff',
        neutral_1000: '#ffffff',
      }),
    ).toStrictEqual({
      '--neutral-100': '#ffffff',
      '--neutral-400-100': '#ffffff',
      '--neutral-1000': '#ffffff',
    });
  });
});
