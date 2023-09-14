//IMPORTS
import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from './src/components/Navigation';
import { useFonts } from 'expo-font';

//STACK NAVIGATOR CREATION
const Stack = createNativeStackNavigator();

//MAIN FUNCTION
const App = () => {
  const [fontsLoaded] = useFonts({
    'Open-Sans-Bold': require('./assets/fonts/OpenSansBold.ttf'),
    'Open Sans Bold': require('./assets/fonts/OpenSansBold.ttf'),
    'OpenSansRegular': require('./assets/fonts/Open Sans Regular.ttf'),
  })
  //MAIN JSX
  return (
    <Navigation />
  );
};

//FUNCTION EXPORT
export default App;
