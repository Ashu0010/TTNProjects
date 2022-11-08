import { View, Text, AsyncStorage, SafeAreaView, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';

export default Apipassing = (props) => {
    const [userData, setUserData] = useState("");
    // const navigation = useNavigation();

    useEffect(() => {
        getUser();
    }, [])

    

    const getUser = async () => {
        try {
            const data = await AsyncStorage.getItem('userKey')
            if (data !== null) {
                console.log('data',data);
                setUserData(JSON.parse(data));
            }
        } catch (error) {
            console.error(error);
        }
    };

    // const userDataDelete = async () => {
    //     try {
    //         await AsyncStorage.clear();
    //         console.log('User Info Deleted');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const userDataDelete = async () => {
        try {
            AsyncStorage.clear().then(() => {
                props.navigation.navigate('ApiUI')
               //props.navigation.replace('ApiUI')  // empty the log 
               //props.navigation.goBack()
            }).catch(() => {});
            // console.log('User Info Deleted');
        } catch (error) {
            console.log(error);
        }
    };

    const  backButton = (props) => {
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
                    onPress: () => {
                        userDataDelete();
                        //props.navigation.goBack()
                    }, 
                    style: 'destructive'
                },
            ]
        );
        // return true;
    };

    return (
        <SafeAreaView style={styles.cont}>
            <View style={styles.mainView}>
                <Text style={styles.text}>Name : {userData.name}</Text>
                <Text style={styles.text}>Email : {userData.email}</Text>
                <Text style={styles.text}>Phone : {userData.phone}</Text>
                <Text style={styles.text}>Password: {userData.password}</Text>
                <Text style={styles.text}>confirm Password : {userData.confirmPassword}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.floatingButton} onPress={backButton}>
                    <Text style={styles.floatingButtonText}>
                        LOG OUT
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        margin: 10
    },
    text: {
        fontSize: 18,
        padding: 5,
        fontWeight: '700',
        color: 'green'
    },
    mainView: {
        height: '70%',
        margin: 20,
    },
    floatingButton: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
    },
    floatingButtonText: {
        fontSize: 20,
        fontWeight: '700',
        textAlign: 'center',
        padding: 5,
        justifyContent: 'center',
        color: 'green',
    },
})