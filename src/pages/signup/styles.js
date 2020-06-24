import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    height: '30%',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  Input: {
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    marginBottom: '6%',
    width: '80%',
    borderBottomWidth: 0.5,
    fontSize: 16,
  },
  Button: {
    padding: '4%',
    borderRadius: 5,
    backgroundColor: '#53aded',
    marginVertical: '10%',
    width: '80%',
  },
  ButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
