import React from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Text, StyleProp, TextStyle} from 'react-native';

import {createUseStyles} from '@styles/createUseStyles';

import {useTheme, ThemeType} from '@styles/theme';

interface Props {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;

  type?: string;
  disabled?: boolean;
  outlined?: boolean;
  focused?: boolean;
  bold?: boolean;
}

export type TextStylesContext = {
  type: string;
  disabled?: boolean;
  outlined?: boolean;
  focused?: boolean;
  theme: any;
  bold?: boolean;
};

const Texts: React.FC<Props> = props => {
  const {
    style,
    children = '',
    disabled = false,
    outlined = false,
    focused = false,
    type = 'l',
    bold = false,
  } = props;

  const theme: any = useTheme();

  const textStyle = useStyles(
    {type, disabled, outlined, theme, bold, focused},
    style,
  );

  return <Text style={textStyle}>{children}</Text>;
};

export const getStyles = (
  context?: TextStylesContext,
  style?: StyleProp<TextStyle>,
): StyleProp<TextStyle> => [
  {
    //TODO -> SET DEFAULT TEXT PROPS
  },

  context?.type === 's' && {
    fontSize: 12,
  },
  context?.type === 'm' && {
    fontSize: 14,
  },
  context?.type === 'l' && {
    fontSize: 16,
  },
  context?.type === 'xl' && {
    fontSize: 25,
  },
  context?.disabled && {
    color: context?.theme.colors.gray,
  },
  context?.outlined && {
    color: context?.theme.colors.blue,
  },
  context?.outlined && {
    color: context?.theme.colors.purple,
  },
  context?.bold && {
    fontWeight: 'bold',
  },
  style,
];

const useStyles = createUseStyles(getStyles);
export default Texts;
