import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import WebViewLoading from './WebViewLoading';
import SliderSwitch from './SliderSwitch';
import SectionListAssignment from './SectionListAssignment';
import CounterApp from './CounterApp';
import AlertBackScreen from './AlertBackScreen';
import ClipBoardMoveText from './ClipBoardMoveText';
import AnimatedText from './src/components/AnimatedText';
import AnimateTextCross from './src/components/AnimateTextCross';
const Stack = createNativeStackNavigator();

class App extends Component {
    render() {
        return (
            <NavigationContainer>
                {/* screenOptions={{ headerShown: false }} */}
                <Stack.Navigator initialRouteName="Home" >
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Loading" component={WebViewLoading} />
                    <Stack.Screen name="Slider" component={SliderSwitch} />
                    <Stack.Screen name="SectionListAssignment" component={SectionListAssignment} />
                    <Stack.Screen name="Back" component={AlertBackScreen} />
                    <Stack.Screen name="ClipBoard" component={ClipBoardMoveText} />
                    <Stack.Screen name="AnimeText" component={AnimatedText} />
                    <Stack.Screen name="AnimeCross" component={AnimateTextCross} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
export default App;

