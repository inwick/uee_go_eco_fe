import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, SafeAreaView, Modal, Alert } from "react-native";
import axios from 'react-native-axios';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

function FoodSavingTipsView() {

    const [tips, setTips] = useState([]);
    const [visible, setVisible] = useState(false);
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


    const ViewDetailsPage = (id) => {
        navigation.navigate("FoodSavingTipsGetOneByOne", id)
    }

    const handleVisibleModel = () => {
        setVisible(!visible)
    }

    const handleEdit = (tip) => {
        setVisible(true)
        setId(tip._id)
        setTitle(tip.title)
        setDescription(tip.description)
        setCategory(tip.category)
        setVideo(tip.video)
        setImage(tip.image)
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


    return (
        <SafeAreaView>


            {/*             
            <View>
                <TouchableOpacity onPress={handleVisibleModel}>
                    <Text>Add new</Text>
                </TouchableOpacity>
            </View> */}


            <Modal
                animationType="slide"
                visible={visible}
            >
                <SafeAreaView>
                    <View>
                        <TouchableOpacity onPress={handleVisibleModel}>
                            <Text>Close</Text>
                        </TouchableOpacity>
                        <TextInput
                            placeholder="Title Name"
                            onChangeText={onChangeTextTitle}
                            value={title} />
                        <TextInput
                            placeholder="Category"
                            onChangeText={onChangeTextCategory}
                            value={category} />
                        <TextInput
                            placeholder="Description"
                            onChangeText={onChangeTextDescription}
                            value={description} />
                        <TextInput
                            placeholder="Video"
                            onChangeText={onChangeTextVideo}
                            value={video} />
                        <TextInput
                            placeholder="Image"
                            onChangeText={onChangeTextImage}
                            value={image} />
                    </View>
                    <TouchableOpacity style={styles.CalBtn} onPress={updateData}>
                        <Text style={styles.CalBtnText}>Update</Text>
                    </TouchableOpacity>
                </SafeAreaView>
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
        fontSize: 20,
        textAlign: 'center',
        padding: 30,
        fontWeight: "500"
    },
    img: {
        width: 150,
        height: 150,
        marginBottom: 5,
        marginTop: 10
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
    }
});
