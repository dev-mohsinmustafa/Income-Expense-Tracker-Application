import React from "react";

import {
    TouchableWithoutFeedback,
    View,
    StyleSheet,
    Image,
    Animated,
    Pressable,
} from "react-native";
import { COLORS } from "../../theme/theme";
import { useNavigation } from "@react-navigation/native";



const AddButton = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableWithoutFeedback
                    onPress={() => console.log("click")}

                    style={styles.addButton}
                >

                    <View style={styles.addButtonInner}>
                        <Pressable 
                        onPress={() => navigation.navigate('AddButton')}
                        >
                            <Image
                                style={styles.addButtonIcon}
                                resizeMode="contain"
                                source={require("../../assets/images/Add.png")
                                }

                            />
                        </Pressable>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        height: 0,
    },
    box: {
        position: "relative",
        width: 60,
        height: 60,
        marginTop: -30,
    },

    addButton: {
        shadowColor: COLORS.dark,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    addButtonInner: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    addButtonIcon: {
        width: 20,
        height: 20,
        // tintColor: COLORS.white,
    },
    item: {
        position: "absolute",
        top: 5,
        left: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.primary,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    itemIcon: {
        width: 32,
        height: 32,
        tintColor: COLORS.white,
    },
});

export default AddButton;