import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Button,
  Alert,
  ActivityIndicator,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import Modal from "react-native-modal";

const PlantAddScreen = () => {
  const navigation = useNavigation();
  const [capturedImage, setCapturedImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (loading && capturedImage) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [loading, capturedImage]);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    const openCamera = async () => {
      if (hasCameraPermission) {
        const result = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });

        if (!result.cancelled) {
          setCapturedImage(result);
        }
      }
    };

    openCamera();
  }, [hasCameraPermission]);

  const handleUploadImage = async () => {
    setLoading(true);
    if (capturedImage) {
      const formData = new FormData();
      formData.append("image", {
        uri: capturedImage.uri,
        type: "image/jpeg",
        name: "photo.jpg",
      });
  
      try {
        const response = await axios.post(
          "http://192.168.176.46:5000/detect",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
  
        // Move navigation to after getting the response
        if (response && "error" in response.data) {
          console.error("Server Error:", response.data.error);
          // Handle the error, show a message to the user, etc.
        } else {
          // If there's no error, navigate to the MainScan component
          navigation.navigate("MainScan", { 
            savedImageUri: capturedImage.uri, 
            response: response.data // Pass the response data as a route parameter
          });
  
          // Reset capturedImage state to null to clear the captured image
          setCapturedImage(null);
        }
  
        setLoading(false); // Set loading to false after handling response
      } catch (error) {
        // Handle network or other errors
        console.error("Error uploading image:", error);
        setLoading(false);
      }
    }
  };
  
  const saveCapturedImage = async () => {
    if (capturedImage) {
      try {
        const fileUri = capturedImage.uri;
        const fileName = fileUri.split("/").pop();
        const newUri = FileSystem.documentDirectory + fileName;
        await FileSystem.copyAsync({ from: fileUri, to: newUri });
        Alert.alert("Success", "Image saved successfully!");
        console.log("Saved image path:", newUri);
      } catch (error) {
        console.error("Error saving image:", error);
        Alert.alert("Error", "Failed to save image.");
      }
    } else {
      Alert.alert("Error", "No image to save.");
    }
  };

  return (
    <ImageBackground source={require('../../assets/backgroundimg.jpg')} style={{    flex: 1,
      resizeMode: "contain",}} >
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      
      {capturedImage && (
        <Image
          source={{ uri: capturedImage.uri }}
          style={{ width: 300, height: 300, borderRadius: 50, margin: 50 }}
        />
      )}
      <TouchableOpacity
          onPress={handleUploadImage}
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
          <Text style={{ color: "white", fontWeight: "bold" }}>Upload Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={saveCapturedImage}
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
          <Text style={{ color: "white", fontWeight: "bold" }}>Save Image</Text>
        </TouchableOpacity>
      {/* <Button title="Upload Image" onPress={handleUploadImage} />
      <Button title="Save Image" onPress={saveCapturedImage} /> */}
      <Modal
          isVisible={showModal}
          animationIn="zoomIn"
          animationOut="zoomOut"
          backdropOpacity={0.4}
        >
          <View
            style={{
              flexDirection: "column",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                padding: 40,
                borderRadius: 20,
              }}
            >
              <ActivityIndicator size="70" color="green" />
              <Image
                source={require("../../assets/cactusicon.png")}
                style={{ width: 250, height: 250, marginTop: 20 }}
              />
              <Text
                style={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Analyzing.....
              </Text>
            </View>
          </View>
        </Modal>
    </View>
    </ImageBackground>
  );
};

export default PlantAddScreen;
