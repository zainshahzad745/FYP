import {useContext, useState} from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ActivityIndicator,
  Button,
} from "react-native";
import CheckBox from "expo-checkbox";
import { FIREBASE_AUTH } from "../Auth/FirebaseConfig";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { TranslationContext } from "../providers/TranslationProvider";
import SettingsModal2 from "./components/SettingModal2";
const backgroundimg = require("../assets/backgroundimg.jpg");

// import * as Localization from "expo-localization";
// import { I18n } from "i18n-js";
// import SettingsModal2 from "./components/SettingModal2";


// const i18n = new I18n(translations);
// i18n.locale = Localization.locale
// i18n.enableFallback = true; 


const Signin = ({navigation}) => {
  const {t, switchLanguage} = useContext(TranslationContext); 
  const [isModalVisible, setisModalVisible] = useState(false);


  const handleModalClick = () => {
    setisModalVisible(!isModalVisible); // Toggle modal visibility
  }


  // const [locale, setLocale] = useState(i18n.locale);
  // const changeLocale = (locale) => {
  //   i18n.locale = locale;
  //   setLocale(locale);
  // }
  // changeLocale('ur')
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [show, setShow] = useState(true);
  const [ loading, setLoading ] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const auth = FIREBASE_AUTH;
  const handleSignin = async () => {

    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      const currentUser = getAuth().currentUser;
      // console.log('current user data',currentUser);
      // console.log('email verified?', currentUser.emailVerified)
      if (!currentUser.emailVerified) {
        // console.log(response);
      Alert.alert(t('notVerify'), t('verify'), [{ text: t('ok') }]);
      setLoading(false);
      return;
      }
      console.log("curr data", response._tokenResponse.email);
      Alert.alert(t('success'), t('loginSuccess'), [{ text: t('ok'), onPress: () => navigation.replace("MainScreen") }]);
    }
    catch(error){
      console.log(error);
      Alert.alert(t('fail') +' '+ error.message);
    } finally {
      setLoading(false);
    }
  }
  

  const showPass = () => {
    setShow(!show);
  };

  const navigateLogin = () => {
    navigation.replace("Signup");
  };

  const navigateForget = () => {
    navigation.replace("ForgetPassword")
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.background}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.logoText}>CROPCHECK</Text>
        </View>
        <View style={styles.containerTwo}>
          <View style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}> 
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              margin: "5%",
              marginLeft: "8%",
              marginTop: "15%",

            }}
          >
            {t('Login')}
          </Text>
          
          {/* switcher button */}
          <TouchableOpacity style={{width: 100, height: 35, alignItems: 'center', marginRight: '2%'}} onPress={handleModalClick} >

            <Image source={require('../assets/setting.png')} style={{width: 35, height: 36, marginRight: '35%', marginTop: '45%', marginLeft: '15%'}} />
            <Text style={{width: '100%', marginRight: '25%', marginLeft: '5%', fontSize: 14, textAlign: 'center',}}>{t('Language')}</Text>
          </TouchableOpacity>
          
          
          </View>

          
          
          {/* Google Button */}
          {/* <TouchableOpacity
            // onPress={handleSignUpGoogle}
            style={{
              backgroundColor: "#e3f3fb", // Green background color
              // opacity: 0.8, // Semi-transparent
              borderRadius: 50, // Custom border radius
              width: "90%", // Custom width
              height: "9%",
              marginLeft: "5%",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              marginRight: "5%",
              marginTop: "8%", // Custom height
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/signup.png")}
              style={{ width: "70%", height: "60%", padding: 2 }}
            />
          </TouchableOpacity>
          <Image
            source={require("../assets/image.png")}
            style={{ width: "100%", height: "3%", marginTop: "12%" }}
          /> */}
          {/* email button */}

          <TouchableOpacity
            // onPress={handleSignUpGoogle}
            style={{
              backgroundColor: "#fafafa", // Green background color
              // opacity: 0.8, // Semi-transparent
              borderRadius: 50, // Custom border radius
              width: "90%", // Custom width
              height: "9%",
              marginLeft: "5%",
              marginRight: "5%",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              marginTop: "8%", // Custom height
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{ width: "100%", height: "100%", textAlign: "center" }}
              onChangeText={onChangeEmail}
              value={email}
              placeholder={t('Email')}
              autoComplete="email"
              // keyboardType="numeric"
            />
          </TouchableOpacity>
          {/* password button */}

          <TouchableOpacity
            // onPress={handleSignUpGoogle}
            style={{
              backgroundColor: "#fafafa", // Green background color
              // opacity: 0.8, // Semi-transparent
              borderRadius: 50, // Custom border radius
              shadowColor: "#000",
              width: "90%", // Custom width
              height: "9%",
              marginLeft: "5%",
              marginRight: "5%",
              marginTop: "8%", // Custom height
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              //   justifyContent:
            }}
          >
            <TextInput
              style={{
                width: "80%",
                height: "100%",
                textAlign: "center",
              }}
              onChangeText={onChangePassword}
              value={password}
              placeholder={t('EnterPass')}
              secureTextEntry={show}
              // keyboardType="numeric"
            ></TextInput>
            <TouchableOpacity
              style={{ width: "10%", height: "55%" }}
              onPress={showPass}
            >
              <Image
                source={require("../assets/showpass.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </TouchableOpacity>
          </TouchableOpacity>
          <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '10%', marginRight: '10%', marginTop: '5%'}}>
          <CheckBox value={isChecked} onValueChange={setChecked} color={'green'} />
          <Text style={{fontSize: 16, marginLeft: 1, paddingLeft: 8}}>{t('Remember')}</Text>
          <Text style={{ fontSize: 16, color: "green", marginLeft: "12%" }} onPress={navigateForget}>{t('Pass')}</Text>
          </View>
          <TouchableOpacity
          onPress={handleSignin}
          style={{
            backgroundColor: "green", // Green background color
            opacity: 0.8, // Semi-transparent
            borderRadius: 20, // Custom border radius
            width: "50%", // Custom width
            height: "8%",
            marginLeft: "25%",
            marginRight: "25%",
            marginTop: "8%", // Custom height
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            
          <Text style={{ color: "white", fontWeight: "bold" }}>{t('Signin')}</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={ () => switchLanguage("sn")}
          style={{
            backgroundColor: "green", // Green background color
            opacity: 0.8, // Semi-transparent
            borderRadius: 20, // Custom border radius
            width: "50%", // Custom width
            height: "8%",
            marginLeft: "25%",
            marginRight: "25%",
            marginTop: "8%", // Custom height
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            
          <Text style={{ color: "white", fontWeight: "bold" }}>changeLocale</Text>
        </TouchableOpacity> */}
          <Text
            style={{ width: "100%", fontSize: 18, height: "5%", textAlign: "center", marginTop: '12%' }}
          >
            {t('loginAccount')}
            <Text style={{ color: "green" }} onPress={navigateLogin}>
              {t('Register')}
            </Text>
          </Text>

        </View>
        {loading && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size={120} color="green" />
        </View>
      )}
            {isModalVisible && <SettingsModal2 onClose={() => setisModalVisible(false)} navigation={navigation}/>}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",

    // jystifyContent: "center",
    // backgroundColor: 'black',
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  logoContainer: {
    // backgroundColor: 'red',
    // marginBottom: '120%',
    // backgroundColor: "white",
    marginTop: "27%",
  },

  containerTwo: {
    // backgroundColor: "red",
    width: "100%",
    height: "80%",
    // margin: '10%',
    // display: 'flex'
    // mar
  },

  logoText: {
    width: "100%",
    marginLeft: "5%",
    fontSize: 40,
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },

  logo: {
    width: 132,
    height: 107,
    alignSelf: "center",
    marginTop: "10%",
  },
  activityIndicatorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)', // semi-transparent background
  },
});

export default Signin;
