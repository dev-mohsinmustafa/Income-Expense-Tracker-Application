import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'

import ratios from '../../styles/ratios';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';
import { useNavigation } from '@react-navigation/native';


let
    {
        widthPixel,
        heightPixel,
        fontPixel,
        pixelSizeVertical,
        pixelSizeHorizontal,
    } = ratios;



const PaymentSuccessfully = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Header title="Bill Payment" image1={require("../../assets/images/back.png")}
                image2={require("../../assets/images/dot.png")}

            />



            <View style={styles.container2}>


                <View style={styles.container3}>
                    <View>
                        <Image
                            // style={{ width:80, height:80}}
                            style={{ alignSelf: 'center' }}
                            source={require("../../assets/images/payment.png")}
                        />
                        <View style={styles.incomeContainer}>
                            <Text style={styles.payment}>Payment Successfully</Text>

                        </View>
                        <View>
                            <Text style={styles.youtube}>Youtube Premium</Text>

                        </View>
                    </View>

                </View>

                <View style={styles.container4}>
                    <Text style={styles.transaction}>Transaction details</Text>
                    <TouchableOpacity>
                        <Image
                            style={{ tintColor: "#424242" }}
                            source={require("../../assets/images/total.png")}
                        />
                    </TouchableOpacity>


                </View>

                <View style={styles.container5}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.status}>Payment method</Text>
                        <Text style={styles.status}>Status </Text>
                        <Text style={styles.status}>Time </Text>
                        <Text style={styles.status}>Date </Text>
                        <Text style={styles.status}>Transaction ID </Text>
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.upwork}>Debit Card</Text>
                        <Text style={styles.income2}>Completed </Text>
                        <Text style={styles.upwork}>08:15 AM </Text>
                        <Text style={styles.upwork}>Feb 28, 2022 </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.upwork}>2092913832472.. </Text>
                            <Image
                                source={require("../../assets/images/box.png")}
                            />
                        </View>
                    </View>


                </View>

                <View style={styles.horizontalLine}>

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






                <View style={styles.button}>
                    <TouchableOpacity
                        // onPress={() => navigation.navigate("BillDetails")}
                        style={styles.buttonShadow}>
                        <Button title="Share Receipt" color="#69AEA9" backgroundColor="#FFFFFF"
                            borderRadius={40} borderWidth={1} borderColor="#549994"
                        />

                    </TouchableOpacity>
                </View>















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
        flex: 0.38,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25



    },
    incomeContainer: {
        marginTop: 12
    },
    payment: {
        color: "#438883",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(22),
    },
    youtube: {
        color: "#666666",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
        textAlign: 'center'
    },
    container4: {
        flexDirection: 'row',
        // backgroundColor: "red",
        flex: 0.05,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: pixelSizeHorizontal(30),
        marginTop: heightPixel(37)
    },
    transaction: {
        color: "#000000",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(18),
    },

    container5: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        // backgroundColor: "yellow",
        // flex: 0.2,
        flex: 0.3,

        marginTop: heightPixel(21),
        // paddingBottom:12
    },
    status: {
        color: "#666666",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
    },
    income2: {
        color: "#438883",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(16),
    },
    upwork: {
        color: "#000000",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
    },


    container6: {
        // backgroundColor: "blue",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        flex: 0.15,
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
        // flex: 0.01,
        marginTop: heightPixel(20),

        // backgroundColor: "green",
        // flex: 0.04,
    },
    container7: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        // backgroundColor: "red",
        flex: 0.05,
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







    button: {
        marginTop: heightPixel(20),
        marginHorizontal: widthPixel(28),
    },
    buttonShadow: {
        // backgroundColor:"red",
        shadowColor: "blue",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    }





})



export default PaymentSuccessfully