import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import {auth} from '../../services/firebase';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: 'jefferson@doshi.com',
    password: '985504lj',
    error: '',
    loading: false,
  };

  handleEmailChange = email => {
    this.setState({email});
  };

  handlePasswordChange = password => {
    this.setState({password});
  };

  handleCreateAccountPress = () => {
    this.props.navigation.navigate('SignUp');
  };

  handleCreatePromotersPress = () => {
    this.props.navigation.navigate('Promoter');
  };

  handleSignInPress = async () => {
    const {email, password} = this.state;
    if (this.state.email.length === 0 || this.state.password.length === 0) {
      this.setState(
        {error: 'Preencha usuário e senha para continuar!'},
        () => false,
      );
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.navigate('DrawerNavigation');
        })
        .catch(() => {
          this.setState({
            error:
              'Houve um problema com o login, verifique suas credenciais. T.T',
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
          placeholder="Endereço de e-mail"
          value={this.state.email}
          onChangeText={this.handleEmailChange}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.Input}
        />
        <TextInput
          style={styles.Input}
          placeholder="Senha"
          value={this.state.password}
          onChangeText={this.handlePasswordChange}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
        {this.state.error.length !== 0 && (
          <Text style={styles.ErrorMessage}>{this.state.error}</Text>
        )}
        <TouchableOpacity
          onPress={this.handleSignInPress}
          style={styles.Button}>
          <Text style={styles.ButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleCreateAccountPress}
          style={styles.Button}>
          <Text style={styles.ButtonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
