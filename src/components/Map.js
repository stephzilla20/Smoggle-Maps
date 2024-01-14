import MapView, {Marker} from 'react-native-maps';
import React from 'react';
import { StyleSheet } from 'react-native';

// Stupid shit only runs Apple Maps on MacOS.
function Map({ coordinates, startend }) {

  return (
    <MapView
      style={styles.map}
      showsZoomControls={true}
      initialRegion={{
        latitude: coordinates[0],
        longitude: -coordinates[1],
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      {startend[0] && <Marker coordinate={{ latitude: startend[0][0], longitude: -startend[0][1] }} />}
      {startend[1] && <Marker coordinate={{ latitude: startend[1][0], longitude: -startend[1][1] }} />}
      </MapView>
  );
};

const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    },
  });

export default Map;