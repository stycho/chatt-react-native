import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ChatView from './components/ChatView';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      messageInput: '',
      userName: '',
      messages: []
    }
    // this.handleMessageInput = this.handleMessageInput.bind(this);
  }

  handleMessageInput = (newText) => {
    this.setState({
      messageInput: newText
    });
  };

  handleMessageSubmit = (Text) => {

  };

  componentDidMount() {
    
  }

  render() {
    return (
      <ChatView
        handleMessageSubmit={this.handleMessageSubmit}
        handleMessageInput={this.handleMessageInput}
        { ...this.state }
      />
    );
  }
}
