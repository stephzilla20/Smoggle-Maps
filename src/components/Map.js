import MapView from 'react-native-maps';
import React from 'react';
import { StyleSheet } from 'react-native';

// Stupid shit only runs Apple Maps on MacOS.
function MyMap({ coordinates }) {
    return (
      <MapView
        style={styles.map}
        showsZoomControls={true}
        initialRegion={{
          latitude: coordinates[0],
          longitude: -coordinates[1],
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}/>
    );
};

const styles = StyleSheet.create({
    map: {
      width: '100%',
      height: '100%',
    },
  });

export default MyMap;