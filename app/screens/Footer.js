import React from 'react'
import { View, StyleSheet, Text, } from 'react-native'

const Footer = () => {
  return (
    <View  style={styles.footerConterner}>
        <View
    style={{
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }} />
        <Text style={styles.footer}>Copyright © 2022 Soora. All rights reserved</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  footerContainer: {
      
  },

 footer: {
     width: "100%",
     color:" #0B0B0B",
     marginBottom: 5,
},
});

export default Footer;

