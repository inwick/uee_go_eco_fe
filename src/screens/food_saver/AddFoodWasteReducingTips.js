import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Button, Alert, Picker } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-material-dropdown';
import axios from 'react-native-axios';
import RNPickerSelect from "react-native-picker-select";

function AddFoodWasteReducingTips() {

    // const [wallets, setWallets] = useState([]);
    const navigation = useNavigation();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [userId, setUserId] = useState('003');

    // const options = ["Ways to Reduce Food Waste", "Food Preservation methods", "Replanting Using Food Waste Parts"];
    const option = [{
        value: 'Ways to Reduce Food Waste',
    }, {
        value: 'Food Preservation methods',
    }, {
        value: 'Replanting Using Food Waste Parts',
    }];

    // const [data, setData] = useState({
    //     title: "",
    //     description: "",
    //     video: "",
    //     image: "",
    //     category: option[0]
    // });

    const insertData = (e) => {
        //    e.preventDefault();

        const insertData = {
            title: title,
            category: category,
            description: description,
            image: image,
            video: video,
            userId: userId
        }
        try {
            axios.post('http://192.168.1.100:5050/FoodSaver/add' + insertData)

            Alert.alert(
                "Done",
                "Successfully Inserted!",
                [
                    { text: "OK", onPress: () => navigation.navigate("FoodSaverDashboard") }
                ]
            );
        } catch (error) {
            alert('Please Try Again, Something Went Wrong!');
        }
    }

    return (

        <View style={styles.MainContainer}>

            <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'black'
            }}>
                Add Food Waste Reducing Tips
            </Text>

            <View style={styles.container}>

                <Text style={styles.lableClass}>Title : </Text>
                <TextInput
                    onChangeText={title => setTitle(title)}
                    defaultValue={title}
                    name="title"
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass}
                />

            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass2}>category :</Text>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "JavaScript", value: "JavaScript" },
                        { label: "TypeScript", value: "TypeScript" },
                        { label: "Python", value: "Python" },
                        { label: "Java", value: "Java" },
                        { label: "C++", value: "C++" },
                        { label: "C", value: "C" },
                    ]}
                />
                {/* <Picker defaultValue={category} onValueChange={category => setCategory(category)} style={{ height: 50, width: 150, marginLeft: 100 }}>
                    <Picker.Item label = "aaaaaaaaaa" value="aaaaaaaaaaa" />
                    <Picker.Item label = "bbbbbbbbbbbb" value="bbbbbbbbb" />
                    <Picker.Item label = "cccccccccccccc" value="cccccccccccccc" />
                </Picker > */}
                {/* <TextInput
                    onChangeText={category => setCategory(category)}
                    defaultValue={category}
                    name='category'
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass2}
                /> */}
            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass3}>description : </Text>
                <TextInput
                    onChangeText={description => setDescription(description)}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass3}
                    name='description'
                    defaultValue={description}
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass4}> Video URL :</Text>
                <TextInput
                    onChangeText={video => setVideo(video)}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass4}
                    name='video'
                    defaultValue={video}
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass5}> Image URL :</Text>
                <TextInput
                    onChangeText={image => setImage(image)}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass5}
                    name='image'
                    defaultValue={image}
                />
            </View>

            <View style={{
                width: 450,
                alignItems: 'center',
                borderBottomColor: '#ffc107',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 250,
            }}>
            </View>
            {/* 
            <View style={styles.container}>

                <Text style={styles.lableClass4}>
                    Seat Count :
                </Text>

                <TextInput
                                        onChangeText={preDistance => setPreDistance(preDistance)}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass4}
                    keyboardType="numeric"
                />
            </View> */}
            {/* 
            <Text style={styles.StstText} >
                If you want to calculate your vehicle's individual fuel cost,
                please enter the number of seats.
            </Text> */}

            <View style={styles.fixToText}>
                <TouchableOpacity style={styles.CalBtn} onPress={() => insertData()}>
                    <Text style={styles.CalBtnText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.CalBtn} onPress={() => navigation.navigate("FoodSaverDashboard")}>
                    <Text style={styles.CalBtnText}>Cancel</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
}
export default AddFoodWasteReducingTips

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
        color: "#ffc107",
        fontWeight: "600"
    },
    SmallTextInputStyleClass: {
        textAlign: 'center',
        height: 40,
        width: '50%',
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
        color: "#ffc107",
        fontWeight: "600"
    },
    SmallTextInputStyleClass2: {
        textAlign: 'center',
        height: 40,
        width: '50%',
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
        color: "#ffc107",
        fontWeight: "600"
    },
    SmallTextInputStyleClass3: {
        textAlign: 'center',
        height: 40,
        width: '50%',
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
        marginTop: 250,
        borderRadius: 20,
        margin: 5,
        color: "#ffc107",
        fontWeight: "600"
    },
    SmallTextInputStyleClass4: {
        textAlign: 'center',
        height: 40,
        width: '50%',
        borderBottomEndRadius: 5,
        marginTop: 240,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    lableClass5: {
        textAlign: 'center',
        height: 40,
        fontSize: 14,
        marginTop: 320,
        borderRadius: 20,
        margin: 5,
        color: "#ffc107",
        fontWeight: "600"
    },
    SmallTextInputStyleClass5: {
        textAlign: 'center',
        height: 40,
        width: '50%',
        borderBottomEndRadius: 5,
        marginTop: 310,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    container: {
        flex: 1,
        flexDirection: "row",
    },
});
