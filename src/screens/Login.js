import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Dimensions, TextInput, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Texts from '../styles/Texts';

const Login = () => {

    const { descriptionText, input } = styles;
    return (
        <SafeAreaView>
                
            <View style={styles.container}>
                <Text style={[Texts.descriptionText, { color: '#000000' }]}>First Name</Text>
                <TextInput
                    style={Texts.input}
                    placeholder='John'
                    placeholderTextColor={'#C0BFC7'}
                    keyboardType='default'
                />
                <Text style={[Texts.descriptionText, { color: '#000000' }]}>Last Name</Text>
                <TextInput
                    style={Texts.input}
                    placeholder='Doe'
                    placeholderTextColor={'#C0BFC7'}
                    keyboardType='default'
                />
            </View>
            <View>

            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
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