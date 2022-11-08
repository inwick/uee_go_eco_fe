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

                {comment.map((comments, index) => (
                    <View key={index} >
                        <Text style={styles.cardButton}>
                            {comments}
                        </Text>
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
