import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({ // Corrected export
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: '#000',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
