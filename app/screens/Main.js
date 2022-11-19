import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'

const Main = () => {
  return (
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
    
    mainContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    
    textHead: {
        fontFamily: "Inter",
        fontStyle: "normal",
        fontSize: 36,
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
    container: {
        backgroundColor: "#fff",
        justifyContent: "space-between", 
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
    },
       
    
})

export default Main;