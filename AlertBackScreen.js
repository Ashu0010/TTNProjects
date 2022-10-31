import React, { useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  Clipboard,
  BackHandler,
  StyleSheet,
  ImageBackground
} from 'react-native';

export default function AlertBackScreen(props) {

    useEffect(() => {
        const backAction = () => {
            Alert.alert(
                'Back Button',
                "Click Confirm to go back !",
                [
                    {
                        text: "Cancel",
                        onPress: () => null,
                        style: "cancel"
                    },
                    {
                        text: 'Confirm',
                        onPress: () => props.navigation.goBack(),  // to go back in previous screeen
                        style: 'destructive'
                    },
                ]
            );
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
      }, []);

        return (
            <View style={styles.page}>
                <ImageBackground
                    source={require('/Users/ashishnegi/Desktop/ReactNativeProjects/Images/images.jpeg')}
                    resizeMode='cover'
                    style={styles.image}>
                    <View style={styles.container}>
                        <Text style={styles.text}>
                            React Alert PopUp when go back in Android device
                        </Text>
                    </View>
                </ImageBackground>
            </View>

        )
    }


styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent:'center',
        
    },
    image: {
        flex: 1,
    },
    text: {
        paddingTop:50,
        textAlign:'center',
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    },
})