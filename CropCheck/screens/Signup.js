import React, { useContext } from "react";
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
} from "react-native";
import { FIREBASE_AUTH } from "../Auth/FirebaseConfig";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import axios from "axios";
import { TranslationContext } from '../providers/TranslationProvider';


const backgroundimg = require("../assets/backgroundimg.jpg");


const Signup = ({navigation}) => {
  const [email, onChangeEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [password, onChangePassword] = React.useState("");
  const [show, setShow] = React.useState(true);
  const { language, switchLanguage, t } = useContext(TranslationContext); // Ensure correct variable name

  const auth = FIREBASE_AUTH;

  const showPass = () => {
    setShow(!show);
  };

  const handleSignup = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      const user = response.user;
      const data = {
        email: email,
      };
      
      axios.post('http://192.168.151.46:5000/registerUser', data)
        .then(function (response) {
          console.log("sent data", response);
        })
        .catch(function (error) {
          console.log(error);
        });
      // const user = userCredential.user;
      sendEmailVerification(user);
      console.log(response);
      // await axios.post('http://192.168.1.8:5000/registerUser', { email: email });
      Alert.alert("Success", "Signup Successful Please verify your email", [{ text: "OK", onPress: () => navigation.replace("Signin") }]);
    } catch (error) {
      console.log(error);
      Alert.alert("Signup Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  const navigateLogin = () => {
    navigation.navigate("Signin");
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
              fontSize: 28,
              fontWeight: "bold",
              margin: "5%",
              marginLeft: "8%",

            }}
          >
            {t('Register')}
          </Text>
          <TouchableOpacity
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
          />
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
          <Text
            style={{ width: "100%", fontSize: 18, height: "5%", textAlign: "center", marginTop: '12%' }}
          >
            {t('registerAccount')}
            <Text style={{ color: "green" }} onPress={navigateLogin}>
              {t('Signin')}
            </Text>
          </Text>
          <TouchableOpacity
          onPress={handleSignup}
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
          <Text style={{ color: "white", fontWeight: "bold" }}>{t('Signup')}</Text>
        </TouchableOpacity>
        </View>
        {loading && (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size={120} color="green" />
        </View>
      )}
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

export default Signup;
