// WaterModule.js
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, Dimensions, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import Navbar from "./components/Navbar";

const backgroundimg = require("../assets/backgroundimg.jpg");

const WaterModule = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State for plant modal visibility

  return (
    <View style={{width: Dimensions.get("window").width,
        height: "100%",
        display: "flex", justifyContent: "center",}}>
      <ImageBackground
        source={backgroundimg}
        style={{
          resizeMode: "stretch",
          flex: 1,
        }}
      > 
      <View style={{justifyContent: "center", height: "96%", paddingLeft: "5%", paddingRight: "5%",}}>
        <Text style={{fontSize: 22, marginBottom: 10, fontWeight:"bold", marginHorizontal: "5%",}}>
          Elevating Plant Health with Tailored Watering Guidelines
        </Text>
        <TouchableOpacity onPress={() => setIsModalVisible(true)} style={{
            backgroundColor: "green", // Green background color
            opacity: 0.8, // Semi-transparent
            borderRadius: 50, // Custom border radius
            width: "76%", // Custom width
            height: "8%",
            marginHorizontal: "12%",
            marginTop: "12%", // Custom height
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}>
          <Text style={{fontSize: 18,}}>Calculate Now!</Text><Image source={require("../assets/water.png")}></Image>
        </TouchableOpacity>

        {/* 1st Modal */}
        <Modal 
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}></Modal>
      </View>
      <View>
        <Navbar />
      </View>
      </ImageBackground>
    </View>
  );
};

export default WaterModule;
