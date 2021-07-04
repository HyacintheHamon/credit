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
import TextField from '@components/atoms/TextField';
import SimpleButton from '@components/molecules/SimpleButton';
import {useMediaQuery} from 'react-responsive';
import Emoji from '@components/atoms/Emoji';
import ProgressBar from '@components/atoms/ProgressBar';
import Checkbox from '@components/atoms/Checkbox';
import {useNavigation} from '@react-navigation/native';

const Civility = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header request />
      <ProgressBar progress={10} />
      <View
        style={[
          Platform.OS === 'web' && !isMobile
            ? styles.content
            : styles.contentMobile,
        ]}>
        <Text style={styles.title}>
          <Emoji
            name="handshake"
            emojiStyle={{fontSize: 30, marginRight: 10}}
          />
          Tout d’abord, faisons connaissance
        </Text>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <TextField
            inputProps={{
              placeholder: 'Votre Prénom',
              value: firstName,
              onChangeText: firstNameValue => {
                setFirstName(firstNameValue);
              },
            }}
            containerStyle={{marginRight: 5}}
          />
          <TextField
            inputProps={{
              placeholder: 'Votre nom',
              value: lastName,
              onChangeText: lastNameValue => {
                setLastName(lastNameValue);
              },
            }}
            containerStyle={{marginLeft: 5}}
          />
        </View>
        <Text type="m" style={styles.birthday}>
          Votre date de naissance
        </Text>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <TextField
            inputProps={{
              placeholder: 'Jour',
              value: day,
              onChangeText: dayValue => {
                setDay(dayValue);
              },
            }}
            containerStyle={{marginRight: 5}}
            code
          />
          <TextField
            inputProps={{
              placeholder: 'Mois',
              value: month,
              onChangeText: monthValue => {
                setMonth(monthValue);
              },
            }}
            containerStyle={{marginLeft: 5, marginRight: 5}}
            code
          />
          <TextField
            inputProps={{
              placeholder: 'Année',
              value: year,
              onChangeText: yearValue => {
                setYear(yearValue);
              },
            }}
            containerStyle={{marginLeft: 5}}
            code
          />
        </View>
        <View style={[styles.row, {marginTop: 20, alignItems: 'center'}]}>
          <Checkbox size={40} checked={checked} setChecked={setChecked} />
          <Text type="s" style={{marginLeft: 10, maxWidth: 300}}>
            J’accepte de recevoir des informations de la part de Crédit et ses
            partenaires commerciaux.
          </Text>
        </View>
        <SimpleButton
          disabled={
            firstName && lastName && day && month && year && checked
              ? false
              : true
          }
          containerStyle={{marginTop: 40}}
          text="Suivant"
          onPress={() => navigation.navigate('BankSelection')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Civility;

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
  birthday: {
    marginTop: 20,
    marginBottom: 10,
  },
});
