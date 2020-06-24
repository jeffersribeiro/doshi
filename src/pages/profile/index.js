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
import styles from './style';

import {auth, database} from '../../services/firebase';
import PropTypes from 'prop-types';

export default class Profile extends Component {
  state = {
    username: '',
    document: '',
    address: '',
    email: '',
    phone: '',
    contactPerson: '',
    password: '',
    error: '',
    accessLevel: '',
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
  handleDocumentChange = document => {
    this.setState({document});
  };
  handleAddressChange = address => {
    this.setState({address});
  };
  handlePhoneChange = phone => {
    this.setState({phone});
  };
  handleContactPersonChange = contactPerson => {
    this.setState({contactPerson});
  };
  handleEmailChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  componentDidMount() {
    let uid = auth.currentUser.uid;
    database
      .ref('/items/' + uid)
      .once('value')
      .then(res => {
        this.setState({
          username: res.val().username,
          document: res.val().document,
          address: res.val().address,
          email: res.val().email,
          phone: res.val().phone,
          contactPerson: res.val().contactPerson,
          accessLevel: res.val().accessLevel,
        });
      });
  }

  handleSignUpPress = () => {
    const {
      email,
      username,
      document,
      contactPerson,
      phone,
      address,
      accessLevel,
    } = this.state;
    if (
      !email ||
      !username ||
      !document ||
      !contactPerson ||
      !phone ||
      !address
    ) {
      this.setState({
        loading: false,
        error: 'por favor altere alguma informação',
      });
    } else {
      this.setState({
        loading: true,
      });
      var postData = {
        username: username,
        document: document,
        address: address,
        email: email,
        phone: phone,
        contactPerson: contactPerson,
        accessLevel: accessLevel,
      };
      let uid = 44750896897;
      let updates = {};
      updates['/items/' + uid] = postData;
      database
        .ref()
        .update(updates)
        .then(() => {
          this.setState({
            loading: false,
          });
        })
        .catch(() => {
          this.setState({
            error:
              'Houve um problema com o login, verifique suas credenciais. T.T',
            loading: false,
          });
        });
    }
  };

  render() {
    return (
      <>
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
            placeholder="Nome do doador"
          />
          <TextInput
            textContentType="emailAddress"
            onChangeText={this.handleEmailChange}
            value={this.state.email}
            style={styles.Input}
            placeholder="E-mail"
          />
          <TouchableOpacity
            onPress={this.handleSignUpPress}
            style={styles.Button}>
            {this.state.loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text style={styles.ButtonText}>Atualizar</Text>
            )}
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
