import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Main = () => {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
            <Text style={styles.comingSoon}>Coming Soon</Text>
            <Text style={styles.textHead}>Bringing</Text> 
            <Text style={styles.textHead}>Muslims Together</Text>                         
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
            <Text style={styles.comingSoon}>Coming Soon</Text>
            <Text style={styles.textHead}>Get Notified</Text>
            <Text style={styles.textHead}>When we Launch</Text>
            <TextInput style={styles.input} placeholder=""></TextInput>
            <Text style={styles.subTile2} >Your email address has been received.</Text>
            <Text style={styles.subTile}>Don't worry, we won't spam you :)</Text>
        </View>

        <Image 
            resizeMode="contain"
            style={styles.landingImage2}
            source={require('../assets/images/landing-image-1.png')} />
    </View>
  )
}

const styles = StyleSheet.create({ 
    container: {
        backgroundColor: "#fff",
        justifyContent: "space-between", 
        flex: 1,   
    },
    comingSoon:{
        fontFamily: "Inter",
        fontStyle: 'normal',
        alignSelf: 'center',
        marginRight: 15,
    },
    subTile:{
        fontFamily: "Inter",
        fontStyle: 'normal',
        alignSelf: 'center',
        marginRight: 15,
    },
    subTile2:{
        fontFamily: "Inter",
        fontStyle: 'normal',
        alignSelf: 'center',
        marginRight: 15,
        color: "blue",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    
    textHead: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 36,
        alignSelf: 'center',
    },
   
    landingImage: {
        height: 400,
        width:"100%", 
        marginTop: 5,
        marginBottom: 20,
    },

    landingImage2: {
        height: 400,
        width:"100%", 
        marginTop: 5,
        marginBottom: 20,
    },

    textContainer: {
        backgroundColor: "#fff",
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 10,
        
    },
      
    textContainer2: {
        backgroundColor: "#fff",
        alignSelf: 'center',
        marginBottom: 5, 
    },
    playIcon: {
        flexDirection: "row",
        marginTop: 10,
    },     
    
})

export default Main;
