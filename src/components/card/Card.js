import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, Pressable, FlatList } from 'react-native';

import ratios from '../../styles/ratios';

let {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
} = ratios;

const Card = (props) => {

    // const data = [
    //     {
    //         expName: 'Upwork',
    //         expDate: 'Today',
    //         expense: '+ $ 850.00',
    //     },
    //     {
    //         expName: 'Transfer',
    //         expDate: 'Yesterday',
    //         expense: '- $ 85.00',
    //     },
    //     {
    //         expName: 'Paypal',
    //         expDate: '6 Jan 2020, 05:00 PM',
    //         expense: '550.00',
    //     },
    //     {
    //         expName: 'Taxi',
    //         expDate: 'Jan 30, 2022',
    //         expense: '+ $ 1,406.00',
    //     },
    //     {
    //         expName: 'Youtube',
    //         expDate: 'Jan 16, 2022',
    //         expense: '- $ 11.99',
    //     },
    // ];

    return (
        <View style={[styles.mainContainer]}>

            
            <View style={{ flexDirection: 'row'}}>
                <View style={{width: 50}}>

                    <Image
                        source={props.image}

                        style={[{ marginTop: props.marginTop }, { height: props.height, width: props.width }, { borderRadius: props.borderRadius }]} />
                </View>


                <View style={{ marginLeft: 20 }}>
                    <Text style={[styles.upwork, { color: props.color1 }]}  >{props.title1}</Text>
                    <Text style={[styles.today, { color: props.color2 }]} >{props.title2}</Text>
                </View>
            </View>

            <View style={{}} >
            <Text style={[styles.dollar, { color: props.color }, 
                        {borderRadius: props.borderRadius},
                        {backgroundColor: props.backgroundColor},
                        { height: props.height1, width: props.width1 }
                        ]} >
                        {props.title3}
                    </Text>
            </View>
                    

        </View>
    );
};


const styles = StyleSheet.create({

    mainContainer: {
        // backgroundColor: "gray",
        flex: 1,
        marginHorizontal: 22,
        height: 80,
        marginTop: 2,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageContainer: {
        // flexDirection: 'row',

    },
    upwork: {
        // marginLeft: 10,
        fontFamily: "Inter-Medium",
        color: "#000000",
        // fontWeight: 500,
        fontSize: fontPixel(16),
        lineHeight: 20,


    },
    today: {
        fontFamily: "Inter-Regular",
        // fontWeight: 400,
        // color: "#666666",
        fontSize: fontPixel(13),
        lineHeight: 16,
        paddingTop:6,
        // alignItems: "flex-end"
    },
    dollar: {
        // alignSelf: 'flex-end',
        // marginTop: -25,
        fontFamily: "Inter-SemiBold",
        // fontWeight: 600,
        fontSize: fontPixel(18),
        // lineHeight: 21,
        textAlign:'center',
        textAlignVertical:'center'
    


    }


})

export default Card;

