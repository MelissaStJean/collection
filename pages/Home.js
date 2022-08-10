import React from 'react';
import { Text, Image,SafeAreaView,ScrollView,Pressable} from 'react-native';
import styles from "../stylesheet/styles";
import { Ionicons } from '@expo/vector-icons'; 
import sql from '../db.js'
async () => {
  await sql`CREATE TABLE [IF NOT EXISTS] billets (
    billetId serial PRIMARY KEY NOT NULL,
    pays VARCHAR(35) NOT NULL,
    annee INT NOT NULL,
    valeurNominale VARCHAR(20) NOT NULL,
    devise datatype(length) column_contraint,
 );`
  try {
  } catch (err) {
    console.error("Erreur", err);
  } finally {
    console.log("Réussi")
  }
};

const Home = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Bienvenue</Text>
          <Image style={styles.img} source={require('../assets/iconeMonnaie.png')} />
          <Text style={styles.textInfo}>
            L'application s'adresse à mon père, fervant collectionneur de billets & pièces de monnaie. Préparez-vous à voir plus de 1500 billets de partout dans le monde !
          </Text>
          <Pressable style={styles.button}>
            <Ionicons name="share-social" size={24} color="black" style={{marginLeft:60}}><Text> Partager</Text></Ionicons>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    );
}

export {Home};