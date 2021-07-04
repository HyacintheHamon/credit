import React, {useState} from 'react';
import {StyleSheet, Pressable} from 'react-native';
//@ts-ignore
import Feather from 'react-native-vector-icons/dist/Feather';
import {colors} from '@constants/index';

interface Props {
  size: number;
  checked: boolean;
  setChecked: (value: boolean) => void;
}

const Checkbox = (props: Props) => {
  const {size, checked, setChecked} = props;
  return (
    <Pressable
      onPress={() => setChecked(!checked)}
      style={[
        styles.container,
        {
          borderColor: checked ? colors.purple : colors.lightGray,
          width: size,
          height: size,
        },
      ]}>
      {checked ? (
        <Feather name="check" size={size / 1.5} color={colors.purple} />
      ) : null}
    </Pressable>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
