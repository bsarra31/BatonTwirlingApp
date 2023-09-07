import React from 'react';
import { StyleSheet, View } from 'react-native';
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
//Testing here
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
