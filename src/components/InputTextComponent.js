import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, AsyncStorage} from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApiPassing from '../screens/ApiPassing';
//import { AsyncStorage } from '@react-native-async-storage/async-storage'

const Data = [
    {
        text: 'Enter Your Name Here',
        image: require('/Users/ashishnegi/Desktop/ReactNativeProjects/Images/3177440.png'),
        id:'name'
    },
    {
        text: 'Enter Your Email Id Here',
        image: require('/Users/ashishnegi/Desktop/ReactNativeProjects/Images/526913.png'),
        id:'email'
    },
    {
        text: 'Enter Your Phone Here',
        image: require('/Users/ashishnegi/Desktop/ReactNativeProjects/Images/240_F_223243116_ppy6oxRMqCTUAWvuUE0QIUq8kOhaE7vt.jpg'),
        id:'phone'
    },
    {
        text: '**********************',
        image: require('/Users/ashishnegi/Desktop/ReactNativeProjects/Images/5672647.png'),
        id:'password'
    },
    {
        text: '**********************',
        image: require('/Users/ashishnegi/Desktop/ReactNativeProjects/Images/5672647.png'),
        id:'confirmPassword'
    },
]

export default InputTextComponent = (props) => {

    const [values, setValues]=useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
    });    

    const dataSetter =(val,id)=>{
        setValues({
            ...values,
            [id]:val
        })
    }

    const storeUserValues = async () => {
        try {
            // console.log('values',values);
            if(values.name.length>0 && values.email.length>0 && values.phone.length>0 && values.password.length>0 && values.confirmPassword.length>0){  
             AsyncStorage.setItem("userKey", JSON.stringify(values)).then(() => {
                 props.navigation.navigate('ApiPassing')
             }).catch(() => {})
            }
            else{
                alert("Details Empty Or Some details are not filled !!! ")
            }
        } catch (error) {
          console.log(error);
        }
      };

    return (
        <SafeAreaView>
            <FlatList
                data={Data}
                keyExtractor={(item)=>item.id}
                renderItem={({ item, index }) => {
                    return (

                        item.text && item.image && item.id && (
                            <View style={styles.textInp}>
                                <View>
                                    <Image source={item.image}
                                        style={styles.image}
                                    />
                                </View>
                                <TextInput 
                                    value={values}
                                    placeholder={item.text}
                                    onChangeText={(values)=>{dataSetter(values,item.id)}}
                                />

                            </View>
                        )
                    )
                }
                }
            />
            <View style={styles.main}>
            <TouchableOpacity style={styles.textInpButton} onPress={storeUserValues}>
                    <Text style={styles.textInpButtonText}>
                        CREATE
                    </Text>
            </TouchableOpacity> 
            </View>
        </SafeAreaView>
        
    )

}

const styles = StyleSheet.create({
    main:{
        marginTop:20
    },
    textInp: {
        // borderWidth: 1,
        borderRadius: 25,
        height: 60,
        width: 320,
        padding: 11,
        paddingHorizontal: 25,
        marginBottom: 18,
        backgroundColor: 'rgb(238,239,243)',
        color: 'rgb(166,166,167)',
        flexDirection:'row',
    },
    image: {
        height: 37,
        width: 37,
        marginRight:10,

    },
    textInpButton: {
        height: 50,
        width: 190,
        borderWidth: 0.1,
        borderRadius: 30,
        padding: 15,
        alignSelf: 'center',
        backgroundColor: 'rgb(28,85,200)',
        marginBottom: 5,
    },
    textInpButtonText: {
        fontWeight: '700',
        fontSize: 14,
        color: 'rgb(252,253,254)',
        textAlign: 'center',
    },
})