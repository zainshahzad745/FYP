import React, { useState, useEffect, useRef } from "react";
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
  Modal, // Import Modal
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import Axios from "axios";

const PlantAddScreen = ({navigation}) => {
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
  const availablePlants = [
    "Garlic",
    "Wheat",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
    "Tomato ",
  ]; // Example list of available items

  const availableDiseases = [
    "Disease 1",
    "Disease 2",
    "Disease 3",
    "Disease 4",
  ]

  const handleBack = () => {
    navigation.replace("MainScreen");
  }

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

  const sendData = async () => {
    // Send data to the server
    try {
      const formData = new FormData();
      formData.append("plantName", plantName);
      formData.append("diseaseType", diseaseType);
      formData.append("image", {
        uri: capturedImage.uri,
        type: "image/jpeg",
        name: "plant_image.jpg",
      });

      const response = await Axios.post(
        "http://192.168.1.5:5000/detect",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.jpg")}
      style={styles.Background}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Image
            source={require("../assets/back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>

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
            {selectedPlant ? selectedPlant : "Choose Plant Name"}
          </Text>
        </TouchableOpacity>
            {/* add disease type */}
        <TouchableOpacity
          onPress={() => setIsModalVisibleDisease(true)}
          style={styles.selectItemButton}
        >
          <Text style={styles.selectItemText}>
            {selectedDisease ? selectedDisease : "Choose Disease Type"}
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
              <Text style={styles.modalTitle}>Select Item</Text>
              <FlatList
                data={availablePlants}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedPlant(item);
                      setIsModalVisible(false);
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
              <Text style={styles.modalTitle}>Select Item</Text>
              <FlatList
                data={availableDiseases}
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
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Upload Data</Text>
        </TouchableOpacity>


        {/* <Button title="Send Data" onPress={sendData} /> */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    display: "flex",
    marginTop: "15%",
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
    marginBottom: '30%',
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
});

export default PlantAddScreen;
