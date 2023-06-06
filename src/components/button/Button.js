import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ratios from '../../styles/ratios';

let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios;
const Button = (props) => {
    return (
        <View style={[styles.btnContainer, { backgroundColor: props.backgroundColor },
        { borderRadius: props.borderRadius }, { borderWidth: props.borderWidth },
        { borderColor: props.borderColor }]}>


            <Text style={[styles.btn, { color: props.color },]}>{props.title}</Text>


        </View>
    )
}

const styles = StyleSheet.create({

    btnContainer: {
        // flex: 1,
        // backgroundColor: "#69AEA9",
        // borderRadius: 40,
        // marginHorizontal: widthPixel(28),
        justifyContent: "center",
        alignItems: 'center',
        width: widthPixel(358),
        height: widthPixel(67),

        // shadowColor: "#69AEA9",
        // shadowOffset: {
        //     width: 0,
        //     height: 12,
        // },
        // shadowOpacity: 0.58,
        // shadowRadius: 16.00,

        // elevation: 24,

    },
    btn: {
        color: "#FFFFFF",
        fontFamily: "Inter-SemiBold",
        fontStyle: 'normal',
        // fontWeight: 600,
        fontSize: fontPixel(18),
        lineHeight: 38,




    }


})


export default Button;