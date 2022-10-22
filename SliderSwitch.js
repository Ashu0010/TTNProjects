import React, { Component } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Slider from "@react-native-community/slider";

export default class SliderSwitch extends Component {
    constructor() {
        super();
        this.state = {
            sliderValue: 0,
            switchSliderValue: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {/* <Text>
                        {this.state.switchSliderValue ? this.state.sliderValue : ''}
                    </Text> */}
                    {this.state.switchSliderValue && <Slider
                        maximumValue={1000}
                        minimumValue={0}
                        step={10}
                        minimumTrackTintColor="violet"
                        maximumTrackTintColor="green"
                        thumbTintColor='black'
                        onValueChange={sliderValue => this.setState({ sliderValue })}
                    />}
                    {/* {this.state.switchSliderValue ? <Slider
                        maximumValue={1000}
                        minimumValue={0}
                        step={2}
                        minimumTrackTintColor="violet"
                        maximumTrackTintColor="green"
                        onValueChange={sliderValue => this.setState({ sliderValue })}
                    />: ''} */}
                    <Text>
                        {this.state.switchSliderValue ? this.state.sliderValue : ''}
                    </Text>
                </View>
                <View style={styles.switchContainer}>
                    <Switch
                        value={this.state.switchSliderValue}
                        onValueChange={(switchSliderValue) => this.setState({ switchSliderValue })}
                        //trackColor={{true:'yellow'}}
                        thumbColor='black'
                        ios_backgroundColor="violet" />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 28,
        justifyContent: 'center',
    },
    switchContainer: {
        marginTop: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});