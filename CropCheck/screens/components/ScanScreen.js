import React, { useState, useRef, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Camera } from 'expo-camera';

const App = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const cameraRef = useRef(null);

  const askForCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  useEffect(() => {
    askForCameraPermission();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedPhoto(photo);
    }
  };

  const sendToServer = () => {
    // Implement your logic for sending the captured photo to the server
    console.log('Sending to server:', capturedPhoto.uri);
  };

  return (
    <View style={{ flex: 1 }}>
      {hasPermission === null ? (
        <Text>Requesting camera permission</Text>
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : capturedPhoto ? (
        // Display the captured photo with "Send to Server" button
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: capturedPhoto.uri }} style={{ width: 300, height: 400 }} />
          <TouchableOpacity onPress={sendToServer} style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 18, color: 'blue' }}>Send to Server</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // Camera view with larger shutter button at the bottom center
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} ref={cameraRef}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
            }}
          >
            <TouchableOpacity style={{ marginBottom: 30 }} onPress={takePicture}>
              <View
                style={{
                  borderWidth: 2,
                  borderRadius: 50,
                  borderColor: 'white',
                  height: 100,
                  width: 100,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    borderWidth: 2,
                    borderRadius: 50,
                    borderColor: 'white',
                    height: 70,
                    width: 70,
                    backgroundColor: 'white',
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
};

export default App;
