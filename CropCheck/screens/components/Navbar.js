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
      <TouchableOpacity style={styles.button} onPress={handleHome}>
        <Image source={require('../../assets/home.png')} style={styles.icon} />
        <Text style={styles.buttonText}>{t('navbarHome')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleDiagnose}>
        <Image source={require('../../assets/search.png')} style={styles.icon} />
        <Text style={styles.buttonText}>{t('navbarDiagnose')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.scanButton} onPress={handleScanNow}>
        <Image source={require('../../assets/scan.png')} style={styles.scanIcon} />
        <Text style={styles.scanButtonText}>{t('navbarScan')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleAskAI}>
        <Image source={require('../../assets/ai.png')} style={styles.icon} />
        <Text style={styles.buttonText}>{t('navbarAskAI')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleWaterCalculator}>
        <Image source={require('../../assets/water.png')} style={styles.icon} />
        <Text style={styles.buttonText}>{t('headCalculator')}</Text>
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
  button: {
    alignItems: 'center',
  },
  scanButton: {
    marginTop: -45,
    marginLeft: 15,
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    
  },
  icon: {
    padding: 15,
    width: 30,
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
  },
  scanButtonText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Navbar;
