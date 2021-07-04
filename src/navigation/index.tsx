import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from '@navigation/BottomTabNavigator';
import LoanApplicationNavigator from '@navigation/LoanApplicationNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@pages/Login';
import Signup from '@pages/Signup';

const Stack = createStackNavigator();

const config = {
  screens: {
    Login: 'login',
    Signup: 'signup',
    BottomTabNavigator: {
      screens: {
        Home: 'acceuil',
        LoanStatus: 'mon-prêt',
        History: 'historique',
        Profile: 'profil',
      },
    },
    LoanApplicationNavigator: {
      screens: {
        Civility: 'civilite',
        BankSelection: 'banque',
        BankDetails: 'banque#coordonnees-bancaires',
        AccountSelection: 'iban',
        ContactInformation: 'coordonnees',
        ProjectSelection: 'complete',
        UploadDocuments: 'documents',
        LoanCalculator: 'calculator',
        FinancialSituation: 'finalisation',
      },
    },
    NotFound: '*',
  },
};

const linking = {
  prefixes: ['http://localhost:3000', 'http://localhost'],
  config,
};

const AppNavigator = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Chargement...</Text>}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          cardStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="LoanApplicationNavigator"
          component={LoanApplicationNavigator}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            animationEnabled: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            animationEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
