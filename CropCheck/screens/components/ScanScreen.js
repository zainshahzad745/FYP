import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Button,
  Alert,
  ActivityIndicator,
  Text,
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
        // navigation.navigate('Analyze');
        navigation.navigate("MainScan", { savedImageUri: capturedImage.uri });
        const response = await axios.post(
          "http://192.168.1.9:5000/detect",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },

          setTimeout(() => {
            setLoading(false);
          }, 5000)
        );

        console.log("FormData:", formData);

        if ("error" in response.data) {
          console.log(response.data);
          console.error("Server Error:", response.data.error);
          // Handle the error, show a message to the user, etc.
        } else {
          // Handle the successful response
          console.log("Server Response:", response.data);
        }
      } catch (error) {
        // Handle network or other errors
        console.error("Error uploading image:", error);
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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {capturedImage && (
        <Image
          source={{ uri: capturedImage.uri }}
          style={{ width: 200, height: 200 }}
        />
      )}
      <Button title="Upload Image" onPress={handleUploadImage} />
    </View>
  );
};

export default PlantAddScreen;
