import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ScrollView, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import themes from '../styles/Themes';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_SCALE = Dimensions.get('window').scale;
const SCREEN_FONTSCALE = Dimensions.get('window').fontScale;

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
    const { container, backButtonContainer, titleContainer, scrollContainer, descriptionText, backButton, buttonText, submitArea, password, submitButton, input } = styles

    return (
        <SafeAreaView style={container}>
            <StatusBar
                barStyle='dark-content'
            />
            <View style={backButtonContainer}>
                <TouchableOpacity
                    style={backButton}
                    onPress={backOnPress}
                >
                    <Feather
                        name={'arrow-left'}
                        size={30}
                        color={'#f7f0ea'}
                    />
                </TouchableOpacity>
            </View>
            <View style={titleContainer}>
                <Text style={[themes.primary, {fontSize: 24}]}>Create Account</Text>
                <Text style={descriptionText}>Enter account details below.</Text>
            </View>
            <View style={scrollContainer}>
                <ScrollView
                    keyboardDismissMode='on-drag'
                >
                    <Text style={[descriptionText, { color: '#000000' }]}>First Name</Text>
                    <TextInput
                        style={input}
                        placeholder='John'
                        placeholderTextColor={'#C0BFC7'}
                        keyboardType='default'
                    />
                    <Text style={[descriptionText, { color: '#000000' }]}>Last Name</Text>
                    <TextInput
                        style={input}
                        placeholder='Doe'
                        placeholderTextColor={'#C0BFC7'}
                        keyboardType='default'
                    />
                    <Text style={[descriptionText, { color: '#000000' }]}>Date of Birth</Text>
                    <TextInput
                        style={input}
                        placeholder='mm/dd/yyyy'
                        placeholderTextColor={'#C0BFC7'}
                        keyboardType='numeric'
                    />
                    <Text style={[descriptionText, { color: '#000000' }]}>Email</Text>
                    <TextInput
                        style={input}
                        placeholder='user@domain.com'
                        placeholderTextColor={'#C0BFC7'}
                        keyboardType='default'
                    />
                    <Text style={[descriptionText, { color: '#000000' }]}>Password</Text>
                    <TextInput
                        style={input}
                        placeholder='Password'
                        placeholderTextColor={'#C0BFC7'}
                        keyboardType='default'
                        secureTextEntry={true}
                    />
                </ScrollView>
            </View>
            <View style={submitArea}>
                <TouchableOpacity
                    onPress={signInOnPress}
                    style={submitButton}
                >
                    <Text style={buttonText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={forgotPassOnPress}
                >
                    <Text style={password}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f0ea',
    },
    scrollContainer: {
        flex: 5,
        marginHorizontal: 20,
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: '#C0BFC7'
    },
    backButtonContainer: {
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
    },
    titleText: {
        color: '#611f66',
        fontSize: 32,
        fontWeight: 'bold',
    },
    descriptionText: {
        color: '#197278',
        fontSize: 16,
    },
    input: {
        borderColor: '#000000',
        borderRadius: 6,
        borderWidth: 1,
        fontSize: 16,
        height: 48,
        paddingLeft: 10,
    },
    submitButton: {
        width: 327,
        height: 48,
        backgroundColor: '#611f66',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    password: {
        color: '#197278',
        fontSize: 16,
        marginVertical: 20,
        textDecorationLine: 'underline',
    },
    submitArea: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 10,
    },
    buttonText: {
        color: '#f7f0ea',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default CreateAccount;