import { colorPaletteToCssVarMap } from '../src/components/colors';
import { arrToColorsObj } from '../src/utils';

describe('color', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('colorPaletteToCssVarMap', () => {
    expect(
      colorPaletteToCssVarMap({
        'neutral/100': '#ffffff',
        'NEUTRAL/400/100': '#ffffff',
        neutral_1000: '#ffffff',
        'neutral-200': '#ffffff',
      }),
    ).toStrictEqual({
      '--neutral-100': '#ffffff',
      '--neutral-400-100': '#ffffff',
      '--neutral-1000': '#ffffff',
      '--neutral-200': '#ffffff',
    });
  });

  test('arrToColorsObj', () => {
    expect(
      arrToColorsObj(['neutral/100', 'NEUTRAL/400/100', 'neutral_1000', 'neutral-200', '--neutral-300']),
    ).toStrictEqual({
      'neutral-100': 'var(--neutral-100)',
      'neutral-400-100': 'var(--neutral-400-100)',
      'neutral-1000': 'var(--neutral-1000)',
      'neutral-200': 'var(--neutral-200)',
      'neutral-300': 'var(--neutral-300)',
    });
  });
});
