import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  videoWrapper: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  videoControls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  videoTime: {
    color: '#fff',
    fontSize: 16,
  },
});
