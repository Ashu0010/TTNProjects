import React, { useState, useRef, useCallback} from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HooksData } from '../components/HooksData';

export default function Hooks() {

    const [num, setNum] = useState('');
    let numRef = useRef(null).current;
    const [backButton,setBackButton] = useState(false);
    const _keyExtractor = useCallback((_, index) => index.toString());
    const _getItemLayout = useCallback(((_, index) => (
        { length: 250, offset: 250 * index, index }
      )))

    let searchImage = () => {
        const id = HooksData.findIndex((item) => item.id === num)
        if(id === -1){
            return  alert('not valid index')
        }
        numRef.scrollToIndex({
            index: id,
            animated: true,
        })
        setNum('')
    }
    const buttonVisible=()=>{
        setBackButton(true)
    }
    
    let backToTop = () => {
        numRef.scrollToOffset({
            offset: 0,
            animated: true,
        })
        setBackButton(false)
    }

    const onScrollUpEvent = ({contentOffset}) => { 
        console.log(contentOffset.y);
        return contentOffset.y <= 9418
      };

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.textInpView}>
                <TextInput style={styles.textInp}
                    value={num}
                    keyboardType={'numeric'}
                    onChangeText={ num => setNum(parseInt(num))}
                />

                <TouchableOpacity style={styles.textInpButton} onPress={searchImage}>
                    <Text style={styles.textInpButtonText}>
                        Search
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={HooksData}
                onEndReached={buttonVisible}
                ref={(ref) => numRef = ref}
                keyExtractor = {_keyExtractor}
                getItemLayout={_getItemLayout}
                onScroll={({nativeEvent}) => {
                    if(onScrollUpEvent(nativeEvent)){
                        setBackButton(false)
                    }
                    
                  }}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.flatListImagesView}>
                            {
                                item.imageUrl && item.id && (
                                    <View>
                                        <Image
                                            source={{ uri: item.imageUrl }}
                                            style={styles.flatListImages}
                                        />
                                        <Text style={styles.flatListImagesText}>
                                            {item.id}
                                        </Text>
                                    </View>
                                )
                            }

                        </View>
                    )
                }
                }
            />
            {
                backButton && <TouchableOpacity style={styles.floatingButton} onPress={backToTop}>
                    <Text style={styles.floatingButtonText}>
                        Search
                    </Text>
                </TouchableOpacity>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
    },
    textInpView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    textInp: {
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        width: 260,
        padding: 8,
    },
    textInpButton: {
        height: 40,
        width: 110,
        borderWidth: 0.5,
        borderRadius: 14,
        padding: 8,
        alignItems: 'center',
    },
    textInpButtonText: {
        fontWeight: '800',
        fontSize: 16,
        color: 'green',
    },
    flatListImagesView: {
        flex: 1,
        alignItems: 'center',
        margin: 2,
        borderBottomColor: 'red',
        borderRadius: 20,
        backgroundColor: 'skyblue',
    },
    flatListImages: {
        marginTop: 10,
        height: 200,
        width: 330,
        borderRadius: 10,
    },
    flatListImagesText: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
    },
    floatingButton: {
        height: 40,
        width: 180,
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor:'white',
        position:'absolute',
        bottom:34,
        alignSelf: 'center',
    },
    floatingButtonText: {
        fontSize:20,
        fontWeight:'700',
        textAlign: 'center',
        padding:5,
        justifyContent:'center',
        color:'green',
    },
})