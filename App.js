import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CreateAccount from './src/screens/CreateAccount';
import Login from './src/screens/Login';

const App = () => {
  return (
    <View style={styles.container}>
      <CreateAccount />
      {/* <Login /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;