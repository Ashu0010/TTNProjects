import { Text, View, Animated, StyleSheet, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { transform } from '@babel/core';

export default class AnimateTextCross extends Component {

    constructor() {
        super();
        this.state = {
            xAxis: new Animated.Value(0),
            yAxis: new Animated.Value(0),
            fadeText: new Animated.Value(0),
            fadeTextSpin: new Animated.Value(0),
        };
    }

    widthScreen = Dimensions.get('screen').width;
    heightScreen = Dimensions.get('screen').height;

    componentDidMount = () => {

        Animated.loop(Animated.timing(this.state.xAxis, {
            toValue: this.widthScreen - 130,
            duration: 5000,
            useNativeDriver: false,
        })).start();

        Animated.loop(Animated.timing(this.state.yAxis, {
            toValue: this.heightScreen - 72,
            duration: 5000,
            useNativeDriver: false
        })).start();

    Animated.loop(Animated.timing(this.state.fadeText, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        })).start();

        Animated.loop(Animated.timing(this.state.fadeTextSpin, {
            toValue: 1,
            duration: 5000,
            useNativeDriver: false
        })).start();
    }

    render() {
        return (

            <Animated.View style={[styles.container, { width: 140, height: 50 }]}>
                <Animated.View style={{opacity:this.state.fadeText}}>
                    <Animated.Text style={[styles.texts, {
                        transform: [
                            { translateX: this.state.xAxis },
                            { translateY: this.state.yAxis },
                            {
                                rotate: this.state.fadeTextSpin.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '2520deg'],
                                })
                            },

                        ]
                    }]}>
                        Task 1
                    </Animated.Text>

                </Animated.View>


            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    texts: {
        color: 'red',
        fontSize: 50,
    },
});