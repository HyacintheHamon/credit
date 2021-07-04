import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Platform,
} from 'react-native';
import SimpleButton from '@components/molecules/SimpleButton';
import Header from '@components/molecules/Header';
import Text from '@components/atoms/Text';
import {useMediaQuery} from 'react-responsive';
import Emoji from '@components/atoms/Emoji';
import ProgressBar from '@components/atoms/ProgressBar';
import TextField from '@components/atoms/TextField';
import {useNavigation} from '@react-navigation/native';

const ContactInformation = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [mobilePhoneNumber, setMobilePhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header request />
      <ProgressBar previous={50} progress={60} />
      <View
        style={[
          Platform.OS === 'web' && !isMobile
            ? styles.content
            : styles.contentMobile,
        ]}>
        <Text style={styles.title}>
          <Emoji name="house" emojiStyle={{fontSize: 30, marginRight: 10}} />
          Quelles sont vos coordonnées ?
        </Text>
        <Text type="m">Quelles sont vos coordonnées ?</Text>
        <TextField
          containerStyle={{marginTop: 20}}
          inputProps={{
            placeholder: 'Votre adresse',
            value: address,
            onChangeText: addressValue => {
              setAddress(addressValue);
            },
          }}
        />
        <TextField
          containerStyle={{marginTop: 20}}
          inputProps={{
            placeholder: 'Votre téléphone portable',
            value: mobilePhoneNumber,
            onChangeText: mobilePhoneNumberValue => {
              setMobilePhoneNumber(mobilePhoneNumberValue);
            },
          }}
          code
        />
        <SimpleButton
          disabled={address && mobilePhoneNumber ? false : true}
          containerStyle={{marginTop: 40}}
          text="Suivant"
          onPress={() => navigation.navigate('ProjectSelection')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactInformation;

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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
  },
  bankName: {
    textTransform: 'uppercase',
    color: 'grey',
    marginBottom: 5,
  },
});
