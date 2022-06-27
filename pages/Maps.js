import React from 'react';
import { View, Dimensions} from 'react-native';
import MapView,{ Polygon }  from 'react-native-maps';
import * as Canada from '../countries/CAN.geo.json';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 60;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const northAmerica = {
  latitude: 48.0000,
  longitude: -96.0000,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA
}

const Maps = ({  }) => {
  return (
    <View style={styles.container}>
      <MapView 
        style={styles.mapStyle} 
        region={northAmerica}
        rotateEnabled={false}
        zoomControlEnabled={true}
        zoomEnabled={true}
      >
        {
          test()
        }
      </MapView> 
    </View>
  );
}

const test = () => {
  return Canada.features[0].geometry.coordinates.map((key,index) =>{
    return(
      <Polygon key={"polygon" + index} coordinates={polygonCords(index)} fillColor='#59FFC8'></Polygon>

    );
  })
}

//latitude/longitude si erreur => parseFloat()
function polygonCords (index) {
    Canada.features[0].geometry.coordinates[index][0].map(polygons =>{
      let coord = {
        latitude : polygons[1],
        longitude :  polygons[0]
      }
    return coord;
    
  });
}



const styles = ({
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
  }
});

export {Maps};