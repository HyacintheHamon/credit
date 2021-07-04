import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Platform,
} from 'react-native';
import Header from '@components/molecules/Header';
import Text from '@components/atoms/Text';
import {useMediaQuery} from 'react-responsive';
import ProgressBar from '@components/atoms/ProgressBar';
import TextField from '@components/atoms/TextField';
import SimpleButton from '@components/molecules/SimpleButton';
import {useNavigation, useRoute} from '@react-navigation/native';

const SMSVerification = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const route = useRoute();
  const [SMSCode, setSMSCode] = useState('');
  //@ts-ignore
  const {name, logo} = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header request />
      <ProgressBar previous={30} progress={40} />
      <View
        style={[
          Platform.OS === 'web' && !isMobile
            ? styles.content
            : styles.contentMobile,
        ]}>
        <Text type="s" bold style={styles.title}>
          Merci de renseigner les champs supplémentaires pour vous authentifier.
        </Text>
        <TextField
          inputProps={{
            placeholder: 'Enter the SMS code',
            value: SMSCode,
            onChangeText: SMSCodeValue => {
              setSMSCode(SMSCodeValue);
            },
          }}
        />

        <SimpleButton
          disabled={SMSCode ? false : true}
          containerStyle={{marginTop: 20}}
          text="Suivant"
          onPress={() =>
            navigation.navigate('AccountSelection', {
              name: name,
              logo: logo,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default SMSVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 20,
    maxWidth: 500,
    alignSelf: 'center',
  },
  contentMobile: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  title: {
    color: '#E95466',
    marginBottom: 30,
  },
});
