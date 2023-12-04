import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomPage from '../WelcomPage';
import PetaLokasi from '../navigation/Petalokasiobjek'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={WelcomPage} options={{headerShown: false}} />
      <Stack.Screen name="PetaLokasi" component={PetaLokasi} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default MyStack