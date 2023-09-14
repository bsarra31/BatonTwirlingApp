//IMPORTS
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Themes from '../styles/Themes';
import Containers from '../styles/Containers';
import Texts from '../styles/Texts';
import UserInput from '../components/UserInput';
import EStyleSheet from 'react-native-extended-stylesheet';

//SETTING REM CONST. WITH LIBRARY
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 390 });

//MAIN FUNCTION
const CreateAccount = () => {

    const navigation = useNavigation();

    //BUTTON HANDLERS
    const signInOnPress = () => {
        console.log('Sign In button pressed.');
        navigation.goBack();
    };
    const signupOnPress = () => {
        console.log('Sign Up button pressed.');
    };

    //STATES
    const [date, setDate] = useState('');

    //MAIN JSX
    return (
        <SafeAreaView style={Containers.container}>
            {/* Status bar holds battery, time, etc. */}
            <StatusBar
                barStyle='default'
            />
            {/* BACK BUTTON VIEW */}
            <View style={Containers.backButtonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={signInOnPress}
                >
                    {/* Icon */}
                    <Feather
                        name={'arrow-left'}
                        size={30}
                        color={'#f7f0ea'}
                    />
                </TouchableOpacity>
            </View>
            {/* TITLE SECTION VIEW */}
            <View style={[Containers.titleContainer]}>
                <Text style={[Themes.primary, Texts.titleText]}>Create Account</Text>
                <Text style={Texts.descriptionText}>Enter account details below.</Text>
            </View>
            {/* INPUT FIELDS VIEW */}
            <View style={Containers.scrollContainer}>
                <ScrollView
                    fadingEdgeLength={20}
                    keyboardShouldPersistTaps='handled'
                >
                    <Text style={[Texts.descriptionText, { color: '#000000' }]}>First Name</Text>
                    <UserInput
                        placeHolder='John'
                        keyboardType='default'
                    />
                    <Text style={[Texts.descriptionText, { color: '#000000' }]}>Last Name</Text>
                    <UserInput
                        placeHolder='Doe'
                        keyboardType='default'
                    />
                    <Text style={[Texts.descriptionText, { color: '#000000' }]}>Date of Birth</Text>
                    <UserInput
                        placeHolder='mm/dd/yyyy'
                        keyboardType='numeric'
                    />
                    <Text style={[Texts.descriptionText, { color: '#000000' }]}>Email</Text>
                    <UserInput
                        placeHolder='user@domain.com'
                        keyboardType='default'
                    />
                    <Text style={[Texts.descriptionText, { color: '#000000' }]}>Password</Text>
                    <UserInput
                        placeHolder='Password' //NOTE!! the 'Password' placeholder makes the text entry secure, so don't change that LOL
                        keyboardType='default'
                    />
                </ScrollView>
            </View>
            {/* BUTTON SECTIONS VIEW */}
            <View style={styles.submitArea}>
                <TouchableOpacity
                    onPress={signupOnPress}
                    style={Containers.submitButtonContainer}
                >
                    <Text style={Texts.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = EStyleSheet.create({
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40rem',
        height: '40rem',
        borderRadius: '100rem',
        backgroundColor: '#C0BFC7'
    },
    submitArea: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '10rem',
        paddingTop: '10rem',
        paddingBottom: '20rem',
        marginHorizontal: '20rem',
    },
});

//FUNCTION EXPORT
export default CreateAccount;