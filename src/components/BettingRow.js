import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Platform } from 'react-native';
import { createAnimationConfig } from '../utils/animationConfig.js';

const ResultBox = ({ result, hideResultTime }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Simple animation config if the import fails
    const animConfig = {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    };

    Animated.timing(fadeAnim, animConfig).start();
  }, [result]);

  return (
    <Animated.View style={[{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2, // Reduced padding to accommodate larger text
      borderRadius: 10, // Adjusted border radius
      backgroundColor: 'rgba(255, 255, 255, 0.95)', // Slightly transparent
      backdropFilter: 'blur(8px)', // Blur effect
      boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)', // Adjusted shadow
      transform: 'translateY(0)',
      transition: 'all 0.3s ease',
      ':hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 15px 20px -5px rgba(0, 0, 0, 0.1)', // Adjusted shadow
        backgroundColor: 'rgba(255, 255, 255, 1)',
      },
      border: '2px solid rgba(0, 0, 0, 0.15)', // Increased border thickness and darkness
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 1), rgba(248, 249, 250, 0.95))'
    }, { opacity: fadeAnim }]}>
      <Text style={{ 
        fontSize: 28, // Increased from 24
        color: '#1a1a1a', 
        fontWeight: '600',
        lineHeight: 30, // Added to control vertical space
        letterSpacing: -0.5
      }}>
        {result.value}
      </Text>
      {!hideResultTime && (
        <Text style={{ 
          fontSize: 18, // Increased from 16
          color: '#666666', 
          marginTop: 2, // Reduced from 4
          lineHeight: 20, // Added to control vertical space
          letterSpacing: -0.3
        }}>
          {result.time}
        </Text>
      )}
    </Animated.View>
  );
};

const BettingRow = ({ rowData, hideResultTime }) => (
  <View style={{
    flexDirection: 'row',
    backgroundColor: 'transparent',
    paddingHorizontal: 0.5,
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 1,
  }}>{/* Remove whitespace between tags */}
    <View style={{
      width: '16.5%', // Adjusted from 17%
      aspectRatio: 1.3, // Adjusted from 1.5
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      borderRadius: 10, // Adjusted border radius
      margin: 0.25,
      backdropFilter: 'blur(8px)',
      boxShadow: '0 8px 12px -3px rgba(0, 0, 0, 0.1)', // Adjusted shadow
      border: '2px solid rgba(0, 0, 0, 0.15)', // Increased border thickness and darkness
      background: 'linear-gradient(145deg, rgba(255, 255, 255, 1), rgba(248, 249, 250, 0.95))'
    }}>{/* Remove whitespace between tags */}
      {/* Only show time if it's not bhagyashri2 */}
      {rowData.id !== 'bhagyashri2' && (
        <Text style={{ 
          color: '#FF0000', 
          fontSize: 18, 
          fontWeight: '600',
          textAlign: 'center',
          letterSpacing: -0.3
        }}>{rowData.time}</Text>
      )}
    </View>{/* Remove whitespace between tags */}
    {rowData.results.map((result, idx) => (
      <View key={idx} style={{
        width: '16.5%', // Adjusted from 17%
        aspectRatio: 1.3, // Adjusted from 1.5
        margin: 0.25,
      }}>{/* Remove whitespace between tags */}
        <ResultBox result={result} hideResultTime={hideResultTime && rowData.id !== 'bhagyashri2'} />
      </View>
    ))}{/* Remove whitespace between tags */}
  </View>
);

export default BettingRow;
