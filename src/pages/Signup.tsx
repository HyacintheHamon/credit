import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Header from '@components/molecules/Header';
import Text from '@components/atoms/Text';
import TextField from '@components/atoms/TextField';
import SimpleButton from '@components/molecules/SimpleButton';
import {useMediaQuery} from 'react-responsive';
import Emoji from '@components/atoms/Emoji';
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header login />
      <View
        style={[
          Platform.OS === 'web' && !isMobile
            ? styles.content
            : styles.contentMobile,
        ]}>
        <Text style={styles.title}>
          <Emoji name="rocket" emojiStyle={{fontSize: 30, marginRight: 10}} />
          C’est parti ! Initiez votre demande
        </Text>
        <TextField
          inputProps={{
            placeholder: 'Votre email',
            value: email,
            onChangeText: emailValue => {
              setEmail(emailValue);
            },
          }}
        />
        <TextField
          inputProps={{
            placeholder: 'Choisissez un mot de passe',
            value: password,
            onChangeText: passwordValue => {
              setPassword(passwordValue);
            },
          }}
          containerStyle={{marginTop: 20}}
          password
        />
        <Text type="s" outlined style={styles.forgotPassword}>
          Mot de passe oublié?
        </Text>
        <SimpleButton
          disabled={email && password ? false : true}
          containerStyle={{marginTop: 40}}
          text="Créer mon espace"
          onPress={() => navigation.navigate('LoanApplicationNavigator')}
        />
        <Text type="s" style={styles.terms}>
          En cliquant sur « Créer mon espace » j’accepte les CGU
          <Text type="s" outlined>
            {' '}
            Credit{' '}
          </Text>
          et
          <Text type="s" outlined>
            {' '}
            Mangopay.
          </Text>{' '}
          Informations relatives au traitement des données.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  forgotPassword: {
    textAlign: 'right',
    marginTop: 10,
    fontWeight: 'bold',
  },
  terms: {
    color: '#B8B8B8',
    marginTop: 20,
  },
});
