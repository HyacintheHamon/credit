import React, {useContext} from 'react';
import {Platform} from 'react-native';

export const colors = {
  black: '#0F0F0F',
  white: '#FFFFFF',
  green: '#00915A',
  blue: '#1652F0',
  purple: '#4863F5',
  gray: '#9A9A9A',
  lightGray: '#C8C8C8',
  disabled: '#E8E8E8',
  darkGray: '#6D6D6D',
  cardBackground: '#F5F5F5',
  desktopMenuBackground: '#555555',
  overlayBackground: '#000000B3',
};

const regex = {
  NUMERIC: /[^0-9]/g,
  EMAIL: /\S+@\S+\.\S+/,
  HAS_NUMBER: /(?=.*[0-9])/,
  HAS_UPPERCASE: /(?=.*[A-Z])/,
  HAS_LOWERCASE: /(?=.*[a-z])/,
  HAS_SPECIAL_CHAR: /(?=.*\W)/,
  PASSWORD: /^(?=.{8,15}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
};

const defaultTheme = {
  breakpoints: {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    Desktop: 2560,
  },
  borderRadius: {
    none: 0,
    xs: 5,
    full: 99999,
  },
  marginsPaddings: {
    none: '0',
    xs: '5px',
    s: '10px',
    m: '15px',
    xm: '20px',
    l: '30px',
    xl: '35px',
    xxl: '40px',
    xxxl: '45px',
    big: '55px',
    xbig: '60px',
    xxbig: '70px',
    huge: '100px',
    xhuge: '130px',
    xxhuge: '170px',
  },
  colors,
  platform: Platform.OS,
  regex,
};

export const Theme = {
  light: {
    ...defaultTheme,
    colors: {
      ...colors,
    },
  },
  dark: {
    ...defaultTheme,
    colors: {
      ...colors,
    },
  },
};

export type ThemeType = {
  theme?: {
    colors?: string;
    fonts?: string;
  };
  toggleTheme?: () => void;
};

export const ThemeContext = React.createContext({
  theme: Theme.light,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
