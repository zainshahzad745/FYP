import React, { useState, useEffect, useRef, useContext } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Button,
  Alert,
  ImageBackground,
  StyleSheet,
  FlatList,
  Dimensions,
  Modal, // Import Modal
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import Axios from "axios";
import Navbar from "./components/Navbar";
import { TranslationContext } from "../providers/TranslationProvider";


const PlantAddScreen = ({navigation}) => {
  const {t, switchLanguage} = useContext(TranslationContext); 
  const [plantName, setPlantName] = useState("");
  const [diseaseType, setDiseaseType] = useState("");
  const [capturedImage, setCapturedImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false); // State for plant modal visibility
  const [isModalVisibleDisease, setIsModalVisibleDisease] = useState(false); // State for disease modal visibility
  const [selectedPlant, setSelectedPlant] = useState(null); // State for selected plant
  const [selectedDisease, setSelectedDisease] = useState(null); // State for selected disease
  const multiSelectRef = useRef(null);
  const uploadimg = require("../assets/uploadimg.png");
  const [disease, setDisease] = useState(null);
  const availablePlants = [
    t("Pepper"),
    t("Pomegranate"),
    t("Cotton"),
    t("AloeVera"),
    t("Cantaloupe"),
    t("ChickPea"),
    t("Mango"),
    t("CurryLeaf"),
  ]; // Example list of available items

  const Diseases1 = [
    t("Disesae1_1"),
    t("Disease1_2"),
    t("Disesae1_3"),
    t("Disease1_4"),
    t("Disease1_5")
  ];

  const Diseases2 = [
    t("Disease2_1"),
    t("Disease2_2"),
    t("Disease2_3")
  ];

  const Diseases3 = [
    t("Disease3_1"),
    t("Disease3_2"),
    t("Disease3_3"),
    t("Disease3_4")
  ];

  const Diseases4 = [
    t("Disease4_1"),
    t("Disease4_2")
  ];

  const Diseases5 = [
    t("Disease5_1"),
    t("Disease5_2"),
    t("Disease5_3")
  ];

  const Diseases6 = [
    t("Disease6_1"),
    t("Disease6_2"),
    t("Disease6_3"),
    t("Disease6_4")
  ];

  const Diseases7 = [
    t("Disease7_1"),
    t("Disease7_2"),
    t("Disease7_3")
  ];

  const Diseases8 = [
    t("Disease8_1"),
    t("Disease8_2")
  ];

  function getDisease(plant) {
    if (plant == t("Pepper")) {
      setDisease(Diseases1)
    }
    else if (plant == t("Pomegranate")) {
      setDisease(Diseases2)
    }
    else if (plant == t("Cotton")) {
      setDisease(Diseases3)
    }
    else if (plant == t("AloeVera")) {
      setDisease(Diseases4)
    }
    else if (plant == t("Cantaloupe")) {
      setDisease(Diseases5)
    }
    else if (plant == t("ChickPea")) {
      setDisease(Diseases6)
    }
    else if (plant == t("Mango")) {
      setDisease(Diseases7)
    }
    else if (plant == t("CurryLeaf")) {
      setDisease(Diseases8)
    }
  };


  const handleBack = () => {
    navigation.replace("MainScreen");
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  const openCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === "granted") {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
      });

      if (!result.cancelled) {
        setCapturedImage(result);
      }
    }
  };

  const handleUploadData = async () => {
    try {
      const formData = new FormData();
      formData.append("plantName", selectedPlant);
      formData.append("diseaseType", selectedDisease);
      formData.append("image", {
        uri: capturedImage.uri,
        type: "image/jpeg",
        name: "plant_image.jpg",
      });

      const response = await Axios.post(
        "http://20.194.195.9:5000/uploadPlants",  // replace with your endpoint URL
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      // Show an alert to inform the user
      Alert.alert("Success", "Data uploaded successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
      // Show an alert to inform the user
      Alert.alert("Error", "Failed to upload data. Please try again.");
    }
  };
  // const handleUploadData = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("plantName", selectedPlant);
  //     formData.append("diseaseType", selectedDisease);
  //     formData.append("image", {
  //       uri: capturedImage.uri,
  //       type: "image/jpeg",
  //       name: "plant_image.jpg",
  //     });

  //     const response = await Axios.post(
  //       "http://your_endpoint_here/uploadPlants",  // replace with your endpoint URL
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //     // Show an alert to inform the user
  //     Alert.alert("Success", "Data uploaded successfully!");
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //     // Show an alert to inform the user
  //     Alert.alert("Error", "Failed to upload data. Please try again.");
  //   }
  // };

  // const sendData = async () => {
  //   // Send data to the server
  //   try {
  //     const formData = new FormData();
  //     formData.append("plantName", plantName);
  //     formData.append("diseaseType", diseaseType);
  //     formData.append("image", {
  //       uri: capturedImage.uri,
  //       type: "image/jpeg",
  //       name: "plant_image.jpg",
  //     });

  //     const response = await Axios.post(
  //       "http://192.168.1.5:5000/detect",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error sending data:", error);
  //   }
  // };

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.jpg")}
      style={styles.Background}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={openCamera} style={styles.cameraButton}>
          {capturedImage ? (
            <Image
              source={{ uri: capturedImage.uri }}
              style={styles.cameraImage}
            />
          ) : (
            <View style={styles.uploadImageContainer}>
              <Image source={uploadimg} style={styles.uploadImage} />
            </View>
          )}
        </TouchableOpacity>

        {/* add plant name */}
        <TouchableOpacity
          onPress={() => setIsModalVisible(true)}
          style={styles.selectItemButton}
        >
          <Text style={styles.selectItemText}>
            {selectedPlant ? selectedPlant : t('plantName')}
          </Text>
        </TouchableOpacity>
        {/* add disease type */}
        <TouchableOpacity
          onPress={() => setIsModalVisibleDisease(true)}
          style={styles.selectItemButton}
        >
          <Text style={styles.selectItemText}>
            {selectedDisease ? selectedDisease : t('chooseDisease')}
          </Text>
        </TouchableOpacity>

        {/* Modal for selecting plant */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{t('item')}</Text>
              <FlatList
                data={availablePlants}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedPlant(item);
                      setIsModalVisible(false);
                      getDisease(item);
                    }}
                    style={styles.itemButton}
                  >
                    <Text style={styles.itemText}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>

        {/* Modal for selecting plant disease */}

        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisibleDisease}
          onRequestClose={() => setIsModalVisibleDisease(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{t('item')}</Text>
              <FlatList
                data={disease}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedDisease(item);
                      setIsModalVisibleDisease(false);
                    }}
                    style={styles.itemButton}
                  >
                    <Text style={styles.itemText}>{item}</Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </Modal>

        <TouchableOpacity
        onPress={handleUploadData}
          // onPress={handleUploadImage}
          style={{
            backgroundColor: "green", // Green background color
            opacity: 0.8, // Semi-transparent
            borderRadius: 50, // Custom border radius
            width: "80%", // Custom width
            height: "6%",
            marginLeft: "10%",
            marginRight: "10%",
            marginTop: "8%", // Custom height
            justifyContent: "center",
            alignItems: "center",
            // onPress: {a},
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>{t('uploadData')}</Text>
        </TouchableOpacity>

        {/* <Button title="Send Data" onPress={sendData} /> */}
      </View>
      <View style={styles.navContainer}>
        <Navbar />
      </View>
    </ImageBackground>
  );
};

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    display: "flex",
    height: windowHeight*0.893,
    marginTop: "20%",
    marginLeft: "1%",
  },
  backButton: {
    width: "12%",
    height: "9%",
    padding: 10,
  },
  backIcon: {
    width: "100%",
    height: "100%",
  },
  cameraButton: {
    alignItems: "center",
    marginBottom: "30%",
  },
  cameraImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  uploadImageContainer: {
    width: 200,
    height: 200,
    backgroundColor: "black",
    borderRadius: 100,
  },
  uploadImage: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  selectItemButton: {
    alignItems: "center",
    marginBottom: 20,
    // borderRadius: '50%'
    borderRadius: 50,
  },
  selectItemText: {
    width: "100%",
    fontSize: 18,
    textAlign: "center",
    color: "white",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    maxHeight: "80%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemButton: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
  Background: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  navContainer: {
  height: '10%', position: 'absolute', bottom: 0
  },
});

export default PlantAddScreen;
