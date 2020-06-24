import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderConfig: {width: 200, height: 20},
  scrollView: {
    backgroundColor: 'white',
  },
  scrollContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    maxWidth: '70%',
    maxHeight: '30%',
  },

  textStyle: {
    textAlign: 'center',
    padding: 16,
    fontSize: 14,
    color: '#141515',
  },
  numberSize: {
    fontSize: 14,
    color: '#141515',
  },
  contactStyles: {
    marginVertical: '2%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  configStyles: {
    marginVertical: '2%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  titleStyle: {
    width: 335,
    backgroundColor: 'white',
    paddingBottom: '5%',
    borderBottomWidth: 0.5,
    color: '#262626',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
  },
});

export default styles;
