// PlantAddScreen.js
import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';

const PlantAddScreen = () => {
  const [capturedImage, setCapturedImage] = useState(null);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === 'granted');
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {capturedImage && <Image source={{ uri: capturedImage.uri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};

export default PlantAddScreen;
