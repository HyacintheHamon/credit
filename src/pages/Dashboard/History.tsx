import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import DesktopMenuWrapper from '@components/organisms/DesktopMenuWrapper';
import {useMediaQuery} from 'react-responsive';

const History = () => {
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});

  const renderContent = () => (
    <View style={styles.contentContainer}>
      <Text>Historique</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default History;
