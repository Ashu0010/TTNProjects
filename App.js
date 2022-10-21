import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WebViewLoading from './WebViewLoading';
import SliderSwitch from './SliderSwitch';

const Stack = createNativeStackNavigator();

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
                    </View>

                </View>
            </ImageBackground>
        </View>
    )
}
class App extends Component {
    render() {
        return (
            <NavigationContainer>
                {/* screenOptions={{ headerShown: false }} */}
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Loading" component={WebViewLoading} />
                    <Stack.Screen name="Slider" component={SliderSwitch} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    homestyle: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,

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
        marginTop: 10,
        padding: 10,
        borderWidth: 0.6,
        borderRadius: 15,
        borderBottomColor: '#E738EC',
        borderLeftColor: '#E738EC',
        backgroundColor: 'rgb(109,188,120)',
        borderColor: '#6438EC',
        alignItems: "center",
        marginHorizontal: 60,
        height: 40,
        width: 150,
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