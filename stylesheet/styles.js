import { StyleSheet } from "react-native-web";
import {Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#BFFEB8",
  },

  title: {
    fontSize: 60,
    textAlign: 'center',
    color: "#000000",
    marginBottom: 50,
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 500, 
    backgroundColor: "#BAADFF",
  },

  mapContainer:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  textInfo:{
    margin: 25,
    fontSize: 23,
    padding: 10,
    textAlign: "justify"
  },

  img:{
    height: 200, 
    width: 200,
    marginLeft: 100
  }
})