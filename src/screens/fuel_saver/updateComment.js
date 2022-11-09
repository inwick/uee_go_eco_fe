import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput, Button, ScrollView, ImageBackground } from "react-native";
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
            <Image source={{ uri: tip.image }} style={styles.img} />

            <Text style={styles.textDescription}> {tip.tipDescription} </Text>

            <Text style={{ fontSize: 14, fontWeight: "700", color: "#26B787", marginLeft: -235, marginTop: 10 }}>Comments</Text>

            <TextInput
                defaultValue={textEdit}
                onChangeText={input => setInput(input)}
                onEndEditing={async () => {
                    try {
                        const data = {
                            comments: input,
                        }

                        await axios.post(`http://10.0.2.2:5050/FuelComment/updateFuelTip/${cid}`, data)
                        navigation.navigate("FuelTipView", { id: tip._id })

                    } catch (error) {
                        alert(error);
                    }
                    return false
                }}
                underlineColorAndroid='transparent'
                style={styles.SmallTextInputStyleClass3}
            />

            <ScrollView style={{ height: 150 }}>

                {comment.map(cmt => (
                    <View key={cmt._id} style={styles.cardButton}>
                        <Text style={{ width: "80%" }}>
                            {cmt.comments}
                        </Text>

                        {cmt.userId === UId ?
                            <View style={styles.fixToText}>

                                <TouchableOpacity >
                                    <Image source={require('../../assets/fuel_saver/pensil.png')} style={{ marginTop: -17, marginLeft: 250 }} />
                                </TouchableOpacity>

                                <TouchableOpacity >
                                    <Image source={require('../../assets/fuel_saver/cross.png')} style={{ marginTop: -17, marginLeft: 7 }} />
                                </TouchableOpacity>
                            </View>
                            : null}
                    </View>
                ))}

            </ScrollView>

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
