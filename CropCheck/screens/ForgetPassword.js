//forget screen
import {useState, useContext} from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import {BlurView} from 'expo-blur'
import Modal from "react-native-modal";
import { TranslationContext } from "../providers/TranslationProvider";

const backgroundimg = require("../assets/backgroundimg.jpg");

const ForgetPassword = ({navigation}) => {
  const {t, switchLanguage} = useContext(TranslationContext); 
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmpassword, onConfirmPassword] = useState("");
  const [show, setShow] = useState(true);

  const [isModalVisible, setisModalVisible] = useState(false);
  const handleModal = () => setisModalVisible(() => !isModalVisible);

  const showPass = () => {
    setShow(!show);
  };

  const navigateLoginBack = () => {
    navigation.replace("Signin");
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundimg} style={styles.background}>
        <View style={styles.logoContainer}>
          <Image source={require("../assets/logo.png")} style={styles.logo} />
          <Text style={styles.logoText}>CROPCHECK</Text>
        </View>
        <View style={styles.containerTwo}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              margin: "10%",
              marginLeft: "8%",

            }}
          >
            {t("Pass")}
          </Text>  

          <TouchableOpacity
            // onPress={Email}
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
            //   marginTop: "2%", // Custom height
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
            // onPress={Password}
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
                shadowColor: "#000, ",
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
          
          <TouchableOpacity
            // onPress={ConfirmPassword}
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
                shadowColor: "#000, ",
              }}
              onChangeText={onConfirmPassword}
              value={password}
              placeholder={t('ConfirmPass')}
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

          <TouchableOpacity
          onPress={handleModal}
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
          <Text style={{ color: "white", fontWeight: "bold" }}>{t('Next')}</Text>
          <Modal visible={isModalVisible} animationType="fade">
            
            <View style={{flex: 1,
              borderRadius: 30,
              marginTop: 150,
              marginBottom: 150,
              justifyContent: "center",
              backgroundColor: "#bcdac2",
              //backgroundColor: 'green',
              //opacity: '0.8',
              alignItems: "center",
              height: "0%",
              width: "100%",
              marginVertical: "12%",}}>
              <View style={{opacity: "1", height: '100%',width:'110%',marginLeft: '13%'}}>
              <TouchableOpacity 
                  style={{paddingTop: 30,paddingLeft: 15}} 
                  onPress={handleModal}
                  >
                  {/* <Image 
                    source={require("../assets/close.png")} 
                    style={{ width: "6%", height: "18%"}}
                  /> */}
                </TouchableOpacity>
                {/* <View style={{height: "100%",marginLeft: '10%',marginTop: '10%'}}>
                  <Text style={{fontSize: 18}}>Your password has been changed</Text>
                  <Image source={require("../assets/done.png")} 
                  style={{ width: "30%", height: "25%",marginLeft:"25%"}}/>
                </View> */}
                <Text style={{fontSize: 18, marginTop: "10%",marginLeft: '10%'}}>{t('passChanged')}</Text>
                {/* <Image source={require("../assets/done.png")} 
                style={{ width: "30%", height: "25%",marginLeft:"30%",marginTop: "3%"}}/> */}
              </View>
            </View>
          </Modal>

        </TouchableOpacity>
            <Text style={{ color: "black", width: "100%", fontSize: 18, height: "5%", textAlign: "center", marginTop: '23%' }} 
            onPress={navigateLoginBack}>
              {t('Back')}
            </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: '100%',
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
  },

  containerTwo: {
    // backgroundColor: "red",
    width: "100%",
    height: "80%",
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
});

export default ForgetPassword;
