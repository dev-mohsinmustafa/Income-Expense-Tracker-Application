import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'

import ratios from '../../styles/ratios';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

let
    {
        widthPixel,
        heightPixel,
        fontPixel,
        pixelSizeVertical,
        pixelSizeHorizontal,
    } = ratios;



const BillPayment = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Header title="Bill Payment" image1={require("../../assets/images/back.png")}
                image2={require("../../assets/images/dot.png")}

            />



            <View style={styles.container2}>

                <View style={styles.container3}>
                    <Image
                        style={{ borderRadius: 40, alignSelf: 'center' }}
                        source={require("../../assets/images/youtube.png")}
                    />
                </View>

                <View style={styles.container4}>
                    <Text style={styles.textContainer}>
                        <Text style={styles.para}>You will pay</Text>{' '}
                        <Text style={styles.youtube}>Youtube Premium</Text>{' '}
                        <Text style={styles.para}>for one month with BCA OneKlik</Text>
                    </Text>

                </View>



                <View style={styles.container6}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.price}>Price</Text>
                        <Text style={styles.price}>Fee </Text>

                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.dollars}>$ 11.99</Text>
                        <Text style={styles.dollars}>$ 1.99</Text>

                    </View>


                </View>


                <View style={styles.horizontalLine}>

                </View>


                <View style={styles.container7}>
                    <Text style={styles.total}>Total</Text>
                    <Text style={styles.total$}>$ 13.98</Text>
                </View>




                <LinearGradient colors={["#69AEA9", "#3F8782"]} style={styles.linearGradient}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("PaymentSuccessfully")}>
                        <Button title="Confirm and Pay" color="#FFFFFF"/>

                    </TouchableOpacity>
                </LinearGradient>















            </View>









        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "red"
    },

    container2: {
        flex: 5,
        backgroundColor: "#FFFFFF",
        // width: "80%",
        // height: 500,
        // marginLeft: 10,
        // marginRight:10,
        // marginHorizontal: widthPixel(28),
        // marginTop: -120,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    container3: {
        // backgroundColor: "red",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: heightPixel(40)
    },
    container4: {
        // justifyContent: 'center',
        // maxWidth: widthPixel(297),
        // backgroundColor: "yellow",
        marginTop: heightPixel(15)

        // alignSelf: 'center'

    },

    textContainer: {
        maxWidth: widthPixel(297),
        // textAlign: 'center',
        alignSelf: 'center'
    },
    para: {
        color: "#000000",
        fontFamily: "Inter-Regular",
        fontSize: fontPixel(20),
    },
    youtube: {
        color: "#438883",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(20),
    },
    container6: {
        // backgroundColor: "blue",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        flex: 0.5,
        marginTop: heightPixel(21)

    },
    price: {
        color: "#666666",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
        paddingBottom: heightPixel(12)
    },
    dollars: {
        color: "#000000",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
        paddingBottom: heightPixel(12)

    },
    horizontalLine: {
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginHorizontal: pixelSizeHorizontal(30),
        // flex: 0.3,
        marginTop:heightPixel(20)
        
        // backgroundColor: "green",
        // flex: 0.04,
    },

    container7: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        // backgroundColor: "red",
        flex: 0.15,
        marginTop: heightPixel(21)
    },
    total: {
        color: "#666666",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
    },
    total$: {
        color: "#000000",
        fontFamily: "Inter-Bold",
        fontSize: fontPixel(16),
    },

    // button: {
    //     marginTop: heightPixel(218),
    // },
    // buttonShadow: {
    //     // backgroundColor:"red",
    //     shadowColor: "blue",
    //     shadowOffset: {
    //         width: 0,
    //         height: 12,
    //     },
    //     shadowOpacity: 0.58,
    //     shadowRadius: 16.00,

    //     elevation: 24,
    // }


    linearGradient: {
        // flex: 1,
        marginHorizontal: widthPixel(28),
        borderRadius: 40,
        marginTop: heightPixel(218),
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



export default BillPayment