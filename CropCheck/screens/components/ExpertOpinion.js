import React, {useContext} from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TranslationContext } from '../../providers/TranslationProvider';
const ExpertOpinion = () => {
  const navigation = useNavigation();
  const {t, switchLanguage} = useContext(TranslationContext); 
  const handleClick = () => {
    //navigate to Chatbot
    navigation.navigate('Chatbot');
  };
  
  return (
    <TouchableOpacity style={styles.container} onPress={handleClick}>
      {/* Left side - Logo */}
      <Image source={require('../../assets/expert.png')} style={styles.logo} />

      {/* Right side - Text with solid green background */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{t('expertOpinion')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%', // Adjust the width as needed
    height: 105, // Adjust the height as needed
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    opacity: 0.75,
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  logo: {
    width: 100, // Adjust the width based on your logo size
    height: 100, // Adjust the height based on your logo size
    resizeMode: 'contain',
    opacity:1, 
  },
  textContainer: {
    width: '70%', // Adjust the width as needed
    height: 50, // Adjust the height as needed
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10, // Adjust the margin as needed
    opacity: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ExpertOpinion;
