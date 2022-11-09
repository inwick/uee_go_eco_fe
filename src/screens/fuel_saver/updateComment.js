import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput, Alert, } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';

function UpdateFuelComent({ route }) {

    const [tip, setTip] = useState([]);
    const [comment, setComment] = useState([]);
    const [input, setInput] = useState("");
    const navigation = useNavigation();
    const { cid } = route.params;
    const { id } = route.params;
    const { textEdit } = route.params;
    const UId = "1234";


    const getFuelTip = async () => {
        try {
            const response = await axios.get("http://10.0.2.2:5050/FuelTips/" + id);
            setTip(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    const getComments = async () => {
        let temp = [];
        try {
            const response = await axios.get("http://10.0.2.2:5050/FuelComment/tipcomment/" + id);
            for (let i = 0; i < response.data.length; i++) {
                temp.push(response.data[i]);
            }
            if (temp[0] == null) {
                setComment(["Currently no Comments"]);
            } else {
                setComment(temp);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getFuelTip();
        getComments();
    }, [])

    return (

        <View style={styles.MainContainer}>

            <Text style={styles.textTitle} > {tip.tipTitle} </Text>
            <Image source={{ uri: tip.image }} style={styles.img} blurRadius={5} />
            <Text style={styles.textDescription}> {tip.tipDescription} </Text>

            <View style={styles.background}>
                <Image source={require('../../assets/fuel_saver/bgBlur.png')} style={styles.bgimg} blurRadius={10} />
            </View>

            <Text style={{ fontSize: 14, fontWeight: "700", color: "#26B787", marginLeft: -235, marginTop: 0 }}>Comments</Text>

            <TextInput
                defaultValue={textEdit}
                onChangeText={input => setInput(input)}
                onEndEditing={async () => {
                    try {
                        const data = {
                            comments: input,
                        }

                        await axios.post(`http://10.0.2.2:5050/FuelComment/updateFuelTip/${cid}`, data)

                        Alert.alert(
                            "Updated!",
                            "Comment updated successfull",
                            [
                                { text: "OK", onPress: () => navigation.navigate("FuelTipView", { id: tip._id }) }
                            ]
                        );

                    } catch (error) {
                        alert(error);
                    }
                    return false
                }}
                underlineColorAndroid='transparent'
                style={styles.SmallTextInputStyleClass3}
            />

        </View>

    );
}
export default UpdateFuelComent

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    background: {
        height: 350,
        width: 395,
        marginTop: -360
    },
    bgimg: {
        height: 350,
        backgroundColor: 'transparent'
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
        height: 175,
        marginBottom: 5,
        marginTop: 10,
    },
    icon: {
        color: "red"
    },
    SmallTextInputStyleClass3: {
        textAlign: 'center',
        height: 40,
        width: '78%',
        borderBottomEndRadius: 5,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    cardButton: {
        padding: 15,
        paddingLeft: 0,
        width: 300,
        marginTop: 10,
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    icon: {
        backgroundColor: '#ccc',
        position: 'absolute',
        right: 0,
        bottom: 0
    },
    fixToText: {
        flexDirection: 'row',
    },
});
