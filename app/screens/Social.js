import React from 'react'
import { View, StyleSheet, Image, } from 'react-native';

const Social = () => {
  return (
    <View style={styles.social}>
        <Image style={styles.socialIcon} source={require('../assets/images/facebook.png')} />
        <Image style={styles.socialIcon} source={require('../assets/images/twitter.png')} />
        <Image style={styles.socialIcon} source={require('../assets/images/tiktok.png')} />
        <Image style={styles.socialIcon} source={require('../assets/images/youtube.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
    social:{
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 60,
        height: 20,
    },
  });

export default  Social;
