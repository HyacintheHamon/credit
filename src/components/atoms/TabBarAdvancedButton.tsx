import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import SVGLocalLoader from '@components/atoms/SVGLocalLoader';
import {colors} from '@constants/index';

interface Props {
  onPress: () => void;
}

export const TabBarAdvancedButton: React.FC<Props> = ({...props}) => (
  <View style={styles.container} pointerEvents="box-none">
    <SVGLocalLoader name="tabBg" width={75} height={61} />
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <SVGLocalLoader name="btnMenuActive" width={50} height={50} />
    </TouchableOpacity>
    <View style={styles.background} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 75,
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    width: '100%',
    height: 40,
    top: 35,
    backgroundColor: colors.white,
  },
  button: {
    top: -83,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 27,
    backgroundColor: colors.blue,
  },
  buttonIcon: {
    fontSize: 22,
    color: colors.white,
  },
});
