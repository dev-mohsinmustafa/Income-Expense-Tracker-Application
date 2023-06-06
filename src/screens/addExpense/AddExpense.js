import React from 'react'
import { View, Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Image, Pressable, ScrollView, ImageBackground } from 'react-native'
import ratios from '../../styles/ratios'
import Card from '../../components/card/Card';
import Input from '../../components/input/Input';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;

const AddExpense = ({ navigation, props }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode='contain'
        style={{ width: "100%", height: widthPixel(287) }}
        source={require("../../assets/images/bg.png")}
      >
        <View style={styles.container1}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomePage")}
            style={{ width: 30, height: 30, justifyContent: 'center', }}>
            <Image
              style={{ tintColor: '#FFFFFF' }}
              source={require("../../assets/images/back.png")}
            />
          </TouchableOpacity>
          <Text style={styles.expense}>AddExpense</Text>
          <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', }}>
            <Image
              source={require("../../assets/images/dot.png")}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.container2}>
        <Text style={styles.name}>  NAME</Text>
        <View style={styles.netflixContainer}>
          <View style={styles.netflixImageContainer}>
            <Image
              style={{ width: 32, height: 32, }}
              source={require("../../assets/images/netflix.png")}
            />
            <Text style={{ paddingLeft: 16 }}>Netflix</Text>
          </View>
          <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', }}>
            <Image
              source={require("../../assets/images/Icon.png")}
            />
          </TouchableOpacity>
        </View>


        <Text style={styles.amount}>  AMOUNT</Text>
        <View style={styles.textInputContainer}>
          <Input />
        </View>



        <Text style={styles.date}>  DATE</Text>
        <View style={styles.netflixContainer}>
          <View style={styles.netflixImageContainer}>
            <Text >Tue, 22 Feb 2022</Text>
          </View>
          <TouchableOpacity style={{ width: 30, height: 30, justifyContent: 'center', }}>
            <Image
              source={require("../../assets/images/calendar.png")}

            />
          </TouchableOpacity>
        </View>


        <Text style={styles.invoice}>  INVOICE</Text>
        <View style={styles.invoiceContainer}>
          <TouchableOpacity style={{ width: 20, height: 30, justifyContent: 'center', }}>
            <Image
              source={require("../../assets/images/invoice.png")}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.invoiceText}>Add Invoice</Text>
          </View>
        </View>


      </View>

    </View>

  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",


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
  container2: {
    flex: 2,
    backgroundColor: "#FFFFFF",
    // width: "80%",
    // height: 500,
    // marginLeft: 10,
    // marginRight:10,
    marginHorizontal: widthPixel(28),
    marginTop: -120,
    borderRadius: 20,
  },
  name: {
    color: "#666666",
    fontFamily: "Inter-Medium",
    // fontWeight: 500,
    fontSize: fontPixel(12),
    lineHeight: 15,
    paddingLeft: 20,
    marginTop: 30,
    marginBottom: 10
  },
  amount: {
    color: "#666666",
    fontFamily: "Inter-Medium",
    // fontWeight: 500,
    fontSize: fontPixel(12),
    lineHeight: 15,
    paddingLeft: 20,
    marginTop: 30
  },
  netflixContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    // height: heightPixel(50),
    paddingVertical: pixelSizeVertical(9),
    marginHorizontal: widthPixel(20),
    // marginTop: 10
    // backgroundColor: "yellow"

  },
  netflixImageContainer: {

    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,


  },




  input: {
    // height: 50,
    paddingVertical: pixelSizeVertical(9),
    margin: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#438883",
    borderWidth: 1,
    padding: 20,
  },


  textInputContainer: {
    marginTop: 10,
    // backgroundColor:"red"
  },

  date: {
    color: "#666666",
    fontFamily: "Inter-Medium",
    // fontWeight: 500,
    fontSize: fontPixel(12),
    lineHeight: 15,
    paddingLeft: 20,
    marginTop: 24,
    paddingBottom: 10


  },
  invoice: {
    color: "#666666",
    fontFamily: "Inter-Medium",
    // fontWeight: 500,
    fontSize: fontPixel(12),
    lineHeight: 15,
    paddingLeft: 20,
    marginTop: 24,

  },
  invoiceContainer: {
    // backgroundColor:"blue",
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 8,
    borderStyle: 'dashed',
    borderColor: "#DDDDDD",
    borderWidth: 1,
    // height: heightPixel(50),
    paddingVertical: pixelSizeVertical(9),
    marginHorizontal: widthPixel(20),
    marginTop: 10,
    // paddingHorizontal:pixelSizeHorizontal(80),
    justifyContent: 'center'
  },

  invoiceText: {
    // backgroundColor:"yellow",
    paddingLeft: 15,
    color: "#666666",
    fontFamily: "Inter-Medium",
    fontSize: fontPixel(14),
    lineHeight: 17,

  }


  // dateContainer:{
  //   backgroundColor:"yellow",
  //   flexDirection:'row',
  //   justifyContent:'space-between',
  // },














})

export default AddExpense;

