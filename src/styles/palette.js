const WHITE = '#FFFFFF';
const BLUE = '#8E95AA';
const DARK = '#111A45';
const BLACK = '#000000';
const LIGHT = '#E7E7E7';
const GRAY = '#8E95AA';
const GRAYLIGHT = '#DBEFE3';
const BORDER = '#eee';
const GREEN = '#3BA867';
const PURPLE = '#d223ff';
const RED = '#FF0000';
const DISABLE = '#e1e7f0';

const pallet = {
  primary: {
    main: GREEN,
    contrastText: BLACK,
  },
  secondary: {
    main: WHITE,
    contrastText: BLUE,
  },
  text: {
    light: GRAYLIGHT,
    medium: GRAY,
    dark: DARK,
    blue: BLUE,
  },
  gradient: {
    darkBackground: 'linear-gradient(179deg, #414046 0%, #37363B 100%)',
    pageBackground: 'linear-gradient(107.54deg, #3BA867 0%, rgba(59, 168, 103, 0) 80%)',
    lightBackground: 'linear-gradient(180deg, #FFFFFF 21%,rgba(255,255,255,0.95) 39%,rgba(255,255,255,0.50) 100%)',
    blueBackground: 'linear-gradient(180deg, rgba(65,64,70,0.01) 15%,rgba(55,54,59,0.03) 100%)',
    button: 'linear-gradient(180deg, #ECB515 0%, #C7801F 100%)',
    buttonHover: 'linear-gradient(180deg, #CB9601 0%, #B86C03 100%)',
    bannerIcons: 'linear-gradient(to bottom, #f1b906, #d08d1a)',
    green: 'linear-gradient(to bottom, #ddf0ce, #c2dcb8)',
    orange: 'linear-gradient(to bottom, #f9efda, #f7dfbc)',
    red: 'linear-gradient(to bottom, #F7D3D3, #F8B9BA)',
  },
  background: {
    white: WHITE,
  },
  color: {
    green: GREEN,
    blue: BLUE,
    purple: PURPLE,
    red: RED,
    gray: GRAY,
    bordColor: BORDER,
    white: WHITE,
    black: BLACK,
    bgNone: 'transparent',
    light: LIGHT,
    disableColor: DISABLE,
  },
  skeleton: {
    light: LIGHT,
  },
};

export default pallet;
