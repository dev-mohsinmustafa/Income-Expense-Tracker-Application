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



const BillDetails = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Header title="Bill Details" image1={require("../../assets/images/back.png")}
                image2={require("../../assets/images/dot.png")}

            />



            <View style={styles.container2}>



                <View style={styles.container3}>
                    <View>
                        <Image
                            style={{ borderRadius: 40, }}
                            source={require("../../assets/images/youtube.png")}
                        />
                    </View>

                    <View style={styles.youtubeContainer}>
                        <Text style={styles.youtube}>Youtube Premium</Text>
                        <Text style={styles.feb}> Feb 28, 2022</Text>
                    </View>
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


                <View style={styles.containerText}>
                    <Text style={styles.select}>Select payment method</Text>
                </View>

                <View style={{}}>
                    <View style={styles.container4}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require("../../assets/images/debit.png")}
                            />
                            <Text style={styles.bank}>Debit Card</Text>
                        </View>


                        {/* <View style={{ paddingLeft: 15 }}> */}
                        {/* <Text style={styles.para1}>Connect your bank account to deposit & fund</Text> */}
                        {/* </View> */}

                        <Image
                            // style={{ marginLeft: widthPixel(126) }}
                            source={require("../../assets/images/radio.png")}
                        />
                    </View>



                    <View style={styles.container5}>
                        {/* <View style={{ paddingLeft: 32 }}> */}
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: widthPixel(40) }}>
                            <Image
                                source={require("../../assets/images/logo-paypal.png")}
                            />
                            <Text style={styles.microdeposits}>Paypal</Text>
                        </View>

                        {/* </View> */}

                        {/* <View style={{ paddingLeft: 25 }}> */}
                        {/* <Text style={styles.para2}>Connect you paypal account</Text> */}
                        {/* </View> */}
                        {/* <View> */}
                        <Image
                            style={{ marginRight: widthPixel(20), }}

                            source={require("../../assets/images/ellipse.png")}
                        />
                        {/* </View> */}
                    </View>
                </View>


                <LinearGradient colors={["#69AEA9", "#3F8782"]} style={styles.linearGradient}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("BillPayment")}>
                        <Button title="Pay now" color="#FFFFFF" />

                    </TouchableOpacity>
                </LinearGradient>















            </View>









        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor: "red"
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
        // borderRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },


    container3: {
        // backgroundColor: "red",
        height: heightPixel(48),
        marginHorizontal: pixelSizeHorizontal(20),
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: heightPixel(30),
        flex: 0.3
    },
    youtubeContainer: {
        paddingLeft: widthPixel(15)
    },
    youtube: {
        color: "#000000",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(18),
        // paddingBottom:8
    },
    feb: {
        color: "#666666",
        fontFamily: "Inter-Regular",
        fontSize: fontPixel(14),
        // marginTop: 8

    },
    container4: {
        backgroundColor: 'rgba(67, 136, 131, 0.1)',
        borderRadius: 20,
        marginHorizontal: widthPixel(35),
        flexDirection: 'row',
        height: heightPixel(100),
        alignItems: 'center',
        marginTop: heightPixel(20),
        justifyContent: 'space-between',
        paddingHorizontal: pixelSizeHorizontal(20)

    },
    bank: {
        color: "#438883",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(18),
        paddingLeft: 15
    },
    para1: {
        maxWidth: heightPixel(149),
        color: "#438883",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(12),
    },
    horizontalLine: {
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginHorizontal: pixelSizeHorizontal(30),

        // backgroundColor: "green",
        marginTop: heightPixel(20)
        // flex: 0.04,
    },

    container6: {
        // backgroundColor: "blue",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        flex: 0.3,
        marginTop: heightPixel(43)

    },
    price: {
        color: "#666666",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
        // paddingBottom: 12
    },
    dollars: {
        color: "#000000",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
        // paddingBottom: 12

    },

    container7: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        // backgroundColor: "red",
        flex: 0.14,
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
    containerText: {
        paddingLeft: widthPixel(30),
        flex: 0.15,
        marginTop: heightPixel(42),
        // backgroundColor: "yellow"
    },
    select: {
        color: "#000000",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(18),
    },
    container5: {
        backgroundColor: "#FAFAFA",
        borderRadius: 20,
        marginHorizontal: widthPixel(35),
        flexDirection: 'row',
        height: heightPixel(100),
        alignItems: 'center',
        marginTop: heightPixel(15),
        justifyContent: 'space-between',
    },
    microdeposits: {
        color: "#888888",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(18),
        paddingLeft: 25
    },
    para2: {
        color: "#888888",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(12),
    },
    // button: {
    //     marginTop: heightPixel(30),

    // },

    linearGradient: {
        // flex: 1,
        marginHorizontal: widthPixel(28),
        borderRadius: 40,
        marginTop: heightPixel(30),
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



export default BillDetails