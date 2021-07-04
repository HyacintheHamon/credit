import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import Header from '@components/molecules/Header';
import Text from '@components/atoms/Text';
import {useMediaQuery} from 'react-responsive';
import Emoji from '@components/atoms/Emoji';
import ProgressBar from '@components/atoms/ProgressBar';
import styled from 'styled-components/native';
import SVGLocalLoader from '@components/atoms/SVGLocalLoader';
import SimpleButton from '@components/molecules/SimpleButton';
//@ts-ignore
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
//@ts-ignore
import ImagePicker from 'react-native-image-picker';

const UploadDocuments = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const [selected, setSelected] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [documentName, setDocumentName] = useState('');
  const [DocumentImage, setDocumentImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = React.useState<any>(null);
  const navigation = useNavigation();

  const documentsList = [
    {image: 'idCard', name: 'Carte Nationale d’Identité française'},
    {image: 'frenchPassport', name: 'Passeport français'},
    {image: 'europeanIdCard', name: 'Carte Nationale d’Identité européenne'},
    {image: 'europeanPassport', name: 'Passeport européen'},
    {image: 'residencePermit', name: 'Carte de séjour'},
    {image: 'passportAndVisa', name: 'Passeport et Visa'},
  ];

  const Card = styled.TouchableOpacity`
    display: flex;
    padding: 20px;
    margin: 10px;
    margin-top: 20px;
    border: 2px solid #f1f7f7;
    border-radius: 12px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    align-items: flex-start;
    flex-direction: row;
    align-items: center;
  `;

  //@ts-ignore
  const handleImage = ({uri}) => {
    setUploaded(!uploaded);
  };

  //@ts-ignore
  const handleFail = ({error}) => {
    console.log(error);
  };

  const renderImagePicker = () => {
    return (
      <View style={styles.dashedView}>
        <Text type="m" bold style={styles.dashedViewInstruction}>
          FACE AVANT
        </Text>
        <Image
          style={{width: 80, height: 80}}
          source={{
            uri: 'https://media.giphy.com/media/TuVHJ3y2pHPNp8uMSv/source.gif',
          }}
        />
        <Text type="m" style={[styles.grey, {marginTop: 10}]}>
          Glissez ou{' '}
          <Text type="m" outlined bold>
            cliquez ici
          </Text>
        </Text>
        <Text type="s" style={[styles.grey, {marginTop: 10}]}>
          Formats : .jpeg, .jpg et .gif
        </Text>
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
      <ProgressBar previous={70} progress={80} />
      <View
        style={[
          Platform.OS === 'web' && !isMobile
            ? styles.content
            : styles.contentMobile,
        ]}>
        {!selected ? (
          <Text style={styles.title}>
            <Emoji
              name="bust_in_silhouette"
              emojiStyle={{fontSize: 30, marginRight: 10}}
            />
            On y est presque... Quelle pièce d’identité avez-vous ?
          </Text>
        ) : (
          <Text style={styles.title}>
            <Emoji
              name="bust_in_silhouette"
              emojiStyle={{fontSize: 30, marginRight: 10}}
            />
            Ajoutez la face avant de votre {documentName}
          </Text>
        )}
        {!selected ? (
          <Text type="m">
            Pour des raisons réglementaires, nous devons vérifier l’identité de
            nos clients.
          </Text>
        ) : (
          <View>
            <Text type="m">
              Pour obtenir une réponse rapide, veillez à ce que vos documents
              soient lisibles et en cours de validité.
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
          </View>
        )}
        {!selected ? (
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}>
            {documentsList.map((item, index) => {
              return (
                <Card
                  key={index}
                  onPress={() => {
                    setSelected(true);
                    setDocumentName(item.name);
                    setDocumentImage(item.image);
                  }}>
                  <SVGLocalLoader name={item.image} height={60} width={60} />
                  <Text
                    type={Platform.OS !== 'web' ? 's' : 'l'}
                    style={styles.marginLeft}>
                    {item.name}
                  </Text>
                </Card>
              );
            })}
          </ScrollView>
        ) : uploaded ? (
          <View style={styles.dashedView}>
            <Text type="m" bold style={styles.dashedViewInstruction}>
              {documentName}
            </Text>
            <View style={styles.uploadedView}>
              <SVGLocalLoader name={DocumentImage} height={40} width={40} />
              <Text type="s" style={[styles.grey, {marginLeft: 10}]}>
                IMG_0365.JPG
              </Text>
              <TouchableOpacity
                style={styles.deleteIcon}
                onPress={() => setUploaded(!uploaded)}>
                <AntDesign name="delete" size={15} color="grey" />
              </TouchableOpacity>
            </View>
          </View>
        ) : Platform.OS === 'web' && !isMobile ? (
          //@ts-ignore
          <ImagePicker onComplete={handleImage} onFail={handleFail}>
            {renderImagePicker()}
          </ImagePicker>
        ) : (
          <TouchableOpacity
            onPress={() =>
              launchImageLibrary(
                {
                  maxHeight: 200,
                  maxWidth: 200,
                  selectionLimit: 0,
                  mediaType: 'photo',
                  includeBase64: false,
                },
                setResponse,
              )
            }>
            {renderImagePicker()}
          </TouchableOpacity>
        )}
        <SimpleButton
          containerStyle={{marginTop: 20}}
          text="Suivant"
          onPress={() => navigation.navigate('LoanCalculator')}
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
                Le document doit être{' '}
                <Text type="m" bold>
                  entier
                </Text>{' '}
                : pas de document coupé ou rogné, ou mal cadré.
              </Text>
              <Text type="m" style={styles.sentence}>
                Le document doit être{' '}
                <Text type="m" bold>
                  lisible
                </Text>{' '}
                : pas de flash, de reflet ou de doigt(s) masquant une partie du
                document, ou de copie en noir et blanc.
              </Text>
              <Text type="m" style={styles.sentence}>
                Les photos aux format .pdf et .png ne sont pas acceptées.
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default UploadDocuments;

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
  bankName: {
    textTransform: 'uppercase',
    color: 'grey',
    marginBottom: 5,
  },
  marginLeft: {
    marginLeft: 10,
  },
  dashedView: {
    minHeight: 300,
    width: '100%',
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 12,
    borderStyle: 'dashed',
    borderColor: '#c0c6d5',
    padding: 20,
    alignItems: 'center',
  },
  dashedViewInstruction: {
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  grey: {
    color: 'grey',
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
  uploadedView: {
    flexDirection: 'row',
    marginTop: '25%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f1f7f7',
    padding: 10,
    borderRadius: 12,
    width: '100%',
  },
  deleteIcon: {
    position: 'absolute',
    top: 22,
    right: 15,
  },
});
