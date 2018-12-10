import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { Header, Button, ThemeProvider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

// react-native link react-native-vector-icons

const HeaderBar = (props) => (
    <Header
        leftComponent={{icon: 'edit', color: '#fff'}}
        centerComponent={{text: 'CHATT', style: {color: '#fff'}}}
        rightComponent={{icon: 'menu', color: '#fff'}}
        barStyle='light-content'
        //backgroundColor='#F8B500'
        outerContainerStyles={{backgroundColor: 'red'}}
    />
);

const style = StyleSheet.create({
    outerContainer: {
        height: 40, // Platform.OS === 'ios' ? 70 : 70 - 24
        margin: 50
    }
});

export default HeaderBar;

