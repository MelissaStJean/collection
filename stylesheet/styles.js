import { StyleSheet } from "react-native-web";
import {Dimensions} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#B6FFB6",
  },

  title: {
    fontSize: 60,
    justifyContent: 'center',
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
    marginLeft: 30, 
    marginRight: 20,
    marginTop: 20,
    fontSize: 20,
    padding: 10,
    textAlign:"center"
  },

  img:{
    height: 100, 
    width: 100
  }
})