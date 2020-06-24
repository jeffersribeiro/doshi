import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {auth, database} from '../../services/firebase';
import PropTypes from 'prop-types';
import {CommonActions} from '@react-navigation/native';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  handleUsernameChange = username => {
    this.setState({username});
  };
  handleEmailChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  handleSignUpPress = () => {
    const {email, password, username} = this.state;
    if (!email || !password) {
      this.setState({error: 'Preencha e-mail e senha para continuar!'});
    } else {
      this.setState({
        loading: true,
      });
      auth.createUserWithEmailAndPassword(email, password).then(res => {
        let uid = auth.currentUser.uid;
        let updates = {};
        updates['/items/' + uid] = {
          username: username,
          email: email,
        };
        database
          .ref()
          .update(updates)
          .then(() => {
            this.setState({
              username: '',
              email: '',
              password: '',
              loading: false,
            });
            this.props.navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: 'SignIn',
                  },
                ],
              }),
            );
          });
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Image
          style={styles.logo}
          source={require('../../assets/images/web_hi_res_512.png')}
        />
        <TextInput
          textContentType="username"
          onChangeText={this.handleUsernameChange}
          style={styles.Input}
          value={this.state.username}
          placeholder="Nome"
        />
        <TextInput
          textContentType="emailAddress"
          onChangeText={this.handleEmailChange}
          value={this.state.email}
          style={styles.Input}
          placeholder="E-mail"
        />
        <TextInput
          textContentType="newPassword"
          onChangeText={this.handlePasswordChange}
          value={this.state.password}
          style={styles.Input}
          placeholder="senha"
        />
        <TouchableOpacity
          onPress={this.handleSignUpPress}
          style={styles.Button}>
          {this.state.loading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <Text style={styles.ButtonText}>Cadastrar</Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}
