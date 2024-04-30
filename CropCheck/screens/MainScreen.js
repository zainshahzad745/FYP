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

const backgroundimg = require("../assets/backgroundimg.jpg");

const MainScreen = ({ navigation }) => {
  const { t, switchLanguage } = useContext(TranslationContext);
  const [plantsData, setPlantsData] = useState([]);
  const [diseaseNames, setDiseaseNames] = useState([]);

  const handleImageClick = () => {
    navigation.navigate("DetailedScreen");
  };

  useEffect(() => {
    fetchPlantsData();
  }, []);

  const fetchPlantsData = async () => {
    try {
      const response = await fetch(
        "http://192.168.100.199:5000/retrieveData?email=zainshahza@gmail.com"
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
                <TouchableOpacity onPress={handleImageClick}>
                  <Image
                    source={{ uri: `data:image/jpeg;base64,${plant.image}` }}
                    style={styles.image}
                  />
                  <Text style={styles.imageText}>{plant.disease_name}</Text>
                </TouchableOpacity>
              </ScrollView>
            ))}
          </View>
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
    height: windowHeight*0.025,
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
    backgroundColor: "red",
    flexWrap: "wrap",
    justifyContent: "space-between", // Adjust as needed
    height: windowHeight*0.525,
    marginBottom: "3%"
  },
  expert: {
    marginBottom: "7%", // Adjust the margin as needed
  }
});

export default MainScreen;
