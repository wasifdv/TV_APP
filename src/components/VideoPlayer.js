import React from 'react';
import { Platform, View, Text } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
  if (Platform.OS === 'web') {
    return (
      <View style={{
        flex: 1,
        position: 'relative',
        backgroundColor: '#000',
      }}>
        <video 
          controls 
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 8,
          }}
        >
          <source src="https://www.example.com/video.mp4" type="video/mp4" />
        </video>
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 40,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}>
          <Text style={{ color: '#fff', fontSize: 16 }}>0:00</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{
      flex: 1,
      position: 'relative',
      backgroundColor: '#000',
    }}>
      <Video
        source={{ uri: 'https://www.example.com/video.mp4' }}
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 8,
        }}
        controls
        resizeMode="contain"
        onError={error => console.error('Video Error:', error)}
      />
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
        <Text style={{ color: '#fff', fontSize: 16 }}>0:00</Text>
      </View>
    </View>
  );
};

export default VideoPlayer;
