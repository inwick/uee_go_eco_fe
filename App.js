import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import FuelSaverDashBoard from './src/screens/fuel_saver/FuelSaverDashBoard';
import FuelSavingTips from './src/screens/fuel_saver/FuelSavingTips';
import FuelCostCalculator from './src/screens/fuel_saver/FuelCostCalculator';
import FuelEfficiencyCalculator from './src/screens/fuel_saver/FuelEfficiencyCalculator';
import WaterSaverDashBoard from './src/screens/water_saver/WaterSaverDashboard';
import WaterSavingTips from './src/screens/water_saver/WaterSavingTips';
import WaterTipView from './src/screens/water_saver/WaterTipView';
import AddNewTip from './src/screens/water_saver/AddNewTip';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Go Eco' }} />
        <Stack.Screen name="FuelSaverDashBoard" component={FuelSaverDashBoard} options={{ title: 'Fuel Saver DashBoard' }} />
        <Stack.Screen name="FuelSavingTips" component={FuelSavingTips} options={{ title: 'Fuel Saving Tips' }} />
        <Stack.Screen name="FuelCostCalculator" component={FuelCostCalculator} options={{ title: 'Fuel Cost Calculator' }} />
        <Stack.Screen name="FuelEfficiencyCalculator" component={FuelEfficiencyCalculator} options={{ title: 'Fuel Efficiency Calculator' }} />

        <Stack.Screen name="WaterSaverDashBoard" component={WaterSaverDashBoard} options={{ title: 'Water Saver DashBoard' }} />
        <Stack.Screen name="WaterSavingTips" component={WaterSavingTips} options={{ title: 'Water Saving Tips' }} />
        <Stack.Screen name="WaterTipView" component={WaterTipView} options={{ title: 'Water Tip View' }} />
        <Stack.Screen name="AddNewTip" component={AddNewTip} options={{ title: 'Add New Idea' }} />

      </Stack.Navigator>

    </NavigationContainer>
  )
};

export default App;