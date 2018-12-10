import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

const Message = ({ username, date, message }) => (
    <View style={style.container}>
        <View style={style.info}>
            <Text style={style.name}>{username}</Text>
            <Text style={style.time}>{date}</Text>
        </View>
        <Text style={style.message}>{message}</Text>
    </View>
);

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignSelf: 'stretch',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    info: {
        flexDirection: 'row',
        marginBottom: 5
    },
    name: {
        color: 'gray',
        marginRight: 5,
        fontWeight: '600'
    },
    time: {
        color: 'silver'
    },
    message: {
        fontWeight: '300'
    }
    
});

export default Message;