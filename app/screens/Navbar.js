import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.container}>
        <Image
            style={styles.logo} 
            source={require('../assets/images/logo.png')} />
            <Button style={styles.contactButton} title = "Contact us" color="#111" />         
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between", 
        paddingTop: 25,
        flex: 1,
    },
    logo: { 
       
    },
    contactButton: {
       
    },
});
export default Navbar;