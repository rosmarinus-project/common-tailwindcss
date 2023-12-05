import { type PresetsConfig } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';

function arrToPxObj(arr: number[]) {
  return arr.reduce<Record<number, string>>((acc, cur) => {
    acc[cur] = `${cur}px`;

    return acc;
  }, {});
}

function arrToPercentObj(arr: number[]) {
  return arr.reduce<Record<string, string>>((acc, cur) => {
    acc[`${cur}%`] = `${cur}%`;

    return acc;
  }, {});
}

function arrToColorsObj(arr: string[]) {
  return arr.reduce<Record<string, string>>((acc, cur) => {
    acc[cur.toLowerCase()] = `var(--${cur})`;

    return acc;
  }, {});
}

function arrToScreenWidthObj(arr: number[]) {
  return arr.reduce<Record<string, string>>((acc, cur) => {
    acc[`screen-${cur}`] = `${cur}vw`;

    return acc;
  }, {});
}

const noSelect = {
  '-webkit-touch-callout': 'none',
  '-webkit-user-select': 'none',
  '-khtml-user-select': 'none',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  'user-select': 'none',
};

function range(start: number, end: number) {
  const arr: number[] = [];

  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

const presets: PresetsConfig = {
  content: ['./src/**/*.{html,js,ts,tsx,jsx}'],
  theme: {
    fontSize: {
      ...arrToPxObj([10, 12, 14, 16, 20]),
    },
    spacing: {
      ...arrToPxObj(range(0, 100)),
      ...arrToPercentObj(range(0, 100)),
      ...arrToScreenWidthObj(range(0, 100)),
    },
    zIndex: { 1: '1', 0: '0', dialog: '1000' },
    flex: { 1: '1' },
    borderWidth: {
      ...arrToPxObj([1]),
    },
    borderRadius: {
      ...arrToPxObj([2, 4, 12]),
      half: '50%',
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        // center in flex
        '.p-flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
        // center in absolute
        '.p-pos-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.p-no-select': noSelect,
        '.p-bold': {
          'font-weight': '500',
        },
        '.p-ellipsis': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          'white-space': 'nowrap',
          'word-wrap': 'normal',
        },
        '.p-ellipsis-2': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          display: '-webkit-box',
          /* autoprefixer: off */
          '-webkit-box-orient': 'vertical',
          /* autoprefixer: on */
          '-webkit-line-clamp': '2',
        },
        '.p-ellipsis-3': {
          overflow: 'hidden',
          'text-overflow': 'ellipsis',
          display: '-webkit-box',
          /* autoprefixer: off */
          '-webkit-box-orient': 'vertical',
          /* autoprefixer: on */
          '-webkit-line-clamp': '3',
        },
      });
    }),
  ],
};

export default presets;

export const utils = {
  arrToPxObj,
  arrToPercentObj,
  arrToColorsObj,
  range,
};

export const components = {
  noSelect,
};
