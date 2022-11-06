/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list';

function AddBillInformation() {
  // const [wallets, setWallets] = useState([]);
  const navigation = useNavigation();

  const [distance, setDistance] = useState('');
  const [consumption, setConsumption] = useState('');
  const [price, setPrice] = useState('');
  const [seats, setSeats] = useState('');
  const [selected, setSelected] = React.useState('');
  const data = [{key: '1', value: 'Jammu & Kashmir'}];
  const [estimatedBill, setEstimatedBill] = useState(5420);

  const totalCost = async () => {
    if (distance == '') {
      alert('Please Enter Travel Distance');
      return false;
    } else if (consumption == '') {
      alert('Please Enter Fuel Consumption');
      return false;
    } else if (price == '') {
      alert('Please Enter Latest Fuel Price');
      return false;
    } else {
      const cost = (distance / consumption) * price;
      Alert.alert('Total Cost', 'LKR.' + cost.toString(), [
        {text: 'OK', onPress: () => navigation.navigate('FuelCostCalculator')},
      ]);
    }
  };

  const individualCost = async () => {
    if (distance == '') {
      alert('Please Enter Travel Distance');
      return false;
    } else if (consumption == '') {
      alert('Please Enter Fuel Consumption');
      return false;
    } else if (price == '') {
      alert('Please Enter Latest Fuel Price');
      return false;
    } else if (seats == '') {
      alert('Please Enter Seat Count');
      return false;
    } else {
      const inCost = ((distance / consumption) * price) / seats;
      Alert.alert('Individual Cost', 'LKR.' + inCost.toString(), [
        {text: 'OK', onPress: () => navigation.navigate('FuelCostCalculator')},
      ]);
    }
  };

  return (
    <View style={styles.MainContainer}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Add Bill information
      </Text>

      <Image
        source={require('../../assets/electricity_saver/add_bill.png')}
        style={styles.img}
      />

      <View style={styles.container}>
        <Text style={styles.labelClass}>Select Month</Text>

        <SelectList
          setSelected={setSelected}
          data={data}
          style={styles.SmallTextInputStyleClass}
          onSelect={() => alert(selected)}
        />

        <TextInput
          onChangeText={distance => setDistance(distance)}
          defaultValue={distance}
          underlineColorAndroid="transparent"
          style={styles.SmallTextInputStyleClass}
          keyboardType="numeric"
        />

        <Text style={styles.labelClassTwo}>Number of Units (kWh)</Text>

        <TextInput
          onChangeText={distance => setDistance(distance)}
          defaultValue={distance}
          underlineColorAndroid="transparent"
          style={styles.SmallTextInputStyleClass}
          keyboardType="numeric"
        />
      </View>

      <View
        style={{
          width: 350,
          alignItems: 'center',
          borderBottomColor: '#26B787',
          marginTop: 250,
        }}
      />

      <View style={styles.fixToText}>
        <TouchableOpacity style={styles.CalBtn} onPress={() => totalCost()}>
          <Text style={styles.CalBtnText}>Calculate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default AddBillInformation;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  CalBtn: {
    width: '35%',
    paddingTop: 7,
    paddingBottom: 2,
    backgroundColor: '#FA8072',
    borderRadius: 10,
    marginTop: -40,
    marginLeft: 10,
    height: 55,
  },
  CalBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    fontWeight: '500',
  },
  fixToText: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    padding: 30,
    fontWeight: '500',
  },
  StstText: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    padding: 30,
    // width: 380
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
  },
  labelClass: {
    textAlign: 'center',
    height: 40,
    fontSize: 18,
    marginTop: 20,
    color: '#FA8072',
    fontWeight: '600',
    marginBottom: -10,
  },
  labelClassTwo: {
    textAlign: 'center',
    height: 40,
    fontSize: 18,
    marginTop: 20,
    color: '#FA8072',
    fontWeight: '600',
    marginBottom: -10,
  },
  labelClassThree: {
    textAlign: 'center',
    height: 40,
    fontSize: 35,
    marginTop: 5,
    color: '#000000',
    fontWeight: '600',
    marginBottom: -14,
  },
  SmallTextInputStyleClass: {
    textAlign: 'center',
    height: 40,
    width: 250,
    borderBottomEndRadius: 5,
    borderRadius: 10,
    backgroundColor: '#E4E4E4',
    color: 'black',
  },
  lableClass2: {
    textAlign: 'center',
    height: 40,
    fontSize: 14,
    marginTop: 108,
    borderRadius: 20,
    margin: 5,
    color: '#26B787',
    fontWeight: '600',
  },
  SmallTextInputStyleClass2: {
    textAlign: 'center',
    height: 40,
    width: '25%',
    borderBottomEndRadius: 5,
    marginTop: 100,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#E4E4E4',
    color: 'black',
  },
  lableClass3: {
    textAlign: 'center',
    height: 40,
    fontSize: 14,
    marginTop: 178,
    borderRadius: 20,
    margin: 5,
    color: '#26B787',
    fontWeight: '600',
  },
  SmallTextInputStyleClass3: {
    textAlign: 'center',
    height: 40,
    width: '25%',
    borderBottomEndRadius: 5,
    marginTop: 170,
    borderRadius: 10,
    margin: 5,
    marginLeft: 60,
    backgroundColor: '#E4E4E4',
    color: 'black',
  },
  lableClass4: {
    textAlign: 'center',
    height: 40,
    fontSize: 14,
    marginTop: 98,
    borderRadius: 20,
    margin: 5,
    color: '#26B787',
    fontWeight: '600',
  },
  SmallTextInputStyleClass4: {
    textAlign: 'center',
    height: 40,
    width: '25%',
    borderBottomEndRadius: 5,
    marginTop: 90,
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#E4E4E4',
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  img: {
    width: 120,
    height: 120,
    marginBottom: 10,
    marginTop: 20,
  },
});
