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
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    transform: [{ translateZ: 0 }], // Hardware acceleration
  },
  gridItem: {
    width: '32%',
    marginBottom: 10,
    aspectRatio: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateZ: 0 }], // Hardware acceleration
    willChange: 'transform', // Performance hint
  },
  timeText: {
    color: 'red',
    fontWeight: 'bold',
  },
});
