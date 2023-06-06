import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto';
import ratios from '../../styles/ratios'

let {
    widthPixel,
    heightPixel,
    fontPixel,
} = ratios;

const Input = () => {
    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Icon name="dollar" color="#438883" size={10} style={{ marginBottom: heightPixel(2) }}
                    // style={{backgroundColor: 'red', }}
                    />
                    <TextInput
                        // style={{
                        //     backgroundColor:'red'
                        // }}
                        style={styles.inputField}
                        placeholder="48.00"
                        placeholderTextColor="#438883"
                        keyboardType="numeric"
                    />
                </View>
                <TouchableOpacity>
                    <View>
                        <Text style={styles.clear}>Clear</Text>
                    </View>
                </TouchableOpacity>


            </View>
        </View>
        // <View>

        //      <Text>
        //          <Icon name="dollar" color="#438883" size={30} />
        //    </Text>
        //     <TouchableOpacity>

        //         <Text>Clear</Text>
        //      </TouchableOpacity>
        //  </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // marginBottom: 20,
        // justifyContent:'center',
        // backgroundColor:"red",
        marginHorizontal: widthPixel(20),
    },
    input: {
        borderColor: "#DDDDDD",
        // height: 55,
        flexDirection: 'row',
        paddingHorizontal: widthPixel(20),
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#438883",



    },
    inputField: {
        color: "#438883",
        fontFamily: "Inter-Medium",
        // fontWeight: '500',
        fontSize: fontPixel(14),
        lineHeight: 17,
        width: "85%",
        // backgroundColor:"yellow"
    },
    clear: {
        color: "#438883",
        fontFamily: "Inter-Medium",
        // fontWeight: '500',
        fontSize: fontPixel(12),
        lineHeight: 15,
    }


})

export default Input