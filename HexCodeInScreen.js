import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';

export default class HexCodeInScreen extends Component {
    constructor() {
        super();
        this.state = {
            ColorInput: '',
            ColorOutput: '',
        };
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.heading}>
                        Color in Screen
                    </Text>
                </View>

                {/* <View style={[styles.colorContainer, {backgroundColor:this.state.ColorOutput}]}>  */}
                <View style={ColorOutputScreen(this.state.ColorOutput).boxx}>

                </View>

                <View style={styles.hexCodeInputContainer}>
                    <TextInput
                        style={styles.hexCodeInput}
                        placeholderTextColor="blue"
                        placeholder='Hex Code / color Input'
                        onChangeText={(text) =>
                            this.setState({ ColorInput: text.toLowerCase() })} />
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonContainer}
                        onPress={() =>
                            this.setState({ ColorOutput: this.state.ColorInput })}>
                        <Text style={styles.buttonText}>
                            Click
                        </Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        );
    }
}

const ColorOutputScreen = (ColorOutputScn) => 
    StyleSheet.create({
        boxx: {
            backgroundColor: ColorOutputScn,
            marginTop: 40,
            borderColor: 'grey',
            borderRadius: 3,
            borderWidth: 0.4,
            height: 170,
            width: 290,
        },
    });


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    heading: {
        textAlign: 'center',
        fontSize: 25,
        color: 'red',
        fontWeight: "bold",
        marginTop: 30,
    },
    // colorContainer: {
    //     marginTop: 40,
    //     borderColor: 'grey',
    //     borderRadius: 3,
    //     borderWidth: 0.4,
    //     height: 170,
    //     width: 290,
    // },
    hexCodeInputContainer: {
        marginTop: 100,
    },
    hexCodeInput: {
        height: 55,
        width: 280,
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'rgb(231,231,231)',
        borderRadius: 4,
        padding: 16,
    },
    buttonContainer: {
        marginTop: 30,
        backgroundColor: 'skyblue',
        borderColor: 'rgb(231,231,231)',
        borderRadius: 5,
        borderWidth: 1,
        height: 40,
        width: 150,
        padding: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
});