import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  View,
  Platform,
  Modal,
} from 'react-native';
import Header from '@components/molecules/Header';
import Text from '@components/atoms/Text';
import {useMediaQuery} from 'react-responsive';
import Emoji from '@components/atoms/Emoji';
import ProgressBar from '@components/atoms/ProgressBar';
import TextField from '@components/atoms/TextField';
import SimpleButton from '@components/molecules/SimpleButton';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Checkbox from '@components/atoms/Checkbox';
import SVGLocalLoader from '@components/atoms/SVGLocalLoader';
import {useNavigation, useRoute} from '@react-navigation/native';

const BankDetails = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const route = useRoute();
  const [bankID, setBankID] = useState('');
  const [bankCode, setBankCode] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [checked, setChecked] = useState(false);
  const [shuffledNumbers, setShuffledNumbers] = useState([]);
  //@ts-ignore
  const {name, logo} = route.params;

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const shuffle = (arr: any) =>
    [...arr].reduceRight(
      (res, _, __, s) => (
        res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
      ),
      [],
    );

  useEffect(() => {
    var newNumbers = shuffle(numbers);
    setShuffledNumbers(newNumbers);
  }, []);

  const setCode = (item: any) => {
    setBankCode(bankCode + item.item);
  };

  const renderGridItem = (item: any) => (
    <TouchableOpacity style={styles.gridItem} onPress={() => setCode(item)}>
      <Text type="l" bold>
        {item.item}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header request />
      <ProgressBar previous={20} progress={30} />
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
          Identifiez-vous à votre espace bancaire
        </Text>
        <Text type="m">
          Cette étape{' '}
          <Text type="m" bold>
            100% sécurisée
          </Text>
          <Emoji
            name="lock"
            emojiStyle={{fontSize: 15, marginLeft: 5, marginRight: 5}}
          />
          nous permet de visualiser vos derniers relevés afin d’étudier votre
          dossier.
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
        <View style={[styles.row, {alignItems: 'center', marginBottom: 20}]}>
          <SVGLocalLoader name={logo} width={50} height={50} />
          <Text type="l" bold style={{marginLeft: 10}}>
            {name}
          </Text>
        </View>
        <TextField
          inputProps={{
            placeholder: 'Identifiant Client',
            value: bankID,
            onChangeText: bankIDValue => {
              setBankID(bankIDValue);
            },
          }}
          clientID
        />
        <TextField
          inputProps={{
            placeholder: 'Code personnel',
            value: bankCode,
          }}
          containerStyle={{marginTop: 20}}
          clientCode
          secure
        />
        <FlatList
          scrollEnabled={false}
          data={shuffledNumbers}
          //keyExtractor={item}
          renderItem={item => renderGridItem(item)}
          horizontal={false}
          numColumns={5}
          style={styles.grid}
        />
        <View style={[styles.row, {marginTop: 20, alignItems: 'center'}]}>
          <Checkbox size={40} checked={checked} setChecked={setChecked} />
          <Text type="s" style={{marginLeft: 10, maxWidth: 300}}>
            Je valide les{' '}
            <Text type="s" outlined>
              Conditions Générales d’Utilisation de Crédit{' '}
            </Text>
            et j’accepte la transmission de mon relevé bancaire à son partenaire
            finfrog.
          </Text>
        </View>
        <SimpleButton
          disabled={bankID && bankCode && checked ? false : true}
          containerStyle={{marginTop: 20}}
          text="Suivant"
          onPress={() =>
            navigation.navigate('SMSVerification', {
              name: name,
              logo: logo,
            })
          }
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
                  name="information_source"
                  emojiStyle={{fontSize: 15, marginRight: 5}}
                />
                <Text type="m" bold>
                  Bon à savoir
                </Text>
              </View>
              <Text type="m" style={styles.sentence}>
                Vos identifiants de connexion bancaires nous permettent
                d’obtenir de façon immédiate, une{' '}
                <Text type="m" bold>
                  visualisation de votre historique bancaire.
                </Text>
              </Text>
              <Text type="m" style={styles.sentence}>
                Crédit ne les conserve pas et n'a en aucun cas la possibilité
                d'effectuer des opérations sur vos comptes bancaires.
              </Text>
            </View>
            <View style={styles.paragraph}>
              <View style={[styles.row, {alignItems: 'center'}]}>
                <Emoji
                  name="closed_lock_with_key"
                  emojiStyle={{fontSize: 15, marginRight: 5}}
                />
                <Text type="m" bold>
                  Est-ce sécurisé ?
                </Text>
              </View>
              <Text type="s" style={styles.sentence}>
                Crédit n’a pas accès à vos identifiants. Ils sont{' '}
                <Text type="m" bold>
                  cryptés
                </Text>{' '}
                puis transmis à votre banque via{' '}
                <Text type="m" bold outlined>
                  Budget Insight
                </Text>
                , société française, qui assure le chiffrage et la transmission
                sécurisée de données (protocole https et clé de cryptage RSA).
              </Text>
              <Text type="m" style={styles.sentence}>
                Ce processus est{' '}
                <Text type="m" bold>
                  encadré par une réglementation européenne
                </Text>
                , la{' '}
                <Text type="m" bold outlined>
                  DSP2
                </Text>
                , Directive de Services de Paiement.
              </Text>
            </View>
            <View style={styles.paragraph}>
              <View style={[styles.row, {alignItems: 'center'}]}>
                <Emoji
                  name="face_with_monocle"
                  emojiStyle={{fontSize: 15, marginRight: 5}}
                />
                <Text type="m" bold>
                  De quels identifiants ai-je besoin ?
                </Text>
              </View>
              <Text type="m" style={styles.sentence}>
                Il s’agit de l’identifiant bancaire et du code qui vous
                permettent de consulter vos comptes sur internet et sur mobile.
              </Text>
            </View>
            <View style={styles.paragraph}>
              <View style={[styles.row, {alignItems: 'center'}]}>
                <Emoji
                  name="thinking_face"
                  emojiStyle={{fontSize: 15, marginRight: 5}}
                />
                <Text type="m" bold>
                  Comment faire si je n'ai pas mes identifiants ?
                </Text>
              </View>
              <Text type="m" style={styles.sentence}>
                Si vous n'avez pas accès à vos identifiants de connexion, nous
                vous invitons à les demander auprès de votre banque.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default BankDetails;

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
    marginBottom: 20,
    alignItems: 'center',
  },
  bankRow: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  bankName: {
    marginLeft: 20,
  },
  modal: {
    flex: 1,
  },
  text: {
    marginTop: 10,
  },
  modalHeader: {
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
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
  grid: {
    flex: 1,
    minHeight: 120,
    maxHeight: 120,
    marginTop: 20,
  },
  gridItem: {
    flex: 1,
    backgroundColor: '#e6ebf1',
    minWidth: 40,
    minHeight: 50,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
