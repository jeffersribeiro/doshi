import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Slider,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

export const globalFontSize = value => value;

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      fontSize: 16,
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          centerContent={true}
          style={styles.scrollView}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <Image
            style={styles.logo}
            source={require('../../assets/images/web_hi_res_512.png')}
          />
          <Text style={[styles.titleStyle, {fontSize: this.state.fontSize}]}>
            Configurações
          </Text>
          <Text style={[styles.textStyle, {fontSize: this.state.fontSize}]}>
            Tamanho da fonte
          </Text>
          <View style={styles.configStyles}>
            <Slider
              style={styles.sliderConfig}
              minimumValue={15}
              maximumValue={30}
              value={15}
              step={1}
              onValueChange={target => {
                let value = target.valueOf();
                globalFontSize(value);
                console.log(globalFontSize(), value);
              }}
              minimumTrackTintColor="darkgray"
              maximumTrackTintColor="darkgray"
            />
            <Text style={[styles.numberSize, {fontSize: this.state.fontSize}]}>
              {this.state.fontSize}
            </Text>
          </View>
          <Text style={[styles.titleStyle, {fontSize: this.state.fontSize}]}>
            Contatos
          </Text>
          <View style={styles.contactStyles}>
            <TouchableOpacity>
              <Text>
                <Ionicons name={'github-box'} size={40} color={'#191919'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                <Ionicons name={'instagram'} size={40} color={'#D250C2'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                <Ionicons name={'facebook-box'} size={40} color={'#1D6EB6'} />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>
                <Ionicons name={'linkedin-box'} size={40} color={'#12518D'} />
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[styles.titleStyle, {fontSize: this.state.fontSize}]}>
            Sobre
          </Text>
          <Text style={[styles.textStyle, {fontSize: this.state.fontSize}]}>
            Este App foi desenvolvido com o intuito de agilizar e ajudar a
            memorizar todo o conteudo estudado no curso de JAPONÊS.
          </Text>
          <Text style={[styles.titleStyle, {fontSize: this.state.fontSize}]}>
            Nota do desenvolvedor
          </Text>
          <Text>Feito em Santana de Parnaiba/SP com Muito ❤️</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
