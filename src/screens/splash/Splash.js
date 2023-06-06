import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ratios from '../../styles/ratios'

let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
  } = ratios;

const Splash = ({navigation}) => {
    return (
        <View style={styles.container}>

            <TouchableOpacity
            onPress={()=>navigation.navigate("Onboarding")}
            >

            <Text style={styles.text}>mono</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: "#63B5AF",
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        color: "#FFFFFF",
        fontFamily: "Inter-Bold",
        // fontWeight: 700,
        fontSize: fontPixel(50),
        lineHeight: 61,
    }

})

export default Splash;