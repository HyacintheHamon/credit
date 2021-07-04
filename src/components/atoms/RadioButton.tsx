import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Text from '@components/atoms/Text';
import {colors} from '@constants/index';
interface Props {
  selected?: boolean;
  label?: string;
  size: number;
  onPress: () => void;
}

const RadioButton = (props: Props) => {
  const {selected, size, label, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
      <View
        style={[
          styles.radioCircle,
          {
            width: size,
            height: size,
            borderColor: selected ? colors.purple : 'rgb(133, 133, 133))',
          },
        ]}>
        {selected ? (
          <View
            style={[styles.selectedRb, {width: size / 2, height: size / 2}]}
          />
        ) : null}
      </View>
      {label ? (
        <Text
          type="m"
          bold
          outlined={selected ? true : false}
          style={styles.label}>
          {label}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircle: {
    borderRadius: 100,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    borderRadius: 50,
    backgroundColor: colors.purple,
  },
  label: {
    margin: 10,
    color: colors.black,
  },
});
