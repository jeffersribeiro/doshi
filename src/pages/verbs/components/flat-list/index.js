import React from 'react';
import {Text, View} from 'react-native';
import FlipCard from 'react-native-flip-card';
import styles from '../../styles';

export const Item = ({
  connective,
  id,
  selected,
  onSelect,
  connective_translate,
  furigana,
  negative,
  negative_past,
  negative_past_translate,
  negative_translate,
  notes,
  notes_translate,
  past,
  past_translate,
  potential,
  potential_translate,
  romaji,
  verb,
  verb_type,
}) => {
  return (
    <View>
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}>
        {/* Face Side */}
        <View style={styles.card}>
          <Text style={styles.text}>{verb_type}</Text>
          <Text style={styles.text}>{verb}</Text>
          <Text style={styles.text}>{furigana}</Text>
          <Text style={styles.text}>{negative}</Text>
          <Text style={styles.text}>{past}</Text>
          <Text style={styles.text}>{connective}</Text>
          <Text style={styles.text}>{potential}</Text>
          <Text style={styles.text}>{negative_past}</Text>
          <Text style={styles.text}>{potential}</Text>
          <Text style={styles.lastText}>{notes}</Text>
        </View>
        {/* Back Side */}
        <View style={styles.card}>
          <Text style={styles.text}>{verb_type}</Text>
          <Text style={styles.text}>{verb}</Text>
          <Text style={styles.text}>{furigana}</Text>
          <Text style={styles.text}>{negative_translate}</Text>
          <Text style={styles.text}>{past_translate}</Text>
          <Text style={styles.text}>{connective_translate}</Text>
          <Text style={styles.text}>{potential_translate}</Text>
          <Text style={styles.text}>{negative_past_translate}</Text>
          <Text style={styles.text}>{potential_translate}</Text>
          <Text style={styles.lastText}>{notes_translate}</Text>
        </View>
      </FlipCard>
    </View>
  );
};
