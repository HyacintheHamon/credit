import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {colors} from '@constants/index';

interface Props {
  isSelected: boolean;
  tabIcon: string;
  tabTitle: string;
  onPress: () => void;
}

const DesktopMenuIconTab = (props: Props) => {
  const {isSelected, tabIcon, tabTitle, onPress} = props;

  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? {backgroundColor: '#FFF'} : null]}
      onPress={onPress}>
      <AntDesign
        name={tabIcon}
        size={24}
        color={isSelected ? colors.blue : colors.black}
        style={styles.icon}
      />
      <Text
        style={[
          styles.text,
          isSelected ? {color: colors.blue} : {color: colors.black},
        ]}>
        {tabTitle}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  text: {
    fontSize: 12,
    textTransform: 'uppercase',
  },
  icon: {
    width: 66,
    textAlign: 'center',
  },
});

export default DesktopMenuIconTab;
