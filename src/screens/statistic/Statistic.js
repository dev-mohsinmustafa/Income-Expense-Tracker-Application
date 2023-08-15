import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable, ScrollView, FlatList, TouchableWithoutFeedback } from 'react-native'
import ratios from '../../styles/ratios'
import Card from '../../components/card/Card';

import { months } from '../../constants/Constants';

let {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} = ratios;



const Statistic = ({ navigation, props }) => {

  const [isClicked, setIsClicked] = useState(false);

  const handlePress = () => {
    setIsClicked(!isClicked);
  };
  
  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
        // style={{ width: 30, height: 30, justifyContent: 'center', }}
        >
          <Image
            source={require("../../assets/images/back.png")}

          />
        </TouchableOpacity>
        <Text style={styles.statistics}>Statistics</Text>
        <TouchableOpacity
        // style={{ width: 30, height: 30, justifyContent: 'center', }}
        >
          <Image
            source={require("../../assets/images/download.png")}

          />
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>

        <View style={styles.dayParent}>
          <Text style={styles.day}>Day</Text>

        </View>
        <Text style={styles.week}>Week</Text>
        <Text style={styles.week}>Month</Text>
        <Text style={styles.week}>Year</Text>

      </View>

      <View style={styles.container3}>
        <View style={styles.container3Child}>
          <View style={{ flexDirection: 'row' }}>

            <Text style={styles.expense}>Expense</Text>
            <Image
              style={{ alignSelf: 'center', marginLeft: widthPixel(15) }}

              source={require("../../assets/images/Icon.png")}
            />
          </View>
        </View>
        <Image
          style={{
            width: "100%",
            resizeMode: 'contain',
            alignItems: 'flex-start'
          }}
          source={require("../../assets/images/grapp.png")}
        />
      </View>

      {/* <View style={styles.container35}>
        <Text style={styles.months}>Mar</Text>
        <Text style={styles.months}>Apr</Text>
        <Text style={styles.may}>May</Text>
        <Text style={styles.months}>Jun</Text>
        <Text style={styles.months}>Jul</Text>
        <Text style={styles.months}>Aug</Text>
        <Text style={styles.months}>Sep</Text>
      </View> */}



      {/* <View style={styles.container35}> */}

      <FlatList style={[styles.flatlist,{marginTop: heightPixel(15),flex:1,}]}
      horizontal
      showsHorizontalScrollIndicator={false}
      // ese be likh skty hai 
      keyExtractor={(key)=>{
        return key.index
      }}
      // keyExtractor={(index)=>{
      //   return index.index
      // }}
        data={months}
        renderItem={({item}) => {
          // jab ham argument element pass krenge to
          // in react native 1 by 1 data to mile ga he or sath hamy index be milta hai sath 
          // or be chezen mile ge
          // log me ham pele index mil raha phr item or item ke andr name 
          // to  us ke leye hame element.item.name ke ander jana prega to data milega
          // console.log(element.item.name);
          // ecma script me agr ap direct ke den ke mujhe item se name chahye is ko
          //  destructioning kehty hai phr ap uper element ne pass kren ge 
          // {item} pass krenge bs

          console.log(item.name);
          return (
            <View style={styles.container35}>
              {/* <Text style={styles.months}>{element.item.name}</Text> */}
              <Text style={styles.months}>{item.nameMar}</Text>
              <Text style={styles.monthsNameExceptMarch}>{item.name}</Text>
              <Text style={styles.may}>{item.nameMay}</Text>
            </View>
          )
        }}
      />
 {/* </View> */}
 
      <View style={styles.container4}>

        <Text style={styles.text}>Top Spending</Text>
        <Image
          source={require("../../assets/images/arrow.png")} />
      </View>
      <View style={styles.container5}>


        <ScrollView>
          <View style={{
            marginTop: heightPixel(20),
            backgroundColor: "#FBFBFB", borderRadius: 12,
            marginHorizontal: widthPixel(20),
          }}>

            <Card title1="Starbucks" title2="Jan 12, 2022" title3="- $ 150.00" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/starbucks.png")}
              width={29} height={30} borderRadius={40}
            />
          </View>

<TouchableWithoutFeedback onPress={handlePress}>

          <View style={[styles.box, isClicked && styles.clickedBox,{
            backgroundColor: "#29756F", borderRadius: 12,
            marginHorizontal: widthPixel(20), marginTop: heightPixel(15),
            // shadowColor: "#29756F",
            // shadowOffset: {
            //   width: 0,
            //   height: 12,
            // },
            // shadowOpacity: 0.58,
            // x: 0,
            // y: 3,
            // shadowRadius: 16.00,
            // elevation: 24,

            // flex: 1,
            // borderRadius: 10,
            // // To round image corners
            // overflow: 'hidden',
            // borderColor: '#999',
            // borderWidth: 0.5,
            // // https://github.com/facebook/react-native/issues/10049#issuecomment-366426897
            // // backgroundColor: '#FFF',
            // // Android shadow
            // elevation: 4

          }]}>
            <Card title1="Transfer" title2="Yesterday" title3="- $ 85.00" color1="#FFFFFF" color2="#EEEEEE" color="#FBFBFB" image={require("../../assets/images/transfer1.png")}
              width={44} height={44} borderRadius={40}
            />
          </View>

          </TouchableWithoutFeedback>


          <View style={{
            backgroundColor: "#FBFBFB", borderRadius: 12,
            marginHorizontal: widthPixel(20), marginTop: heightPixel(15),
          }}>
            <Card title1="Youtube" title2="Jan 16, 2022" title3="- $ 11.99" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/youtube1.png")}
              width={35} height={35}
            />

          </View>

          <View style={{
            backgroundColor: "#FBFBFB", marginBottom: 20,
            borderRadius: 12, marginHorizontal: widthPixel(20), marginTop: heightPixel(15),
          }}>
            <Card title1="Paypal" title2="Jan 16, 2022" title3="- $ 85.99" color="#F95B51" color1="#000000" color2="#666666" image={require("../../assets/images/paypal.png")}
              width={35} height={35}
            />

          </View>



        </ScrollView>
      </View>
      {/* <View style={styles.navContainer}>
      </View> */}

    </View>

  )
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",

  },
  container1: {
    flex: 1,
    marginTop: heightPixel(47),
    // backgroundColor: "yellow",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(24),
    alignItems: 'center',
  },
  statistics: {
    color: "#222222",
    fontFamily: "Inter-SemiBold",
    // fontWeight: 600,
    fontSize: fontPixel(18),
    lineHeight: 21,
  },

  container2: {
    flex: 0.6,
    // backgroundColor: "red",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: widthPixel(32),
    // alignContent: 'center',
    marginTop: heightPixel(40),
    marginRight: widthPixel(42),
    marginLeft: widthPixel(24)

  },
  day: {
    color: "white",
    textAlign: 'center',
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    color: "#FFFFFF",
    fontSize: fontPixel(13),
    // lineHeight: 16,

  },
  dayParent: {
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: "#438883",
    width: widthPixel(80),
    height: heightPixel(40),
  },
  week: {
    color: "#666666",
    textAlign: 'center',
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    fontSize: fontPixel(13),
    // lineHeight: 16,
  },
  container3: {
    flex: 4,
    // backgroundColor: "green",
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(20),
    // alignItems: 'flex-end'
    marginTop: heightPixel(30)

  },
  container3Child: {
    // backgroundColor:"red",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#666666",
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    width: widthPixel(120),
    height: heightPixel(40),
  },
  expense: {
    // backgroundColor:"gray",
    color: "#666666",
    fontFamily: "Inter-Medium",
    // fontWeight: 500,
    fontSize: fontPixel(14),
  },
  container35: {
    // marginTop: heightPixel(15),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7,
    // backgroundColor: "yellow",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: widthPixel(20),

  },
  months: {
    color: "#666666",
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    fontSize: fontPixel(14),
    // paddingLeft: 17,
  },
  monthsNameExceptMarch: {
    color: "#666666",
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    fontSize: fontPixel(14),
    paddingLeft: 17,
  },
 
  may: {
    color: "#438883",
    fontFamily: "Inter-Regular",
    // fontWeight: 400,
    fontSize: fontPixel(14),
    lineHeight: 17,
  },
  container4: {
    flex: 0.8,
    // backgroundColor: "gray",
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: widthPixel(22),
    alignItems: 'center',
    marginTop: heightPixel(60)
  },
  text: {
    fontFamily: "Inter-SemiBold",
    color: "#222222",
    // fontWeight: 600,
    fontSize: fontPixel(18),
    lineHeight: 21,
    // paddingTop:6,
    // marginTop: 6,

  },
  container5: {
    flex: 4,
    // backgroundColor: "pink",

  },

  









  box: {
    // width: 100,
    // height: 100,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    // Add default box shadow here
    shadowColor: '#2F7E79',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 25,
  },
  clickedBox: {
    // Add clicked box shadow here
    shadowColor: 'green', // Change the shadow color to indicate the click
    // You can modify other shadow properties as needed
    shadowOffset: {
      width: 0,
      height: 14, // Increase the height to increase the vertical shadow
    },
    shadowRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 25,
  },

 




})

export default Statistic;

