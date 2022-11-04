import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import FuelSaverDashBoard from './src/screens/fuel_saver/FuelSaverDashBoard';
import FuelSavingTips from './src/screens/fuel_saver/FuelSavingTips';
import FuelCostCalculator from './src/screens/fuel_saver/FuelCostCalculator';
import FuelEfficiencyCalculator from './src/screens/fuel_saver/FuelEfficiencyCalculator';
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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Go Eco'}}
        />
        <Stack.Screen
          name="FuelSaverDashBoard"
          component={FuelSaverDashBoard}
          options={{title: 'Fuel Saver DashBoard'}}
        />
        <Stack.Screen
          name="FuelSavingTips"
          component={FuelSavingTips}
          options={{title: 'Fuel Saving Tips'}}
        />
        <Stack.Screen
          name="FuelCostCalculator"
          component={FuelCostCalculator}
          options={{title: 'Fuel Cost Calculator'}}
        />
        <Stack.Screen
          name="FuelEfficiencyCalculator"
          component={FuelEfficiencyCalculator}
          options={{title: 'Fuel Efficiency Calculator'}}
        />
        <Stack.Screen
          name="ElectricitySaverDashBoard"
          component={ElectricitySaverDashBoard}
          options={{title: ''}}
        />

        <Stack.Screen
          name="ElectricityCostCalculator"
          component={ElectricityCostCalculator}
          options={{title: ''}}
        />

        <Stack.Screen
          name="AddBillInformation"
          component={AddBillInformation}
          options={{title: ''}}
        />

        <Stack.Screen
          name="ElectricitySaverTips"
          component={ElectricitySaverTips}
          options={{title: ''}}
        />

        <Stack.Screen
          name="ElectricitySaverBillHistory"
          component={ElectricitySaverBillHistory}
          options={{title: ''}}
        />

        <Stack.Screen
          name="ElectricitySaverReport"
          component={ElectricitySaverReport}
          options={{title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
