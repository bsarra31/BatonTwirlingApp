import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Login = () => {
    return (
        <View>
            <Text>Hello.</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'black',
    },
    textStyle: {
        flex: 1,
        backgroundcolor: 'blue',
        color: 'black',
        textShadowColor: 'black'
    }
});

export default Login;