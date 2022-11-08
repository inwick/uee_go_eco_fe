import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';
import { color } from "react-native-reanimated";

function FuelSavingTips() {

    const [tips, setTips] = useState([]);
    const navigation = useNavigation();

    const getFuelTips = async () => {
        try {
            const response = await axios.get(`http://10.0.2.2:5050/FuelTips/`);
            setTips(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFuelTips();
    }, [])

    return (

        <View style={styles.MainContainer}>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'black'
            }}>
                Fuel Saving Tips
            </Text>

            <ScrollView>
                {tips.map(tip => (
                    <View key={tip._id}>

                        <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate("FuelTipView", { id: tip._id })}>

                            <Text style={{ fontSize: 16, fontWeight: "700", color: "#26B787", alignSelf: "flex-start" }}>
                                {tip.tipTitle}
                            </Text>
                            <Text style={{ fontSize: 14, alignSelf: "flex-start" }}>
                                {tip.tipDescription.slice(0, 120)} ...
                            </Text>

                        </TouchableOpacity>
                    </View>
                ))}
                <Text style={styles.csText} >
                    Comming Soon ...
                </Text>
            </ScrollView>

        </View>

    );
}
export default FuelSavingTips

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    csText: {
        marginBottom: 50,
        marginTop: 10,
        textAlign: "center",
        color: "#26B787"
    },
    button: {
        width: '80%',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#26B787',
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
