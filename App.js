//IMPORTS
import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from './src/components/navigation';

//STACK NAVIGATOR CREATION
const Stack = createNativeStackNavigator();

//MAIN FUNCTION
const App = () => {
  //MAIN JSX
  return (
    <Navigation />
  );
};

//FUNCTION EXPORT
export default App;
