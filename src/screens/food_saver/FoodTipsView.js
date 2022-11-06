import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';

function FoodSavingTipsView() {

    const [tips, setTips] = useState([]);
    const navigation = useNavigation();

    const getFoodTips = async () => {
        try {
            const response = await axios.get(`http://192.168.1.100:5050/FoodSaver/`);
            setTips(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFoodTips();
    }, [])

    return (

        <View style={styles.MainContainer}>

            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'black'
            }}>
                Food Waste Reducing Tips
            </Text>

            {tips.map(tip => (
                <View key={tip._id}>

                    <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate("FoodSavingTipsGetOneByOne" , {id: tip._id})}>

                        <Text style={{ fontSize: 16, fontWeight: "700", color: "#ffc107", alignSelf: "flex-start" }}>
                            {tip.title}
                        </Text>
                        <Text style={{ fontSize: 14, alignSelf: "flex-start" }}>
                            {tip.description.slice(0, 120)} ...
                        </Text>

                    </TouchableOpacity>
                </View>
            ))}
        </View>

    );
}
export default FoodSavingTipsView

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
        height: 100
    },
    cardButton: {
        padding: 15,
        width: 350,
        alignItems: 'center',
        marginTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    text: {
        color: '#000',
        fontSize: 20,
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
    row: {
        flexDirection: 'row',
        marginTop: 15,
    },
});
