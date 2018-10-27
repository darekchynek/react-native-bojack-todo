import React, { Component } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class LoginComponent extends Component {
  loginFacebookHandler = async () => {
    const { navigate } = this.props.navigation;
    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync('318205862291600', {
      permissions: ['public_profile', 'user_friends'],
    });
    if (type === 'success') {
      await fetch(
        `https://graph.facebook.com/me?fields=name,id&access_token=${token}`
      ).then(
        res => res.json()
      ).then(
        user => {
          console.log(user)
          this.props.loginFacebook(user, token);
          navigate('ItemList');
        }
      )
    }
  }

  render() {
    return (
      <View
        style={styles.container}>
        <Image source={require('../assets/bojack_memory.png')}/>
        <TouchableOpacity
          style={styles.button}
          onPress={this.loginFacebookHandler}>
          <Text style={styles.text}>Log in with facebook</Text>
        </TouchableOpacity>
      </View>
    )
  };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff'
    },
    text: {
      color: '#ffffff',
      fontSize: 20
    },
    textName: {
      color: '#ffffff',
      fontSize: 26
    },
    button: {
      backgroundColor: 'rgba(59,89,152, 0.95)',
      borderRadius: 7,
      padding: 15
    }
  });

  const mapStateToProps = state => ({
    loginData: state.login.user
  });
  
  const mapDispatchToProps = dispatch => ({
    loginFacebook: (user, token) => dispatch(actions.loginFacebook(user, token)),
  });

  export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);