import React from 'react';
import { View } from 'react-native';

const VideoPlayer = () => {
  return (
    <View style={{
      width: '100%',
      height: '100%',          // Fill parent completely
      position: 'relative',
      backgroundColor: '#EBF4FF',
      padding: 8,
      overflow: 'hidden',      // Prevent any scrolling
    }}>
      <View style={{
        width: '100%',
        height: '100%',
        borderWidth: 8,
        borderColor: '#FF0000',
        borderStyle: 'solid',
        borderRadius: 10,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img 
          src="/betting.jpg"
          style={{
            maxWidth: '83%',
            maxHeight: '83%',
            objectFit: 'contain',
            display: 'block',
          }}
          alt="Betting"
        />
      </View>
    </View>
  );
};

export default VideoPlayer;
