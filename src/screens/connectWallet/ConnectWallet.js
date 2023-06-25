import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'

import ratios from '../../styles/ratios';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import { useNavigation } from '@react-navigation/native';


let
  {
    widthPixel,
    heightPixel,
    fontPixel,
    pixelSizeVertical,
    pixelSizeHorizontal,
  } = ratios;



const ConnectWallet = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

      <Header title="Connect Wallet" image1={require("../../assets/images/back.png")}
        image2={require("../../assets/images/alarm.png")}
      />


<ScrollView >
      <View style={styles.container2}>



        <View style={styles.container3}>
          <View style={styles.transactionContainer}>
            <TouchableOpacity
            >
              <Text style={styles.transaction}>Cards</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.upcomingContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Accounts")}

            >
              <Text style={styles.transaction}> Accounts</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container4}>

          <Image
            resizeMode='contain'
            style={{ width: widthPixel(324), height: heightPixel(211) }}
            source={require("../../assets/images/card.png")}
          />
        </View>



        <View style={styles.container5}>

          <Text style={styles.debitText}>Add your debit Card</Text>
          <Text style={styles.para}>This card must be connected to a bank account under your name</Text>
        </View>

        <View style={styles.fieldSet}>
          <Text style={styles.legend}>NAME ON CARD</Text>
          <TextInput
            style={styles.inputField}
            placeholder="IRVAN MOSES"
            placeholderTextColor="#438883"
            keyboardType="numeric"
          />
        </View>
        {/* <View style={styles.container6}>
          <TextInput
            style={styles.inputField}
            placeholder="IRVAN MOSES"
            placeholderTextColor="#438883"
            keyboardType="numeric"
          />
        </View> */}

        <View style={styles.container7}>
          <View style={{ width: widthPixel(220) }}>
            <TextInput
              style={styles.inputField2}
              placeholder="DEBIT CARD NUMBER"
              placeholderTextColor="#888888"
              keyboardType="numeric"
            />
          </View>

          <View style={{ width: widthPixel(133), paddingLeft: 11 }}>

            <TextInput
              style={styles.inputField2}
              placeholder="CVC"
              placeholderTextColor="#888888"
              keyboardType="numeric"
            />
          </View>


        </View>


        <View style={[styles.container7,]}>
          <View style={{ width: widthPixel(220) }}>
            <TextInput
              style={styles.inputField2}
              placeholder="EXPIRATION MM/YY"
              placeholderTextColor="#888888"
              keyboardType="numeric"
            />
          </View>

          <View style={{ width: widthPixel(133), paddingLeft: 11 }}>

            <TextInput
              style={styles.inputField2}
              placeholder="ZIP"
              placeholderTextColor="#888888"
              keyboardType="numeric"
            />
          </View>


        </View>




      </View>


</ScrollView>






    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor: "red"
    backgroundColor: "#FFFFFF",

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
    marginTop:widthPixel(120)
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
    backgroundColor: "#FFFFFF",
    borderRadius: 40,
    height: heightPixel(40),
    width: widthPixel(180),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 3

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
    alignItems: 'center'
  },
  container4: {
    // backgroundColor: "red",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightPixel(25),
    flex: 0.9

  },
  container5: {
    // backgroundColor: "yellow",
    paddingLeft: widthPixel(25),
    marginTop: heightPixel(30)

  },
  debitText: {
    color: "#000000",
    fontFamily: "Inter-Medium",
    fontSize: fontPixel(16),
  },
  para: {
    color: "#666666",
    fontFamily: "Inter-Regular",
    fontSize: fontPixel(13),
    maxWidth: widthPixel(290)
  },



  fieldSet: {
    // margin: 10,
    paddingHorizontal: 10,
    // paddingBottom: 10,
    marginTop: heightPixel(20),
    borderRadius: 8,
    borderWidth: 1.4,
    alignItems: 'center',
    borderColor: "#438883",
    marginHorizontal: widthPixel(25),

  },
  legend: {
    position: 'absolute',
    top: -8,
    left: 10,
    backgroundColor: '#FFFFFF',
    color:"#666666",
    fontFamily: "Inter-Regular",
    fontSize: fontPixel(12),
  },

  container6: {
    // backgroundColor: "red",
    marginTop: heightPixel(20),
    marginHorizontal: widthPixel(25)
  },
  inputField: {
    // borderRadius: 8,
    // borderWidth: 1,
    // borderColor: "#438883",
    // paddingLeft: widthPixel(20),
    width:"100%"
  },
  container7: {
    flexDirection: 'row',
    marginHorizontal: widthPixel(25),
    justifyContent: 'space-between',
    marginTop: heightPixel(12),

  },
  inputField2: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDDDDD",
    paddingLeft: widthPixel(15)

  },



})



export default ConnectWallet