import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import { Video } from 'react-native-video';

const { width, height } = Dimensions.get('window');

const generateNewResult = () => ({
  value: '123/5',
  time: '08:30',
});

const shiftResults = (results) => {
  const newResults = [...results];
  newResults.splice(4, 1); // Remove the fifth item
  newResults.unshift(generateNewResult()); // Add a new item at the beginning
  return newResults;
};

const VideoPlayer = () => {
  if (Platform.OS === 'web') {
    return (
      <View style={styles.videoWrapper}>
        <video controls style={styles.video}>
          <source src="https://www.example.com/video.mp4" type="video/mp4" />
        </video>
        <View style={styles.videoControls}>
          <Text style={styles.videoTime}>0:00</Text>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.videoWrapper}>
      <Video
        source={{ uri: 'https://www.example.com/video.mp4' }}
        style={styles.video}
        controls
        resizeMode="contain"
        onError={error => console.error('Video Error:', error)}
      />
      <View style={styles.videoControls}>
        <Text style={styles.videoTime}>0:00</Text>
      </View>
    </View>
  );
};

const ResultBox = ({ result }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [result]);

  return (
    <Animated.View style={[styles.resultBox, { opacity: fadeAnim }]}>
      <Text style={styles.resultValue}>{result.value}</Text>
      <Text style={styles.resultTime}>{result.time}</Text>
    </Animated.View>
  );
};

const TimeCard = ({ time }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.timeCard, { opacity: fadeAnim }]}>
      <Text style={styles.timeCardText}>{time}</Text>
    </Animated.View>
  );
};

const BettingRow = ({ rowData, showTimeCard }) => {
  return (
    <View style={styles.row}>
      <View style={styles.timeColumn}>
        <Text style={styles.timeText}>{rowData.time}</Text>
      </View>
      {rowData.results.map((result, idx) => (
        <View key={idx} style={styles.resultBoxWrapper}>
          <ResultBox result={result} />
        </View>
      ))}
    </View>
  );
};

const App = () => {
  const [rows, setRows] = useState([
    {
      id: 'bhagyashri1',
      header: 'bhagyashri',
      time: '08:00',
      results: Array(4).fill().map(() => generateNewResult()),
    },
    {
      id: 'bhagyashri2',
      header: null,
      time: '08:00',
      results: Array(4).fill().map(() => generateNewResult()),
    },
    {
      id: 'market1',
      header: 'Market 1',
      time: '08:00',
      results: Array(4).fill().map(() => generateNewResult()),
    },
    {
      id: 'market2',
      header: 'Market 2',
      time: '08:00',
      results: Array(4).fill().map(() => generateNewResult()),
    },
    {
      id: 'market3',
      header: 'Market 3',
      time: '08:00',
      results: Array(4).fill().map(() => generateNewResult()),
    },
    {
      id: 'market4',
      header: 'Market 4',
      time: '08:00',
      results: Array(4).fill().map(() => generateNewResult()),
    },
    {
      id: 'market5',
      header: 'Market 5',
      time: '08:00',
      results: Array(4).fill().map(() => generateNewResult()),
    },
    {
      id: 'market6',
      header: 'Market 6',
      time: '08:00',
      results: Array(4).fill().map(() => generateNewResult()),
    },
  ]);
  const [showTimeCard, setShowTimeCard] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRows(currentRows => {
        return currentRows.map(row => ({
          ...row,
          results: shiftResults(row.results),
        }));
      });
      setShowTimeCard(prev => !prev);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        fadeAnim.setValue(0);
      });
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.header && (
        <Text
          style={[
            styles.rowHeader,
            item.header === 'bhagyashri' ? styles.bhagyashriHeader : styles.marketHeader,
          ]}>
          {item.header}
        </Text>
      )}
      <BettingRow rowData={item} showTimeCard={showTimeCard} />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.mainHeader}>
        <Text style={styles.mainHeaderText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry giving information byon its origins ...
        </Text>
      </View>

      <View style={styles.content}>
        <View style={styles.videoSection}>
          <VideoPlayer />
        </View>

        <View style={styles.resultsSection}>
          <View style={styles.resultCard}>
            <FlatList
              data={rows}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
      <Animated.View style={[styles.fadeContainer, { opacity: fadeAnim }]}>
        <Text style={styles.fadeText}>New Results Updated!</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  mainHeader: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  mainHeaderText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
  },
  videoSection: {
    flex: 1,
    backgroundColor: '#333',
  },
  videoWrapper: {
    flex: 1,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  videoControls: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  videoTime: {
    color: '#fff',
    fontSize: 14,
  },
  resultsSection: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  resultCard: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  itemContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  rowHeader: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#000',
  },
  bhagyashriHeader: {
    fontSize: 16,
    padding: 8,
  },
  marketHeader: {
    fontSize: 11,
    padding: 4,  // reduced padding
    paddingVertical: 2,  // even smaller vertical padding
    backgroundColor: '#333',  // slightly lighter background
  },
  timeColumn: {
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  timeText: {
    color: '#ff0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultBoxWrapper: {
    flex: 1,
    overflow: 'hidden',
  },
  resultBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    margin: 4,
    borderColor: '#000',
    borderWidth: 1,
  },
  resultValue: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  resultTime: {
    fontSize: 12,
    color: '#ff0000',
    marginTop: 4,
  },
  timeCard: {
    width: 80,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    opacity: 0,
  },
  timeCardText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  fadeContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  fadeText: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
});

export default App;