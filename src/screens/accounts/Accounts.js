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



const Accounts = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>

<View style={{flex:1.2}}>

            <Header title="Connect Wallet" image1={require("../../assets/images/back.png")}
                image2={require("../../assets/images/alarm.png")}
                
                />
                </View>



            <View style={styles.container2}>



                <View style={styles.container3}>
                    <View style={styles.transactionContainer}>
                        <TouchableOpacity>
                            <Text style={styles.transaction}>Cards</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.upcomingContainer}>
                        <TouchableOpacity
                            // onPress={() => console.log("Accounts Pressed")}
                            onPress={() => navigation.navigate("TransactionDetailsIncome")}
                        >
                            <Text style={styles.transaction}> Accounts</Text>
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.container4}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={require("../../assets/images/house.png")}
                        />
                        <View style={{ flexDirection: 'column', paddingLeft: 15 }}>
                            <Text style={styles.bank}>Bank Link</Text>
                            <Text style={styles.para1}>Connect your bank account to deposit & fund</Text>
                        </View>
                    </View>

                    {/* <View style={{ paddingLeft: 15 }}>

                    </View> */}
                    <Image
                        // style={{ marginLeft: widthPixel(70) }}
                        source={require("../../assets/images/bank.png")}
                    />
                </View>

                <View style={styles.container5}>
                    <View style={{ paddingLeft: 32 }}>
                        <Image
                            source={require("../../assets/images/currency-dollar.png")}
                        />
                    </View>

                    <View style={{ paddingLeft: 25 }}>
                        <Text style={styles.microdeposits}>Microdeposits</Text>
                        <Text style={styles.para2}>Connect bank in 5-7 days</Text>
                    </View>
                </View>


                <View style={styles.container5}>
                    <View style={{ paddingLeft: 32 }}>
                        <Image
                            source={require("../../assets/images/logo-paypal.png")}
                        />
                    </View>

                    <View style={{ paddingLeft: 25 }}>
                        <Text style={styles.microdeposits}>Paypal</Text>
                        <Text style={styles.para2}>Connect you paypal account</Text>
                    </View>
                </View>


                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("TransactionDetailsIncome")}
                        style={styles.buttonShadow}>
                        <Button title="Next" color="#438883" backgroundColor="#FFFFFF"
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },


    container3: {
        backgroundColor: "#F4F7F6",
        borderRadius: 40,
        height: heightPixel(48),
        marginHorizontal: pixelSizeHorizontal(20),
        flexDirection: 'row',
        // justifyContent:'space-between',
        alignItems: 'center',
        marginTop: heightPixel(30)
    },
    transactionContainer: {

        height: heightPixel(40),
        width: widthPixel(180),
        justifyContent: 'center',
        alignItems: 'center'
    },
    transaction: {
        color: "#666666",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(14),
    },
    upcomingContainer: {
        height: heightPixel(40),
        width: widthPixel(180),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFFFFF",
        borderRadius: 40,
    },
    container4: {
        backgroundColor: 'rgba(67, 136, 131, 0.1)',
        borderRadius: 20,
        marginHorizontal: widthPixel(35),
        flexDirection: 'row',
        height: heightPixel(100),
        alignItems: 'center',
        marginTop: heightPixel(40),
        justifyContent: 'space-between',
        paddingHorizontal: pixelSizeHorizontal(20)

    },
    bank: {
        color: "#438883",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(18),
    },
    para1: {
        maxWidth: heightPixel(149),
        color: "#438883",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(12),
    },

    container5: {
        backgroundColor: "#FAFAFA",
        borderRadius: 20,
        marginHorizontal: widthPixel(35),
        flexDirection: 'row',
        height: heightPixel(100),
        alignItems: 'center',
        marginTop: heightPixel(15)
    },
    microdeposits: {
        color: "#888888",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(18),
    },
    para2: {
        color: "#888888",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(12),
    },
    button: {
        marginTop: heightPixel(103),
        marginHorizontal:widthPixel(32)

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



export default Accounts