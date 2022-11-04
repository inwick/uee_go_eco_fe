import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, SafeAreaView, TouchableOpacity } from 'react-native';

function AddNewTip() {

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.MainContainer}>

            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'black'
            }}>
                Add New Tip
            </Text>

            <View style={styles.container}>

                <Text style={styles.lableClass}>
                    Title :
                </Text>

                <TextInput
                    // onChangeText={distance => setDistance(distance)}
                    // defaultValue={distance}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass2}>
                    Description :
                </Text>

                <TextInput
                    onChangeText={consumption => setConsumption(consumption)}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass2}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass3}>
                    Category :
                </Text>

                <TextInput
                    onChangeText={price => setPrice(price)}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass3}
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass4}>
                    Image :
                </Text>

                <TextInput
                    onChangeText={price => setPrice(price)}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass4}
                    keyboardType="numeric"
                />
            </View>

            

            {/* <View style={styles.fixToText}>
                <TouchableOpacity style={styles.CalBtn} onPress={() => totalCost()}>
                    <Text style={styles.CalBtnText}>Total Cost</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.CalBtn} onPress={() => individualCost()}>
                    <Text style={styles.CalBtnText}>Individual cost</Text>
                </TouchableOpacity>
            </View> */}
        </View>

    );
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    CalBtn: {
        width: '35%',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#26B787',
        borderRadius: 10,
        marginTop: 70,
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
    fixToText: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        padding: 30,
        fontWeight: "500"
    },
    StstText: {
        color: '#000',
        fontSize: 14,
        textAlign: 'center',
        padding: 30,
        // width: 380
    },
    row: {
        flexDirection: 'row',
        marginTop: 15,
    },
    lableClass: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        marginTop: 38,
        margin: 5,
        color: "#26B787",
        fontWeight: "600"
    },
    SmallTextInputStyleClass: {
        textAlign: 'center',
        height: 40,
        width: '25%',
        borderBottomEndRadius: 5,
        marginTop: 30,
        marginLeft: 35,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    lableClass2: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        marginTop: 108,
        borderRadius: 20,
        margin: 5,
        color: "#26B787",
        fontWeight: "600"
    },
    SmallTextInputStyleClass2: {
        textAlign: 'center',
        height: 40,
        width: '25%',
        borderBottomEndRadius: 5,
        marginTop: 100,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    lableClass3: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        marginTop: 178,
        borderRadius: 20,
        margin: 5,
        color: "#26B787",
        fontWeight: "600"
    },
    SmallTextInputStyleClass3: {
        textAlign: 'center',
        height: 40,
        width: '25%',
        borderBottomEndRadius: 5,
        marginTop: 170,
        borderRadius: 10,
        margin: 5,
        marginLeft: 60,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    lableClass4: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        borderRadius: 20,
        marginTop: 250,
        margin: 5,
        color: "#26B787",
        fontWeight: "600"
    },
    SmallTextInputStyleClass4: {
        textAlign: 'center',
        height: 40,
        width: '25%',
        borderBottomEndRadius: 5,
        marginTop: 240,
        borderRadius: 10,
        margin: 5,
        marginLeft: 60,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center'
    },
});


export default AddNewTip
