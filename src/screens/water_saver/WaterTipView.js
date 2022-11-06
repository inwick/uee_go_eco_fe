import React, { useState, useEffect } from "react";
import { Button, StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, SafeAreaView } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';

function WaterTipView({ route }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    // const [title, setTitle] = useState('');
    const navigation = useNavigation();
    const { id } = route.params;

    const getWalletItems = async () => {
        try {
            const response = await axios.get(`http://192.168.1.100:5050/WaterTips/` + id);
            setTitle(response.data.tipTitle);
            setDescription(response.data.tipDescription);
            setImage(response.data.image);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWalletItems();
    }, [])

    return (

        <SafeAreaView>
            <ScrollView >
                <View style={styles.infoContainer}>
                    <Text style={styles.name}> {title}</Text>
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: image }}
                />
                <View style={styles.infoContainer}>

                    <Text style={styles.description}> {description}</Text>

                    <View style={styles.fixToText}>
                        <TouchableOpacity style={styles.CalBtn} onPress={() => totalCost()}>
                            <Text style={styles.CalBtnText}>Total Cost</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.CalBtn} onPress={() => individualCost()}>
                            <Text style={styles.CalBtnText}>Individual cost</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}
export default WaterTipView

const styles = StyleSheet.create({
    fixToText: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    CalBtn: {
        width: '40%',
        paddingBottom: 2,
        backgroundColor: '#26B787',
        borderRadius: 10,
        marginLeft: 10,
        height: 45
    },
    CalBtnText: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        padding: 10,
        fontWeight: "500"
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: 1,
        marginVertical: 20,
    },
    image: {
        height: 300,
        width: '100%'
    },
    infoContainer: {
        padding: 16,
        //   justifyContent:'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        fontWeight: '400',
        color: '#787878',
        marginBottom: 16,
    },
});