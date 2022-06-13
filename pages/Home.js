import React from 'react';
import { Text, Image,SafeAreaView,ScrollView} from 'react-native';
import styles from "../stylesheet/styles";

const Home = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>Bienvenue</Text>
          <Image style={styles.img} source={require('../assets/iconeMonnaie.png')} />
          <Text style={{color: "#000000",fontSize: 30,marginBottom: 100}}>
            Cette application s'adresse à mon père, fervant collectionneur de billet & pièce de monnaie.
            Pour partager à des membres de la famille ou autre il suffit de ...
            Préparez-vous à voir plus de X de partout dans le monde.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
}

export {Home};