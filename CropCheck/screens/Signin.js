import {useState} from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import CheckBox from "expo-checkbox";
import { FIREBASE_AUTH } from "../Auth/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
const backgroundimg = require("../assets/backgroundimg.jpg");


const Signin = ({navigation}) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [show, setShow] = useState(true);
  const [ loading, setLoading ] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const auth = FIREBASE_AUTH;
  const handleSignin = () => {
    // setLoading(true);
    // try{
    //   const response = signInWithEmailAndPassword(auth, email, password);
    //   console.log(response);
    //   alert("Signin Successful");
    // }
    // catch(error){
    //   console.log(error);
    //   alert("Signin Failed" + error.message);
    // } finally {
    //   setLoading(false);
    // }
    navigation.replace("MainScreen");
  }
  

  const showPass = () => {
    setShow(!show);
  };

  const navigateLogin = () => {
    navigation.replace("Signup");
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
            Login
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
              style={{ width: "80%", height: "70%", padding: 2 }}
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
              placeholder="Enter Email"
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
              placeholder="Enter Password"
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
          <View style={{ display: 'flex', flexDirection: 'row', marginLeft: '10%', marginRight: '10%', marginTop: '5%' }}>
          <CheckBox value={isChecked} onValueChange={setChecked} color={'green'} />
          <Text style={{fontSize: 16, marginLeft: 3, paddingLeft: 12}}>Remember Me</Text>
          <Text style={{fontSize: 16, marginLeft: '30%'}}>Forgot Password?</Text>
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
            
          <Text style={{ color: "white", fontWeight: "bold" }}>SignIn</Text>
        </TouchableOpacity>
          <Text
            style={{ width: "100%", fontSize: 18, height: "5%", textAlign: "center", marginTop: '12%' }}
          >
            Don't have an account?
            <Text style={{ color: "green" }} onPress={navigateLogin}>
              Register
            </Text>
          </Text>

        </View>
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
});

export default Signin;
