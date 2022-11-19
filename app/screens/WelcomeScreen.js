import React from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Navbar from './Navbar';
import Footer from './Footer';

const WelcomeScreen = (props) => {
    return (
       <ScrollView style={{width:"100%"}} >

            <View style={styles.container}> 
                    <Navbar />

                    <View style={styles.mainContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.comingSoon}>Coming Soon</Text>
                            <Text style={styles.textHead}>Bringing Muslims Together</Text>                          
                        </View>
                        <View style={styles.playIcon} >
                                <Image style={styles.playIcon1} source={require('../assets/images/google-play.png')} />
                                <Image style={styles.playIcon2} source={require('../assets/images/apple-store.png')} />
                        </View>
                            <Image 
                            resizeMode="contain"
                            style={styles.landingImage}
                            source={require('../assets/images/landing-image-2.png')} />
                        
                            
                        
                         <View style={styles.textContainer2}>

                            <Text style={styles.comingSoon2}>Coming Soon</Text>
                            <Text style={styles.textHead}>Get Notified When we Launch</Text>
                            <TextInput style={{height: 40, width: "100%"}} placeholder=""></TextInput>
                            <Text style={styles.textHead}>Your email address has been received.</Text>
                            <Text style={styles.textHead}>Don't worry, we won't spam you :)</Text>
                        </View>
                        <Image 
                            resizeMode="contain"
                            style={styles.landingImage}
                            source={require('../assets/images/landing-image-1.png')} />
                                              
                       <View style={styles.social}>
                            <Image style={styles.socialIcon} source={require('../assets/images/facebook.png')} />
                            <Image style={styles.socialIcon} source={require('../assets/images/twitter.png')} />
                            <Image style={styles.socialIcon} source={require('../assets/images/tiktok.png')} />
                            <Image style={styles.socialIcon} source={require('../assets/images/youtube.png')} />
                        </View>
                    </View>

                    <Footer />

                </View>
        </ScrollView>
)}

const styles = StyleSheet.create({
    mainContainer: {
    justifyContent: "center",
    },
    comingSoon: {
        marginTop: 2,
    },
    comingSoon2: {

    },
    textHead: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 36,
        marginBottom: 5,

    },
    container: {
        backgroundColor: "#fff",
        marginTop: 5,backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between", 
        paddingTop: 25,
        flex: 1,
        marginLeft: 3,
        marginRight: 3,
        flex: 1,
    },
    landingImage: {
        height: 890,
        width:"100%", 
    },
    textContainer: {
        backgroundColor: "#fff",
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
    },
        container: {
        backgroundColor: "#fff",
        marginTop: 5,
        marginLeft: 3,
        marginRight: 3,
        flex: 1,
    },

    textContainer2: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5, 
    },
    playIcon: {
        flexDirection: "row",
        justifyContent: "space-around",

    },
    playIcon1: { 
        marginRight: 5,
    },
    playIcon2: {
      
        
    },
    social:{
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    socialIcon: {
        padding: 2,
        borderStyle: "solid",
        borderColor: "#000",
        borderRadius: 100, 
    },
    
});

export default WelcomeScreen;