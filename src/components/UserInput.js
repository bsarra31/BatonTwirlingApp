import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Texts from '../styles/Texts';

const UserInput = (props) => {

    const { placeHolder, keyboardType } = props;
    if (keyboardType === 'Password') {

    }
    return (
        <TextInput
            style={[Texts.input, {marginBottom: 10}]}
            placeholder={placeHolder}
            placeholderTextColor={'#C0BFC7'}
            keyboardType={keyboardType}
            secureTextEntry={placeHolder === 'Password' ? true : false}
        />
    )
};

export default UserInput;