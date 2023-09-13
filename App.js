//IMPORTS
import React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from './src/screens/Login';
import CreateAccount from './src/screens/CreateAccount';

//STACK NAVIGATOR CREATION
const Stack = createNativeStackNavigator();

//MAIN FUNCTION
const App = () => {
  //MAIN JSX
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Sign Up"
          component={CreateAccount}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//FUNCTION EXPORT
export default App;
