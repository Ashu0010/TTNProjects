import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CounterApp from './CounterApp';
import LogIn from './Login';
import ScrollStyling from './ScrollStyling';
import OtpAppFront from './OTPAppFront';
import HexCodeInScreen from './HexCodeInScreen';
import HomeScreen from './HomeScreen';


const Tab = createBottomTabNavigator();


export default class TabNavigationProjectScreens extends Component {
    render() {
        return (
            <NavigationContainer initialRouteName="Home">
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HomeScreen} />
                    <Tab.Screen name="CounterApp" component={CounterApp} />
                    <Tab.Screen name="TicketApp" component={ScrollStyling} />
                    <Tab.Screen name="LogInApp" component={LogIn} />
                    <Tab.Screen name="OtpApp" component={OtpAppFront} />
                    <Tab.Screen name="ColorInScreenApp" component={HexCodeInScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}