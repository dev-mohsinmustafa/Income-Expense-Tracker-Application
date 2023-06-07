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
                tabBarStyle: styles.tabBar
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
                                source={require("../assets/images/Vector.png")}
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
                                source={require("../assets/images/bar-chart.png")}
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
                    options={{
                        tabBarIconStyle: {
                            height: 0
                        },
                        tabBarButton: () => (
                            <AddButton />
                        ),

                    }}

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
                                source={require("../assets/images/wallet.png")}
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
                                source={require("../assets/images/user.png")}
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
        // position: 'absolute',
        padding: 0,
        // left: 16,
        // right:16,
        // bottom: 22,
        height: 80,
        // borderRadius: 16,
        backgroundColor: "white",
        borderTopColor: "transparent",
        shadowColor: "#69AEA9",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

        boxShadow: "0px -2px 25px rgba(0, 0, 0, 0.04)",
        // backgroundColor:"red"
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