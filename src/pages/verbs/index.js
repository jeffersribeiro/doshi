import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
  RefreshControl,
  ScrollView,
  StatusBar,
} from 'react-native';
import styles from './styles';
import {auth, database} from '../../services/firebase';
import {Item} from './components/flat-list';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      DATA: [],
      loading: true,
      refreshing: false,
    };
  }

  readTask = () => {
    let uid = auth.currentUser.uid;
    var task = database.ref(`items/${uid}/myverbs`);
    let taks = [];
    task.on('child_added', data => {
      taks.push({
        id: data.val().id,
        verb_type: data.val().verb_type,
        verb: data.val().verb,
        furigana: data.val().furigana,
        romaji: data.val().romaji,
        negative: data.val().negative,
        negative_translate: data.val().negative_translate,
        past: data.val().past,
        past_translate: data.val().past_translate,
        potential: data.val().potential,
        potential_translate: data.val().potential_translate,
        negative_past: data.val().negative_past,
        negative_past_translate: data.val().negative_past_translate,
        connective: data.val().connective,
        connective_translate: data.val().connective_translate,
        notes: data.val().notes,
        notes_translate: data.val().notes_translate,
      });
      this.setState({
        DATA: taks,
        loading: false,
      });
    });
  };

  wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  onRefresh = () => {
    this.readTask();
    this.setState({
      refreshing: true,
    });
    this.wait(2000).then(() => {
      this.setState({
        refreshing: false,
      });
    });
  };

  componentDidMount() {
    this.readTask();
  }

  render() {
    const {DATA} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          {this.state.loading ? (
            <ActivityIndicator
              style={styles.loading}
              color="skyblue"
              size={40}
            />
          ) : (
            <View>
              <FlatList
                data={DATA}
                renderItem={({item}) => (
                  <Item
                    id={item.id}
                    verb_type={item.verb_type}
                    verb={item.verb}
                    furigana={item.furigana}
                    romaji={item.romaji}
                    negative={item.negative}
                    negative_translate={item.negative_translate}
                    past={item.past}
                    past_translate={item.past_translate}
                    potential={item.potential}
                    potential_translate={item.potential_translate}
                    negative_past={item.negative_past}
                    negative_past_translate={item.negative_past_translate}
                    connective={item.connective}
                    connective_translate={item.connective_translate}
                    notes={item.notes}
                    notes_translate={item.notes_translate}
                  />
                )}
              />
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
