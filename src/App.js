import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, Animated } from 'react-native';
import Header from './components/Header.js';
import VideoPlayer from './components/VideoPlayer.js';
import BettingRow from './components/BettingRow.js';
import { createAnimationConfig } from './utils/animationConfig.js';

const generateNewResult = () => ({
  value: '123/5',
  time: '08:30',
});

const shiftResults = (results) => {
  const newResults = [...results];
  newResults.splice(newResults.length - 1, 1);
  newResults.unshift(generateNewResult());
  return newResults;
};

const App = () => {
  const [rows, setRows] = useState([
    {
      id: 'bhagyashri1',
      header: 'bhagyashri',
      time: '08:00',
      results: Array(5).fill().map(() => generateNewResult()),
    },
    {
      id: 'bhagyashri2',
      header: null,
      time: '08:00',
      results: Array(5).fill().map(() => generateNewResult()),
    },
    {
      id: 'market1',
      header: 'Market 1',
      time: '08:00',
      results: Array(5).fill().map(() => generateNewResult()),
    },
    {
      id: 'market2',
      header: 'Market 2',
      time: '08:00',
      results: Array(5).fill().map(() => generateNewResult()),
    },
    {
      id: 'market3',
      header: 'Market 3',
      time: '08:00',
      results: Array(5).fill().map(() => generateNewResult()),
    },
    {
      id: 'market4',
      header: 'Market 4',
      time: '08:00',
      results: Array(5).fill().map(() => generateNewResult()),
    },
  ]);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRows(currentRows =>
        currentRows.map(row => ({
          ...row,
          results: shiftResults(row.results),
        }))
      );

      // Simple animation config if the import fails
      const animConfig = {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      };

      Animated.timing(fadeAnim, animConfig).start(() => fadeAnim.setValue(0));
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ 
      marginBottom: 1, 
      marginHorizontal: 6,
      marginTop: 0, // Remove any top margin
    }}>
      {item.header ? (<View style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: 8, // Increased from 3 to 8
        marginBottom: 0.5,
        height: item.id.includes('market') ? 16 : 40, // Made market headers much thinner (16px), kept Bhagyashri tall (40px)
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.15)',
        background: 'linear-gradient(145deg, #1a1a1a 0%, #2c2c2c 100%)'
      }}><Text style={{ 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '500',
        color: '#ffffff',
        fontSize: item.id.includes('market') ? 10 : 16, // Made market text smaller
        lineHeight: item.id.includes('market') ? 12 : 24, // Adjusted line height for thinner market headers
        textAlign: 'center',
        width: '100%',
        padding: 0.5,
        paddingHorizontal: 12,
        letterSpacing: 0.5, // Added letter spacing for clarity
        textTransform: 'capitalize' // Ensures proper capitalization
      }}>{item.header}</Text></View>) : null}
      <BettingRow rowData={item} hideResultTime={item.id === 'bhagyashri2'} />
    </View>
  );

  return (<View style={{ flex: 1, backgroundColor: '#EBF4FF' }}>
    <Header />
    <View style={{ 
      flex: 1, 
      flexDirection: 'row', 
      backgroundColor: '#EBF4FF',
      height: 'calc(100vh - 100px)', // Subtract header height
      overflow: 'hidden',            // Prevent scrolling
    }}>
      <View style={{ 
        flex: 0.45,
        backgroundColor: '#EBF4FF',
        borderRightWidth: 1, 
        borderRightColor: '#e0e0e0',
        overflow: 'hidden',          // Prevent scrolling
      }}><VideoPlayer /></View>
      <View style={{ 
        flex: 0.55,
        padding: 4,
        paddingRight: 2,
        backgroundColor: '#EBF4FF',
        overflow: 'auto',           // Allow scrolling only in right panel
      }}><FlatList
        data={rows}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 0 // Remove FlatList content top padding
        }}
      /></View>
    </View>
    <Animated.View style={{ 
      position: 'absolute', 
      top: 50, 
      left: 0, 
      right: 0, 
      alignItems: 'center', 
      opacity: fadeAnim,
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
    }}><Text style={{ 
      fontSize: 18, 
      color: '#333333', 
      backgroundColor: '#f8f8f8',
      padding: 10, 
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#e0e0e0'
    }}>New Results Updated!</Text></Animated.View>
  </View>);
};

export default App;