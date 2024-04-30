import React, {useContext} from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TranslationContext } from "../../providers/TranslationProvider";
const Navbar = () => {
  const {t, switchLanguage} = useContext(TranslationContext); 
  const navigation = useNavigation();

  const handleScanNow = () => {
    // Navigate to the ScanScreen for capturing images
    navigation.navigate('ScanScreen');
  };

  const handleHome = () => {
    // Handle the Home button click
    navigation.navigate('MainScreen');
  };

  const handleDiagnose = () => {
    // Handle the Diagnose button click
    navigation.navigate('PlantAddScreen');
  };

  const handleAskAI = () => {
    // Handle the Ask AI button click
    navigation.navigate('Chatbot');
  };

  const handleWaterCalculator = () => {
    // Handle the Water Calculator button click
    navigation.navigate('WaterModule');
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={{alignItems: 'center', marginLeft: "1%"}} onPress={handleHome}>
        <Image source={require('../../assets/home.png')} style={styles.icon} />
        <Text style={styles.buttonText}>{t('navbarHome')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center'}} onPress={handleDiagnose}>
        <Image source={require('../../assets/search.png')} style={{padding: 10, width: 28}} />
        <Text style={styles.buttonText}>{t('navbarDiagnose')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.scanButton} onPress={handleScanNow}>
        <Image source={require('../../assets/scan.png')} style={styles.scanIcon} />
        <Text style={styles.scanButtonText}>{t('navbarScan')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center', marginRight: 6,}} onPress={handleAskAI}>
        <Image source={require('../../assets/ai.png')} style={styles.icon} />
        <Text style={styles.buttonText}>{t('navbarAskAI')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: "center", marginRight: 7}} onPress={handleWaterCalculator}>
        <Image source={require('../../assets/water.png')} style={{padding: 15, width: 31, height: 31, resizeMode: 'contain',}} />
        <View style={{width:55, height: 28, justifyContent: 'flex-end'}}><Text style={{fontSize: 10, textAlign: 'center',}}>{t('headCalculator')}</Text></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    marginBottom: "2%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.85,
    padding: 10,
  },
  scanButton: {
    marginTop: -45,
    marginRight: 4,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    padding: 15,
    width: 28,
    height: 30,
    resizeMode: 'contain',
  },
  scanIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  buttonText: {
    color: '#000',
    marginTop: 5,
    marginLeft: "0.9%",
    fontSize: 14,
    // fontWeight: 500
  },
  scanButtonText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Navbar;
