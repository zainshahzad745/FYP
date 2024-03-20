import React, { useState, useEffect, useRef } from "react";
import MultiSelect from "react-native-multiple-select";
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
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import Axios from "axios";

const PlantAddScreen = () => {
  const [plantName, setPlantName] = useState("");
  const [diseaseType, setDiseaseType] = useState("");
  const [capturedImage, setCapturedImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const multiSelectRef = useRef(null);
  const uploadimg = require("../assets/uploadimg.png");

  const items = [
    {
      id: "92iijs7yta",
      name: "Ondo",
    },
    {
      id: "a0s0a8ssbsd",
      name: "Ogun",
    },
    {
      id: "16hbajsabsd",
      name: "Calabar",
    },
    {
      id: "nahs75a5sg",
      name: "Lagos",
    },
    {
      id: "667atsas",
      name: "Maiduguri",
    },
    {
      id: "hsyasajs",
      name: "Anambra",
    },
    {
      id: "djsjudksjd",
      name: "Benue",
    },
    {
      id: "sdhyaysdj",
      name: "Kaduna",
    },
    {
      id: "suudydjsjd",
      name: "Abuja",
    },
    {
      id: "suudydjsjd",
      name: "Abuja",
    },
    {
      id: "suudydjsjd",
      name: "Abuja",
    },
    {
      id: "suudydjsjd",
      name: "Abuja",
    },
    {
      id: "suudydjsjd",
      name: "Abuja",
    },
    {
      id: "suudydjsjd",
      name: "Abuja",
    },
    {
      id: "suudydjsjd",
      name: "Abuja",
    },
  ];

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
        type: "image/jpeg", // Adjust the type based on your image format
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

      // Handle the response from the server
      console.log(response.data);
      // You can also show an alert or navigate to another screen upon successful submission
    } catch (error) {
      console.error("Error sending data:", error);
      // Handle errors, show an alert, etc.
    }
  };

  return (
    <ImageBackground
      source={require("../assets/backgroundimg.jpg")}
      style={styles.Background}
    >
      <View
        style={{
          flex: 1,
          padding: 10,
          display: "flex",
          marginTop: "15%",
          marginLeft: "1%",
        }}
      >
        <TouchableOpacity style={{ width: "12%", height: "9%", padding: 10 }}>
          <Image
            source={require("../assets/back.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </TouchableOpacity>
        {/* Image Box */}
        <TouchableOpacity
          onPress={openCamera}
          style={{ alignItems: "center", marginBottom: 20 }}
        >
          {capturedImage ? (
            <Image
              source={{ uri: capturedImage.uri }}
              style={{ width: 200, height: 200, borderRadius: 100 }}
            />
          ) : (
            <View
              style={{
                width: 200,
                height: 200,
                backgroundColor: "black",
                borderRadius: 100,
              }}
            >
              <Image
                source={uploadimg}
                style={{ width: "100%", height: "100%", borderRadius: 100 }}
              />
              {/* <Text style={{ textAlign: 'center', paddingTop: 80 }}>Tap to open camera</Text> */}
            </View>
          )}
        </TouchableOpacity>

        {/* MultiSelect Component */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              padding: 10,
              display: "flex",
              marginTop: "4%",
              marginLeft: "1%",
            }}
          >
            <MultiSelect
              hideTags
              itemFontSize={15}
              searchIcon={false}
              items={items}
              uniqueKey="id"
              ref={multiSelectRef}
              onSelectedItemsChange={(selectedItems) =>
                console.log(selectedItems)
              }
              selectText="Select Plant Name"
              searchInputPlaceholderText="Search Items..."
              // altFontFamily="ProximaNova-Light"
              s
              tagRemoveIconColor="#CCC"
              tagBorderColor="#008000"
              tagTextColor="#008000"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#008000"
              displayKey="name"
              searchInputStyle={{ color: "#008000" }}
              submitButtonColor="#008000"
              submitButtonText="Submit"
            />

            <MultiSelect
              style={{}}
              hideTags
              itemFontSize={15}
              items={items}
              uniqueKey="id"
              ref={multiSelectRef}
              onSelectedItemsChange={(selectedItems) =>
                console.log(selectedItems)
              }
              selectText="Select Disease Name"
              searchInputPlaceholderText="Search Items..."
              // altFontFamily="ProximaNova-Light"
              tagRemoveIconColor="#CCC"
              tagBorderColor="#008000"
              tagTextColor="#008000"
              selectedItemTextColor="#CCC"
              selectedItemIconColor="#CCC"
              itemTextColor="#008000"
              displayKey="name"
              searchInputStyle={{ color: "#008000" }}
              submitButtonColor="#008000"
              // submitButtonText="Submit"
            />
          </View>
        </ScrollView>

        {/* Send Data Button */}
        <Button title="Send Data" onPress={sendData} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Background: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default PlantAddScreen;
