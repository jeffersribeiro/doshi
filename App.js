import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';

export function FancyButton(props) {
  return (
    <Button
      theme={{
        mode: 'adaptive',
        colors: {background: 'blue', primary: 'blue'},
        dark: false,
        fonts: {medium: 'Open Sans'},
      }}
      {...props}
    />
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <FancyButton onPress={() => console.warn('clicked')}>
        <Text>Hello</Text>
      </FancyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
});
