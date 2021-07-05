import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import Intercom from 'react-native-intercom';

const {width, height} = Dimensions.get('window');
const Support = () => {
  function handleIntercom() {
    Intercom.registerIdentifiedUser({userId: 'hamon.hyacinthe@gmail.com'});
    Intercom.updateUser({
      email: 'hamon.hyacinthe@gmail.com',
      user_id: 'hamon.hyacinthe@gmail.com',
    });
    Intercom.logEvent('last_known_metadata', {
      extra: JSON.stringify({
        version: '1.0',
        build: '1',
        platform: Platform.OS,
        resolution: width + 'x' + height,
      }),
    });
    Intercom.displayMessenger();
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleIntercom()}>
        <Text>Contact support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
