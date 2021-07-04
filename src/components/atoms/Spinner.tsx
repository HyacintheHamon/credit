import React from 'react';
import {View, StyleProp, ViewStyle, ActivityIndicator} from 'react-native';

import {createUseStyles} from '@styles/createUseStyles';

interface Props {
  size?: 'small' | 'large' | undefined;
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export type StylesContext = {};

const Spinner: React.FC<Props> = props => {
  const {color, size, style} = props;
  const styles = useStyles({}, style);

  return <ActivityIndicator color={color} size={size || 'small'} />;
};

export const getStyles = (
  context?: StylesContext,
  style?: StyleProp<ViewStyle>,
): StyleProp<ViewStyle> => [{}, style];

const useStyles = createUseStyles(getStyles);
export default Spinner;
