import React, { useState , useEffect} from "react";
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-material-dropdown';
import axios from 'react-native-axios';

function FoodWasteTipsViewOneByOne({ route }) {

    const { id } = route.params;

    const navigation = useNavigation();
    const [items, setItem] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [userId, setUserId] = useState('003');

    const getFoodTip = async () => {
        try {
            const response = await axios.get('http://localhost:5050/FoodSaver/'+ id);
            console.debug("response all" , response)
            setTitle(response.data.title)
            console.log("titleeeeeee" , response.data.title)
            setItem(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFoodTip();
    }, [])

    return (

        <View style={styles.MainContainer}>

            <Text style={{
                fontSize: 22,
                fontWeight: 'bold',
                color: 'black'
            }}>
                {title}
            </Text>

            <View style={styles.container}>

                <Text style={styles.lableClass}>Title : </Text>
                <TextInput
                    defaultValue={title}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass}
                />

            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass2}>category :</Text>
                <TextInput
                    defaultValue={category}
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass2}
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass3}>description : </Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass3}
                    defaultValue={description}
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass4}> Video URL :</Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass4}
                    defaultValue={video}
                />
            </View>

            <View style={styles.container}>

                <Text style={styles.lableClass5}> Image URL :</Text>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={styles.SmallTextInputStyleClass5}
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

            {/* <View style={styles.fixToText}>
                <TouchableOpacity style={styles.CalBtn} onPress={() => insertData()}>
                    <Text style={styles.CalBtnText}>Update</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.CalBtn} onPress={() => navigation.navigate("FoodSaverDashboard")}>
                    <Text style={styles.CalBtnText}>Delete</Text>
                </TouchableOpacity>
            </View> */}
        </View>

    );
}
export default FoodWasteTipsViewOneByOne

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
