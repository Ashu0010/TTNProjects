import { Text, View, StyleSheet, Animated, font } from 'react-native';
import React, { Component } from 'react';

export default class AnimatedText extends Component {

    constructor() {
        super();
        this.state = {
            fadeText: new Animated.Value(0),
            fadeTextSize: new Animated.Value(1),
            fadeTextSpin: new Animated.Value(0)
        };
    }

    componentDidMount = () => {

        Animated.loop(Animated.timing(this.state.fadeText, {
            toValue: 1,
            duration: 5000,
            useNativeDriver:false
        })).start();

        Animated.loop(Animated.timing(this.state.fadeTextSize, {
            toValue: 55,
            duration: 5000,
            useNativeDriver:false
        })).start();

        Animated.loop(Animated.timing(this.state.fadeTextSpin, {
            toValue: 1,
            duration: 5000,
            useNativeDriver:false
        })).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{ opacity: this.state.fadeText }}>
                    <Animated.Text style={[styles.texts, {
                        fontSize: this.state.fadeTextSize,
                        transform: [{
                            rotate: this.state.fadeTextSpin.interpolate({
                                inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                                outputRange: ['0deg', '360deg', '-360deg', '360deg', '-360deg', '360deg'],

                            })
                        }]
                    }]}>
                        Task1
                    </Animated.Text>
                </Animated.View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texts: {
        color: 'red',
        fontWeight:'700'
    },
});