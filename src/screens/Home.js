import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.MainContainer}>
      <Text style={{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 30,
      }}>
        GO ECO
      </Text>
      <Text style={{
        fontSize: 12,
        color: 'black'
      }}>
        Together We Can
      </Text>

      <View style={styles.fixToText}>

        <TouchableOpacity
          style={styles.HomeBtnElec}
          onPress={() => navigation.navigate('ElectricitySaverDashBoard')}>
          <Text style={styles.ElecBtnText}>Electricity Saver</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.HomeBtnWater} onPress={() => navigation.navigate("WaterSaverDashBoard")}>
          <Text style={styles.WaterBtnText}>Water Saver</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.fixToText}>

        <TouchableOpacity
          style={styles.HomeBtnFuel}
          onPress={() => navigation.navigate('FuelSaverDashBoard')}>
          <Text style={styles.FuelBtnText}>Fuel Saver</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.HomeBtnFood} onPress={() => navigation.navigate("FoodSaverDashboard")}>
          <Text style={styles.FoodBtnText}>Food Saver</Text>
        </TouchableOpacity>

      </View>

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

  HomeBtnElec: {
    width: '35%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#FA8072',
    borderRadius: 10,
    marginTop: 170,
    height: 100
  },
  ElecBtnText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    paddingTop: 23,
    fontWeight: "500",
  },
  HomeBtnWater: {
    width: '35%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#52B1E2',
    borderRadius: 10,
    marginTop: 170,
    marginLeft: 20,
    height: 100
  },
  WaterBtnText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    fontWeight: "500",
    paddingTop: 33,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  HomeBtnFuel: {
    width: '35%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#26B787',
    borderRadius: 10,
    marginTop: 20,
    height: 100
  },
  FuelBtnText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    fontWeight: "500",
    paddingTop: 33,
  },
  HomeBtnFood: {
    width: '35%',
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: '#FFC107',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
    height: 100
  },
  FoodBtnText: {
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
    padding: 10,
    fontWeight: "500",
    paddingTop: 33,
  },

  img: {
    width: 150,
    height: 150,
    marginBottom: 5,
    marginTop: 10,
  },
});
