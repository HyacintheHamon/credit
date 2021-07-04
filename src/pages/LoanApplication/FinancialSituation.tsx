import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Platform,
  TouchableOpacity,
  Modal,
} from 'react-native';
import RadioButton from '@components/atoms/RadioButton';
import Header from '@components/molecules/Header';
import Text from '@components/atoms/Text';
import {useMediaQuery} from 'react-responsive';
import ProgressBar from '@components/atoms/ProgressBar';
import Emoji from '@components/atoms/Emoji';
import SimpleButton from '@components/molecules/SimpleButton';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';

const FinancialSituation = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [FCIPSelected, setFCIPSelected] = useState(null);
  const [debtSelected, setDebtSelected] = useState(null);

  const labels = [{label: 'oui'}, {label: 'non'}];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header request />
      <ProgressBar previous={90} progress={100} />
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
          Quelle est votre situation financière ?
        </Text>
        <Text type="m">
          Nous sommes tenus de recueillir à titre informatif les éléments
          ci-dessous.
        </Text>
        <View style={[styles.row, styles.knowMore]}>
          <Emoji
            name="mag_right"
            emojiStyle={{fontSize: 15, marginRight: 10}}
          />
          <TouchableOpacity
            onPress={() => {
              setShowModal(!showModal);
            }}>
            <Text type="m" outlined bold>
              En savoir plus
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.row,
            {alignItems: 'center', justifyContent: 'space-between'},
          ]}>
          <Text type="m">Êtes-vous inscrit(e) au FICP ?</Text>
          <View style={styles.row}>
            {labels.map((item, index) => {
              return (
                <RadioButton
                  label={item.label}
                  //@ts-ignore
                  onPress={() => setFCIPSelected(index)}
                  selected={FCIPSelected == index ? true : false}
                  size={20}
                />
              );
            })}
          </View>
        </View>
        <View
          style={[
            styles.row,
            {alignItems: 'center', justifyContent: 'space-between'},
          ]}>
          <Text type="m">Êtes-vous en surendettement ?</Text>
          <View style={styles.row}>
            {labels.map((item, index) => {
              return (
                <RadioButton
                  label={item.label}
                  //@ts-ignore
                  onPress={() => setDebtSelected(index)}
                  selected={debtSelected == index ? true : false}
                  size={20}
                />
              );
            })}
          </View>
        </View>
        <SimpleButton
          disabled={FCIPSelected === 1 && debtSelected === 1 ? false : true}
          containerStyle={{marginTop: 20}}
          text="Envoyer ma demande"
          onPress={() => navigation.navigate('BottomTabNavigator')}
        />
      </View>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <SafeAreaView style={styles.modal}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(!showModal);
              }}>
              <AntDesign name="arrowleft" size={20} />
            </TouchableOpacity>
            <Text type="m" bold style={styles.modalTitle}>
              En savoir plus
            </Text>
          </View>
          <View style={styles.modalContent}>
            <View style={styles.paragraph}>
              <View style={[styles.row, {alignItems: 'center'}]}>
                <Emoji
                  name="thinking_face"
                  emojiStyle={{fontSize: 10, marginRight: 5}}
                />
                <Text type="m" bold>
                  Qu’est-ce que le FICP ?
                </Text>
              </View>
              <Text type="m" style={styles.sentence}>
                Si vous n'en avez jamais entendu parler, c'est probablement que
                vous n'êtes pas concerné.
              </Text>
              <Text type="m" style={styles.sentence}>
                Le fichier des{' '}
                <Text type="m" bold>
                  incidents de remboursement des crédits
                </Text>{' '}
                aux particuliers (FICP) regroupe les informations sur les
                incidents de remboursement des crédits aux particuliers. Le FICP
                rassemble également les mesures de traitement des situations de
                surendettement.
              </Text>
            </View>
            <View style={styles.paragraph}>
              <View style={[styles.row, {alignItems: 'center'}]}>
                <Emoji
                  name="point_up"
                  emojiStyle={{fontSize: 15, marginRight: 5}}
                />
                <Text type="m" bold>
                  Comment savoir si je suis en procédure de surendettement ?
                </Text>
              </View>
              <Text type="m" style={styles.sentence}>
                Vous êtes en{' '}
                <Text type="m" bold>
                  procédure de surendettement
                </Text>{' '}
                si vous avez déposé une déclaration de surendettement auprès de
                la Banque de France.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default FinancialSituation;

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
  knowMore: {
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
  },
  modal: {
    flex: 1,
  },
  text: {
    marginTop: 10,
  },
  modalHeader: {
    height: 60,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  modalContent: {
    padding: 20,
  },
  paragraph: {
    marginTop: 20,
  },
  sentence: {
    marginTop: 10,
  },
  modalTitle: {
    flex: 1,
    textAlign: 'center',
  },
});
