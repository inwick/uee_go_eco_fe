import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, SafeAreaView, Modal, Alert } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

function ViewReviewForFoodTips({ route }) {

    const navigation = useNavigation();
    const { id } = route.params;

    const [tips, setTips] = useState([]);
    const [tipId, setTipId] = useState(id);

    const getFoodTips = async () => {
        try {
            const response = await axios.get(`http://192.168.1.100:5050/FoodSaver-comment/tip-comment/` + tipId);
            setTips(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFoodTips();
    }, [])


    // const deleteData = () => {

    //     axios({
    //         url: "http://192.168.1.100:5050/FoodSaver/" + id,
    //         method: "DELETE"
    //     }).then((res) => {
    //         // setList(response.data)
    //         setVisible(false)
    //         setVisibleView(false)
    //         Alert.alert(
    //             "Done",
    //             "Successfully Deleted!",
    //             [
    //                 { text: "OK", onPress: () => navigation.navigate("FoodSavingTips") }
    //             ]
    //         );
    //     })

    // }

    return (
        <SafeAreaView>

            <View style={styles.MainContainer}>

                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'black'
                }}>
                    Reviews
                </Text>

                <Image
                    source={require('../../../assets/food_waste_saver/feedback.png')}
                    style={styles.img}
                />

                <ScrollView
                    contentContainerStyle={{
                        justifyContent: 'center',
                        marginLeft: 20,
                        marginRight: 20,
                    }}>

                    {tips.map(tip => (
                        <View key={tip._id}>

                            <TouchableOpacity style={styles.cardButton}>

                                <Text style={{ fontSize: 14, alignSelf: "flex-start" }}>
                                    {tip.comment.slice(0, 120)} ...
                                </Text>

                            </TouchableOpacity>
                        </View>
                    ))}

                    <View style={styles.fixToText}>
                        <TouchableOpacity style={styles.CalBtn} onPress={() => navigation.navigate("FoodSaverDashboard")}>
                            <Text style={styles.CalBtnText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </View>
        </SafeAreaView>

    );
}
export default ViewReviewForFoodTips



const styles = StyleSheet.create({
    fixToText: {
        marginTop: -5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fixToText1: {
        marginTop: -100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 50
    },
    tinyLogo: {
        width: '100%',
        height: 200,
    },
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
    closBtn: {
        width: '50%',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#ffc107',
        borderRadius: 20,
        marginTop: 20,
        height: 50
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
        fontSize: 18,
        padding: 30,
        fontWeight: "500",
        marginBottom: -10
    },
    row: {
        flexDirection: 'row',
        marginTop: 15,
    },
    CalBtn: {
        width: '35%',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#ffc107',
        borderRadius: 10,
        marginTop: 120,
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
    CloseBtnText: {
        color: '#000',
        fontSize: 14,
        textAlign: '',
        padding: 10,
        fontWeight: "bold",
        marginTop: 5
    },
    title: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
        padding: 30,
        fontWeight: "bold"
    },
    lableClass: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        marginTop: 0,
        marginLeft: 70,
        color: "#ffc107",
        fontWeight: "600",
    },
    SmallTextInputStyleClass: {
        textAlign: 'center',
        height: 40,
        width: '50%',
        borderBottomEndRadius: 5,
        marginTop: -5,
        marginLeft: 37,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    lableClass2: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        marginTop: 60,
        borderRadius: 20,
        marginLeft: 45,
        color: "#ffc107",
        fontWeight: "600"
    },
    SmallTextInputStyleClass2: {
        textAlign: 'center',
        height: 40,
        width: '50%',
        borderBottomEndRadius: 5,
        marginTop: 50,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#E4E4E4",
        color: "black",
        marginLeft: 40,
    },
    lableClass3: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        marginTop: 116,
        borderRadius: 20,
        marginLeft: 30,
        color: "#ffc107",
        fontWeight: "600"
    },
    SmallTextInputStyleClass3: {
        height: 40,
        width: '50%',
        borderBottomEndRadius: 5,
        marginTop: 115,
        borderRadius: 10,
        margin: 5,
        marginLeft: 37,
        backgroundColor: "#E4E4E4",
        color: "black",
        height: 150,
        justifyContent: "flex-start"
    },
    lableClass4: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        marginTop: 285,
        borderRadius: 20,
        marginLeft: 35,
        color: "#ffc107",
        fontWeight: "600"
    },
    SmallTextInputStyleClass4: {
        textAlign: 'center',
        height: 40,
        width: '50%',
        borderBottomEndRadius: 5,
        marginTop: 280,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#E4E4E4",
        color: "black",
        marginLeft: 37,
    },
    lableClass5: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        marginTop: 345,
        borderRadius: 20,
        marginLeft: 31,
        color: "#ffc107",
        fontWeight: "600"
    },
    SmallTextInputStyleClass5: {
        textAlign: 'center',
        height: 40,
        width: '50%',
        borderBottomEndRadius: 5,
        marginTop: 340,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#E4E4E4",
        color: "black",
        marginLeft: 38,
    },
    container: {
        flex: 1,
        flexDirection: "row",
    },
    img: {
        width: 220,
        height: 220,
        marginBottom: 0,
        marginTop: -10,
        marginLeft: 10
    },
    // drop down
    // drop dow styles
    dropdown: {
        height: 50,
        width: '50%',
        // borderColor: 'gray',
        backgroundColor: "#E4E4E4",
        color: "black",
        marginTop: 51,
        // borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginLeft: 38,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 6,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    // common description
    StstText: {
        color: '#000',
        fontSize: 18,
        padding: 10,
        // width: 380
    },
});
