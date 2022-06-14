import React from 'react';
import { View, Text, StyleSheet, Pressable,Button} from 'react-native';
import styles from "../stylesheet/styles";
import { AntDesign } from '@expo/vector-icons'; 

//const setVisible = false;
const Cash = ({ navigation }) => {
    return (
      <View style={styles.container}>
          <Pressable onPress={DisplayForm}><AntDesign name="pluscircleo" size={30} color="black" /></Pressable>
          <Text style={{color: "#000000",fontSize: 40,marginBottom: 50}}>Liste des pays</Text>
      </View>
    );

}
/*if(setVisible == true)
{
  displayForm();
}*/
function DisplayForm(){
  return (
    <div>
      <h1>Ajouter un billet</h1>
    </div>
  )
}

const stylesheet = StyleSheet.create({
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
}
);

export {Cash};
export default DisplayForm;