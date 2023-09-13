//IMPORTS
import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import Texts from '../styles/Texts';
import Containers from '../styles/Containers';
import UserInput from '../components/UserInput';
import Themes from '../styles/Themes';
import EStyleSheet from 'react-native-extended-stylesheet';

//SETTING REM CONST. WITH LIBRARY
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 390 });

//MAIN FUNCTION
const Login = ({ navigation }) => {

    //BUTTON HANDLERS
    const signUpOnPress = () => {
        console.log('Sign Up button pressed.');
        navigation.navigate('Sign Up')
    };
    const forgotPassOnPress = () => {
        console.log('Forgot Password pressed.');
        //Popup to sent email reset password link?
    };
    const signInOnPress = () => {
        console.log('Sign In button pressed.');
        //Next page showing the content page! Yay!
    };

    //MAIN JSX
    return (
        <SafeAreaView style={Containers.container}>
            {/* Status bar holds battery, time, etc. */}
            <StatusBar
                barStyle='default'
            />
            {/* LOGO VIEW */}
            <View style={[Containers.container, { paddingVertical: 20 }]} >
                <Image
                    source={require('../../assets/images/Logo_Straight_Ticks.png')}
                    style={[Themes.logo, { transform: [{ rotate: '180deg' }] }]}
                />
            </View>
            {/* INPUT FIELDS VIEW */}
            <View style={Containers.scrollContainer}>
                <ScrollView
                    fadingEdgeLength={20}
                >
                    <Text style={[Texts.descriptionText, { color: '#000000' }]}>Username</Text>
                    <UserInput
                        placeHolder='use@domain.com'
                        keyboardType='default'
                    />
                    <Text style={[Texts.descriptionText, { color: '#000000' }]}>Password</Text>
                    <UserInput
                        placeHolder='Password'
                        keyboardType='default'
                    />
                    <TouchableOpacity
                        onPress={forgotPassOnPress}
                    >
                        <Text style={[Texts.descriptionText, { color: '#C0BFC7', textDecorationLine: 'underline', textAlign: 'right' }]}>Forgot Password?</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {/* SIGN IN AREA VIEW */}
            <View style={styles.submitArea}>
                <TouchableOpacity
                    onPress={signInOnPress}
                    style={[Containers.submitButtonContainer, { marginVertical: 10 }]}
                >
                    <Text style={Texts.buttonText}>Sign In</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={[Texts.descriptionText, { color: '#000000', marginHorizontal: 10 }]}>Don't have an account?</Text>
                    <TouchableOpacity
                        onPress={signUpOnPress}
                    >
                        <Text style={Texts.linkText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
};

//STYLE SHEET
const styles = EStyleSheet.create({
    submitArea: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '10rem',
        paddingVertical: '10rem',
        marginHorizontal: '20rem',
    },
});

//FUNCTION EXPORT
export default Login;