import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity, AsyncStorage} from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApiData from './ApiData';
//import { AsyncStorage } from '@react-native-async-storage/async-storage'

// const Data = [
//     {
//         text: 'Enter Your Name Here',
//         image: require('./Images/3177440.png'),
//         id:'name'
//     },
//     {
//         text: 'Enter Your Email Id Here',
//         image: require('./Images/526913.png'),
//         id:'email'
//     },
//     {
//         text: 'Enter Your Phone Here',
//         image: require('./Images/240_F_223243116_ppy6oxRMqCTUAWvuUE0QIUq8kOhaE7vt.jpg'),
//         id:'phone'
//     },
//     {
//         text: '**********************',
//         image: require('./Images/5672647.png'),
//         id:'password'
//     },
//     {
//         text: '**********************',
//         image: require('./Images/5672647.png'),
//         id:'confirmPassword'
//     },
// ]

export default InputTextComponent = (props) => {
    const [focus, setFocus]= useState(false);

    const [values, setValues]=useState({
        name:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
    });    

     

    const dataSetter =(data,id)=>{
        setValues({
            ...values,
            [id]:data
        })
    }

    const storeUserValues = async () => {
        try {
            // console.log('values',values);
            if(values.name.length>0 && values.email.length>0 && values.phone.length>0 && values.password.length>0 && values.confirmPassword.length>0){  
             AsyncStorage.setItem("userKey", JSON.stringify(values)).then(() => {
                //  props.navigation.replace('ApiPassing')
                setValues({
                    name:'',
                    email:'',
                    phone:'',
                    password:'',
                    confirmPassword:'',
                })
                
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
        <View style={styles.contain}>
            <FlatList
                data={ApiData}
                // keyExtractor={(item,index)=>index.id}
                renderItem={({ item, index }) => {
                    return (
                        item.text && item.image && (
                            <View style={styles.textInp(focus)}>
                            {/* <View style={styles.textInp}> */}
                                <View>
                                    <Image source={item.image}
                                        style={styles.image}
                                    />
                                </View>
                                <TextInput 
                                    value={values[item.id]}
                                    placeholder={item.text}
                                    style={styles.textInputText}
                                    onBlur={()=>setFocus(false)}
                                    onFocus={()=>setFocus(true)}
                                    onChangeText={(items)=>{dataSetter(items,item.id)}}
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
        </View>
        
    )

}

const styles = StyleSheet.create({
    contain:{
        flex:1,
    },
    main:{
        marginTop:20
    },
    textInp: (focus) => ({
        // borderWidth: 1,
        borderRadius: 25,
        height: 60,
        width: 315,
        padding: 11,
        paddingHorizontal: 28,
        marginBottom: 18,
        backgroundColor: 'rgb(238,239,243)',
        borderColor: focus ? 'rgb(28,85,200)' : 'transparent',
        borderWidth:1,
        color: 'rgb(166,166,167)',
        flexDirection:'row',
    }),
    // textInp: {
    //     // borderWidth: 1,
    //     borderRadius: 25,
    //     height: 60,
    //     width: 315,
    //     padding: 11,
    //     paddingHorizontal: 28,
    //     marginBottom: 18,
    //     backgroundColor: 'rgb(238,239,243)',
    //     color: 'rgb(166,166,167)',
    //     flexDirection:'row',
    // },
    image: {
        height: 37,
        width: 37,
        marginRight:13,

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
    textInputText:{
        fontSize:16
    },
    textInpButtonText: {
        fontWeight: '700',
        fontSize: 14,
        color: 'rgb(252,253,254)',
        textAlign: 'center',
    },
})