import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import Axios from 'axios';

const PlantAddScreen = () => {
  const [plantName, setPlantName] = useState('');
  const [diseaseType, setDiseaseType] = useState('');
  const [capturedImage, setCapturedImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
    })();
  }, []);

  const openCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
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
        formData.append('plantName', plantName);
        formData.append('diseaseType', diseaseType);
        formData.append('image', {
          uri: capturedImage.uri,
          type: 'image/jpeg', // Adjust the type based on your image format
          name: 'plant_image.jpg',
        });
    
        const response = await Axios.post('your_server_endpoint', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        // Handle the response from the server
        console.log(response.data);
        // You can also show an alert or navigate to another screen upon successful submission
      } catch (error) {
        console.error('Error sending data:', error);
        // Handle errors, show an alert, etc.
      }
  };
    

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Image Box */}
      <TouchableOpacity onPress={openCamera} style={{ alignItems: 'center', marginBottom: 20 }}>
        {capturedImage ? (
          <Image source={{ uri: capturedImage.uri }} style={{ width: 200, height: 200 }} />
        ) : (
          <View style={{ width: 200, height: 200, backgroundColor: 'lightgray' }}>
            <Text style={{ textAlign: 'center', paddingTop: 80 }}>Tap to open camera</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* Plant Name Field */}
      <TextInput
        placeholder="Enter Plant Name"
        value={plantName}
        onChangeText={(text) => setPlantName(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      {/* Disease Type Field */}
      <TextInput
        placeholder="Enter Disease Type"
        value={diseaseType}
        onChangeText={(text) => setDiseaseType(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 5 }}
      />

      {/* Send Data Button */}
      <Button title="Send Data" onPress={sendData} />
    </View>
  );
};

export default PlantAddScreen;
