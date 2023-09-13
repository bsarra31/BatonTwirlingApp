import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Dimensions, useWindowDimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Themes from '../styles/Themes';
import Containers from '../styles/Containers';
import Texts from '../styles/Texts';
import UserInput from '../components/UserInput';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 390 });

const CreateAccount = () => {

    const signInOnPress = () => {
        console.log('Sign In button pressed.')
    }
    const backOnPress = () => {
        console.log('Back button pressed.')
    }
    const forgotPassOnPress = () => {
        console.log('Forgot Password pressed.')
    }

    const [date, setDate] = useState('');

    return (
        <SafeAreaView style={Containers.container}>
            <StatusBar
                barStyle='default'
            />
            <View style={Containers.backButtonContainer}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={backOnPress}
                >
                    <Feather
                        name={'arrow-left'}
                        size={30}
                        color={'#f7f0ea'}
                    />
                </TouchableOpacity>
            </View>
            <View style={[Containers.titleContainer]}>
                <Text style={Themes.primary}>Create Account</Text>
                <Text style={Texts.descriptionText}>Enter account details below.</Text>
            </View>
            <View style={Containers.scrollContainer}>
                <ScrollView
                    fadingEdgeLength={20}
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
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40rem',
        height: '40rem',
        borderRadius: '100rem',
        backgroundColor: '#C0BFC7'
    },
    submitArea: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: '10rem',
        paddingVertical: '10rem',
    },
});

export default CreateAccount;