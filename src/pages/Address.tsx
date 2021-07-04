import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//@ts-ignore
import MapView from 'react-native-maps';

const Address = () => {
  const [error, setError] = useState('');
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude),
          setLongitude(position.coords.longitude);
      },
      error => setError(error.message),
      {enableHighAccuracy: true, maximumAge: 200, timeout: 2000},
    );
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation
      />
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
