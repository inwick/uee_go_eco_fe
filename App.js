import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './src/screens/PassengerDashboard';
import TopupAccount from './src/screens/TopupAccount';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="Start Screen" component={StartScreen} options={{ title: 'Passenger App' }} />
        <Stack.Screen name="TopupAccount" component={TopupAccount} options={{ title: 'Topup Account' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;