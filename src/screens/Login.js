import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Texts from '../styles/Texts';
import Containers from '../styles/Containers';
import UserInput from '../components/UserInput';
import Themes from '../styles/Themes';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 390 });

const Login = () => {

    const signInOnPress = () => {
        console.log('Sign In button pressed.')
    }
    const forgotPassOnPress = () => {
        console.log('Forgot Password pressed.')
    }

    return (
        <SafeAreaView style={Containers.container}>
            <StatusBar
                barStyle='default'
            />
            <View style={[Containers.container, { paddingVertical: 20 }]} >
                <Image
                    source={require('../../assets/images/Logo_Straight_Ticks.png')}
                    style={[Themes.logo, {transform: [{rotate: '180deg'}]}]}
                />
            </View>
            <View style={Containers.scrollContainer}>
                <ScrollView
                    fadingEdgeLength={20}
                >
                    <Text style={[Texts.descriptionText, { color: '#000000' }]}>First Name</Text>
                    <UserInput
                        placeHolder='use@domain.com'
                        keyboardType='default'
                    />
                    <Text style={[Texts.descriptionText, { color: '#000000' }]}>Last Name</Text>
                    <UserInput
                        placeHolder='Password'
                        keyboardType='default'
                    />
                </ScrollView>
            </View>
            <View style={styles.submitArea}>
                <TouchableOpacity
                    onPress={signInOnPress}
                    style={Containers.submitButtonContainer}
                >
                    <Text style={Texts.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={forgotPassOnPress}
                >
                    <Text style={Texts.linkText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = EStyleSheet.create({
    submitArea: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '10rem',
        paddingVertical: '10rem',
        marginHorizontal: '20rem',
    },
});

export default Login;