import React from 'react';
import { Button, Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <View style={styles.container}>

            <Image
                style={styles.logo} 
                source={require('../assets/images/logo.png')} />
            <View style={styles.contactButton}>
                <Button title = "Contact us" color="#111" />
            </View>       

            <View style={styles.textContainer}>

                <Text style={styles.comingSoon}>Coming Soon</Text>
                
                <Text style={styles.textHead}>Bringing Muslims Together</Text>

                <Image style={styles.playIcon1} source={require('../assets/images/google-play.png')} />

                <Image style={styles.playIcon2} source={require('../assets/images/apple-store.png')} />
            </View>
            
                 <ImageBackground 
                resizeMode="contain"
                style={styles.landingImage}
                source={require('../assets/images/landing-image-2.png')} />
            
            <View style={styles.textContainer2}>
                <Text style={styles.comingSoon2}>Coming Soon</Text>
                <Text style={styles.textHead}>Get Notified When we Launch</Text>
                <TextInput style={{height: 40, width: "100%"}} placeholder=""> </TextInput>
                <Text style={styles.textHead}>Your email address has been received.</Text>
                <Text style={styles.textHead}>Don't worry, we won't spam you :)</Text>
            </View>
             
               
            <View style={styles.social}>
                <Image style={styles.socialIcon} source={require('../assets/images/facebook.png')} />
                <Image style={styles.socialIcon} source={require('../assets/images/twitter.png')} />
                <Image style={styles.socialIcon} source={require('../assets/images/tiktok.png')} />
                <Image style={styles.socialIcon} source={require('../assets/images/youtube.png')} />
            </View>
            
            <Text style={styles.footer}>Copyright © 2022 Soora. All rights reserved</Text>
        </View>
    
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "flex-end",
        alignItems: "center",
        flex: 1,   
    },
    logo: {
        position: "absolute",
        top: 40,
        left: 30,
        alignItems: "flex-start"
    },
    contactButton: {
        position: "absolute",
        alignItems: "flex-end",
        top: 40,
        right: 30,   
    },
    textContainer: {
        backgroundColor: "#fff",
        position: "absolute",
        flexDirectiona: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "30%",
        top: 70,
    
    },
    landingImage: {
        position: "relative",
        top: 300,
        width: "100%",
        height: "100%",
        
    },

    textContainer2: {
        backgroundColor: "#fff",
        position: "relative",
        flexDirectiona: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "30%",
        top: 70
        
    },
    playIcon1: { 
        left: 30,
        justifyContent: "flex-end",
        width: "50%",
        alignItems: "flex-end",
    },
    playIcon2: {
        right: 30,
        width: "50%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
       
    },
    
    textContainer3: {
        backgroundColor: "#fff",
        position: "relative",
        width: 24,
        height: 24,
        top: 8,
    },
    social: {
        position: "relative",
        width: 24,
        height: 24,
        left: 8,
        top: 8,
    },
    footer: {

    },
    
});
export default WelcomeScreen;