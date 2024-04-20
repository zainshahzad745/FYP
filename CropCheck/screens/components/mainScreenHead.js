// MainScreenHead.js
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Touchable, TouchableOpacity, Image } from 'react-native';
import moment from 'moment';
import SettingsModal2 from './SettingModal2';
const footerimg = require('../../assets/head1.png');


const MainScreenHead = ({navigation}) => {
  // Get the current date and day using moment
  const currentDate = moment().format('MMMM D, YYYY');
  const currentDay = moment().format('dddd');
  const [isModalVisible, setisModalVisible] = useState(false);
  const handleModalClick = () => {
    setisModalVisible(!isModalVisible); // Toggle modal visibility
  };
  const Languages = {
    values: {
        'en': 'English',
        'ur': 'Urdu',
        'pn': 'Punjabi',
        'ps': 'Pushto',
        'sn': 'Sindhi',
        'bl': 'Balochi'
    } 
  };

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
          <TouchableOpacity style={{width: 30, height: 30,}} onPress={handleModalClick}>

            <Image source={require('../../assets/setting.png')} style={{width: 30, height: 30}} />
          </TouchableOpacity>
        </View>
        {isModalVisible && <SettingsModal2 options={Languages} onClose={() => setisModalVisible(false)} navigation={navigation}/>}


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
    display: 'flex',
    flexDirection: 'row',
    height: componentHeight,
    // backgroundColor: 'green',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  leftContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    padding: 10,
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
