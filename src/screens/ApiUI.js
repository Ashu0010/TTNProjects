import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import InputTextComponent from '../components/InputTextComponent'

export default function ApiUI(props) {

    return (
        <View style={styles.container}>
            <ImageBackground 
            source={require('./Images/images.jpeg')}
            resizeMode='cover'
            style={styles.image}>

            <View style={styles.main} />

            <View style={styles.textInpView}>

                <View style={styles.blank} />

                <Text style={styles.topText}>
                    Let's Get Started!
                </Text>

                <Text style={styles.topTextTwo}>
                    Create an account to Q Allure to get all features
                </Text> 

                <InputTextComponent {...props} />

                <View style={styles.bottomText}>
                    <Text style={styles.topTextThree}>
                        Already have an account?
                    </Text>
                    <Text style={styles.loginHere}> Login here</Text>
                </View>

            </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        height:30,
    },
    container: {
        flex: 1,
        // marginHorizontal: 10,
        // marginTop: 10,
        backgroundColor: 'rgb(212,214,219)'
    },
    topText: {
        fontSize: 24,
        fontWeight: '800',
        color: 'rgb(46,46,48)',
        textAlign: 'center',
    },
    topTextTwo: {
        color: 'rgb(166,166,167)',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom:20,
    },
    blank: {
        height: 50,
    },
    image:{
        height:'100%',
    },
    textInpView: {
        flex: 1,
        backgroundColor: 'rgb(233,234,238)',
        margin: 22,
        borderRadius: 30,
        padding: 15,
        marginBottom: 20,
        // justifyContent: 'space-around',
        // marginBottom: 10,
        // color:'rgb(28,85,200)',
    },
   
    bottomText: {
        marginTop:40,
        height: 100,
        width: 300,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center'

    },
    topTextThree: {
        color: 'rgb(85,91,98)',
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 20,
    },
    loginHere: {
        color: 'rgb(28,85,200)',
        fontWeight: '700',
    },
})