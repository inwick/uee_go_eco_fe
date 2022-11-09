import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, SafeAreaView, Modal, Alert } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Dropdown } from 'react-native-element-dropdown';

function FoodSavingTipsView() {

    const data = [
        { label: 'Ways to Reduce Food Waste', value: '1' },
        { label: 'Food Preservation Methods', value: '2' },
        { label: 'Replanting Using Food Waste Plant', value: '3' },
    ];

    const [tips, setTips] = useState([]);
    const [visible, setVisible] = useState(false);
    const [visibleView, setVisibleView] = useState(false);
    const navigation = useNavigation();

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [video, setVideo] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [userId, setUserId] = useState('003');

    const onChangeTextTitle = (value) => {
        setTitle(value)
    }
    const onChangeTextDescription = (value) => {
        setDescription(value)
    }
    const onChangeTextVideo = (value) => {
        setVideo(value)
    }
    const onChangeTextImage = (value) => {
        setImage(value)
    }
    const onChangeTextCategory = (value) => {
        setCategory(value)
    }

    const getFoodTips = async () => {
        try {
            const response = await axios.get(`http://192.168.1.100:5050/FoodSaver/`);
            setTips(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFoodTips();
    }, [])

    const handleVisibleModel = () => {
        setVisible(!visible)
    }

    const handleVisibleModelViewMode = () => {
        setVisibleView(!visibleView)
        navigation.navigate("FoodSavingTips")
    }

    const handleEdit = (tip) => {
        // setVisible(true)
        setVisibleView(true)
        setId(tip._id)
        setTitle(tip.title)
        setDescription(tip.description)
        setCategory(tip.category)
        setVideo(tip.video)
        setImage(tip.image)
    }

    const viewUpdateDataBtn = () => {
        setVisible(true)
        setVisibleView(false)
        setId(id)
        setTitle(title)
        setDescription(description)
        setCategory(category)
        setVideo(video)
        setImage(image)
    }

    const updateData = () => {

        var data = {
            title: title,
            category: category,
            description: description,
            image: image,
            video: video
        }
        axios({
            url: "http://192.168.1.100:5050/FoodSaver/updateFoodTip/" + id,
            method: "POST",
            data: data
        }).then((res) => {
            // setList(response.data)
            setVisible(false)
        })

        Alert.alert(
            "Done",
            "Successfully Updated!",
            [
                { text: "OK", onPress: () => navigation.navigate("FoodSaverDashboard") }
            ]
        );

    }

    const deleteData = () => {

        axios({
            url: "http://192.168.1.100:5050/FoodSaver/" + id,
            method: "DELETE"
        }).then((res) => {
            // setList(response.data)
            setVisible(false)
            setVisibleView(false)
            Alert.alert(
                "Done",
                "Successfully Deleted!",
                [
                    { text: "OK", onPress: () => navigation.navigate("FoodSaverDashboard") }
                ]
            );
        })

    }

    return (
        <SafeAreaView>

            {/* update delete form */}
            <Modal
                animationType="slide"
                visible={visible}
            >
                <SafeAreaView>
                    <View>
                        <TouchableOpacity
                            onPress={handleVisibleModel}
                        >
                            <Text>Close</Text>
                        </TouchableOpacity>

                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            color: 'black',
                            textAlign: 'center'
                        }}>
                            Update Details
                        </Text>

                        <Image
                            source={require('../../assets/food_waste_saver/food3.png')}
                            style={styles.img}
                        />
                        <View style={styles.container}>

                            <Text style={styles.lableClass}>Title : </Text>
                            <TextInput
                                onChangeText={onChangeTextTitle}
                                value={title}
                                name="title"
                                underlineColorAndroid='transparent'
                                style={styles.SmallTextInputStyleClass}
                            />

                        </View>

                        <View style={styles.container}>

                            <Text style={styles.lableClass2}>category :</Text>
                            <Dropdown
                                style={styles.dropdown}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                inputSearchStyle={styles.inputSearchStyle}
                                iconStyle={styles.iconStyle}
                                data={data}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                searchPlaceholder="Search..."
                                value={category}
                                onChange={item => {
                                    setCategory(item.value);
                                }}

                            />
                        </View>

                        <View style={styles.container}>

                            <Text style={styles.lableClass3}>description : </Text>
                            <TextInput
                                onChangeText={onChangeTextDescription}
                                underlineColorAndroid='transparent'
                                style={styles.SmallTextInputStyleClass3}
                                name='description'
                                value={description}
                                numberOfLines={6}
                                multiline={true}
                            />
                        </View>

                        <View style={styles.container}>

                            <Text style={styles.lableClass4}> Video URL :</Text>
                            <TextInput
                                onChangeText={onChangeTextVideo}
                                underlineColorAndroid='transparent'
                                style={styles.SmallTextInputStyleClass4}
                                name='video'
                                value={video}
                            />
                        </View>

                        <View style={styles.container}>

                            <Text style={styles.lableClass5}> Image URL :</Text>
                            <TextInput
                                onChangeText={onChangeTextImage}
                                underlineColorAndroid='transparent'
                                style={styles.SmallTextInputStyleClass5}
                                name='image'
                                value={image}
                            />
                        </View>

                    </View>
                    <View style={styles.fixToText}>
                        <TouchableOpacity style={styles.CalBtn} onPress={updateData}>
                            <Text style={styles.CalBtnText}>Update</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>



            {/* view details one by one */}
            <Modal
                animationType="slide"
                visible={visibleView}
            >
                <ScrollView
                    contentContainerStyle={{
                        justifyContent: 'center',
                        marginLeft: 20,
                        marginRight: 20,
                    }}>
                    <SafeAreaView>
                        <View>
                            <TouchableOpacity
                                onPress={handleVisibleModelViewMode}
                            >
                                <Text>Close</Text>
                            </TouchableOpacity>
                            <Text value={title} style={styles.title}> {title}</Text>
                            <Image style={styles.tinyLogo} source={{ uri: image }} />

                            <Text style={styles.StstText}>{description}</Text>
                            <Text style={styles.StstText}>Video Link: {video}</Text>

                            <View style={styles.fixToText1}>
                                <TouchableOpacity style={styles.CalBtn} onPress={() => navigation.navigate("AddCommentForFoodSavingTips", { id: id })}>
                                    <Text style={styles.CalBtnText}>Add Review</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.CalBtn} onPress={() => navigation.navigate("ViewReviewsInFoodSavingTips", { id: id })}>
                                    <Text style={styles.CalBtnText}>View Review</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.fixToText2}>
                                <TouchableOpacity onPress={viewUpdateDataBtn}>
                                    <Image source={require('../../assets/food_waste_saver/edit.png')} style={{ marginTop: 100, marginLeft: 250 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={deleteData}>
                                    <Image source={require('../../assets/food_waste_saver/delete.png')} style={{ marginTop: 100, marginLeft: -10 }} />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.StstText2}>If you want to modify this?</Text>
                        </View>
                        {/* <View style={styles.fixToText1}>
                            <TouchableOpacity style={styles.CalBtn} onPress={viewUpdateDataBtn}>
                                <Text style={styles.CalBtnText}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CalBtn} onPress={deleteData}>
                                <Text style={styles.CalBtnText}>Delete</Text>
                            </TouchableOpacity>
                        </View> */}
                    </SafeAreaView>
                </ScrollView>
            </Modal>










            <View style={styles.MainContainer}>

                <Text style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    color: 'black'
                }}>
                    Food Waste Reducing Tips
                </Text>
                <ScrollView
                    contentContainerStyle={{
                        justifyContent: 'center',
                        marginLeft: 20,
                        marginRight: 20,
                    }}>

                    {tips.map(tip => (
                        <View key={tip._id}>

                            {/* <TouchableOpacity style={styles.cardButton} onPress={() => navigation.navigate("FoodSavingTipsGetOneByOne", { id: tip._id })}> */}
                            <TouchableOpacity style={styles.cardButton} onPress={() => handleEdit(tip)}>

                                <Text style={{ fontSize: 16, fontWeight: "700", color: "#ffc107", alignSelf: "flex-start" }}>
                                    {tip.title}
                                </Text>
                                <Text style={{ fontSize: 14, alignSelf: "flex-start" }}>
                                    {tip.description.slice(0, 120)} ...
                                </Text>


                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>

    );
}
export default FoodSavingTipsView



const styles = StyleSheet.create({
    fixToText: {
        marginTop: 285,
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
    fixToText2: {
        marginTop: -100,
        flexDirection: 'row',
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
        marginLeft: 90
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
    StstText2: {
        color: '#000',
        fontSize: 14,
        marginTop: -70,
        marginBottom:30
        // width: 380
    },
});
