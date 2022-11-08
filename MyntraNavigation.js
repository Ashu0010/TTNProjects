import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyntraScreen from './MyntraScreen';
import AlertOne from './AlertOne';
import AlertTwo from './AlertTwo';
import AlertThree from './AlertThree';
import AlertFour from './AlertFour';

const Tab = createBottomTabNavigator();

export default class TabNavigationProjectScreens extends Component {
    render() {
        return (
            <NavigationContainer initialRouteName="Home">
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="Home" component={MyntraScreen}
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: () =>
                                <Image
                                    source={require('./Images/icons8-home-100.png')}
                                    style={styles.home}
                                    resizeMode='contain' />
                        }} />
                    <Tab.Screen name="Categories" component={AlertOne}
                        options={{
                            tabBarLabel: 'Categories',
                            tabBarIcon: () =>
                                <Image
                                    source={require('./Images/icons8-menu-rounded-48.png')}
                                    style={styles.home}
                                    resizeMode='contain' />
                        }} />
                    <Tab.Screen name="My Cart" component={AlertTwo}
                        options={{
                            tabBarLabel: 'My Cart',
                            tabBarIcon: () =>
                                <Image
                                    source={require('./Images/icons8-shopping-cart-50.png')}
                                    style={styles.home}
                                    resizeMode='contain' />
                        }} />
                    <Tab.Screen name="Whishlist" component={AlertThree}
                        options={{
                            tabBarLabel: 'Whishlist',
                            tabBarIcon: () =>
                                <Image
                                    source={require('./Images/icons8-heart-50.png')}
                                    style={styles.home}
                                    resizeMode='contain' />
                        }} />
                    <Tab.Screen name="Account" component={AlertFour}
                        options={{
                            tabBarOptions:{
                                showIcon:true,
                                showLabel:true,
                            },
                            tabBarLabel: 'Account',
                            tabBarIcon: () =>
                                <Image
                                    source={require('./Images/icons8-account-50.png')}
                                    style={styles.home}
                                    resizeMode='contain' />
                        }} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        height: 21,
    },
});