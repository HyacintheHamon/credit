import React from 'react';
import {TouchableOpacity, StyleProp, TextStyle, ViewStyle} from 'react-native';
import Spinner from '@components/atoms/Spinner';
import Text from '@components/atoms/Text';
import {createUseStyles} from '@styles/createUseStyles';
import {useTheme, ThemeType} from '@styles/theme';

interface Props {
  text?: string;
  onPress: () => void;

  disabled?: boolean;
  outlined?: boolean;
  loading?: boolean;
  textType?: string;

  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export type ButtonStyles = {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export type ButtonStylesContext = {
  disabled: boolean;
  outlined: boolean;
  loading: boolean;
  theme: any;
};

const SimpleButton: React.FC<Props> = props => {
  const {
    text,
    disabled = false,
    outlined = false,
    loading = false,
    textType,
    onPress,
    textStyle,
    containerStyle,
  } = props;

  const theme: any = useTheme();

  const styles = useStyles(
    {
      disabled,
      outlined,
      loading,
      theme,
    },
    {containerStyle, textStyle},
  );

  return (
    <TouchableOpacity
      style={styles.containerStyle}
      disabled={disabled}
      onPress={onPress}>
      {loading && (
        <Spinner color={outlined ? theme?.colors.blue : theme?.colors.white} />
      )}

      <Text
        type={textType}
        outlined={outlined}
        disabled={disabled}
        style={styles.textStyle}>
        {loading ? 'Chargement en cours' : text ? text : 'text'}
      </Text>
    </TouchableOpacity>
  );
};

export const getStyles = (
  context?: ButtonStylesContext,
  style?: ButtonStyles,
): ButtonStyles => ({
  textStyle: [
    {
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 22,
      color: context?.theme.colors.white,
    },
    context?.loading && {
      marginLeft: 10,
    },
    context?.disabled && {
      color: context?.theme.colors.gray,
    },
    context?.outlined && {
      color: context?.theme.colors.blue,
    },
    style?.textStyle,
  ],
  containerStyle: [
    {
      justifyContent: 'center',
      minHeight: 50,
      backgroundColor: context?.theme.colors.blue,
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 38,
    },
    context?.disabled && {
      backgroundColor: context?.theme.colors.disabled,
    },
    context?.outlined && {
      backgroundColor: context?.theme.colors.white,
      borderWidth: 3,
      borderColor: context?.theme.colors.blue,
    },
    context?.loading && {
      flexDirection: 'row',
    },
    context?.outlined && {
      backgroundColor: context?.theme.colors.white,
      borderWidth: 1,
      borderColor: context?.theme.colors.blue,
    },
    style?.containerStyle,
  ],
});

const useStyles = createUseStyles(getStyles);
export default SimpleButton;
