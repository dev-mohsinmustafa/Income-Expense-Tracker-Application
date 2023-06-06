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



const TransactionDetailsIncome = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Header title="Transaction Details" image1={require("../../assets/images/back.png")}
                image2={require("../../assets/images/dot.png")}

            />



            <View style={styles.container2}>



                <View style={styles.container3}>
                    <View>
                        <Image
                            // style={{ width:80, height:80}}
                            style={{alignSelf:'center'}}

                            source={require("../../assets/images/upwork2.png")}
                        />
                        <View style={styles.incomeContainer}>
                            <Text style={styles.income}>Income</Text>

                        </View>
                        <View>
                            <Text style={styles.dollar}>$ 850.00</Text>

                        </View>
                    </View>

                </View>


                <View style={styles.container4}>
                    <Text style={styles.transaction}>Transaction details</Text>
                    <TouchableOpacity>
                        <Image
                            style={{tintColor: "#424242" }}
                            source={require("../../assets/images/total.png")}
                        />
                    </TouchableOpacity>


                </View>



                <View style={styles.container5}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.status}>Status</Text>
                        <Text  style={styles.status}>From </Text>
                        <Text  style={styles.status}>Time </Text>
                        <Text  style={styles.status}>Date </Text>
                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.income2}>Income</Text>
                        <Text style={styles.upwork}>Upwork Escrow </Text>
                        <Text style={styles.upwork}>10:00 AM </Text>
                        <Text style={styles.upwork}>Feb 30, 2022 </Text>
                    </View>







                </View>



                <View style={styles.horizontalLine}>

                </View>



                <View style={styles.container6}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.status}>Earnings</Text>
                        <Text style={styles.status}>Fee </Text>

                    </View>

                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.upwork}>$ 870.00</Text>
                        <Text style={styles.upwork}>- $ 20.00 </Text>

                    </View>


                </View>


                <View style={styles.horizontalLine}>

                </View>






                <View style={styles.container7}>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.status} >Total</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.upwork}>$ 850.00</Text>
                    </View>
                </View>





                <View style={styles.button}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("TransactionDetailsExpense")}
                        style={styles.buttonShadow}>
                        <Button title="Download Receipt" color="#438883" backgroundColor="#FFFFFF"
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
        marginTop: heightPixel(25)



    },
    incomeContainer: {
        borderRadius: 40,
        height:heightPixel(25),
        backgroundColor: "rgba(67, 136, 131, 0.1)",
        marginTop: heightPixel(12),
        justifyContent:'center'
    
    },
    income: {
        color: "#438883",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(14),
        textAlign: 'center',
    },
    dollar: {
        color: "#000000",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(24),
        textAlign: 'center',
        paddingTop: heightPixel(8),
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
        flex: 0.3,
        marginTop: heightPixel(21),
        // paddingBottom:12
    },
    status:{
        color:"#666666",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
    },
    income2:{
        color:"#438883",
        fontFamily: "Inter-SemiBold",
        fontSize: fontPixel(16),
    },
    upwork:{
        color:"#000000",
        fontFamily: "Inter-Medium",
        fontSize: fontPixel(16),
    },

    horizontalLine: {
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        marginHorizontal: pixelSizeHorizontal(30),

        // backgroundColor: "green",
        // flex: 0.04,
    },

    container6: {
        // flex: 1,
        // backgroundColor: "blue",
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        flex: 0.15,
        marginTop: heightPixel(21)

    },
    container7: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: pixelSizeHorizontal(30),
        // backgroundColor: "red",
        flex: 0.05,
        marginTop: heightPixel(21)
    },
    button: {
        marginTop: heightPixel(40),
        marginHorizontal:widthPixel(32)

        // flex:1,
        // backgroundColor: "red"
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



export default TransactionDetailsIncome