import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';

const Header = () => {
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');

  useEffect(() => {
    const startScrollAnimation = () => {
      scrollAnim.setValue(width);
      Animated.timing(scrollAnim, {
        toValue: -width * 2,
        duration: 20000,
        useNativeDriver: false // Use JS-based animation
      }).start(() => {
        // Reset and restart animation
        startScrollAnimation();
      });
    };

    startScrollAnimation();
    
    // Cleanup animation on unmount
    return () => {
      scrollAnim.stopAnimation();
    };
  }, [width]);

  return (
    <View style={{
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
      backgroundColor: '#EBF4FF', // Changed from '#ffffff' to match main app background
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderBottomWidth: 2,
      borderBottomColor: '#e0e0e0',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden', // Important for marquee effect
      position: 'relative',  // Added position relative
      zIndex: 2,            // Added higher z-index
    }}>
      <Animated.Text style={{
        color: '#333333',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        transform: [{ translateX: scrollAnim }],
        whiteSpace: 'nowrap', // Prevent text wrapping
        letterSpacing: 1, // Added letter spacing
      }}>
        ⭐ Live Betting Channel — Welcome to Live Results — Today's Special Odds — Stay Tuned for More Updates — Live Betting Channel ⭐
      </Animated.Text>
    </View>
  );
};

export default Header;
