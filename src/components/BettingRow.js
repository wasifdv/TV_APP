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
      borderRadius: 8,
      backgroundColor: '#ffffff',
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
      transform: 'translateY(0)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
      },
      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
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
      width: '17%',
      aspectRatio: 1.5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 8,
      margin: 0.25,
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
      background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
    }}>{/* Remove whitespace between tags */}
      <Text style={{ 
        color: '#FF0000', 
        fontSize: 18, 
        fontWeight: '600',
        textAlign: 'center',
        letterSpacing: -0.3
      }}>{rowData.time}</Text>
    </View>{/* Remove whitespace between tags */}
    {rowData.results.map((result, idx) => (
      <View key={idx} style={{
        width: '17%',
        aspectRatio: 1.5,
        margin: 0.25,
      }}>{/* Remove whitespace between tags */}
        <ResultBox result={result} hideResultTime={hideResultTime && rowData.id !== 'bhagyashri2'} />
      </View>
    ))}{/* Remove whitespace between tags */}
  </View>
);

export default BettingRow;
