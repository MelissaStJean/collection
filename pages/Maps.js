import React from 'react';
import { View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 60;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const ileDeMontreal = {
  latitude: 56.0000,
  longitude: -96.0000,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
}

const Maps = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.mapStyle} 
        region={ileDeMontreal}
        rotateEnabled={false}
        zoomControlEnabled={true}
        zoomEnabled={true}
    ></MapView>
    </View>
  );
}

const styles = ({
  container:{

  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height -100,
  }
});

export {Maps};