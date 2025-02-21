import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Platform, Text } from 'react-native';
import { WebView } from 'react-native-webview';

// Check if `react-native-video` is available
let Video;
if (Platform.OS !== 'web') {
  try {
    Video = require('react-native-video').default;
  } catch (error) {
    console.error("❌ Error loading react-native-video:", error);
  }
}

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [screenSize, setScreenSize] = useState(Dimensions.get('window'));

  useEffect(() => {
    // Update dimensions when screen size changes
    const onResize = () => setScreenSize(Dimensions.get('window'));

    Dimensions.addEventListener('change', onResize);
    return () => Dimensions.removeEventListener('change', onResize);
  }, []);

  useEffect(() => {
    // Update time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.container, { height: screenSize.height }]}>
      {/* Main Header (Full Width) */}
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeaderText}>📺 My Custom TV App</Text>
      </View>

      <View style={styles.content}>
        {/* Left Side: Video / Content */}
        <View style={styles.leftPanel}>
          {Platform.OS !== 'web' && Video ? (
            <Video 
              source={{ uri: 'https://yourvideourl.com/video.mp4' }}
              style={styles.video}
              resizeMode="cover"
              repeat
              controls={false}
            />
          ) : (
            <Text style={styles.notSupportedText}>
              Video not supported on Web
            </Text>
          )}
        </View>

        {/* Right Side: Header + Five Columns */}
        <View style={styles.rightSection}>
          {/* Header for the Columns Only */}
          <View style={styles.columnHeader}>
            <Text style={styles.columnHeaderText}>🔹 Column Section</Text>
          </View>

          {/* Five Vertical Columns */}
          <View style={styles.rightPanel}>
            <View style={styles.column}><Text style={styles.text}>🕒 {currentTime}</Text></View>
            <View style={styles.column}><Text style={styles.text}>Column 2</Text></View>
            <View style={styles.column}><Text style={styles.text}>Column 3</Text></View>
            <View style={styles.column}><Text style={styles.text}>Column 4</Text></View>
            <View style={styles.column}><Text style={styles.text}>Column 5</Text></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainHeader: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  mainHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  leftPanel: {
    flex: 0.55,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  notSupportedText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },

  // Right section (Column Header + Columns)
  rightSection: {
    flex: 0.45,
  },

  // Sub-header only for the columns
  columnHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
  },
  columnHeaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  rightPanel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#222',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  column: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
