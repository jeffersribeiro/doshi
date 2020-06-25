import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
  },
  card: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 12,
    marginBottom: 15,
    marginTop: 10,
  },
  containerInputs: {display: 'flex', flexDirection: 'row'},
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Sriracha',
    paddingHorizontal: 20,
  },
  lastText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
    fontFamily: 'Sriracha',
    paddingHorizontal: 20,
  },
  loading: {
    height: Dimensions.get('screen').height,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
