import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

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



const Wallet = () => {
  const naviagtion = useNavigation()
  return (
    <View style={styles.container}>

      <Header title="Wallet"
        image1={require("../../assets/images/back.png")}
        image2={require("../../assets/images/alarm.png")}

      />

      <View style={styles.container2}>

        <View style={styles.container3}>
          <Text style={styles.total}>Total Balance</Text>
          <Text style={styles.dollar}>$ 2,548.00</Text>
        </View>


        <View style={styles.container4}>
          <TouchableOpacity style={{}}>
            <View>
              <Image
                source={require("../../assets/images/Add2.png")}
              />
            </View>
            <Text style={styles.text}>Add</Text>

          </TouchableOpacity>


          <TouchableOpacity style={{}}>
            <View>
              <Image
                source={require("../../assets/images/qr-code.png")}
              />
            </View>

            <Text style={styles.text}>Pay</Text>

          </TouchableOpacity>
          <TouchableOpacity style={{}}>
            <View >
              <Image
                source={require("../../assets/images/plane.png")}
              />
            </View>
            <Text style={styles.text}>Send</Text>


          </TouchableOpacity>

        </View>


        <View style={styles.container5}>
          <View style={styles.transactionContainer}>
            <TouchableOpacity
            >
              <Text style={styles.transaction}>Transactions</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.upcomingContainer}>
            <TouchableOpacity
              onPress={() => naviagtion.navigate("UpcomingBills")}

            >
              <Text style={styles.transaction}>Upcoming Bills</Text>
            </TouchableOpacity>
          </View>
        </View>


        <ScrollView>
          <Card title1="Upwork" title2="Today" title3="+ $ 850.00" color="#25A969" color1="#000000" color2="#666666" image={require("../../assets/images/upwork.png")}
            width={50} height={50}
          />
          <Card title1="Transfer" title2="Yesterday" title3="- $ 85.00" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/transfer.png")}
            width={50} height={50}
          />
          <Card title1="Paypal" title2="Jan 30, 2022" title3="+ $ 1,406.00" color="#25A969" color1="#000000" color2="#666666" image={require("../../assets/images/paypal.png")}
            width={50} height={51}
          />
          <Card title1="Youtube" title2="Jan 16, 2022" title3="- $ 11.99" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/youtube.png")}
            width={50} height={51}
          />
        </ScrollView>

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
    flex: 4,
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
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  container3: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red",
    marginTop: 50,
  },
  total: {
    color: "#666666",
    fontFamily: "Inter-Regular",
    fontSize: fontPixel(16),
    paddingBottom: 12
  },
  dollar: {
    color: "#222222",
    fontFamily: "Inter-Bold",
    fontSize: fontPixel(30),
  },
  container4: {
    flexDirection: 'row',
    // backgroundColor: "yellow",
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30
  },
  text: {
    textAlign: 'center',
    paddingTop: 8,
    color: "#222222",
    fontFamily: "Inter-Regular",
    fontSize: fontPixel(14),
  },
  container5: {
    backgroundColor: "#F4F7F6",
    borderRadius: 40,
    height: heightPixel(48),
    marginHorizontal: pixelSizeHorizontal(20),
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    marginTop: 60
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



})



export default Wallet