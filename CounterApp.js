import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import AppChild from './AppChild';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
    this.state = {
      counter: 0
    }
  }
  increment = () => {
    if (this.state.counter < 10) {
      this.setState({ counter: this.state.counter + 1 });
    }
    else {
      alert(" No INCREMENT after 10 ");
    }
  }
  decrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
    else {
      alert(" No DECREMENT after 0 ");
    }
  }
  reset = () => {
    if (this.state.counter == 0) {
      alert(" Counter is already RESET ");
    }
    else {
      this.setState({ counter: 0 });
    }
  }
  static getDerivedStateFromProps() {
    console.log("Parent Get Derived State From Props");
    return null;
  }
  shouldComponentUpdate() {
    console.log("Parent Should Component Update");
    return true;
  }
  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Parent Component Did Update")
  }
  componentWillUnmount() {
    console.log("Parent component Will UnMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          COUNTER APP
        </Text>

        <View style={{ marginTop: 100 }}>
          {/* <Text style={styles.displayApp}>
            {this.state.counter}
          </Text> */}
          <AppChild counter={this.state.counter}></AppChild>
        </View>

        <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-evenly" }}>

          <TouchableOpacity style={styles.button} onPress={this.increment}>
            <Text style={styles.buttonTextINC}>
              ++
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={this.decrement}>
            <Text style={styles.buttonTextDEC}>
              --
            </Text>
          </TouchableOpacity>

        </View>
        <TouchableOpacity style={styles.resetButton} onPress={this.reset}>
          <Text style={styles.buttonTextRES}>
            RESET
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'white'
  },
  // displayApp:{
  //   fontSize:80,
  //   backgroundColor:"grey",
  //   color:"green",
  //   textAlign:"center",
  // },
  text: {
    fontSize: 45,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "blue"
  },
  buttonTextINC: {
    fontSize: 30,
    padding: 9,
    textAlign: "center"
  },
  buttonTextDEC: {
    fontSize: 40,
    padding: 9,
    textAlign: "center"
  },
  buttonTextRES: {
    fontSize: 30,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    backgroundColor: "skyblue",
    marginTop: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'pink',
    width: 80,
  },
  resetButton: {
    backgroundColor: "skyblue",
    marginTop: 130,
    borderRadius: 15,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: 'pink',
  }
});
export default CounterApp;
