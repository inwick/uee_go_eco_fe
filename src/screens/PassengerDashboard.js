import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import CardView from 'react-native-cardview';
import axios from 'react-native-axios';

export default class StartScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            wallets: [],
        }
    }

    componentDidMount() {

        axios.get('http://192.168.1.111:5050/wallet')
            .then(response => {
                this.setState({ wallets: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    topupFunction = () => {
        this.props.navigation.navigate('TopupAccount')
    }

    render() {
        return (

            <View style={styles.MainContainer}>
                <Image source={require('../assets/coverImageOne.jpg')} style={styles.img} />

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

                <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={10}
                    style={{
                        backgroundColor: 'rgb(147, 112, 219)',
                        padding: 15,
                        width: "90%",
                        alignItems: 'center',
                        marginTop: 10
                    }}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600'
                    }}>
                        Day Pass Balance
                    </Text>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '900'
                    }}>
                        Active
                    </Text>

                </CardView>

                <CardView
                    cardElevation={5}
                    cardMaxElevation={5}
                    cornerRadius={10}
                    style={{
                        backgroundColor: 'rgb(250, 128, 114)',
                        padding: 15,
                        width: "90%",
                        alignItems: 'center',
                        marginTop: 10
                    }}>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '600',
                    }}>
                        Your Fine Amount
                    </Text>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: '900'
                    }}>
                        LKR.500
                    </Text>

                </CardView>

                <TouchableOpacity style={styles.button} onPress={this.topupFunction}>
                    <Text style={styles.text}>Top Up Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} >
                    <Text style={styles.text}>Get Quick Loan</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Travel History</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>Buy Day Pass </Text>
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
        marginBottom: 7,
        height: 40,
        width: '80%',
        borderWidth: 1,
        borderColor: '#0099ff',
        borderBottomEndRadius: 5
    },

    button: {
        width: '70%',
        paddingTop: 2,
        paddingBottom: 2,
        backgroundColor: '#29b051',
        borderRadius: 20,
        marginTop: 10,
    },
    text: {
        color: '#fff',
        fontSize: 20,
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

    forgotPassword: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 1,
    },
    forgot: {
        fontSize: 14,
        color: 'black',
    },

});