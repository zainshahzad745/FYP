import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Navbar from './components/Navbar.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
const backgroundimg = require('../assets/backgroundimg.jpg');
const potspic= require("../assets/pots.png");
const Home = require('../assets/Homeicon.png');

const PossibleSol = ({navigation}) => {
  const Homie = () => {
    navigation.navigate('MainScreen');
  };
  
  return (
    // <ImageBackground source={backgroundimg} style={styles.Bg_img}>
      <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.Bg_img}>
        <View>
          <TouchableOpacity onPress={Homie}> 
          <Image source={Home} style={styles.icon} ></Image>
          </TouchableOpacity>
        </View>
        <View>  
          <Image source={potspic} style={styles.img}/>
        </View>
        <View style={styles.TextBOLD}>
        <Text style={styles.TextBold} >Possible Solutions</Text>
        </View>
        <View style={styles.Textlite}>
          <Text style={{fontSize: 15}}>Loremspem dkmksalllllll kdkssssssssssss kdksaoa kdkkdgjdk amskack daidjv 
          ksjksskdkc jsdjc sdnkjc ieicxkclc kmdkcc djkskc kdskjc hssuhc asfhcc ydhydhxay doksj idjciss agb usdjaj jshdjsadd yeqatzxv 
          icduyo iewqc utop wwdx and this plant is full of problems and issues. Green vegetables can't grow dklds kmfdlkd ksslv, kfk 
          mdkfl dkfk kdmvk kdmc gkev kdkf kldkflv odkfl sdkl</Text>
        </View>
        <Navbar/>
      </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bg_img: {
    width: '100%', 
    height: '100%',
  },
  img: {
    width: '90%', 
    height: '30%',
    // marginLeft: 10,
    // alignItems: 'center',
    margin: '5%'
  },
  TextBold: {
    fontSize: 50, 
    fontWeight: 'medium', 
    color: 'black',

    // paddingLeft: 40, 
    // paddingTop: 20,
  },
  // TextBOLD: {
  //   justifyContent: 'flex-start',
  //   // paddingLeft: 45, 
  //   textAlign: 'center',
  //   margin: '5%',
  //   // paddingTop: 7,
  // },
  Textlite: {
    justifyContent: 'center', 
    alignItems: 'center',
    // marginLeft: 25,
    // padding: 25,
    textAlign: 'center',
  },
  icon: {
    margin: 30,
    width: 45,
    height:50,
    alignItems: 'flex-start',
  },
});

export default PossibleSol;