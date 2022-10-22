import React, { Component } from 'react';
import {
    View, SafeAreaView, Image, Text, StyleSheet, TextInput,
    Button, TouchableOpacity, ImageBackground
} from 'react-native';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            isPasswordShown: false
            
        }
    }
    togglePasswordVisibility = () => {
        this.setState({ isPasswordShown: !this.state.isPasswordShown })
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={{ uri:'https://wallpaperaccess.com/full/765568.png' }}
                    resizeMode='cover'
                    style={styles.image}>

                    <Text style={styles.firstText}>
                        Welcome back!
                    </Text>

                    <Text style={styles.secondText}>
                        We're so excited to see you again!
                    </Text>

                    <Text style={styles.thirdText}>
                        ACCOUNT INFORMATION
                    </Text>

                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor="white"
                        placeholder='Email or Phone Number' />

                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={true}
                        placeholderTextColor="white"
                        placeholder='Password' />

                    <TouchableOpacity>
                        <Text style={styles.buttonTextStyle1}>
                            Forget your Password?
                        </Text>
                    </TouchableOpacity >

                    {/* <TouchableOpacity>
                    <Image
                            resizeMode={'contain'}
                            style={styles.eye}
                            source={require('/Users/ashishnegi/Desktop/CounterApp/icons8-hide-60.png')} />
                    </TouchableOpacity> */}

                    <TouchableOpacity>
                        <Text style={styles.buttonTextStyle2}>
                            Use a Password manager?
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text style={styles.loginButton}>
                            Log In
                        </Text>
                    </TouchableOpacity>

                </ImageBackground>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey"
    },
    image: {
        flex: 1
    },
    eye: {
        width: 20,
        height: 20,
        bottom: 62,
        margin: 5
    },
    firstText: {
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        color: "white",
        marginTop: 77
    },
    secondText: {
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
        marginTop: 5
    },
    thirdText: {
        fontWeight: "bold",
        color: "white",
        marginTop: 37,
        marginLeft: 12
    },
    textInput: {
        padding: 15,
        backgroundColor: 'black',
        marginTop: 13,
        marginHorizontal: 12,
        color: 'white'
    },
    buttonTextStyle1: {
        marginTop: 15,
        marginLeft: 12,
        color: 'skyblue',
        fontSize: 12,
        fontWeight: "bold"
    },
    buttonTextStyle2: {
        marginTop: 7,
        marginLeft: 12,
        color: 'skyblue',
        fontSize: 12,
        fontWeight: "bold"
    },
    loginButton: {
        padding: 15,
        backgroundColor: 'blue',
        color: "white",
        marginTop: 30,
        marginHorizontal: 12,
        textAlign: "center",
        fontWeight: "bold"
    }
});