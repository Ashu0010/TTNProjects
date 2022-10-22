import React, { Component } from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

class AppChild extends Component {
    constructor() {
        super();
        console.log("Child Constructor");
        this.state={}
    }
    static getDerivedStateFromProps() {
        console.log("Child Get Derived State From Props");
        return null;
    }
    shouldComponentUpdate() {
        console.log("Child Should Component Update");
        return true;
    }
    componentDidMount() {
        console.log("Child Component Did Mount");
    }
    componentDidUpdate() {
        console.log("Child Component Did Update")
    }
    componentWillUnmount() {
        console.log("Child component Will UnMount");
    }
    render() {
        console.log("Child Render");
        return (
            <SafeAreaView>
                <View>
                    <Text style={styles.displayApp}>
                        {this.props.counter}
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    displayApp: {
        fontSize: 100,
        backgroundColor: "green",
        marginHorizontal: 10,
        color: "skyblue",
        textAlign: "center",
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white'

    },
});
export default AppChild;