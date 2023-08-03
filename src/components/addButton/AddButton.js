import React, { useState } from "react";

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

    // If we hide button this code is used
    // const [showAddButton, setShowAddButton] = useState(true);

    // const handlePress = () => {
    //     setShowAddButton(false);
    //     navigation.navigate('AddButton');
    // };

    // if (!showAddButton) {
    //     return null;
    // }


    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <TouchableWithoutFeedback
                    style={styles.addButton}>
                    <View style={styles.addButtonInner}>
                        <Pressable
                            // If we hide button this code is used
                            // onPress={handlePress}
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
        

        
        elevation: 25, // This adds a top shadow to the bottom bar (Android only)
        shadowOffset: { width: 0, height: -5 }, // This adds a tp shadow to the bottom bar (iOS only)
        shadowColor: 'black', // Customize the shadow color if needed
        shadowOpacity: 0.1, // Customize the shadow opacity if needed
        shadowRadius: 10, // Customize the shadow radius if needed
        zIndex: 999, // Set a high z-index to make sure the bottom bar is always on top of other content
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