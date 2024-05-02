import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 30,
    flex: 1,
    gap: 20,
    backgroundColor: '#212121',
    alignItems: 'center',
  },
  headContainer: {
    width: '95%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    gap: 10,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'cursive',
    color: 'black',
    fontWeight: 'bold',
  },
  infoContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    gap: 20,
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#e96989',
    alignItems: 'center',
    margin: 10,
  },
  image: {height: 80, width: 80, borderRadius: 20},
  detailContainer: {flexDirection: 'column'},
  text: {
    fontSize: 15,
    color: 'beige',
  },
});
