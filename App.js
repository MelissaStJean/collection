//#region Les imports
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Home } from './pages/Home.js';
import { Maps } from './pages/Maps.js';
import { Cash } from './pages/Cash.js';
//#endregion

const DATABASE_URL = "postgresql://melissa:3o6Sd7iZQZl-T0NsucqxUQ@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dearly-doe-1298";
const { Client } = require('pg');
const client = new Client(DATABASE_URL);
const Tab = createBottomTabNavigator();
export default function App() {
  (async () => {
    await client.connect();
    try {
      
    } catch (err) {
      console.error("Erreur", err);
    } finally {
      console.log("Réussi")
      client.end();
    }
  })();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'  
        screenOptions={({ route }) => ({ tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'md-home-sharp' : 'md-home-outline';
            } else if (route.name === 'Maps') {
              iconName = focused ? 'md-map' : 'md-map-outline';
            }
            else if (route.name === 'Collection') {
              iconName = focused ? 'md-list-sharp' : 'md-list-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
           
          },
          tabBarActiveTintColor: '#00D750',
          tabBarInactiveTintColor: 'gray',
          backgroundColor: '#f9f9f9',
        })}
      >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Maps' component={Maps} />
        <Tab.Screen name='Collection' component={Cash} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0FFC4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
