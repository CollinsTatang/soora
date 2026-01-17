import React from 'react';
import {  ScrollView, StyleSheet, View } from 'react-native';
import Navbar from './Navbar';
import Main from './Main';
import Social from './Social';
import Footer from './Footer';


const WelcomeScreen = () => {
    return (
       <ScrollView style={{width:"100%"}} >
            <View style={styles.container}> 
                <Navbar />
                <Main />
                <Social />
                <Footer />
            </View>
        </ScrollView>
)}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        justifyContent: "space-between", 
        flex: 1,
        
    },
    
});

export default WelcomeScreen;
