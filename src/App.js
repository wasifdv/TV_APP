import React from 'react';
import { View, Text, StyleSheet, FlatList, Platform, Dimensions } from 'react-native';
import { Video } from 'react-native-video';

const { width, height } = Dimensions.get('window');

const bettingData = [
  { time: '17:19:44', col2: 'Item 68', col3: 'Item 78', col4: 'Item 74', col5: 'Item 25' },
  { time: '17:19:43', col2: 'Item 62', col3: 'Item 22', col4: 'Item 39', col5: 'Item 55' },
  { time: '17:19:42', col2: 'Item 11', col3: 'Item 85', col4: 'Item 17', col5: 'Item 42' },
  { time: '17:19:41', col2: 'Item 99', col3: 'Item 31', col4: 'Item 56', col5: 'Item 78' },
  { time: '17:19:40', col2: 'Item 45', col3: 'Item 67', col4: 'Item 23', col5: 'Item 91' },
];

const App = () => {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>📺 My Custom TV App</Text>
      </View>

      {/* Full-Screen Main Content */}
      <View style={styles.contentContainer}>
        
        {/* Video Section */}
        <View style={styles.videoContainer}>
          {Platform.OS === 'web' ? (
            <Text style={styles.videoFallback}>🎬 Video Not Supported on Web</Text>
          ) : (
            <Video
              source={{ uri: 'https://www.example.com/video.mp4' }} // Replace with actual video URL
              style={styles.video}
              controls
              resizeMode="contain"
            />
          )}
        </View>

        {/* Betting Board */}
        <View style={styles.boardContainer}>
          <Text style={styles.bettingHeader}>⚡ Betting Board</Text>
          <View style={styles.table}>
            
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <Text style={styles.columnHeader}>Time</Text>
              <Text style={styles.columnHeader}>Col 2</Text>
              <Text style={styles.columnHeader}>Col 3</Text>
              <Text style={styles.columnHeader}>Col 4</Text>
              <Text style={styles.columnHeader}>Col 5</Text>
            </View>

            {/* Table Rows */}
            <FlatList
              data={bettingData}
              keyExtractor={(item) => item.time}
              renderItem={({ item, index }) => (
                <View style={[styles.row, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
                  <Text style={styles.cell}>{item.time}</Text>
                  <Text style={styles.cell}>{item.col2}</Text>
                  <Text style={styles.cell}>{item.col3}</Text>
                  <Text style={styles.cell}>{item.col4}</Text>
                  <Text style={styles.cell}>{item.col5}</Text>
                </View>
              )}
            />
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    width: width, // Full width
    height: height, // Full height
  },
  header: {
    backgroundColor: '#222',
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#FFD700',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%', // Ensures full height
  },
  videoContainer: {
    flex: 1.5,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  videoFallback: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  video: {
    width: '90%',
    height: '90%',
  },
  boardContainer: {
    flex: 2,
    padding: 20,
    backgroundColor: '#222',
    height: '100%',
  },
  bettingHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
    textAlign: 'center',
  },
  table: {
    borderWidth: 1,
    borderColor: '#FFD700',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#333',
    paddingVertical: 8,
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 6,
  },
  rowEven: {
    backgroundColor: '#292929',
  },
  rowOdd: {
    backgroundColor: '#181818',
  },
  cell: {
    flex: 1,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default App;
