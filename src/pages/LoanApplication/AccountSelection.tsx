import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import styled from 'styled-components/native';
import SimpleButton from '@components/molecules/SimpleButton';
import RadioButton from '@components/atoms/RadioButton';
import Header from '@components/molecules/Header';
import Text from '@components/atoms/Text';
import {useMediaQuery} from 'react-responsive';
import Emoji from '@components/atoms/Emoji';
import ProgressBar from '@components/atoms/ProgressBar';
import SVGLocalLoader from '@components/atoms/SVGLocalLoader';
import {useNavigation, useRoute} from '@react-navigation/native';

const AccountSelection = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const route = useRoute();
  //@ts-ignore
  const {name, logo} = route.params;
  const [rowIndex, setIndex] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(rowIndex);
  }, [rowIndex]);

  const accountsList = [
    {
      name: `${name} Current EUR`,
      iban: 'LT88 3250 0287 0330 6606',
    },
    {
      name: `${name} Current AUD`,
      iban: 'LT88 3250 0287 0330 6606',
    },
    {
      name: `${name} Current USD`,
      iban: 'LT88 3250 0287 0330 6606',
    },
    {
      name: `${name} Current RUB`,
      iban: 'LT88 3250 0287 0330 6606',
    },
    {
      name: `${name} Current GBP`,
      iban: 'LT88 3250 0287 0330 6606',
    },
  ];

  const AccountRow = styled.View`
    display: flex;
    padding: 20px;
    margin: 10px;
    border: 2px solid #f1f7f7;
    border-radius: 12px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    align-items: flex-start;
  `;

  const AccountRowSelected = styled(AccountRow)`
    border-color: #4d50f4;
  `;

  const renderRowContent = (item: any, index: number) => {
    return (
      <View style={[styles.row, {alignItems: 'center'}]}>
        <RadioButton
          onPress={() => {}}
          selected={index === selected ? true : false}
          size={20}
        />
        <View style={{marginLeft: 10}}>
          <Text type="m" style={[styles.bankName]}>
            {item.name}
          </Text>
          <Text type="m" bold>
            {item.iban}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header request />
      <ProgressBar previous={40} progress={50} />
      <View
        style={[
          Platform.OS === 'web' && !isMobile
            ? styles.content
            : styles.contentMobile,
        ]}>
        <Text style={styles.title}>
          <Emoji
            name="classical_building"
            emojiStyle={{fontSize: 30, marginRight: 10}}
          />
          Merci ! Sur quel compte souhaitez-vous recevoir vos fonds ?
        </Text>
        <Text type="m">Sélectionnez l’IBAN du compte concerné.</Text>
        <View
          style={[
            styles.row,
            {alignItems: 'center', marginTop: 20, marginBottom: 20},
          ]}>
          <SVGLocalLoader name={logo} width={50} height={50} />
          <Text type="l" bold>
            {name}
          </Text>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}>
          {accountsList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setIndex(index);
                }}>
                {index === selected ? (
                  <AccountRowSelected>
                    {renderRowContent(item, index)}
                  </AccountRowSelected>
                ) : (
                  <AccountRow>{renderRowContent(item, index)}</AccountRow>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <SimpleButton
          containerStyle={{marginTop: 40}}
          text="Suivant"
          onPress={() => navigation.navigate('ContactInformation')}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountSelection;

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
