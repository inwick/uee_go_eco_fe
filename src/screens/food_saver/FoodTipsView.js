import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, SafeAreaView, Modal, Alert } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

function FoodSavingTipsView() {

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
    // const [userId, setUserId] = useState('003');

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
        //  setId(_id)
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
                { text: "OK", onPress: () => navigation.navigate("FoodSavingTips") }
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
                    { text: "OK", onPress: () => navigation.navigate("FoodSavingTips") }
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
                        // style={styles.CalBtn}
                        >
                            <Text>Close</Text>
                        </TouchableOpacity>

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
                            <TextInput
                                onChangeText={onChangeTextCategory}
                                value={category}
                                name='category'
                                underlineColorAndroid='transparent'
                                style={styles.SmallTextInputStyleClass2}
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

                        {/* <TextInput
                            placeholder="Title Name"
                            onChangeText={onChangeTextTitle}
                            defaultValue={title} /> */}
                        {/* <TextInput
                            placeholder="Category"
                            onChangeText={onChangeTextCategory}
                            value={category} /> */}
                        {/* <TextInput
                            placeholder="Description"
                            onChangeText={onChangeTextDescription}
                            value={description} /> */}
                        {/* <TextInput
                            placeholder="Video"
                            onChangeText={onChangeTextVideo}
                            value={video} /> */}
                        {/* <TextInput
                            placeholder="Image"
                            onChangeText={onChangeTextImage}
                            value={image} /> */}





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
                                //  onPress={() => navigation.navigate("FoodSavingTips")}
                                onPress={handleVisibleModelViewMode}
                            >
                                <Text>Close</Text>
                            </TouchableOpacity>
                            <Text value={title} style={styles.title}> {title}</Text>
                            <Image style={styles.tinyLogo} source={{ uri: image }} />
                            <Text style={styles.text}>{description}</Text>
                            <Text style={styles.text}>Video Link: {video}</Text>


                        </View>
                        <View style={styles.fixToText1}>
                            <TouchableOpacity style={styles.CalBtn} onPress={viewUpdateDataBtn}>
                                <Text style={styles.CalBtnText}>Update</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.CalBtn} onPress={deleteData}>
                                <Text style={styles.CalBtnText}>Delete</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <TouchableOpacity style={styles.CalBtn} onPress={viewUpdateDataBtn}>
                            <Text style={styles.CalBtnText}>Update</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.CalBtn} onPress={deleteData}>
                            <Text style={styles.CalBtnText}>Delete</Text>
                        </TouchableOpacity> */}
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
        marginTop: 400,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fixToText1: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
    container: {
        flex: 1,
        flexDirection: "row",
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
});
