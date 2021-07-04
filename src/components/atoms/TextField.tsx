import React, {useState} from 'react';
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import Text from '@components/atoms/Text';
import {createUseStyles} from '@styles/createUseStyles';

import {useTheme, ThemeType} from '@styles/theme';

// @ts-ignore
import Feather from 'react-native-vector-icons/dist/Feather';
// @ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

interface Props {
  code?: boolean;
  disabled?: boolean;
  focused?: boolean;
  errored?: boolean;
  password?: boolean;
  secure?: boolean;
  clientID?: boolean;
  clientCode?: boolean;
  search?: boolean;
  onKeyPress?: (e: any) => void;
  innerRef?: any;
  inputProps?: TextInputProps;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputIconStyle?: StyleProp<ViewStyle>;
  inputIconStyleLeft?: StyleProp<ViewStyle>;
  onFocusLabelStyle?: StyleProp<TextStyle>;
}

export type TextFieldContext = {
  disabled: boolean;
  code?: boolean;
  errored?: boolean;
  password?: boolean;
  secure?: boolean;
  clientID?: boolean;
  clientCode?: boolean;
  search?: boolean;
  theme: any;
};

export type TextFieldStyle = {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputIconStyle?: StyleProp<ViewStyle>;
  inputIconStyleLeft?: StyleProp<ViewStyle>;
  onFocusLabelStyle?: StyleProp<TextStyle>;
};

const TextField = (props: Props) => {
  const {
    disabled = false,
    errored = false,
    code = false,
    innerRef,
    inputProps,
    containerStyle,
    inputStyle,
    inputIconStyle,
    inputIconStyleLeft,
    onFocusLabelStyle,
    password,
    secure,
    search,
    onKeyPress,
    clientID,
    clientCode,
  } = props;

  const [visible, setVisibility] = useState(false);
  const [focused, setFocused] = useState(false);

  const theme: any = useTheme();

  const styles = useStyles(
    {
      disabled,
      errored,
      code,
      password,
      secure,
      search,
      theme,
    },
    {
      containerStyle,
      inputStyle,
      inputIconStyle,
      inputIconStyleLeft,
      onFocusLabelStyle,
    },
  );
  return (
    <View style={styles.containerStyle} {...props}>
      <TextInput
        {...inputProps}
        onFocus={() => {
          setFocused(true), inputProps?.onFocus;
        }}
        onBlur={() => {
          setFocused(false);
        }}
        ref={innerRef}
        autoCapitalize="none"
        value={inputProps?.value}
        placeholder={
          focused
            ? ''
            : password
            ? inputProps?.placeholder
              ? inputProps?.placeholder
              : 'Mot de passe'
            : clientID || clientCode
            ? ''
            : inputProps?.placeholder
        }
        keyboardType={code ? 'numeric' : 'default'}
        secureTextEntry={password || secure ? !visible : undefined}
        onChangeText={text =>
          inputProps?.onChangeText && inputProps?.onChangeText(text)
        }
        onKeyPress={onKeyPress}
        style={[
          styles.inputStyle,
          focused ? {borderColor: theme.colors.purple, borderWidth: 2} : null,
          clientID || clientCode ? {paddingLeft: 40} : {paddingLeft: 10},
        ]}
      />
      {password ? (
        <TouchableOpacity
          onPress={() => setVisibility(!visible)}
          style={styles.inputIconStyle}>
          {visible ? (
            <Feather name="eye" size={25} color={theme.colors.darkGray} />
          ) : (
            <Feather name="eye-off" size={25} color={theme.colors.darkGray} />
          )}
        </TouchableOpacity>
      ) : null}
      {search ? (
        <TouchableOpacity style={styles.inputIconStyle}>
          <AntDesign name="search1" size={25} color={theme.colors.darkGray} />
        </TouchableOpacity>
      ) : null}
      {clientID ? (
        <View style={styles.inputIconStyleLeft}>
          <AntDesign name="user" size={25} color={theme.colors.darkGray} />
        </View>
      ) : null}
      {clientCode ? (
        <View style={styles.inputIconStyleLeft}>
          <AntDesign name="lock" size={25} color={theme.colors.darkGray} />
        </View>
      ) : null}
      {clientCode ? (
        <TouchableOpacity style={styles.inputIconStyle}>
          <AntDesign name="close" size={25} color={theme.colors.darkGray} />
        </TouchableOpacity>
      ) : null}
      {focused ? (
        <Text focused style={styles.onFocusLabelStyle}>
          {inputProps?.placeholder}
        </Text>
      ) : null}
    </View>
  );
};

export const getStyles = (
  context?: TextFieldContext,
  style?: TextFieldStyle,
): TextFieldStyle => ({
  containerStyle: [
    {
      flex: 1,
      height: 60,
      minHeight: 60,
      maxHeight: 60,
      justifyContent: 'center',
    },
    style?.containerStyle,
  ],
  inputStyle: [
    {
      flex: 1,
      height: 60,
      backgroundColor: context?.theme.colors.white,
      borderWidth: 1,
      borderColor: context?.theme.colors.lightGray,
      borderRadius: context?.theme.borderRadius.xs,
      fontSize: 14,
      lineHeight: 22,
      color: context?.theme.colors.gray,
    },
    context?.errored && {
      borderColor: context?.theme.colors.red,
    },
    context?.password && {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    style?.inputStyle,
  ],
  inputIconStyle: [
    {
      position: 'absolute',
      right: 30,
    },
    style?.inputIconStyle,
  ],
  inputIconStyleLeft: [
    {
      position: 'absolute',
      left: 10,
    },
    style?.inputIconStyleLeft,
  ],
  onFocusLabelStyle: [
    {
      fontWeight: '600',
      fontSize: 12,
      color: context?.theme.colors.purple,
      position: 'absolute',
      paddingLeft: 5,
      paddingRight: 5,
      top: -10,
      left: 10,
      backgroundColor: context?.theme.colors.white,
    },

    style?.onFocusLabelStyle,
  ],
});

const useStyles = createUseStyles(getStyles);

export default TextField;
