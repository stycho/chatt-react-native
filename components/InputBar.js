import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const InputBar = ({ messageInput, handleMessageInput }) => (
    // <View style={style.bar}>
        <Input
            placeholder='Type here!'
            // rightIcon={{ type: 'font-awesome', name: 'send' }}
            value={messageInput}
            onChangeText={handleMessageInput}
            autoFocus={true}
            inputStyle={style.input}
            rightIconContainerStyle={style.icon}
            containerStyle={style.bar}
            inputContainerStyle={{borderBottomWidth: 0}}
        />
    // </View>
);

const style = StyleSheet.create({
    bar: {
        backgroundColor: '#393E46',
        padding: 10,
        width: '100%',
        margin:0
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 0,
        paddingHorizontal: 15,
        flex: 1,
        marginRight: 0
    },
    icon: {
        padding: 0,
        margin: 0
    }
});

export default InputBar;