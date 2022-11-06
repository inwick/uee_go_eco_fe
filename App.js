import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import FuelSaverDashBoard from './src/screens/fuel_saver/FuelSaverDashBoard';
import FuelSavingTips from './src/screens/fuel_saver/FuelSavingTips';
import FuelCostCalculator from './src/screens/fuel_saver/FuelCostCalculator';
import FuelEfficiencyCalculator from './src/screens/fuel_saver/FuelEfficiencyCalculator';

import FoodSaverDashboard from './src/screens/food_saver/FoodSaverDashboard';
import AddFoodWasteReducingTips from './src/screens/food_saver/AddFoodWasteReducingTips';
import FoodSavingTipsView from './src/screens/food_saver/FoodTipsView';
import FoodWasteTipsViewOneByOne from './src/screens/food_saver/FoodViewOneByOne';
import WaterSaverDashBoard from './src/screens/water_saver/WaterSaverDashboard';
import WaterSavingTips from './src/screens/water_saver/WaterSavingTips';
import WaterTipView from './src/screens/water_saver/WaterTipView';
import AddNewTip from './src/screens/water_saver/AddNewTip';

import ElectricitySaverDashBoard from './src/screens/electricity_saver/ElectricitySaverDashBoard';
import ElectricityCostCalculator from './src/screens/electricity_saver/ElectricityCostCalculator';
import AddBillInformation from './src/screens/electricity_saver/AddBillInformation';
import ElectricitySaverTips from './src/screens/electricity_saver/ElectricitySaverTips';
import ElectricitySaverBillHistory from './src/screens/electricity_saver/ElectricitySaverBillHistory';
import ElectricitySaverReport from './src/screens/electricity_saver/ElectricitySaverReport';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartScreen">

        {/* fuel saver */}
        <Stack.Screen name="Home" component={Home} options={{ title: 'Go Eco' }} />
        <Stack.Screen name="FuelSaverDashBoard" component={FuelSaverDashBoard} options={{ title: 'Fuel Saver DashBoard' }} />
        <Stack.Screen name="FuelSavingTips" component={FuelSavingTips} options={{ title: 'Fuel Saving Tips' }} />
        <Stack.Screen name="FuelCostCalculator" component={FuelCostCalculator} options={{ title: 'Fuel Cost Calculator' }} />
        <Stack.Screen name="FuelEfficiencyCalculator" component={FuelEfficiencyCalculator} options={{ title: 'Fuel Efficiency Calculator' }} />


        {/* food waste saver */}
        <Stack.Screen name="FoodSaverDashboard" component={FoodSaverDashboard} options={{ title: 'Food  Waste Reduce DashBoard' }} />
        <Stack.Screen name="AddFoodSavingTips" component={AddFoodWasteReducingTips} options={{ title: 'Add Food Waste Tips' }} />
        <Stack.Screen name="FoodSavingTips" component={FoodSavingTipsView} options={{ title: 'Food Waste Reducing Tips' }} />
        <Stack.Screen name="FoodSavingTipsGetOneByOne" component={FoodWasteTipsViewOneByOne} options={{ title: 'Food Waste Reducing Tips Get One By One' }} />



        <Stack.Screen name="WaterSaverDashBoard" component={WaterSaverDashBoard} options={{ title: 'Water Saver DashBoard' }} />
        <Stack.Screen name="WaterSavingTips" component={WaterSavingTips} options={{ title: 'Water Saving Tips' }} />
        <Stack.Screen name="WaterTipView" component={WaterTipView} options={{ title: 'Water Tip View' }} />
        <Stack.Screen name="AddNewTip" component={AddNewTip} options={{ title: 'Add New Idea' }} />

        <Stack.Screen
          name="ElectricitySaverDashBoard"
          component={ElectricitySaverDashBoard}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="ElectricityCostCalculator"
          component={ElectricityCostCalculator}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="AddBillInformation"
          component={AddBillInformation}
          options={{ title: '' }}
        />


        <Stack.Screen
          name="ElectricitySaverTips"
          component={ElectricitySaverTips}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="ElectricitySaverBillHistory"
          component={ElectricitySaverBillHistory}
          options={{ title: '' }}
        />

        <Stack.Screen
          name="ElectricitySaverReport"
          component={ElectricitySaverReport}
          options={{ title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
