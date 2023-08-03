import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Alert } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screens/homepage/HomePage';
import Statistic from '../screens/statistic/Statistic';
import Wallet from '../screens/wallet/Wallet';
import Profile from '../screens/profile/Profile';
import { COLORS } from "../theme/theme";

import AddButton from '../components/addButton/AddButton';
import UpcomingBills from '../screens/upcomingBills/UpcomingBills';
import ConnectWallet from '../screens/connectWallet/ConnectWallet';
import Accounts from '../screens/accounts/Accounts';
import TransactionDetailsIncome from '../screens/transactionDetailsIncome/TransactionDetailsIncome';
import TransactionDetailsExpense from '../screens/transactionDetailsExpense/TransactionDetailsExpense';
import BillDetails from '../screens/billDetails/BillDetails';
import BillPayment from '../screens/billPayment/BillPayment';
import PaymentSuccessfully from '../screens/paymentSuccessfully/PaymentSuccessfully';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddExpense from '../screens/addExpense/AddExpense';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';



const Tab = createBottomTabNavigator();
// Multiple Page Routing
// Very Important Point for multiple screens navigation

const Stack = createNativeStackNavigator();


const getIconColor = focused => ({
    tintColor: focused ? COLORS.primary : COLORS.white
});


// Very Important Point for multiple screens navigation

function WalletStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Wallet" component={Wallet} />
            <Stack.Screen name="UpcomingBills" component={UpcomingBills} />
            <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
            <Stack.Screen name="Accounts" component={Accounts} />
            <Stack.Screen name="TransactionDetailsIncome" component={TransactionDetailsIncome} />
            <Stack.Screen name="TransactionDetailsExpense" component={TransactionDetailsExpense} />
            <Stack.Screen name="BillDetails" component={BillDetails} />
            <Stack.Screen name="BillPayment" component={BillPayment} />
            <Stack.Screen name="PaymentSuccessfully" component={PaymentSuccessfully} />
        </Stack.Navigator>
    );
}



const TabNavigator = () => {
    const [showAddButton, setShowAddButton] = useState(true);





    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
            }}

            initialRouteName='HomePage'>
            <Tab.Screen name='HomePage' component={HomePage}
                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/home-1.png")}
                            />
                        </View>
                    )
                }}

                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        setShowAddButton(true);
                        navigation.navigate('HomePage');
                    },
                })}
            />
            <Tab.Screen name='Statistic' component={Statistic}
                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/bar-chart-1.png")}
                            />
                        </View>
                    )
                }}

                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        setShowAddButton(false);
                        navigation.navigate('Statistic');
                    },
                })}
            />
            {showAddButton && (
                <Tab.Screen name='AddButton' component={AddExpense}
                // screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}

                    options={{
                        tabBarIconStyle: {
                            height: 0,
                        },
                        tabBarButton: () => (
                            <AddButton />
                        ),

                    }}
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            setShowAddButton(false);
                            navigation.navigate('AddExpense');
                        },
                    })}

                />
            )}
            {/* Very Important Point for multiple screens navigation */}

            <Tab.Screen name='WalletStack' component={WalletStack}

                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/wallet-1.png")}
                            />
                        </View>
                    )
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        setShowAddButton(false);
                        navigation.navigate('WalletStack');
                    },
                })}
            />
            <Tab.Screen name='Profile' component={Profile}

                options={{
                    tabBarIconStyle: {
                        height: 0
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.tabIconContainer}>
                            <Image
                                style={[styles.tabIcon, getIconColor(focused)]}
                                resizeMode='contain'
                                source={require("../assets/images/user-1.png")}
                            />
                        </View>
                    )
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        setShowAddButton(false);
                        navigation.navigate('Profile');
                    },
                })}
            />



        </Tab.Navigator>







    )
}


const styles = StyleSheet.create({
    tabBar: {
        // flex:0.1,
        // paddingTop:10,
        // position: 'absolute',
        padding: 0,
        // left: 16,
        // right:16,
        // bottom: 22,
        height: 80,
        // borderRadius: 16,
        // backgroundColor: "#FFFFFF",
        // borderTopColor: "transparent",
      

        // backgroundColor: '#fff', // Set your background color
        // borderTopWidth: 1,
        // borderTopColor: '#e0e0e0', // Set the color of the top border (optional)
        // elevation: 25,
             elevation: 25, // This adds a top shadow to the bottom bar (Android only)
        shadowOffset: { width: 0, height: -5 }, // This adds a tp shadow to the bottom bar (iOS only)
        shadowColor: 'black', // Customize the shadow color if needed
        shadowOpacity: 0.1, // Customize the shadow opacity if needed
        shadowRadius: 10, // Customize the shadow radius if needed
        zIndex: 999, // Set a high z-index to make sure the bottom bar is always on top of other content
    },
    tabIconContainer: {
        position: 'absolute',
        // top:12,
        alignItems: 'center',
        justifyContent: 'center'
    }
    , tabIcon: {
        // width: 36,
        // height: 36

    }
})

export default TabNavigator