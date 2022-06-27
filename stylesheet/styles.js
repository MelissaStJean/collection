import {Dimensions, StyleSheet} from 'react-native';
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
    margin: 50,
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    justifyContent: 'center',
    backgroundColor: "#59FF9B",
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
    fontSize: 21,
    padding: 10,
    textAlign: "justify"
  },

  img:{
    height: 200, 
    width: 200,
    marginLeft: 90
  }
})