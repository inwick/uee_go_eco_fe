import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput, Button, ScrollView } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';

function FuelTipView({ route }) {

    const [tip, setTip] = useState([]);
    const [comment, setComment] = useState([]);
    const [input, setInput] = useState("");
    const navigation = useNavigation();
    const { id } = route.params;
    // const [did, setDid] = useState("");

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
                temp.push(response.data[i].comments);
            }
            if (temp[0] == null) {
                setComment(["Currently no Comments"]);
            } else {
                setComment(temp);
            }
            console.log('a', temp);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getFuelTip();
        getComments();
    }, [])

    // const onDeleteCmnt = async (id) => {
    //     axios({
    //         method: 'DELETE',
    //         url: `http://localhost:5050/cart/${id}`
    //     })
    // }

    return (

        <View style={styles.MainContainer}>

            <Text style={styles.textTitle}> {tip.tipTitle} </Text>
            <Image source={{ uri: tip.image }} style={styles.img} />
            <Text style={styles.textDescription}> {tip.tipDescription} </Text>

            <Text style={{ fontSize: 14, fontWeight: "700", color: "#26B787", marginLeft: -235, marginTop: 10 }}>Comments</Text>

            <TextInput
                onChangeText={input => setInput(input)}
                onEndEditing={async () => {
                    try {
                        const data = {
                            tipId: id,
                            userId: 1234,
                            comments: input,
                        }

                        await axios.post(`http://10.0.2.2:5050/FuelComment/add`, data)
                        getComments();

                    } catch (error) {
                        alert(error);
                    }
                    return false
                }}
                underlineColorAndroid='transparent'
                style={styles.SmallTextInputStyleClass3}
            />

            <ScrollView style={{ height: 150 }}>

                {comment.map((comments, index) => (
                    <View key={index} style={styles.cardButton}>
                        <Text style={{ width: "80%" }}>
                            {comments}
                        </Text>
                        <View style={styles.fixToText}>
                            <TouchableOpacity onPress={() => totalCost()}>
                                <Image source={require('../../assets/fuel_saver/pensil.png')} style={{ marginTop: -17, marginLeft: 250 }} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => individualCost()}>
                                <Image source={require('../../assets/fuel_saver/cross.png')} style={{ marginTop: -17, marginLeft: 7 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}

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
        height: 175,
        marginBottom: 5,
        marginTop: 10
    },
    icon: {
        color: "red"
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
        // marginTop: 20,
        // alignSelf: "flex-end",
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
});
