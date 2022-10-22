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

export default class ScrollStyling extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         dynamicInputFields: []
    //     }
    // }
    // Input handling in dynamic 
    // OtpCustomInputHandler=(value,index)=>{
    //     this.state.dynamicInputFields[index].otp_num=value;
    //     this.setState({dynamicInputFields:this.state.dynamicInputFields});
    // }
    //Input deleting in dynamic 
    // OtpCustomeDelete = (index)=>{
    //     this.state.dynamicInputFields.splice(index,1);
    //     this.setState({dynamicInputFields:this.state.dynamicInputFields})
    // }
    render() {
        return (
            <SafeAreaView style={styles.container}>

                <View style={styles.headerView}>
                    <TouchableOpacity>
                        <Image
                            source={require('/Users/ashishnegi/Desktop/CounterApp/icons8-back-60.png')}
                            style={styles.logo}
                            resizeMode='contain' />
                    </TouchableOpacity>

                    <Text> Product Details </Text>

                    <TouchableOpacity>
                        <Image
                            source={require('/Users/ashishnegi/Desktop/CounterApp/icons8-bookmark-60.png')}
                            style={styles.logo}
                            resizeMode='contain' />
                    </TouchableOpacity>

                </View>

                <ScrollView>

                    <View style={styles.moviePoster}>
                        <Image
                            source={require('/Users/ashishnegi/Desktop/CounterApp/images/anime1988-Demon-Slayer-10-786x1100.jpeg')}
                            style={styles.image}
                            resizeMode='contain' />
                    </View>

                    <View style={styles.movieName}>
                        <View>
                            <Text style={styles.movieNameText1}>
                                Demon Slayer: Kimetsu no Yaiba the Movie
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.movieNameText2}>
                                : Mugen Train
                            </Text>
                        </View>

                        <View>
                            <Text style={styles.movieNameText3}>
                                Part 1
                            </Text>
                        </View>
                    </View>

                    <View style={styles.movieGenre}>
                        <View style={styles.movieGenreAdventure}>
                            <Text style={styles.movieGenreText}>
                                Adventure
                            </Text>
                        </View>
                        <View style={styles.movieGenreAdventure}>
                            <Text style={styles.movieGenreText}>
                                Dark fantasy
                            </Text>
                        </View>

                        <View style={styles.movieGenreAdventure}>
                            <Text style={styles.movieGenreText}>
                                Martial arts
                            </Text>
                        </View>
                    </View>

                    <View style={styles.lineBetween} />

                    <View style={styles.movieInfo}>
                        <View>
                            <Text style={styles.movieInfoText1}>
                                Year
                            </Text>
                            <Text style={styles.movieInfoText2}>
                                2020
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.movieInfoText1}>
                                Country
                            </Text>
                            <Text style={styles.movieInfoText2}>
                                JAPAN
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.movieInfoText1}>
                                Length
                            </Text>
                            <Text style={styles.movieInfoText2}>
                                112 min
                            </Text>
                        </View>

                    </View>

                    <View>
                        <Text style={styles.about}>
                            About Movie
                        </Text>

                        <Text style={styles.aboutText}>
                            Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night.
                        </Text>
                        <Text style={styles.aboutText}>
                            When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity.
                        </Text>

                    </View>

                    <View>
                        <View>
                            <Text style={styles.screenshot}>
                                Screenshots
                            </Text>
                        </View>

                        <ScrollView horizontal={true}>

                            <View style={styles.screenshotsScrollView}>
                                <Image
                                    resizeMode={'contain'}
                                    source={require('/Users/ashishnegi/Desktop/CounterApp/images/img2021052511175286177600.png')}
                                    style={styles.screenshotImage} />
                                <Image
                                    resizeMode={'contain'}
                                    source={require('/Users/ashishnegi/Desktop/CounterApp/images/img2021052511175286177600.png')}
                                    style={styles.screenshotImage} />
                                <Image
                                    resizeMode={'contain'}
                                    source={require('/Users/ashishnegi/Desktop/CounterApp/images/img2021052511175286177600.png')}
                                    style={styles.screenshotImage} />
                                <Image
                                    resizeMode={'contain'}
                                    source={require('/Users/ashishnegi/Desktop/CounterApp/images/img2021052511175286177600.png')}
                                    style={styles.screenshotImage} />
                                <Image
                                    resizeMode={'contain'}
                                    source={require('/Users/ashishnegi/Desktop/CounterApp/images/img2021052511175286177600.png')}
                                    style={styles.screenshotImage} />
                                <Image
                                    resizeMode={'contain'}
                                    source={require('/Users/ashishnegi/Desktop/CounterApp/images/img2021052511175286177600.png')}
                                    style={styles.screenshotImage} />
                            </View>

                        </ScrollView>

                    </View>

                    <View style={styles.buyTicket}>
                        <TouchableOpacity onPress={(() => alert("Ticket booked"))}>
                            <Text style={styles.buyTicketText}>
                                BUY TICKET
                            </Text>
                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // margin: 20,
        backgroundColor: 'rgb(248,249,252)'
    },
    headerView: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: 'rgb(255,255,255)',
    },
    logo: {
        height: 20,
        width: 20
    },
    moviePoster: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: "center"
    },
    image: {
        height: 370,
        width: 270,
        borderRadius: 20
    },
    movieName: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 0
    },
    movieNameText1: {
        marginBottom: 2,
    },
    movieNameText2: {
        marginBottom: 10,
    },
    movieNameText3: {
        margintop: 12,
        marginBottom: 2,
        color: 'rgb(100,102,107)'
    },
    movieGenre: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        marginTop: 20,
        marginHorizontal: 25,
        marginBottom: 20
    },
    movieGenreText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12
    },
    movieGenreAdventure: {
        padding: 10,
        backgroundColor: 'rgb(61,106,246)',
        borderRadius: 17
    },
    movieGenreFantasy: {
        padding: 10,
        backgroundColor: 'rgb(61,106,246)',
        borderRadius: 17
    },
    movieGenreMartial: {
        padding: 10,
        backgroundColor: 'rgb(61,106,246)',
        borderRadius: 17
    },
    lineBetween: {
        borderBottomColor: 'rgb(243,243,248)',
        marginTop: 50,
        borderBottomWidth: 1
    },
    movieInfo: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        marginHorizontal: 45,
        marginTop: 30
    },
    movieInfoText1: {
        color: 'rgb(147,149,155)',
        marginBottom: 5
    },
    movieInfoText2: {
    },
    about: {
        marginTop: 30,
        marginBottom: 15,
        color: 'rgb(100,102,107)'
    },
    aboutText: {
        fontSize: 12,
        fontFamily: 'arial',
        marginRight: 21,
        marginBottom: 6,
        color: 'rgb(147,149,155)'
    },
    screenshot: {
        marginTop: 20,
        //fontFamily:'ChalkboardSE-Bold'
        color: 'rgb(100,102,107)'
    },
    screenshotsScrollView: {
        flexDirection: 'row',
        backgroundColor: 'rgb(255,255,255)'
    },
    screenshotImage: {
        width: 250,
        height: 150,
        borderWidth: 0.1,
        borderRadius: 10,
        borderColor: 'green',
        marginVertical: 10,
        marginLeft: 15,
        marginRight: 0,
    },
    buyTicket: {
        alignItems: 'center',
        marginHorizontal: 15,
        padding: 10,
        backgroundColor: 'rgb(60,106,246)',
        color: 'white',
        borderRadius: 5,
        marginTop: 25,
        marginBottom: 17
        // position: 'absolute',
        // bottom: 40,
        // left:0,
        // right:0
    },
    buyTicketText: {
        color: 'white',
        fontWeight: 'bold'
    }
});