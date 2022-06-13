import React from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import styles from "../stylesheet/styles";
import { AntDesign } from '@expo/vector-icons'; 


const Cash = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <Pressable><AntDesign name="pluscircleo" size={30} color="black" /></Pressable>
          <Text style={{color: "#000000",fontSize: 60,marginBottom: 50}}>La liste des pays</Text>
      </View>
    );

}


const stylesheet = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },  
  modalText: {
    marginBottom: 20,
    textAlign: "center",
  }
  
}
);

export {Cash};