import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  View,
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
      loading: false,
    };
  }

  readTask = () => {
    const {DATA} = this.state;
    let uid = auth.currentUser.uid;
    var task = database.ref(`items/${uid}/myverbs`);
    task.on('child_added', data => {
      DATA.push(data.val());
    });
  };

  render() {
    const {DATA} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {this.state.loading ? (
          <ActivityIndicator style={styles.loading} color="skyblue" size={40} />
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
            {this.readTask()}
          </View>
        )}
      </SafeAreaView>
    );
  }
}
