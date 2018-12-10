import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { Header, Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Messages from './Messages';
import InputBar from './InputBar';
import HeaderBar from './HeaderBar';

// react-native link react-native-vector-icons

const ChatView = (props) => (
    <View style={style.chat}>
        <HeaderBar />
        <Messages messages={props.messages} />
        <InputBar {...props} />
    </View>
);

const style = StyleSheet.create({
    chat: {
        flex: 1
    }
});

export default ChatView;

