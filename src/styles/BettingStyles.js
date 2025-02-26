import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bettingRow: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingHorizontal: 4,
    alignItems: 'center',
    borderRadius: 4,
  },
  timeColumn: {
    width: '15%',
    aspectRatio: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    borderRadius: 6,
    borderColor: '#555',
    borderWidth: 1,
    margin: 2,
  },
  timeText: {
    color: '#FF0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultBoxWrapper: {
    width: '17%',
    aspectRatio: 1.5,
    margin: 2,
  },
  resultBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderRadius: 6,
    backgroundColor: '#222',
    borderColor: '#555',
    borderWidth: 1,
  },
  resultValue: {
    fontSize: 24,
    color: '#fff',
    fontWeight: '600',
  },
  resultTime: {
    fontSize: 16,
    color: '#FF4500',
    marginTop: 4,
  },
});
