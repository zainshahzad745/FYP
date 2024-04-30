import { useContext } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import Navbar from './components/Navbar.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TranslationContext } from "../providers/TranslationProvider";

const backgroundimg = require('../assets/backgroundimg.jpg');
const windowHeight = Dimensions.get("window").height

// const potspic= require("../assets/pots.png");
// const Home = require('../assets/Homeicon.png');
// import Data from './MainScan.js';
const PossibleSol = ({navigation, route}) => {
  const {t, switchLanguage} = useContext(TranslationContext); 
  const {names, disease, imageUri} = route.params;
  console.log(names, disease, imageUri);
  let solution = "Lorem Ipsum abj caj kb cjka bcjk abkj cb dkj cbkjb dkjbs kjbsc jbsdk bcmsn cvwv could'nt";
  
  return (
    // <ImageBackground source={backgroundimg} style={styles.Bg_img}>
      <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.Bg_img}>
        <View style={styles.TextView}>
          <Text style={styles.TextBold}>{t('possibleSol')}</Text>
        </View>
        <View style={styles.imgCont}>  
          <Image source={{uri: imageUri}} style={styles.img}/>
        </View>
        <View style={styles.Textlite}>
          <Text style={{fontSize: 22}}>{solution}</Text>
        </View>
        <View style={{height: windowHeight*0.02}}>
          <Navbar/>
        </View>
      </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  Bg_img: {
    width: '100%', 
    height: '100%',
  },
  imgCont: {
    // backgroundColor: "blue",
    height: windowHeight*0.30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: '85%', 
    height: '100%',
    // marginLeft: 10,
    // alignItems: 'center',
  },
  TextBold: {
    fontSize: 45, 
    fontWeight: 'medium', 
  },
  TextView: {
    // justifyContent: 'flex-start',
    margin: "7%",
    marginTop: "20%",
    // backgroundColor: "yellow",
    height: windowHeight*0.16,
  },
  Textlite: {
    margin: "7%",
    // backgroundColor: "red",
    height: windowHeight*0.32,
  },
});

export default PossibleSol;