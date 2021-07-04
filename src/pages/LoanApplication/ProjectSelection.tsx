import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  FlatList,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import SimpleButton from '@components/molecules/SimpleButton';
import Header from '@components/molecules/Header';
import Text from '@components/atoms/Text';
import {useMediaQuery} from 'react-responsive';
import Emoji from '@components/atoms/Emoji';
import ProgressBar from '@components/atoms/ProgressBar';
import SVGLocalLoader from '@components/atoms/SVGLocalLoader';
import TextField from '@components/atoms/TextField';
import {useNavigation} from '@react-navigation/native';

const ProjectSelection = () => {
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  const navigation = useNavigation();
  const [otherProject, setOtherProject] = useState('');
  const [selected, setSelected] = useState(null);
  const projectsList = [
    {image: 'education', name: 'Études & Scolarité'},
    {image: 'profesionalTraining', name: 'Formation professionnelle'},
    {image: 'profesionalSpend', name: 'Dépense professionnelle'},
    {image: 'drivingLicense', name: 'Permis de conduire'},
    {image: 'housework', name: 'Travaux & Aménagement'},
    {image: 'carRepair', name: 'Entretien Véhicule'},
    {image: 'hightech', name: 'High Tech'},
    {image: 'travel', name: 'Loisirs & Voyages'},
    {image: '', name: 'Autre'},
  ];

  const Card = styled.TouchableOpacity`
    display: flex;
    flex: 1;
    padding: 10px;
    margin: 10px;
    border: 2px solid #f1f7f7;
    border-radius: 6px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
    text-align: center;
  `;

  const CardSelected = styled(Card)`
    border-color: #4d50f4;
  `;

  const renderContent = (item: any) => {
    return (
      <View>
        {item.item.image ? (
          <SVGLocalLoader name={item.item.image} height={60} />
        ) : null}
        <Text type="m" style={{marginTop: 10}}>
          {item.item.name}
        </Text>
        {item.item.name === 'Autre' ? (
          <TextField
            containerStyle={{marginTop: 20}}
            inputProps={{
              placeholder: 'Facture, santé...',
              value: otherProject,
              onChangeText: otherProjectValue => {
                setOtherProject(otherProjectValue);
              },
            }}
            code
          />
        ) : null}
      </View>
    );
  };
  const renderGridItem = (item: any) => {
    return selected === item.item.name ? (
      <CardSelected onPress={() => setSelected(item.item.name)}>
        {renderContent(item)}
      </CardSelected>
    ) : (
      <Card onPress={() => setSelected(item.item.name)}>
        {renderContent(item)}
      </Card>
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
      <ProgressBar previous={60} progress={70} />
      <View
        style={[
          Platform.OS === 'web' && !isMobile
            ? styles.content
            : styles.contentMobile,
        ]}>
        <Text style={styles.title}>
          <Emoji
            name="raised_hands"
            emojiStyle={{fontSize: 30, marginRight: 10}}
          />
          Quel projet souhaitez-vous financer ?
        </Text>
        <FlatList
          scrollEnabled={false}
          data={projectsList}
          renderItem={item => renderGridItem(item)}
          numColumns={3}
          style={styles.grid}
        />
        <SimpleButton
          disabled={selected ? false : true}
          containerStyle={{marginTop: 40}}
          text="Suivant"
          onPress={() => navigation.navigate('UploadDocuments')}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProjectSelection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    marginTop: 20,
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
  grid: {
    flex: 1,
  },
});
