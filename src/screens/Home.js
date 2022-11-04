import React, {useState, useEffect} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.MainContainer}>
      {/* <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black'
            }}>
                Fuel Saver
            </Text> */}
      {/* <Image source={require('../../assets/fuel_saver/fuelSaverIcon.png')} style={styles.img} /> */}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('FuelSaverDashBoard')}>
        <Text style={styles.text}>Fuel</Text>
      </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("WaterSaverDashBoard")}>
                <Text style={styles.text}>Water</Text>
            </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('')}>
        <Text style={styles.text}>Food</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ElectricitySaverDashBoard')}>
        <Text style={styles.text}>Electricity</Text>
      </TouchableOpacity>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '80%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#26B787',
    borderRadius: 20,
    marginTop: 20,
    height: 100,
  },
  text: {
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    padding: 30,
    fontWeight: '500',
  },
  img: {
    width: 150,
    height: 150,
    marginBottom: 5,
    marginTop: 10,
  },
});
