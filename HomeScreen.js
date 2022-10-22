import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground, Image } from 'react-native';

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('/Users/ashishnegi/Desktop/ReactNativeProjects/Images/images.jpeg')}
                resizeMode='cover'
                style={styles.image}>

                <View style={styles.homestyle}>
                    <View>
                        <Text style={styles.homestyleText}>
                            Assignments Navigation
                        </Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate('CounterApp')}>
                            <Text style={styles.buttonText}>
                                Counter App
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate('TicketApp')}>
                            <Text style={styles.buttonText}>
                                Book Ticket App
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate('LogInApp')}>
                            <Text style={styles.buttonText}>
                                Log In App Front
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate('OtpApp')}>
                            <Text style={styles.buttonText}>
                                OTP App Front
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate('ColorInScreenApp')}>
                            <Text style={styles.buttonText}>
                                Color In Screen
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homestyle: {
        flex: 1,
        alignItems: 'center',
        padding: 70,
        marginBottom: 30,

    },
    image: {
        flex: 1
    },
    homestyleText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 50
    },
    buttonContainer: {
        marginTop: 15,
        padding: 12,
        borderWidth: 0.6,
        borderRadius: 20,
        borderBottomColor: '#E738EC',
        borderLeftColor: '#E738EC',
        backgroundColor: 'rgb(109,188,120)',
        borderColor: '#6438EC',
        alignItems: "center",
        marginHorizontal: 60,
        height: 50,
        width: 250,
    },
    buttonBox: {
        marginTop: 30
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
})