import React from 'react';
import {
  View,
  TextInput,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Text,
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
    verb_type: 'verbo-ru',
    verb: '見る',
    furigana: 'みる',
    romaji: 'MIRU',
    negative: '見ません',
    negative_translate: 'não ver',
    past: '見ました	',
    past_translate: 'vi',
    connective: '見て',
    connective_translate: 'ver e ...',
    potential: '見られる',
    potential_translate: 'pode ver',
    negative_past: '見ませんでした',
    negative_past_translate: 'não vi',
    notes: '私はテレビで見て食べています。',
    notes_translate: 'Estou assistindo e comendo na TV.',
    error: '',
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
      !past_translate ||
      !connective ||
      !connective_translate ||
      !potential ||
      !potential_translate ||
      !negative_past ||
      !negative_past_translate ||
      !notes ||
      !notes_translate
    ) {
      this.setState({error: 'Preencha todos os campos para continuar!'});
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
        <TouchableOpacity
          onPress={this.handleSignUpPress}
          style={styles.Button}>
          {this.state.loading ? (
            <ActivityIndicator size="large" color="white" />
          ) : (
            <Text style={styles.ButtonText}>Salvar</Text>
          )}
        </TouchableOpacity>
        <ScrollView>
          <TextInput
            placeholder="Tipo de verbo"
            value={this.state.verb_type}
            onChangeText={this.handleVerbTypeChange}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.InputType}
          />
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Verbo"
              value={this.state.verb}
              onChangeText={this.handleVerbChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.InputMini}
            />
            <TextInput
              placeholder="furigana"
              value={this.state.furigana}
              onChangeText={this.handleFuriganaChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.InputMini}
            />
            <TextInput
              placeholder="Romaji"
              value={this.state.romaji}
              onChangeText={this.handleRomajiChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.InputMini}
            />
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Negativa"
              value={this.state.negative}
              onChangeText={this.handleNegativeChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
            <TextInput
              placeholder="Tradução"
              value={this.state.negative_translate}
              onChangeText={this.handleNegativeChangeTranslate}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="Passada"
              value={this.state.past}
              onChangeText={this.handlePastChange}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
            />
            <TextInput
              placeholder="Tradução"
              value={this.state.past_translate}
              onChangeText={this.handlePastChangeTranslate}
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.Input}
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
          {this.state.error.length !== 0 && (
            <Text style={styles.ErrorMessage}>{this.state.error}</Text>
          )}
        </ScrollView>
      </View>
    );
  }
}
