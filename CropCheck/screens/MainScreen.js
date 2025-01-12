import React, { useContext, useState, useEffect } from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MainScreenHead from "./components/mainScreenHead";
import Navbar from "./components/Navbar";
import ExpertOpinion from "./components/ExpertOpinion";
import { TranslationContext } from "../providers/TranslationProvider";
// import { FIREBASE_AUTH } from "../Auth/FirebaseConfig";
import { getAuth } from "firebase/auth";
const backgroundimg = require("../assets/backgroundimg.jpg");

const MainScreen = ({ navigation }) => {
  const { t, switchLanguage } = useContext(TranslationContext);
  const [plantsData, setPlantsData] = useState([]);
  const [diseaseNames, setDiseaseNames] = useState([]);
  const currentUser = getAuth().currentUser;
  console.log('mainScreen', currentUser.email);
  console.log('plantsData', plantsData);  

  const handleImageClick = (data) => {
    navigation.navigate("Disease", { diseaseData: data});
  };

  useEffect(() => {
    fetchPlantsData();
  }, []);

  const fetchPlantsData = async () => {
    try {
      const response = await fetch(
        `http://20.194.195.9:5000/retrieveData?email=${currentUser.email}`
      );
      const data = await response.json();
      setPlantsData(data);
      const names = data.map((plant) => plant.disease_name);
      setDiseaseNames(names);
    } catch (error) {
      console.error("Error fetching plants data:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundimg}
        style={styles.background}
      >
        <MainScreenHead navigation={navigation} />
        <Text style={styles.text}>{t("mainScan")}</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.imageContainer}>
            {plantsData.map((plant, index) => (
              <ScrollView key={index} style={styles.imageWrapper}>
                <TouchableOpacity onPress={() => handleImageClick(plant)}>
                  <Image
                    source={{ uri: `data:image/jpeg;base64,${plant.image}` }}
                    style={styles.image}
                  />
                  <Text style={{fontWeight: 'bold', fontSize: 18, overflow: "scroll", width: '50%'}}>{plant.disease_name}</Text>
                </TouchableOpacity>
              </ScrollView>
            ))}
          </View>
          </ScrollView>
        <View style={styles.expert}>
        <ExpertOpinion />
        </View>
        <View style={styles.navContainer}>
        <Navbar />
        </View>
      </ImageBackground>
    </View>
  );
};

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const imageSize = (windowWidth - 20) / 2 - 10;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    // backgroundColor:'black',
    // flex: 1,
    justifyContent: "center",
  },
  navContainer: {
    // backgroundColor: 'red',
    // marginBottom: '7%',
    height: windowHeight*0.10,
  },
  background: {
    flex: 1,
    resizeMode: "contain",
  },
  text: {
    textAlign: "left",
    color: "#000000",
    fontSize: 30,
    padding: 10,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10, // Added padding horizontally
    paddingBottom: 10, // Added padding vertically
  },


  image: {
    width: 175,
    height: imageSize,
    resizeMode: "cover",
    borderRadius: 10,
  },
  imageWrapper: {
    width: "49%",
    marginBottom: 10,
  },
  expert: {
    marginBottom: "7%", // Adjust the margin as needed
    
  }
});

export default MainScreen;
