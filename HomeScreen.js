import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>

            <ImageBackground
                source={require('./Images/images.jpeg')}
                resizeMode='cover'
                style={styles.image}>

                <View style={styles.homestyle}>
                    <View>
                        <Text style={styles.homestyleText}>
                            Assignments Navigation
                        </Text>
                    </View>
                    <View>
                        <ScrollView>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('Loading')}>
                                <Text style={styles.buttonText}>
                                    WebView
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('Slider')}>
                                <Text style={styles.buttonText}>
                                    Slider
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('SectionListAssignment')}>
                                <Text style={styles.buttonText}>
                                    SectionList
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('Back')}>
                                <Text style={styles.buttonText}>
                                    ReactsAlert
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('ClipBoard')}>
                                <Text style={styles.buttonText}>
                                    ClipBoard
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('AnimeText')}>
                                <Text style={styles.buttonText}>
                                    AnimatedText
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('AnimeCross')}>
                                <Text style={styles.buttonText}>
                                    AnimateCross
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('ScrollHideTop')}>
                                <Text style={styles.buttonText}>
                                    ButtonHide
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => navigation.navigate('ApiUI')}>
                                <Text style={styles.buttonText}>
                                    ApiUI
                                </Text>
                            </TouchableOpacity>
        
                        </ScrollView>
                    </View>

                </View>

            </ImageBackground >

        </SafeAreaView >
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
        padding: 10,
        marginBottom: 10,
        marginTop: 20,

    },
    image: {
        flex: 1
    },
    homestyleText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    buttonContainer: {
        marginTop: 15,
        padding: 10,
        borderWidth: 0.8,
        borderRadius: 18,
        borderBottomColor: '#E738EC',
        borderLeftColor: '#E738EC',
        backgroundColor: 'rgb(109,188,120)',
        borderColor: '#6438EC',
        alignItems: "center",
        marginHorizontal: 60,
        height: 43,
        width: 180,
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