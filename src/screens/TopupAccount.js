import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, TextInput, Alert } from "react-native";
import CardView from 'react-native-cardview'
import axios from 'react-native-axios';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default class TopupAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wallets: [],
            accountBalance: '',
            id: '',
            name: '',
            cardNumber: '',
            expDate: '',
            cvc: '',
            isVisible: false,
        }
    }

    componentDidMount() {
        axios.get('http://192.168.1.111:5050/wallet')
            .then(response => {
                this.setState({
                    wallets: response.data,
                    accountBalance: response.data[0].accountBalance,
                    id: response.data[0]._id
                })

            })
            .catch((error) => {
                console.log(error);
            })
    }

    topuUpAccount = (e) => {

        let accountBalance = this.state.accountBalance;
        let { name, cardNumber, cvc } = this.state;

        //AccountBalance validation
        if (accountBalance == "") {
            alert("accountBalance can't be empty.")
            return false;
        } else if (name == "") {
            alert("Account Holder Name can't be empty.")
            return false;
        } else if (cardNumber == "") {
            alert("Card Number can't be empty.")
            return false;
        } else if (cvc == "") {
            alert("CVC can't be empty.")
            return false;
        }
        else {
            e.preventDefault();
            const updateData = {
                accountBalance: this.state.accountBalance,
            }

            try {
                axios.post('http://192.168.1.111:5050/wallet/updateamount/' + this.state.id, updateData)

                Alert.alert(
                    "Done",
                    "Successfully Recharged!",
                    [
                        { text: "OK", onPress: () => this.componentDidMount() }
                    ]
                );
            } catch (error) {
                alert('Please Try Again, Something Went Wrong!');
            }
        }

    }

    handlePicker = (date) => {
        this.setState({
            isVisible: false,
            expDate: moment(date)
        })
    }

    hidePicker = () => {
        this.setState({
            isVisible: false
        })
    }

    showPicker = () => {
        this.setState({
            isVisible: true
        })
    }

    sum = (a, b) => {
        return a + b;
    }

    render() {
        return (

            <View style={styles.MainContainer}>
                <Image source={require('../assets/coverImageTwo.jpg')} style={styles.img} />

                <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={10}
                    style={{
                        backgroundColor: 'rgba(0, 254, 8, 1)',
                        padding: 15,
                        width: "90%",
                        alignItems: 'center',
                        marginTop: 10
                    }}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600'
                    }}>
                        Account Balance
                    </Text>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '900'
                    }}>
                        {this.state.wallets.map(wallet => (
                            <View key={wallet._id}>

                                <Text style={{ fontSize: 20, fontWeight: '900' }}>
                                    LKR.{wallet.accountBalance}
                                </Text>

                            </View>
                        ))}
                    </Text>

                </CardView>

                <Text style={{
                    marginTop: 10,
                    fontSize: 15,
                }}>
                    Enter your payment details
                </Text>


                <TextInput
                    placeholder="Amount"
                    onChangeText={(value) => this.setState({ accountBalance: value })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    keyboardType="numeric"
                />

                <TextInput
                    placeholder="Account Holder Name"
                    onChangeText={(value) => this.setState({ name: value })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                />

                <TextInput
                    placeholder="Card Number"
                    onChangeText={(value) => this.setState({ cardNumber: value })}
                    underlineColorAndroid='transparent'
                    style={styles.TextInputStyleClass}
                    keyboardType="numeric"
                    maxLength={16}
                />

                <View style={styles.container}>

                    <TouchableOpacity style={styles.buttonExp} onPress={this.showPicker}>
                        <Text style={styles.textEXp}>Exp Date</Text>
                    </TouchableOpacity>

                    <DateTimePickerModal
                        isVisible={this.state.isVisible}
                        onConfirm={this.handlePicker}
                        onCancel={this.hidePicker}
                        mode={'date'}
                    />

                    <TextInput
                        placeholder="CVC"
                        onChangeText={(value) => this.setState({ cvc: value })}
                        underlineColorAndroid='transparent'
                        style={styles.SmallTextInputStyleClass}
                        keyboardType="numeric"
                        maxLength={3}
                    />
                </View>
                <TouchableOpacity style={styles.button} onPress={this.topuUpAccount}>
                    <Text style={styles.text}>Top Up Now</Text>
                </TouchableOpacity>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    TextInputStyleClass: {
        textAlign: 'center',
        height: 40,
        width: '80%',
        borderWidth: 1,
        borderColor: '#0099ff',
        borderBottomEndRadius: 5,
        marginTop: 10,
        borderRadius: 20,
    },
    SmallTextInputStyleClass: {
        textAlign: 'center',
        height: 40,
        width: '38%',
        borderWidth: 1,
        borderColor: '#0099ff',
        borderBottomEndRadius: 5,
        marginTop: 10,
        borderRadius: 20,
        margin: 5,
    },

    button: {
        width: '80%',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#29b051',
        borderRadius: 20,
        marginTop: 70,
    },

    buttonExp: {
        width: '40%',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: 'none',
        borderColor: '#0099ff',
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
        height: 40,
    },
    text: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        padding: 5
    },

    textEXp: {
        color: 'gray',
        fontSize: 15,
        textAlign: 'center',
        padding: 5
    },
    link: {
        fontWeight: 'bold',
        color: '#0099ff',
        alignSelf: 'flex-end'
    },

    row: {
        flexDirection: 'row',
        marginTop: 15,
    },

    img: {
        width: 350,
        height: 150,
        marginBottom: 5
    },
    container: {
        flex: 1,
        flexDirection: "row",
    },

});