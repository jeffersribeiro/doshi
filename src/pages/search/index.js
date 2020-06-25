import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Feather';

const Item = ({definition, slug, word, type}) => {
  return (
    <View style={styles.listView}>
      <Text style={styles.textStyle}>{type}</Text>
      <Text style={styles.textStyle}>{slug}</Text>
      <Text style={styles.textStyle}>{word}</Text>
      <Text style={styles.textStyle}>{definition}</Text>
    </View>
  );
};
export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      DATA: [],
      loading: false,
    };
  }
  onSearchClick = () => {
    this.setState({
      loading: true,
    });
    const {word} = this.state;
    fetch(`https://jisho.org/api/v1/search/words?keyword=${word}`)
      .then(e => e.json())
      .then(res => {
        const {data} = res;
        this.setState({
          DATA: data,
          loading: false,
        });
      });
  };
  onWordChange = word => {
    this.setState({word});
  };

  render() {
    const {DATA} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={styles.searchContainer}>
            <TextInput
              value={this.state.word}
              onChangeText={word => this.onWordChange(word)}
              placeholder="Pesquisar"
              style={styles.Input}
            />
            <TouchableOpacity
              style={styles.Button}
              onPress={this.onSearchClick}>
              <Text>
                <Ionicons name={'search'} size={32} color={'darkgray'} />
              </Text>
            </TouchableOpacity>
          </View>
          <View />
          {this.state.loading ? (
            <View style={styles.loading}>
              <ActivityIndicator color="skyblue" size={40} />
            </View>
          ) : (
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <Item
                  type={item.senses[0].parts_of_speech[0]}
                  definition={item.senses[0].english_definitions[0]}
                  slug={item.slug}
                  // eslint-disable-next-line dot-notation
                  word={item.japanese[0]['reading']}
                />
              )}
            />
          )}
        </View>
      </SafeAreaView>
    );
  }
}
