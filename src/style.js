import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  leftPanel: {
    width: '50%',
    padding: 10,
    borderRightWidth: 2,
    borderRightColor: 'red',
  },
  rightPanel: {
    width: '50%',
    padding: 10,
  },
  videoContainer: {
    borderWidth: 3,
    borderColor: 'red',
  },
  liveBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gridItem: {
    width: '30%',
    margin: '1%',
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
