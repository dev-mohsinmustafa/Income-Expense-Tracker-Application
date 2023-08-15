import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';



const DropShadowOnHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handlePressIn = () => {
    setIsHovered(true);
  };

  const handlePressOut = () => {
    setIsHovered(false);
  };

  const containerStyle = isHovered ? styles.containerHovered : styles.container;

  return (
    <TouchableHighlight
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={containerStyle}
      underlayColor="transparent"
    >
      <View>
        <Text style={styles.text}>Hover me</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // padding: 10,
    borderRadius: 8,
    elevation: 2, // Add elevation for the drop shadow effect
    shadowOffset: { width: 0, height: 4 }, // Add shadow offset for bottom shadow
    shadowOpacity: 0.5, // Adjust shadow opacity as needed
    shadowRadius: 3,
  },
  containerHovered: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 5, // Increase elevation for a stronger shadow effect
    shadowOffset: { width: 0, height: 6 }, // Add shadow offset for bottom shadow
    shadowOpacity: 0.7, // Adjust shadow opacity as needed
    shadowRadius: 4, // Adjust shadow radius as needed
  },
  text: {
    color: '#333',
    fontWeight: 'bold',
    elevation: 5,
    shadowColor: 'red',
  },
  
});

export default DropShadowOnHover;
