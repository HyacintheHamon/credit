import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import DesktopMenuIconTabs from '@components/molecules/DesktopMenuIconTabs';
import {useNavigation, useRoute} from '@react-navigation/native';

interface Props {
  children: any;
}

const DesktopMenuWrapper = (props: Props) => {
  const {children} = props;
  const [selectedTab, setSelectedTab] = useState('Home');
  const navigation = useNavigation();
  const route = useRoute();

  const onTabPressed = (tab: any) => {
    navigation.navigate(tab);
  };

  useEffect(() => {
    setSelectedTab(route.name);
  }, [route.name]);

  const tabs = [
    {
      tabName: 'Home',
      tabTitle: 'Acceuil',
      tabIcon: 'home',
    },
    {
      tabName: 'LoanStatus',
      tabTitle: 'Mon prêt',
      tabIcon: 'folderopen',
    },
    {
      tabName: 'History',
      tabTitle: 'Historique',
      tabIcon: 'clockcircleo',
    },
    {
      tabName: 'Profile',
      tabTitle: 'Profil',
      tabIcon: 'user',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sidebarContainer}>
        <DesktopMenuIconTabs
          tabs={tabs}
          onTabPressed={(tab: any) => onTabPressed(tab)}
          selectedTab={selectedTab}
        />
      </View>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  sidebarContainer: {
    backgroundColor: '#EEE',
    minHeight: '100vh',
    height: '100vh',
  },
  content: {
    flex: 1,
  },
});

export default DesktopMenuWrapper;
