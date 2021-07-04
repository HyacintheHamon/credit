import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import DesktopMenuWrapper from '@components/organisms/DesktopMenuWrapper';
import {useMediaQuery} from 'react-responsive';
import Card from '@components/organisms/Card';
import Text from '@components/atoms/Text';
import Emoji from '@components/atoms/Emoji';
import SimpleButton from '@components/molecules/SimpleButton';

const Home = () => {
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

  const renderContent = () => (
    <View style={styles.contentContainer}>
      <Card>
        <View style={{alignItems: 'center'}}>
          <Emoji name="fire" emojiStyle={{fontSize: 30}} />
          <Text type="l" bold>
            Jean, recevez vos 300€!
          </Text>
          <Text type="m" style={{marginTop: 20, textAlign: 'center'}}>
            Votre demande est acceptée! Signez votre contrat pour recevoir vos
            fonds dans les plus brefs délais.
          </Text>
          <SimpleButton
            containerStyle={{marginTop: 20}}
            text="Signer le contrat"
            onPress={() => {}}
          />
        </View>
      </Card>
    </View>
  );

  return (
    <View style={styles.container}>
      {Platform.OS === 'web' && !isMobile ? (
        <DesktopMenuWrapper>{renderContent()}</DesktopMenuWrapper>
      ) : (
        renderContent()
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
    backgroundColor: '#FFF',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
