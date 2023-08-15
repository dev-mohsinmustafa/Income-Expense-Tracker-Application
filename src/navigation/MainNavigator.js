import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import Splash from '../screens/splash/Splash';
import Onboarding from '../screens/onboarding/Onboarding';
import Statistic from '../screens/statistic/Statistic';
import AddExpense from '../screens/addExpense/AddExpense';
import UpcomingBills from '../screens/upcomingBills/UpcomingBills';
import ConnectWallet from '../screens/connectWallet/ConnectWallet';
import Accounts from '../screens/accounts/Accounts';
import TransactionDetailsIncome from '../screens/transactionDetailsIncome/TransactionDetailsIncome';
import TransactionDetailsExpense from '../screens/transactionDetailsExpense/TransactionDetailsExpense';
import BillDetails from '../screens/billDetails/BillDetails';
import BillPayment from '../screens/billPayment/BillPayment';
import PaymentSuccessfully from '../screens/paymentSuccessfully/PaymentSuccessfully';
// import TabNavigator2 from './TabNavigator2';
const Stack = createNativeStackNavigator();

// const Root =()=>{
//     return(
//         <View>
//             <Text>
//                 Root Screen
//             </Text>
//         </View>
//     )
// }


const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator

        screenOptions={{ headerShown: false }}
        initialRouteName="Onboarding">

        <Stack.Screen
          name="Splash"
          component={Splash}
        // options={{title: 'Welcome to Splash Screen'}}
        />

        <Stack.Screen name="Onboarding"
          component={Onboarding} />

        <Stack.Screen name="AddButton"
          component={AddExpense} />

        {/* <Stack.Screen name="UpcomingBills"
          component={UpcomingBills} />

        <Stack.Screen name="ConnectWallet"
          component={ConnectWallet} />



        <Stack.Screen name="Accounts"
          component={Accounts} />

        <Stack.Screen name="TransactionDetailsIncome"
          component={TransactionDetailsIncome} />


        <Stack.Screen name="TransactionDetailsExpense"
          component={TransactionDetailsExpense} />


        <Stack.Screen name="BillDetails"
          component={BillDetails} />

        <Stack.Screen name="BillPayment"
          component={BillPayment} />


        <Stack.Screen name="PaymentSuccessfully"
          component={PaymentSuccessfully} /> */}



        <Stack.Screen name='Home' component={TabNavigator} />

        {/* <Stack.Screen name='Home2' component={TabNavigator2} /> */}




      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default MainNavigator