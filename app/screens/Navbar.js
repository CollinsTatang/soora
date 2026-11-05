import React from 'react';
import { Button, Image, StyleSheet, View, Alert} from 'react-native';

const Navbar = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
    
    <View style={styles.container}>
        <Image
            style={styles.logo} 
            source={require('../assets/images/logo.png')} />
            <Button style={styles.contactButton} onPress={createTwoButtonAlert} title="Contact us" color="#111" />         
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between", 
        marginTop: 50,
        flex: 1,
    },
    contactButton: {
       marginLeft: 10,
    },
});

export default Navbar;
