import React from 'react';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {TabBarAdvancedButton} from '@components/atoms/TabBarAdvancedButton';
import {StyleSheet, View, Text, Platform} from 'react-native';
// @ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Home from '@pages/Dashboard/Home';
import LoanStatus from '@pages/Dashboard/LoanStatus';
import History from '@pages/Dashboard/History';
import Profile from '@pages/Dashboard/Profile';
import {colors} from '@constants/index';
import styled from 'styled-components/native';
import {useMediaQuery} from 'react-responsive';

const BottomBar = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});
  return (
    <BottomBar.Navigator
      tabBar={props =>
        Platform.OS === 'web' && !isMobile ? null : Platform.OS === 'web' ? (
          <TabBarMenu>
            <View style={styles.xFillLine} />
            <BottomTabBar {...props} />
          </TabBarMenu>
        ) : (
          <View style={styles.tabBar}>
            <View style={styles.xFillLine} />
            <BottomTabBar {...props} />
          </View>
        )
      }
      tabBarOptions={{
        showLabel: false,
        style: styles.tabMask,
        activeTintColor: colors.blue,
        inactiveTintColor: colors.black,
        tabStyle: {
          backgroundColor: colors.white,
        },
      }}>
      <BottomBar.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItem}>
              <AntDesign
                name="home"
                size={24}
                color={focused ? colors.blue : colors.black}
                style={styles.tabBarIcon}
              />
              <Text
                style={[
                  styles.tabBarTitle,
                  focused ? {color: colors.blue} : {color: colors.black},
                ]}>
                Acceuil
              </Text>
            </View>
          ),
        }}
      />
      <BottomBar.Screen
        name="LoanStatus"
        component={LoanStatus}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItem}>
              <AntDesign
                name="folderopen"
                size={24}
                color={focused ? colors.blue : colors.black}
                style={styles.tabBarIcon}
              />
              <Text
                style={[
                  styles.tabBarTitle,
                  focused ? {color: colors.blue} : {color: colors.black},
                ]}>
                Mon prêt
              </Text>
            </View>
          ),
        }}
      />
      <BottomBar.Screen
        name="Menu"
        component={Home}
        options={{
          tabBarButton: () => <TabBarAdvancedButton onPress={() => {}} />,
        }}
      />
      <BottomBar.Screen
        name="History"
        component={History}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItem}>
              <AntDesign
                name="clockcircleo"
                size={24}
                color={focused ? colors.blue : colors.black}
                style={styles.tabBarIcon}
              />
              <Text
                style={[
                  styles.tabBarTitle,
                  focused ? {color: colors.blue} : {color: colors.black},
                ]}>
                Historique
              </Text>
            </View>
          ),
        }}
      />
      <BottomBar.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabBarItem}>
              <AntDesign
                name="user"
                size={24}
                color={focused ? colors.blue : colors.black}
                style={styles.tabBarIcon}
              />
              <Text
                style={[
                  styles.tabBarTitle,
                  focused ? {color: colors.blue} : {color: colors.black},
                ]}>
                Profil
              </Text>
            </View>
          ),
        }}
      />
    </BottomBar.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-around',
    height: 75,
    width: '100%',
    backgroundColor: 'transparent',
    shadowRadius: 6,
    shadowColor: '#5e5e72',
    shadowOffset: {
      width: 0,
      height: -10,
    },
    shadowOpacity: 0.1,
    elevation: 30,
    zIndex: 1,
  },
  tabMask: {
    borderTopWidth: 0,
    elevation: 30,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'transparent',
  },
  xFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: colors.white,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarIcon: {
    marginTop: 10,
  },
  tabBarTitle: {
    fontSize: 10,
    marginTop: 10,
    textTransform: 'uppercase',
    minWidth: Platform.OS === 'web' ? 60 : 0,
    textAlign: 'center',
  },
});

const TabBarMenu = styled.View`
      justify-content: space-around,
      filter: drop-shadow(5px -9px 24px rgba(96, 97, 112, 0.15));
      position: fixed;
      height: 75px;
      bottom: 0px;
      left: 0;
      right: 0;
      background-color: transparent;
      width: '100%';
      z-index: 1;
    `;
