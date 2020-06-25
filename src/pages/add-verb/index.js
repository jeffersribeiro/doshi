import React from 'react';
import {
  View,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import {auth, database} from '../../services/firebase';

import styles from './styles';

export default class NewDoshi extends React.Component {
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
    verb_type: '',
    verb: '',
    furigana: '',
    romaji: '',
    negative: '',
    negative_translate: '',
    past: '',
    past_translate: '',
    connective: '',
    connective_translate: '',
    potential: '',
    potential_translate: '',
    negative_past: '',
    negative_past_translate: '',
    notes: '',
    notes_translate: '',
    error: '',
    colorErrorIndicator: 'darkgray',
    loading: false,
  };

  handleVerbTypeChange = verb_type => {
    this.setState({verb_type});
  };
  handleVerbChange = verb => {
    this.setState({verb});
  };
  handleFuriganaChange = furigana => {
    this.setState({furigana});
  };
  handleRomajiChange = romaji => {
    this.setState({romaji});
  };
  handleNegativeChange = negative => {
    this.setState({negative});
  };
  handlePastChange = past => {
    this.setState({past});
  };
  handleConnectiveChange = connective => {
    this.setState({connective});
  };
  handlePotentialChange = potential => {
    this.setState({potential});
  };
  handleNegativePastChange = negative_past => {
    this.setState({negative_past});
  };
  handleNotesChange = notes => {
    this.setState({notes});
  };

  handleNegativeChangeTranslate = negative_translate => {
    this.setState({negative_translate});
  };
  handlePastChangeTranslate = past_translate => {
    this.setState({past_translate});
  };
  handleConnectiveChangeTranslate = connective_translate => {
    this.setState({connective_translate});
  };
  handlePotentialChangeTranslate = potential_translate => {
    this.setState({potential_translate});
  };
  handleNegativePastChangeTranslate = negative_past_translate => {
    this.setState({negative_past_translate});
  };
  handleNotesChangeTranslate = notes_translate => {
    this.setState({notes_translate});
  };
  handleSignUpPress = () => {
    const {
      verb_type,
      verb,
      furigana,
      romaji,
      negative,
      negative_translate,
      past,
      past_translate,
      connective,
      connective_translate,
      potential,
      potential_translate,
      negative_past,
      negative_past_translate,
      notes,
      notes_translate,
    } = this.state;
    if (
      !verb_type ||
      !verb ||
      !furigana ||
      !romaji ||
      !negative ||
      !negative_translate ||
      !past ||
      !past_translate
    ) {
      this.setState({
        error: 'Preencha os campos para continuar!',
        colorErrorIndicator: 'red',
      });
      setTimeout(() => {
        this.setState({
          error: '',
          colorErrorIndicator: 'darkgray',
        });
      }, 4000);
    } else {
      this.setState({
        loading: true,
      });
      let newKeyId = database.ref().push().key;
      let uid = auth.currentUser.uid;
      database
        .ref(`/items/${uid}/myverbs/${newKeyId}`)
        .set({
          id: newKeyId,
          verb_type: verb_type,
          verb: verb,
          furigana: `「${furigana}」`,
          romaji: `"${romaji}"`,
          negative: negative,
          negative_translate: negative_translate,
          past: past,
          past_translate: past_translate,
          connective: connective,
          connective_translate: connective_translate,
          potential: potential,
          potential_translate: potential_translate,
          negative_past: negative_past,
          negative_past_translate: negative_past_translate,
          notes: notes,
          notes_translate: notes_translate,
        })
        .then(() => {
          this.setState({
            verb_type: '',
            verb: '',
            furigana: '',
            romaji: '',
            negative: '',
            negative_translate: '',
            past: '',
            past_translate: '',
            connective: '',
            connective_translate: '',
            potential: '',
            potential_translate: '',
            negative_past: '',
            negative_past_translate: '',
            notes: '',
            notes_translate: '',
            error: '',
            loading: false,
          });
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <View style={styles.containerButton}>
          <TouchableOpacity
            onPress={this.handleSignUpPress}
            style={styles.Button}>
            {this.state.loading ? (
              <ActivityIndicator size="large" color="white" />
            ) : (
              <Text style={styles.ButtonText}>Salvar</Text>
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.errorMsgContainer}>
          {this.state.error.length !== 0 && (
            <Text style={styles.ErrorMessage}>{this.state.error}</Text>
          )}
        </View>
        <ScrollView>
          <TextInput
            placeholderTextColor={this.state.colorErrorIndicator}
            placeholder="Tipo de verbo"
            value={this.state.verb_type}
            onChangeText={this.handleVerbTypeChange}
            autoCapitalize="none"
            autoCorrect={false}
            style={[
              styles.InputType,
              {borderBottomColor: this.state.colorErrorIndicator},
            ]}
          />
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Verbo"
              placeholderTextColor={this.state.colorErrorIndicator}
              value={this.state.verb}
              onChangeText={this.handleVerbChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.InputMini,
                {borderBottomColor: this.state.colorErrorIndicator},
              ]}
            />
            <TextInput
              placeholder="furigana"
              placeholderTextColor={this.state.colorErrorIndicator}
              value={this.state.furigana}
              onChangeText={this.handleFuriganaChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.InputMini,
                {borderBottomColor: this.state.colorErrorIndicator},
              ]}
            />
            <TextInput
              placeholder={'Romaji\nopcional'}
              placeholderTextColor={this.state.colorErrorIndicator}
              value={this.state.romaji}
              onChangeText={this.handleRomajiChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.InputMini,
                {borderBottomColor: this.state.colorErrorIndicator},
              ]}
            />
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Negativa"
              placeholderTextColor={this.state.colorErrorIndicator}
              value={this.state.negative}
              onChangeText={this.handleNegativeChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.Input,
                {borderBottomColor: this.state.colorErrorIndicator},
              ]}
            />
            <TextInput
              placeholder="Tradução"
              placeholderTextColor={this.state.colorErrorIndicator}
              value={this.state.negative_translate}
              onChangeText={this.handleNegativeChangeTranslate}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.Input,
                {borderBottomColor: this.state.colorErrorIndicator},
              ]}
            />
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Passada"
              placeholderTextColor={this.state.colorErrorIndicator}
              value={this.state.past}
              onChangeText={this.handlePastChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.Input,
                {borderBottomColor: this.state.colorErrorIndicator},
              ]}
            />
            <TextInput
              placeholder="Tradução"
              placeholderTextColor={this.state.colorErrorIndicator}
              value={this.state.past_translate}
              onChangeText={this.handlePastChangeTranslate}
              autoCapitalize="none"
              autoCorrect={false}
              style={[
                styles.Input,
                {borderBottomColor: this.state.colorErrorIndicator},
              ]}
            />
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Conectiva"
              value={this.state.connective}
              onChangeText={this.handleConnectiveChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
            <TextInput
              placeholder="Tradução"
              value={this.state.connective_translate}
              onChangeText={this.handleConnectiveChangeTranslate}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Potencial"
              value={this.state.potential}
              onChangeText={this.handlePotentialChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
            <TextInput
              placeholder="Tradução"
              value={this.state.potential_translate}
              onChangeText={this.handlePotentialChangeTranslate}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder={'Passada\nNegativa'}
              value={this.state.negative_past}
              onChangeText={this.handleNegativePastChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
            <TextInput
              placeholder="Tradução"
              value={this.state.negative_past_translate}
              onChangeText={this.handleNegativePastChangeTranslate}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Notas"
              value={this.state.notes}
              onChangeText={this.handleNotesChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
            <TextInput
              placeholder="Tradução"
              value={this.state.notes_translate}
              onChangeText={this.handleNotesChangeTranslate}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
