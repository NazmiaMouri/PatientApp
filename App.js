import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import List from './components/List';
import Detail from './components/Detail';
import Main from './components/MainComponent'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="List" component={List} />
    //     <Stack.Screen name="Detail" component={Detail} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
     {/* <Text>Hello world

     </Text> */}
     <Main />
     {/* <Login/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
