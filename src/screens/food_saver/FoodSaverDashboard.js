import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';

function FoodSaverDashboard() {

    const [wallets, setWallets] = useState([]);
    const navigation = useNavigation();

    const getWalletItems = async () => {
        try {
            const response = await axios.get(`http://192.168.1.100:5050/wallet`);
            setWallets(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWalletItems();
    }, [])

    return (

        <View style={styles.MainContainer}>

            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black'
            }}>
                Food Waste Reducing
            </Text>
            <Image source={require('../../assets/food_waste_saver/food1.png')} style={styles.img} />

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddFoodSavingTips")}>
                <Text style={styles.text}>Add Food Waste Reducing Tips</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FoodSavingTips")}>
                <Text style={styles.text}>Food Waste Reducing Tips</Text>
            </TouchableOpacity>
{/* 
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FuelEfficiencyCalculator")}>
                <Text style={styles.text}>Fuel Efficiency Calculator</Text>
            </TouchableOpacity> */}

        </View>

    );
}
export default FoodSaverDashboard

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    button: {
        width: '80%',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#ffc107',
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 60,
        height: 100
    },
    text: {
        color: '#000',
        fontSize: 18,
        textAlign: 'center',
        padding: 30,
        fontWeight: "500"
    },

    img: {
        width: 150,
        height: 150,
        marginBottom: 5,
        marginTop: 10
    },

});
