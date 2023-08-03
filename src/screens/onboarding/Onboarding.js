import React from 'react'
import { View, Text, TouchableOpacity, Image, ImageBackground, Alert, StyleSheet } from 'react-native'
import Button from '../../components/button/Button';
// import { Linking } from 'react-native';
import ratios from '../../styles/ratios';
import LinearGradient from 'react-native-linear-gradient';

let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios;

const Onboarding = ({ navigation }) => {




    // if we show Link
    // const handleLinkPress = async () => {
    //     const url = 'https://www.example.com'; // Replace with your desired URL
    //     try {
    //         const supported = await Linking.canOpenURL(url);
    //         if (supported) {
    //             await Linking.openURL(url);
    //         } else {
    //             console.log(`Cannot open URL: ${url}`);
    //         }
    //     } catch (error) {
    //         console.error(`An error occurred while opening the URL: ${error}`);
    //     }
    // };


    return (


        <View style={styles.mainContainer}>
            {/* <Image
                source={onboardingImage}
                style={{ width: 414, height: 600 }}
            /> */}
            <View style={{ flex: 1 }}>
                <ImageBackground
                    resizeMode='contain'
                    style={{ width: "100%", height: "100%", alignSelf:'flex-start', marginTop:heightPixel(-50) }}
                    source={require("../../assets/images/ok.png")}
                >

                    <Image
                        source={require("../../assets/images/Group1.png")}
                        resizeMode='contain'

                        style={{ width: "60%", height: "120%", alignSelf: 'center',  }}
                    />

                </ImageBackground>
            </View>


            <View style={styles.textContainer}>

                <Text style={styles.text}>
                    Spend Smarter
                </Text>
                <Text style={styles.text}>
                    Save More
                </Text>
            </View>

            <LinearGradient colors={["#69AEA9", "#3F8782",]} style={styles.linearGradient}>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home")
                    }}
                >
                    <Button title="Get Started" color="#FFFFFF" />
                </TouchableOpacity>


            </LinearGradient>

            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>
                    <Text style={styles.text2}>Already Have Account?</Text>{' '}

                    {/* // If we show link url
                        // onPress={handleLinkPress} */}

                    <Text style={styles.text3}>Log In</Text>


                </Text>




            </View>




        </View>


    )
}


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: widthPixel(414),
        height: heightPixel(896),
        backgroundColor: '#FFFFFF'

    },
    textContainer: {
        // flex: 0.3,
        // backgroundColor: "pink",
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        // marginTop: 54,
        color: "#438883",
        fontFamily: "Inter-Bold",
        // fontWeight: 700,
        fontSize: fontPixel(36),
        // fontSize: 36,
        lineHeight: 38,
        // maxWidth: 301,
        // letterSpacing: -0.32,

    },
    loginContainer: {
        // flex: 0.2,
        // backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 17

    },

    loginText: {
        marginTop: 17,
        marginBottom: 50


    },
    text2: {
        color: "#444444",
        fontFamily: "Inter-Medium",
        // fontWeight: 500,
        fontSize: fontPixel(14),
        lineHeight: 17,

    },
    text3: {
        color: "#438883",
        fontFamily: "Inter-Regular",
        // fontWeight: 400,
        fontSize: fontPixel(14),
        lineHeight: 17,

    },
    buttonContainer: {
        // flex: 0.2,
        // backgroundColor: 'red'


    },



    linearGradient: {
        // flex: 1,
        marginHorizontal: widthPixel(28),
        borderRadius: 40,
        marginTop: 25,
        shadowColor: "#69AEA9",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },



})


export default Onboarding;