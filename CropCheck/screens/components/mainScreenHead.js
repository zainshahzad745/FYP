// MainScreenHead.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import moment from 'moment';
const footerimg = require('../../assets/head1.png');

const MainScreenHead = () => {
  // Get the current date and day using moment
  const currentDate = moment().format('MMMM D, YYYY');
  const currentDay = moment().format('dddd');

  return (
    <ImageBackground
      source={footerimg} // Set the path to your background image
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Left side */}
        <View style={styles.leftContainer}>
          <Text style={styles.textLeft}>Hi There!</Text>
          <Text style={styles.textLeft}>Have a great day ! 🌱</Text>
        </View>

        {/* Right side */}
        <View style={styles.rightContainer}>
          <Text style={styles.textRight}>{currentDate}</Text>
          <Text style={styles.textRight}>{currentDay}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const { height } = Dimensions.get('window');
const componentHeight = height * 0.2;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '10',
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    height: componentHeight,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  textRight: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
});

export default MainScreenHead;
