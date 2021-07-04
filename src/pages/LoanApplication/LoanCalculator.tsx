import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Platform,
} from 'react-native';
import Slider from '@react-native-community/slider';
import RadioButton from '@components/atoms/RadioButton';
import Header from '@components/molecules/Header';
import Text from '@components/atoms/Text';
import Card from '@components/organisms/Card';
import {useMediaQuery} from 'react-responsive';
import ProgressBar from '@components/atoms/ProgressBar';
import Emoji from '@components/atoms/Emoji';
import SimpleButton from '@components/molecules/SimpleButton';
import {useNavigation} from '@react-navigation/native';
import {colors} from '@constants/index';

const LoanCalculator = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const [sliderValue, setSliderValue] = useState(200);
  const [selected, setSelected] = useState(0);

  const installments = [
    {label: '3 mois'},
    {label: '4 mois'},
    {label: '6 mois'},
  ];
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header request />
      <ProgressBar previous={80} progress={90} />
      <View
        style={[
          Platform.OS === 'web' && !isMobile
            ? styles.content
            : styles.contentMobile,
        ]}>
        <Text style={styles.title}>
          <Emoji name="moneybag" emojiStyle={{fontSize: 30, marginRight: 10}} />
          Parfait, de quel prêt avez-vous besoin ?
        </Text>
        <Card>
          <Text
            type="m"
            bold
            outlined
            style={{textAlign: 'center', marginBottom: 10}}>
            {Math.round(sliderValue)}€
          </Text>
          {Platform.OS === 'web' ? (
            <View style={styles.row}>
              <Text type="m" bold style={{marginRight: 10}}>
                100€
              </Text>
              <Slider
                minimumValue={100}
                value={sliderValue}
                maximumValue={600}
                thumbTintColor={colors.purple}
                minimumTrackTintColor="#000000"
                maximumTrackTintColor="#EBE9E4"
                onSlidingComplete={value => {
                  console.log(value);
                  setSliderValue(value);
                }}
              />
              <Text type="m" bold style={{marginLeft: 10}}>
                600€
              </Text>
            </View>
          ) : (
            <Slider
              minimumValue={100}
              value={sliderValue}
              maximumValue={600}
              thumbTintColor={colors.purple}
              minimumTrackTintColor="#000000"
              maximumTrackTintColor="#EBE9E4"
              onSlidingComplete={value => {
                console.log(value);
                setSliderValue(value);
              }}
            />
          )}
          <View style={[styles.row, {marginTop: 20}]}>
            {installments.map((item, index) => {
              return (
                <RadioButton
                  label={item.label}
                  onPress={() => setSelected(index)}
                  selected={selected == index ? true : false}
                  size={20}
                />
              );
            })}
          </View>
        </Card>
        <Text type="m" style={{marginTop: 10, textAlign: 'center'}}>
          Vous remboursez{' '}
          <Text type="m" bold outlined>
            35.45€/mois
          </Text>
        </Text>
        <SimpleButton
          containerStyle={{marginTop: 20}}
          text="Suivant"
          onPress={() => navigation.navigate('FinancialSituation')}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoanCalculator;

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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
