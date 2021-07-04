import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import DesktopMenuIconTab from '@components/molecules/DesktopMenuIconTab';

interface Props {
  tabs: any;
  selectedTab: any;
  onTabPressed: any;
}

const DesktopIconTabsMenu: React.FC<Props> = props => {
  const {tabs, selectedTab, onTabPressed} = props;

  return (
    <SafeAreaView style={styles.containerStyle}>
      {tabs.map((item: any) => {
        return (
          <DesktopMenuIconTab
            onPress={() => onTabPressed(item.tabName)}
            key={item.tabName}
            tabTitle={item.tabTitle}
            tabIcon={item.tabIcon}
            isSelected={selectedTab === item.tabName}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default DesktopIconTabsMenu;

const styles = StyleSheet.create({
  containerStyle: {
    minWidth: 250,
    backgroundColor: '#EEE',
  },
});
