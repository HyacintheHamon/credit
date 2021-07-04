import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
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
import SVGLocalLoader from '@components/atoms/SVGLocalLoader';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';

var initialBanksList = [
  {name: 'Crédit Agricole', value: 'credit_agricole', logo: 'creditAgricole'},
  {name: "Caisse d'Épargne", value: 'caisse_epargne', logo: 'caisseEpargne'},
  {
    name: 'Société Générale',
    value: 'societe_generale',
    logo: 'societeGenerale',
  },
  {name: 'Compte Nickel', value: 'compte_nickel', logo: 'compteNickel'},
  {name: 'La Banque Postale', value: 'banque_postale', logo: 'banquePostale'},
  {name: 'LCL', value: 'lcl', logo: 'lcl'},
  {name: 'Crédit Mutuel', value: 'credit_mutuel', logo: 'creditMutuel'},
  {name: 'BNP Paribas', value: 'bnp_paribas', logo: 'bnpParibas'},
  {
    name: 'Banque Populaire',
    value: 'banque_populaire',
    logo: 'banquePopulaire',
  },
  {name: 'CIC', value: 'cic', logo: 'cic'},
  {name: 'Boursorama', value: 'boursorama', logo: 'boursorama'},
  {name: 'ING Direct', value: 'ing_direct', logo: 'ingDirect'},
  {name: 'AXA Banque', value: 'axa_banque', logo: 'axaBanque'},
  {name: 'BRED', value: 'bred', logo: 'bred'},
  {name: 'Banque BCP', value: 'banque_bcp', logo: 'banqueBcp'},
  {name: 'Banque Courtois', value: 'banque_courtois', logo: 'banqueCourtois'},
  {name: 'Banque Kolb', value: 'banque_kolb', logo: 'banqueKolb'},
  {
    name: 'Banque Laydernier',
    value: 'banque_laydernier',
    logo: 'banqueLaydernier',
  },
  {name: 'Banque Nuger', value: 'banque_nuger', logo: 'banqueNuger'},
  {name: 'Banque Pouyanne', value: 'banque_pouyanne', logo: 'banquePouyanne'},
  {
    name: 'Banque Rhône-Alpes',
    value: 'banque_rhone_alpes',
    logo: 'banqueRhoneAlpes',
  },
  {name: 'Banque Tarneaud', value: 'banque_tarneaud', logo: 'banqueTarneaud'},
  {name: 'BforBank', value: 'bforbank', logo: 'bForBank'},
  {
    name: 'Crédit Coopératif',
    value: 'credit_cooperatif',
    logo: 'creditCooperatif',
  },
  {name: 'Crédit du Nord', value: 'credit_du_nord', logo: 'creditDuNord'},
  {name: 'Crédit Maritime', value: 'credit_maritime', logo: 'creditMaritime'},
  {
    name: 'Crédit Mutuel Bretagne',
    value: 'credit_mutuel_bretagne',
    logo: 'creditMutuelBretagne',
  },
  {
    name: 'Crédit Mutuel Sud-Ouest',
    value: 'credit_mutuel_sud_ouest',
    logo: 'creditMutuelSudOuest',
  },
  {name: 'Fortuneo', value: 'fortuneo', logo: 'fortuneo'},
  {name: 'HSBC France', value: 'hsbc', logo: 'hsbc'},
  {name: 'Macif Espace Banque', value: 'macif', logo: 'macif'},
  {name: 'Milleis', value: 'milleis', logo: 'milleis'},
  {name: 'Monabanq', value: 'monabanq', logo: 'monabanq'},
  {name: 'N26', value: 'n26', logo: 'n26'},
  {name: 'Qonto', value: 'qonto', logo: 'qonto'},
  {name: 'Revolut', value: 'revolut', logo: 'revolut'},
  {name: 'Shine', value: 'shine', logo: 'shine'},
  {
    name: 'Société Marseillaise de Crédit',
    value: 'societe_marseille_de_credit',
    logo: 'societeMarseillaiseDeCredit',
  },
];
const BankSelection = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const [bankName, setBankName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [banksList, setBanksList] = useState(initialBanksList);

  useEffect(() => {
    const newList = banksList.filter(item => {
      var str = item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      return str.toUpperCase().includes(bankName.toUpperCase());
    });
    setBanksList(newList);
  }, [bankName]);

  useEffect(() => {
    console.log(bankName.length);
    if (bankName.length < 1) {
      setBanksList(initialBanksList);
    }
  }, [bankName]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Header request />
      <ProgressBar previous={10} progress={20} />
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
          Maintenant, sélectionnez votre banque principale
        </Text>
        <Text type="m">
          Choisissez la banque où vous avez votre compte courant. C’est sur ce
          compte que vous recevrez les fonds.
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
        <TextField
          inputProps={{
            placeholder: 'Cherchez votre banque',
            value: bankName,
            onChangeText: bankNameValue => {
              setBankName(bankNameValue);
            },
          }}
          search
        />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}>
          {banksList.map(item => {
            return (
              <TouchableOpacity
                style={[styles.row, styles.bankRow]}
                onPress={() =>
                  navigation.navigate('BankDetails', {
                    name: item.name,
                    logo: item.logo,
                  })
                }>
                <SVGLocalLoader name={item.logo} width={50} height={50} />
                <Text type="l" bold style={[styles.bankName]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
                  emojiStyle={{fontSize: 10, marginRight: 5}}
                />
                <Text type="m" bold>
                  Bon à savoir
                </Text>
              </View>
              <Text type="m" style={styles.sentence}>
                Votre banque principale est votre banque où vous avez un compte
                avec vos revenus et dépenses courants.
              </Text>
              <Text type="m" style={styles.sentence}>
                Votre banque n'est pas éligible si vous n'avez sur cette banque
                que des comptes sur livrets.
              </Text>
            </View>
            <View style={styles.paragraph}>
              <View style={[styles.row, {alignItems: 'center'}]}>
                <Emoji
                  name="point_up"
                  emojiStyle={{fontSize: 15, marginRight: 5}}
                />
                <Text type="m" bold>
                  Comment faire si je ne trouve pas ma banque dans la liste ?
                </Text>
              </View>
              <Text type="m" style={styles.sentence}>
                Nous couvrons la très grande majorité des banques françaises et
                en ajoutons périodiquement.
              </Text>
              <Text type="m" style={styles.sentence}>
                Si, à ce jour, votre banque n'est pas encore listée sur notre
                site internet, nous ne serons malheureusement pas en mesure de
                financer votre projet pour le moment.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default BankSelection;

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
