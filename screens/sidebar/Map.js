import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';

const { width, height } = Dimensions.get('screen');
const LATDELTA = 0.017;
const LNGDELTA = 0.017;

const Map = (props) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [mapRegion, setMapRegion] = useState({
    longitude: 80.23539830006482,
    latitude: 13.01107648890877,
    longitudeDelta: LNGDELTA,
    latitudeDelta: LATDELTA,
  });
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setMapRegion({
        longitude: location.coords.longitude,
        latitude: location.coords.latitude,
        longitudeDelta: LNGDELTA,
        latitudeDelta: LATDELTA,
      });
    })();
  }, []);


  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <MapView
        initialRegion={mapRegion}
        style={styles.mapView}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsScale={true}
      >
        {mapRegion ? (
          <Circle
            center={{
              longitude: mapRegion.longitude,
              latitude: mapRegion.latitude,
            }}
            radius={1000}
            strokeColor='transparent'
            fillColor='rgba(0,255,0,0.1)'
          ></Circle>
        ) : null}
        {mapRegion ? (
          <Marker
            coordinate={{
              longitude: mapRegion.longitude,
              latitude: mapRegion.latitude,
            }}
          >
          </Marker>
        ) : null}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width,
    height,
    flex: 1,
  },
  mapView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width,
    height,
    flex: 1,
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 50,
    shadowColor: '#555',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.9,
  },
  stroke: {
    backgroundColor: '#ffffff',
    width: 26,
    height: 26,
    borderRadius: 50,
    zIndex: 1,
  },
  core: {
    backgroundColor: 'red',
    width: 24,
    position: 'absolute',
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    height: 24,
    borderRadius: 50,
    zIndex: 2,
  },
  inputWrapper: {
    width: '100%',
    position: 'absolute',
    padding: 10,
    // top: StatusBar.currentHeight,
    bottom: 0,
    left: 0,
    zIndex: 100,
    flexDirection: 'row',
  },
  input: {
    height: 46,
    width: '100%',
    paddingVertical: 10,
    paddingRight: 50,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  sendButton: {
    position: 'absolute',
    top: 17,
    right: 20,
  },
  sendButtonActive: {
    opacity: 1,
  },
});

export default Map;
