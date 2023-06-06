import React from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, } from 'react-native'
import ratios from '../../styles/ratios';
import { useNavigation } from '@react-navigation/native';




let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios;
const Header = (props) => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <ImageBackground
                resizeMode='contain'
                style={{ width: "100%", height: widthPixel(287) }}
                source={require("../../assets/images/bg.png")}
            >
                <View style={styles.container1}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ width: 30, height: 30, justifyContent: 'center', }}>
                        <Image
                            style={{ tintColor: '#FFFFFF' }}
                            source={props.image1}
                        />
                    </TouchableOpacity>
                    <Text style={styles.expense}>{props.title}</Text>
                    <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', }}>
                        <Image
                            source={props.image2}

                        />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "red"
    },
    container1: {
        flex: 0.5,
        // backgroundColor: "gray",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: widthPixel(30),
        alignItems: 'center',
    },
    expense: {
        color: "#FFFFFF",
        fontFamily: "Inter-SemiBold",
        // fontWeight: 600,
        fontSize: fontPixel(18),
        lineHeight: 21,
    },

})

export default Header