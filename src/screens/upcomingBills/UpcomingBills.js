import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

import ratios from '../../styles/ratios';
import Header from '../../components/header/Header';
import Card from '../../components/card/Card';
import { useNavigation } from '@react-navigation/native';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;


const UpcomingBills = () => {
  const navigation = useNavigation()



  return (


    <View style={styles.container}>

      <Header title="Wallet" image1={require("../../assets/images/back.png")}
        image2={require("../../assets/images/alarm.png")}

      />

      <View style={styles.container2}>

        <View style={styles.container3}>
          <Text style={styles.total}>Total Balance </Text>
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
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.transaction}>Transactions</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.upcomingContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ConnectWallet")}

            >
              <Text style={styles.transaction}>Upcoming Bills</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flex: 1,  }}>

        <ScrollView style={{marginVertical:heightPixel(25)}}>
            <Card title1="Youtube" title2="Feb 28, 2022" title3="Pay" color="#438883" color1="#000000" color2="#666666" image={require("../../assets/images/youtube.png")}
              width={50} height={51} backgroundColor="#ECF9F8" height1={36} width1={100} borderRadius1={40}
            />
            <Card title1="Electricity" title2="Mar 28, 2022" title3="Pay" color="#438883" color1="#000000" color2="#666666" image={require("../../assets/images/electricity.png")}
              width={50} height={50} backgroundColor="#ECF9F8" height1={36} width1={100}  borderRadius1={40}
            />
            <Card title1="House Rent" title2="Mar 31, 2022" title3="Pay" color="#438883" color1="#000000" color2="#666666" image={require("../../assets/images/houseRent.png")}
              width={50} height={50} backgroundColor="#ECF9F8" height1={36} width1={100} borderRadius1={40}
            />
            <Card title1="Spotify" title2="Feb 28, 2022" title3="Pay" color="#438883" color1="#000000" color2="#666666" image={require("../../assets/images/spotify.png")}
              width={50} height={51} backgroundColor="#ECF9F8" height1={36} width1={100} borderRadius1={40}
            />

          </ScrollView>
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



})



export default UpcomingBills