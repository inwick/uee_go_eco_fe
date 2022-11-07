import axios from 'react-native-axios';
import React, { Component, useState } from 'react';
import { Button, View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { block } from 'react-native-reanimated';
// import ModalDropdown from 'react-native-modal-dropdown';
// import { Dropdown } from 'react-native-element-dropdown';
// import AntDesign from 'react-native-vector-icons/AntDesign';

function WaterSaverCategories() {

    const navigation = useNavigation();

    const [title, setTitle] = useState('a');
    const [description, setDescription] = useState('a');
    const [category, setCategory] = useState('Industrial');
    const [image, setImage] = useState('a');

    // RN Code
    const Col = ({ numRows, children }) => {
        return (
            <View style={styles[`${numRows}col`]}>{children}</View>
        )
    }

    const Row = ({ children }) => (
        <View style={styles.row}>{children}</View>
    )

    const onChangeTextTitle = (value) => {
        setTitle(value)
    }
    const onChangeTextDescription = (value) => {
        setDescription(value)
    }

    const onChangeTextImage = (value) => {
        setImage(value)
    }
    const onChangeTextCategory = (value) => {
        setCategory(value)
    }

    const insertData = () => {

        var data = {
            userId: '1234',
            image: image,
            tipTitle: title,
            tipDescription: description,
            tipCategory: category
        }
        axios({
            url: "http://10.0.2.2:5050/Watertips/add",
            method: "POST",
            data: data
        }).then((response) => {
            Alert.alert(
                "Done",
                "Successfully Inserted!",
                [
                    { text: "OK", onPress: () => navigation.navigate("WaterSavingTips") }
                ]
            );
        })


    }

    // const dataa = [
    //     { label: 'Item 1', value: '1' },
    //     { label: 'Item 2', value: '2' },
    //     { label: 'Item 3', value: '3' },
    //     { label: 'Item 4', value: '4' },
    //     { label: 'Item 5', value: '5' },
    //     { label: 'Item 6', value: '6' },
    //     { label: 'Item 7', value: '7' },
    //     { label: 'Item 8', value: '8' },
    // ];


    // const [value, setValue] = useState(null);
    // const [isFocus, setIsFocus] = useState(false);

    // const renderLabel = () => {
    //     if (value || isFocus) {
    //         return (
    //             <Text style={[styles.label, isFocus && { color: 'blue' }]}>
    //                 Dropdown label
    //             </Text>
    //         );
    //     }
    //     return null;
    // };

    return (
        <View style={styles.app}>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 30
            }}>
                Add New Tip
            </Text>
            <Row>
                <Col numRows={2}>
                    <Text style={styles.texts}>Title :</Text>
                </Col>
                <Col numRows={2}>
                    <TextInput
                        onChangeText={onChangeTextTitle}
                        defaultValue={title}
                        underlineColorAndroid='transparent'
                        style={styles.SmallTextInputStyleClass}
                        keyboardType="default"
                    />
                </Col>
            </Row>
            <Row >
                <Col numRows={2}>
                    <Text style={styles.texts}> Description :</Text>
                </Col>
                <Col numRows={2}>
                    <TextInput
                        onChangeText={onChangeTextDescription}
                        defaultValue={description}
                        underlineColorAndroid='transparent'
                        style={styles.SmallTextInputStyleClass}
                        keyboardType="numeric"
                    />
                </Col>
            </Row>
            <Row >
                <Col numRows={2}>
                    <Text style={styles.texts}> Category</Text>
                </Col>
                <Col numRows={2}>
                {/* {renderLabel()}
                    <Dropdown
                        //   style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        //   placeholderStyle={styles.placeholderStyle}
                        //   selectedTextStyle={styles.selectedTextStyle}
                        //   inputSearchStyle={styles.inputSearchStyle}
                        //   iconStyle={styles.iconStyle}
                        data={dataa}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                        //   onChange={item => {
                        //     setValue(item.value);
                        //     setIsFocus(false);
                        //   }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    /> */}

                </Col>
            </Row>
            <Row >
                <Col numRows={2}>
                    <Text style={styles.texts}> Image Link</Text>
                </Col>
                <Col numRows={2}>
                    <TextInput
                        onChangeText={onChangeTextImage}
                        defaultValue={image}
                        underlineColorAndroid='transparent'
                        style={styles.SmallTextInputStyleClass}
                        keyboardType="numeric"
                    />
                </Col>
            </Row>

            <View style={styles.fixToText}>
                <TouchableOpacity style={styles.CalBtn} onPress={insertData}>
                    <Text style={styles.CalBtnText}> Add </Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = {
    CalBtn: {
        backgroundColor: '#52B1E2',
        borderRadius: 10,
        marginTop: 30,
        // marginLeft: 10,
        height: 45,
        width: 300,
    },
    CalBtnText: {
        color: '#000',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
        fontWeight: "500"
    },
    fixToText: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    app: {
        flex: 4, // the number of columns you want to devide the screen into
        marginHorizontal: "auto",
        width: 350,
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 30
    },
    row: {
        flexDirection: "row"
    },
    "1col": {
        backgroundColor: "lightblue",
        borderColor: "#fff",
        borderWidth: 1,
        flex: 1
    },
    "2col": {
        // backgroundColor: "green",
        borderColor: "#fff",
        borderWidth: 1,
        flex: 2
    },
    "3col": {
        backgroundColor: "orange",
        borderColor: "#fff",
        borderWidth: 1,
        flex: 3
    },
    "4col": {
        flex: 4
    },
    SmallTextInputStyleClass: {
        textAlign: 'center',
        height: 40,
        width: '85%',
        borderBottomEndRadius: 5,
        // marginLeft: 35,
        borderRadius: 10,
        margin: 5,
        backgroundColor: "#E4E4E4",
        color: "black"
    },
    texts: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 13,
        color: "Black",
        fontWeight: "600"
    }
};


export default WaterSaverCategories