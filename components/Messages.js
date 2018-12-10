import React, { Component } from 'react';
import {Platform, StyleSheet, Text, ScrollView, Divider, View} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Message from './Message';

const Messages = (props) => {
    const messages = props.messages.map(message => (
        <Message {...message} key={message.id} />
    ));
    return(
        <ScrollView style={style.message}>
            {messages}
        </ScrollView>
    );
};

const style = StyleSheet.create({
    message: {
        flex: 1,
        backgroundColor: 'purple',
        alignSelf: 'stretch'
    }
});

export default Messages;