import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Splash from './src/screens/splash/Splash';
// import Onboarding from './src/screens/onboarding/Onboarding';
// import HomePage from './src/screens/homepage/HomePage';
// import Statistic from "./src/screens/statistic/Statistic";

// import AddExpense from './src/screens/addExpense/AddExpense';
// import Profile from './src/screens/profile/Profile';
// import TabNavigator from './src/navigation/TabNavigator';
import MainNavigator from './src/navigation/MainNavigator';
import SplashScreen from 'react-native-splash-screen';


// const Stack = createNativeStackNavigator();


class App extends Component {

componentDidMount(){
  SplashScreen.hide();
}


  render() {
    return (

      <View style={styles.container}>
        <MainNavigator />

      </View>
      // <View style={{flex:1}}>
      //   {/* <Card /> */}
      //   <HomePage />
      // </View>
      // <NavigationContainer>
      //   <Stack.Navigator

      //   screenOptions={{headerShown: false}}
      //       initialRouteName="Splash">

      //      <Stack.Screen
      //        name="Splash"
      //        component={Splash}
      //     // options={{title: 'Welcome to Splash Screen'}}
      //     />
      //      <Stack.Screen name="Onboarding"
      //       component={Onboarding} />
      //       <Stack.Screen name="HomePage"
      //       component={HomePage} />
      //       <Stack.Screen name="Statistic"
      //       component={TabNavigator} />


      //   </Stack.Navigator>

      //  </NavigationContainer>
    )
  }
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})