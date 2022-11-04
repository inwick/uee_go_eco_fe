import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FuelSaverDashBoard from './src/screens/fuel_saver/FuelSaverDashBoard';
import FuelSavingTips from './src/screens/fuel_saver/FuelSavingTips';
import FuelCostCalculator from './src/screens/fuel_saver/FuelCostCalculator';
import FuelEfficiencyCalculator from './src/screens/fuel_saver/FuelEfficiencyCalculator';

import FoodSaverDashboard from './src/screens/food_saver/FoodSaverDashboard';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">

        {/* fuel saver */}
        <Stack.Screen name="FuelSaverDashBoard" component={FuelSaverDashBoard} options={{ title: 'Fuel Saver DashBoard' }} />
        <Stack.Screen name="FuelSavingTips" component={FuelSavingTips} options={{ title: 'Fuel Saving Tips' }} />
        <Stack.Screen name="FuelCostCalculator" component={FuelCostCalculator} options={{ title: 'Fuel Cost Calculator' }} />
        <Stack.Screen name="FuelEfficiencyCalculator" component={FuelEfficiencyCalculator} options={{ title: 'Fuel Efficiency Calculator' }} />


        {/* food waste saver */}
        <Stack.Screen name="FoodSaverDashboard" component={FoodSaverDashboard} options={{ title: 'Food  Waste Reduce DashBoard' }} />

      </Stack.Navigator>

    </NavigationContainer>
  )
};

export default App;