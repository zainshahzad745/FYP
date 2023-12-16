// ImageComponent.js
import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ImageComponent = ({ onPress, size, imageSource, imageText }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.imageContainer, { width: size, height: size }]}>
        <Image
          source={imageSource} // Use the provided image source prop
          style={styles.image}
          
        />
        <Text style={styles.text}>{imageText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 8,
    // padding: 20,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 10,
  },
  text: {
    // marginLeft: 15,
    color: '#000000',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ImageComponent;
