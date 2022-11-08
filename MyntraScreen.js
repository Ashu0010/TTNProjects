import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    ImageBackground,
    Alert
} from "react-native";

export default class MyntraScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.headerView}>
                    <Text style={styles.headerViewText}> MEN CLOTHING </Text>
                </View>

                <ScrollView>

                    <View style={styles.topViewContainer}>

                        <View style={styles.topViewBox}>
                            <Text style={styles.topViewText}> 195 items </Text>
                        </View>

                        <View style={styles.topViewBox}>
                            <View style={styles.topViewBoxLine}>
                                <TouchableOpacity style={styles.topViewBox}>
                                    <Image
                                        source={require('./Images/icons8-sort-32.png')}
                                        style={styles.sortImage}
                                        resizeMode='contain' />
                                    <Text style={styles.topViewText}> SORT </Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={styles.topViewBox}>
                                <Image
                                    source={require('./Images/icons8-filter-48.png')}
                                    style={styles.filterImage}
                                    resizeMode='contain' />
                                <Text style={styles.topViewText}> FILTER </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <ScrollView horizontal={true}>

                        <View style={styles.clothTypeContainer}>
                            <TouchableOpacity>
                                <View style={styles.clothTypeBox}>
                                    <Text style={styles.clothTypeText}>
                                        Polo Shirts
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.clothTypeBox}>
                                    <Text style={styles.clothTypeText}>
                                        Dress Shirts
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.clothTypeBox}>
                                    <Text style={styles.clothTypeText}>
                                        Shorts
                                    </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.clothTypeBox}>
                                    <Text style={styles.clothTypeText}>
                                        T-Shirts & Vests
                                    </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>

                    <View style={styles.modelContainer}>

                        <View style={styles.modelBox}>
                            <Image
                                source={require('./Images/myntra-photography-in-delhi-bring-it-online_orig.jpeg')}
                                style={styles.modelImage}
                                resizeMode='cover' />
                            <TouchableOpacity>
                                <Image
                                    source={require('./Images/icons8-heart-50.png')}
                                    style={styles.whishlist}
                                    resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={styles.newContainer}>
                                <Text style={styles.newText}>New</Text>
                            </View>
                            </TouchableOpacity>
                            <Text style={styles.modelTextOne}>Tommy Hilfinger</Text>
                            <Text style={styles.modelTextTwo}>Men's Morrison Stripe Polo,</Text>
                            <Text style={styles.modelTextTwo}>Limelight Combo</Text>
                            <Text style={styles.modelTextThree}>USD 23</Text>
                        </View>

                        <View style={styles.modelBox}>
                            <Image
                                source={require('./Images/myntra-photography-in-delhi-bring-it-online_orig.jpeg')}
                                style={styles.modelImage}
                                resizeMode='cover' />
                            <TouchableOpacity>
                                <Image
                                    source={require('./Images/icons8-heart-50.png')}
                                    style={styles.whishlist}
                                    resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={styles.newContainer}>
                                <Text style={styles.newText}>New</Text>
                            </View>
                            </TouchableOpacity>
                            <Text style={styles.modelTextOne}>Tommy Hilfinger</Text>
                            <Text style={styles.modelTextTwo}>Men's Morrison Stripe Polo,</Text>
                            <Text style={styles.modelTextTwo}>Limelight Combo</Text>
                            <Text style={styles.modelTextThree}>USD 23</Text>
                        </View>

                    </View>

                    <View style={styles.modelContainer}>

                        <View style={styles.modelBox}>
                            <Image
                                source={require('./Images/myntra-photography-in-delhi-bring-it-online_orig.jpeg')}
                                style={styles.modelImage}
                                resizeMode='cover' />
                            <TouchableOpacity>
                                <Image
                                    source={require('./Images/icons8-heart-50.png')}
                                    style={styles.whishlist}
                                    resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={styles.newContainer}>
                                <Text style={styles.newText}>New</Text>
                            </View>
                            </TouchableOpacity>
                            <Text style={styles.modelTextOne}>Tommy Hilfinger</Text>
                            <Text style={styles.modelTextTwo}>Men's Morrison Stripe Polo,</Text>
                            <Text style={styles.modelTextTwo}>Limelight Combo</Text>
                            <Text style={styles.modelTextThree}>USD 23</Text>
                        </View>

                        <View style={styles.modelBox}>
                            <Image
                                source={require('./Images/myntra-photography-in-delhi-bring-it-online_orig.jpeg')}
                                style={styles.modelImage}
                                resizeMode='cover' />
                            <TouchableOpacity>
                                <Image
                                    source={require('./Images/icons8-heart-50.png')}
                                    style={styles.whishlist}
                                    resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={styles.newContainer}>
                                <Text style={styles.newText}>New</Text>
                            </View>
                            </TouchableOpacity>
                            <Text style={styles.modelTextOne}>Tommy Hilfinger</Text>
                            <Text style={styles.modelTextTwo}>Men's Morrison Stripe Polo,</Text>
                            <Text style={styles.modelTextTwo}>Limelight Combo</Text>
                            <Text style={styles.modelTextThree}>USD 23</Text>
                        </View>

                    </View>

                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // margin: 20,
        flex: 1,
        backgroundColor: 'rgb(255,255,255)',
    },
    headerView: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "center",
        borderBottomColor: 'rgb(147,149,155)',
        borderBottomWidth: 0.3,
    },
    headerViewText: {
        color: 'rgb(12,12,12)',
        fontWeight: 'bold',
        fontSize: 14,
    },
    topViewContainer: {
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        borderBottomColor: 'rgb(147,149,155)',
        borderBottomWidth: 0.8,
    },
    topViewBox: {
        flexDirection: 'row',
    },
    topViewBoxLine: {
        borderRightWidth: 0.9,
        paddingRight: 5,
    },
    topViewText: {
        color: 'rgb(12,12,12)',
        fontSize: 12,
    },
    sortImage: {
        height: 17,
    },
    filterImage: {
        height: 17,
    },
    clothTypeContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        paddingTop: 12,
        paddingHorizontal: 10,
        // marginTop: 20,
        // marginHorizontal: 25,
        // marginBottom: 20
    },
    clothTypeBox: {
        padding: 12,
        paddingHorizontal: 15,
        backgroundColor: 'rgb(244,244,244)',
        borderRadius: 8,
        marginRight: 10,
    },
    clothTypeText: {
        color: 'rgb(12,12,12)',
        // fontWeight: 'bold',
        fontSize: 12
    },
    modelContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginHorizontal: 5,
    },
    modelBox: {
        flexDirection: "column",
    },
    modelImage: {
        width: 180,
        height: 290,
        borderWidth: 0.1,
        borderColor: 'green',
    },
    whishlist: {
        height: 28,
        position: "absolute",
        right: 0,
        bottom: 255
    },
    newContainer:{
        backgroundColor:'green',
        height: 22,
        width:40,
        position: "absolute",
        left: 0,
        bottom: 267
    },
    newText:{
        textAlign:'center',
        color:'white',
        fontSize:11,
        paddingTop:4,
        fontWeight:'500'
    },
    modelTextOne: {
        fontSize: 12,
        paddingBottom: 3,
        paddingTop: 11,
    },
    modelTextTwo: {
        fontSize: 12,
        color: 'grey',
        paddingBottom: 3,
    },
    modelTextThree: {
        fontSize: 16,
        paddingBottom: 3,
        fontWeight: '500',
    },
});