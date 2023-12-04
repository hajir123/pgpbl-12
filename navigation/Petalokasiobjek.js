import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import {WebView} from 'react-native-webview';
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();

// const webmap = require('../Peta/map.html');

const forminput = 'https://hajir123.github.io/pgpbl12/';

const petaweb = 'https://hajir123.github.io/pgpbl12/map.html';

const KampusMerdeka = 'https://kampusmerdeka.kemdikbud.go.id/';

function HomeScreen() {
  return (
    <ScrollView>
    <View>
      <Text style={styles.title}>
        APLIKASI TRACER STUDY GEOGRAPHIC INFORMATION SYSTEM STUDENTS
      </Text>
      <Text style={{textAlign: 'center'}}></Text>
      <View style={{flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
      <Image
            source={require('../gambar/logo.png')}
            style={styles.image}
          />
          <Image
            source={require('../gambar/logo-ugm-png.png')}
            style={styles.image}
            />
          <Image
            source={require('../gambar/logo-kampus-merdeka.png')}
            style={{width: 150, height: 75, resizeMode: 'contain'}}
            />
      </View>
      <View style={styles.card}>
      
            <Text style={{textAlign: 'justify'}}>
          Tracer Study adalah metode evaluasi untuk melacak keberhasilan lulusan
          dalam menemukan pekerjaan setelah menyelesaikan studi. Tujuan utama
          dari Tracer Study adalah untuk memahami sejauh mana program pendidikan
          telah mempersiapkan lulusannya untuk memasuki dunia kerja, sekaligus
          memberikan masukan untuk meningkatkan kualitas pendidikan tersebut.
          Pada dasarnya, Tracer Study membantu institusi pendidikan untuk
          mengukur dampak dan relevansi program pendidikan mereka terhadap
          kehidupan profesional lulusan. Dengan mengumpulkan data mengenai
          pekerjaan, gaji, kepuasan, serta pengembangan karier lulusan, Tracer
          Study memberikan gambaran holistik tentang kontribusi pendidikan
          terhadap kesuksesan individu. Informasi yang diperoleh dari Tracer
          Study dapat digunakan untuk menyesuaikan kurikulum, menyempurnakan
          metode pengajaran, dan merancang program pendidikan yang lebih
          responsif terhadap kebutuhan industri. Tracer Study melibatkan survei
          atau wawancara dengan lulusan untuk mendapatkan pemahaman yang
          mendalam tentang pengalaman mereka setelah keluar dari lingkungan
          pendidikan. Dengan demikian, hasil Tracer Study tidak hanya mengukur
          tingkat penempatan kerja, tetapi juga aspek-aspek seperti relevansi
          materi pembelajaran, keterampilan yang diperoleh, serta dampak program
          pendidikan terhadap perkembangan pribadi dan profesional. Pentingnya
          Tracer Study semakin meningkat di era dinamis ini, di mana tuntutan
          dunia kerja terus berubah. Dengan memahami jalur karier dan pengalaman
          hidup lulusan, lembaga pendidikan dapat terus memperbarui kurikulum
          mereka, memfasilitasi pengembangan keterampilan yang relevan, dan
          meningkatkan kesiapan lulusan dalam menghadapi tantangan dunia nyata.
          Tracer Study bukan hanya sekadar alat evaluasi, tetapi juga menjadi
          instrumen strategis untuk meningkatkan kualitas pendidikan dan
          membangun jembatan yang kuat antara dunia pendidikan dan industri.
        </Text>
        </View>
    </View>
    </ScrollView>
  );
}
function MapScreen() {
  return <WebView source={{uri: petaweb}} />;
}
function AddDataScreen() {
  return <WebView source={{uri: forminput}} />;
}
function KampusMerdekaScreen() {
    return <WebView source={{uri: KampusMerdeka}}/>
}
function ProfileScreen() {
  return (
    <View>
      <Portofolio />
    </View>
  );
}

function MyTabs() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {backgroundColor: '#BED754', marginBottom: 10, marginRight: 10, marginLeft: 10, borderRadius: 40},
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddDataScreen}
          options={{
            tabBarLabel: 'AddData',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="plus-square" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Kampus Merdeka"
          component={KampusMerdekaScreen}
          options={{
            tabBarLabel: 'MBKM',
            tabBarIcon: ({ color, size }) => (
        <Fontawesome5 name="university" color={color} size={size} />
      ),
    }}
  />
      </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
    padding: 10,
  },
  listitems: {
    padding: 10,
    alignItems: 'center',
  },
  caption: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    // backgroundColor
  },
  card: {
    flexDirection: 'row',
    padding: 30,
    borderRadius: 20,
    backgroundColor: 'orange',
    shadowColor: '#FFC47E',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7
  },
});
