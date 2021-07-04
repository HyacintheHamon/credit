import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Civility from '@pages/LoanApplication/Civility';
import BankSelection from '@pages/LoanApplication/BankSelection';
import BankDetails from '@pages/LoanApplication/BankDetails';
import SMSVerification from '@pages/LoanApplication/SMSVerification';
import AccountSelection from '@pages/LoanApplication/AccountSelection';
import ContactInformation from '@pages/LoanApplication/ContactInformation';
import ProjectSelection from '@pages/LoanApplication/ProjectSelection';
import UploadDocuments from '@pages/LoanApplication/UploadDocuments';
import LoanCalculator from '@pages/LoanApplication/LoanCalculator';
import FinancialSituation from '@pages/LoanApplication/FinancialSituation';

const Stack = createStackNavigator();

const LoanApplicationNavigator = () => (
  <Stack.Navigator
    initialRouteName="Welcome"
    screenOptions={{
      gestureEnabled: false,
      headerShown: false,
      cardStyle: {
        backgroundColor: 'transparent',
      },
    }}>
    <Stack.Screen
      name="Civility"
      component={Civility}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="BankSelection"
      component={BankSelection}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="BankDetails"
      component={BankDetails}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="SMSVerification"
      component={SMSVerification}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="AccountSelection"
      component={AccountSelection}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="ContactInformation"
      component={ContactInformation}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="ProjectSelection"
      component={ProjectSelection}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="UploadDocuments"
      component={UploadDocuments}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="LoanCalculator"
      component={LoanCalculator}
      options={{
        animationEnabled: false,
      }}
    />
    <Stack.Screen
      name="FinancialSituation"
      component={FinancialSituation}
      options={{
        animationEnabled: false,
      }}
    />
  </Stack.Navigator>
);

export default LoanApplicationNavigator;
