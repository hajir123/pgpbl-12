import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontawesome6 from 'react-native-vector-icons/FontAwesome6';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();

const webmap = require('../Peta/map.html');

function HomeScreen() {
    return (
        <ScrollView>
            <Text style= {styles.tittle}>My Maps</Text>
            <View styles={styles.listitems}>
            <Image source={require('../Peta/peta.png')} styles={styles.Image} />
            <Text style={styles.captionaja}>Peta Ekosistem Mangrove</Text>
            </View>
            
            
            
        </ScrollView>
        
        
    )
}
function MapScreen() {
    return (
        <WebView
        source={ webmap }
        />
    )
}
function ProfileScreen() {
    return (
        <View>
            <Portofolio />
        </View>
    )
}
function MahasiswaScreen() {
    return (
        <View>
            <Getjsonfile />
        </View>
    )
}

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}  >
      <Tab.Screen name="Home" component={HomeScreen} options={{
	tabBarLabel: 'Home',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="home" color={color} size={size} />
	),
}}
/>
      <Tab.Screen name="Map" component={MapScreen} options={{
	tabBarLabel: 'Map',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="map" color={color} size={size} />
	),
}}
/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
	tabBarLabel: 'Profile',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="user" color={color} size={size} />
	),
}}
/>
      <Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
	tabBarLabel: 'Mahasiswa',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="users" color={color} size={size} />
	),
}}
/>
    </Tab.Navigator>
    </NavigationContainer>
    
  );
}

export default MyTabs;

const styles = StyleSheet.create({
    Image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch'

    },
    listitems: {
        padding: 10,
        alignItems: 'center',
    },
    captionaja: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    tittle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    
});