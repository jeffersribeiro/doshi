import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '3%',
    marginLeft: '7%',
  },
  Input: {
    paddingHorizontal: 15,
    width: '75%',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderBottomWidth: 0.5,
    marginHorizontal: '4%',
    fontSize: 16,
  },
  Button: {marginLeft: '2%', marginTop: '3.5%'},
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 19,
    textAlign: 'center',
  },
  listView: {margin: 12, borderBottomWidth: 0.5, paddingBottom: 15},
  loading: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default styles;
