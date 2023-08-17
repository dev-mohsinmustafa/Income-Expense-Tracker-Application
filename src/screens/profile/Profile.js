import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, ScrollView } from 'react-native'
import ratios from '../../styles/ratios'
import Header from '../../components/header/Header';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header title="Profile" image1={require("../../assets/images/back.png")}
        image2={require("../../assets/images/alarm.png")}
      />

      <View style={styles.container2}>

        <Image
        style={{width:120, height:120, }}
          source={require("../../assets/images/profile.png")}
        />
        <Text style={styles.engelin}>Enjelin Morgeana</Text>
        <Text style={[styles.engelin1,{paddingBottom:20}]}>@enjelin_morgeana</Text>


      </View>

      <View style={styles.container3}>
      <ScrollView style={{flex:1, marginTop:heightPixel(56), marginBottom: heightPixel(20), }}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require("../../assets/images/diamond.png")} />
          <Text style={styles.invite}>Invite Friends</Text>
        </View>

        <View style={styles.horizontalLine}>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.image}

            source={require("../../assets/images/account.png")} />
          <Text style={styles.text}>Account info</Text>

        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.image}

            source={require("../../assets/images/personal.png")} />
          <Text style={styles.text}>Personal profile</Text>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.image}

            source={require("../../assets/images/message.png")} />
          <Text style={styles.text}>Message center</Text>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.image}

            source={require("../../assets/images/login.png")} />
          <Text style={styles.text}>Login and security</Text>

        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.image}
            source={require("../../assets/images/data.png")} />
          <Text style={styles.text}>Data and privacy</Text>

        </View>

      </ScrollView>

        </View>







    </View>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: 'relative',
  },
  container2: {
    flex: 1,
    // backgroundColor: "yellow",
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    top: "30%",
    // top: heightPixel(211)

  },
  engelin: {
    color: "#222222",
    fontFamily: "Inter-SemiBold",
    fontSize: fontPixel(20),
    marginTop:20
  },
  engelin1: {
    color: "#438883",
    fontFamily: "Inter-SemiBold",
    fontSize: fontPixel(14),
  },
  container3: {
    flex: 1,
    // backgroundColor: "green",
    // position: 'relative',
    // zIndex: -10,
    marginTop: heightPixel(34),
    flexDirection: 'column',
    marginHorizontal: widthPixel(25)
  },
  text: {
    padding: widthPixel(20),
    color: "#000000",
    fontFamily: "Inter-Medium",
    fontSize: fontPixel(16),
  },
  image: {
    alignSelf: 'center',
    marginLeft: widthPixel(8)
  },
  invite: {
    paddingLeft: widthPixel(10),
    color: "#000000",
    fontFamily: "Inter-Medium",
    fontSize: fontPixel(16),
  },

  horizontalLine: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    // marginHorizontal: pixelSizeHorizontal(30),
    // flex: 0.01,
    marginTop: heightPixel(15),
    // backgroundColor: "green",
    // flex: 0.04,
  },


})

export default Profile;