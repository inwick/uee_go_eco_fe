import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput, Button, ScrollView } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';

function FuelTipView({ route }) {

    const [tip, setTip] = useState([]);
    const [comment, setComment] = useState([]);
    const navigation = useNavigation();
    const { id } = route.params;

    const getFuelTip = async () => {
        try {
            const response = await axios.get("http://192.168.1.111:5050/FuelTips/" + id);
            setTip(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFuelTip();
    }, [])

    return (

        <View style={styles.MainContainer}>

            <Text style={styles.textTitle}> {tip.tipTitle} </Text>
            <Image source={{ uri: tip.image }} style={styles.img} />
            <Text style={styles.textDescription}> {tip.tipDescription} </Text>

            <Text style={{ fontSize: 14, fontWeight: "700", color: "#26B787", marginLeft: -235, marginTop: 10 }}>Comments</Text>

            <TextInput
                onChangeText={comment => setComment(comment)}
                underlineColorAndroid='transparent'
                style={styles.SmallTextInputStyleClass3}
            />
            <ScrollView>
                <Text style={styles.cardButton}>
                    {tip.tipTitle}
                </Text>
                <Text style={styles.cardButton}>
                    {tip.tipTitle}
                </Text>
                <Text style={styles.cardButton}>
                    {tip.tipTitle}
                </Text>
                <Text style={styles.cardButton}>
                    {tip.tipTitle}
                </Text>
            </ScrollView>

        </View>

    );
}
export default FuelTipView

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#26B787'
    },
    textDescription: {
        width: '78%',
        fontSize: 14,
        textAlign: 'justify',
        marginTop: 10
    },
    img: {
        width: 300,
        height: 200,
        marginBottom: 5,
        marginTop: 10
    },
    SmallTextInputStyleClass3: {
        textAlign: 'center',
        height: 40,
        width: '78%',
        borderBottomEndRadius: 5,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    cardButton: {
        padding: 15,
        paddingLeft: 0,
        width: 300,
        alignItems: 'center',
        marginTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    icon: {
        backgroundColor: '#ccc',
        position: 'absolute',
        right: 0,
        bottom: 0
    }
});
