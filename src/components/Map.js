import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from "../../secrets.js";
import MapViewDirections from 'react-native-maps-directions';
import React from 'react';
import { StyleSheet } from 'react-native';

// Stupid shit only runs Apple Maps on MacOS.
function Map({ coordinates, directions, other_directions, setRouteData }) {
  function handleOnReady(data) {
    setRouteData(data);
  }

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsZoomControls={true}
      initialRegion={{
        latitude: coordinates[0],
        longitude: -coordinates[1],
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
      <MapViewDirections
        origin={{latitude: directions.origin[0], longitude: -directions.origin[1]}}
        destination={{latitude: directions.destination[0], longitude: -directions.destination[1]}}
        apikey={GOOGLE_MAPS_API_KEY}
        strokeWidth={3}
        strokeColor='green'
        onReady={handleOnReady}
      />
      {<Marker coordinate={{ latitude: other_directions.origin[0], longitude: -other_directions.origin[1] }} />}
      {<Marker coordinate={{ latitude: other_directions.destination[0], longitude: -other_directions.destination[1] }} />}
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