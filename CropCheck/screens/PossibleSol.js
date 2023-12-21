import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import NavBar from './components/NavBar.js';
const backgroundimg = require('../assets/backgroundimg.jpg');
const potspic= require("../assets/pots.png");
const Home = require('../assets/Homeicon.png');

const PossibleSol = ({navigation}) => {
  const Homie = () => {
    navigation.navigate('MainScan');
  };
  
  return (
    // <ImageBackground source={backgroundimg} style={styles.Bg_img}>
      <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.Bg_img}>
        <View>
          <Image source={Home} style={styles.icon} onPress={Homie}></Image>
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
        <NavBar/>
      </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Bg_img: {
    width: 450, 
    height: 770,
  },
  img: {
    width: 350, 
    height: 120,
    marginLeft: 50,
  },
  TextBold: {
    fontSize: 50, 
    fontWeight: 'medium', 
    color: 'black',
    // paddingLeft: 40, 
    // paddingTop: 20,
  },
  TextBOLD: {
    justifyContent: 'flex-start',
    paddingLeft: 45, 
    paddingTop: 7,
  },
  Textlite: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginLeft: 25,
    padding: 25,
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