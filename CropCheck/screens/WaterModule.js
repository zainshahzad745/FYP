// WaterModule.js
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, Dimensions, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";
import Navbar from "./components/Navbar";

const backgroundimg = require("../assets/backgroundimg.jpg");

const WaterModule = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State for plant modal visibility
  const [isDataModalVisible, setIsDataModalVisible] = useState(false); //State for data modal
  const hideModal = (whichModal, delay) => {
    setTimeout(() => {
      whichModal(false);
    }, delay);
  };

  const showModal = (whichModal, delay)  => {
    setTimeout(() => {
      whichModal(true);
    }, delay);
  };

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

        {/* Snail Modal */}
        <Modal 
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onShow={() => { hideModal(setIsModalVisible,3000), showModal(setIsDataModalVisible,4000); }}
          >
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              width: "100%",
              marginVertical: "12%",
            }}>
              <View style={{
                backgroundColor: "#A5CEA7",
                padding: 8,
                borderRadius: 28,
              }}>
                  <Text style={{
                    marginTop: "8%",
                    fontSize: 22,
                    fontWeight: "bold",
                  }}>Hold Tight!</Text>
                  <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                  }}>Fetching Temperature and Humidity Levels</Text>
                  <Image source={require("../assets/snail.png")} style={{
                    width: 300,
                    height: 300,
                    resizeMode: "contain",
                    marginHorizontal: "3%",
                  }}></Image>
              </View>
            </View>
          </Modal>

          {/* Data Modal */}
          <Modal
          animationType="slide"
          transparent={false}
          visible={isDataModalVisible}
          onShow={() => { hideModal(setIsDataModalVisible, 4000); }}
          >
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              width: "100%",
              marginVertical: "12%",
              // backgroundColor: "red",
            }}>
              <View style={{
                backgroundColor: "#A5CEA7",
                padding: 8,
                borderRadius: 28,
                width: "80%",
              }}>
                <Text style={{fontSize: 22, fontWeight: "bold",}}>Data</Text>
                <View style={{flexDirection: "row",}}>
                  <Text style={{fontSize: 20,}}>Temperature</Text>
                  <Image source={require("../assets/temp.png")}></Image>
                  <Text>Result</Text>
                </View>
                <View style={{flexDirection: "row",}}>
                  <Text style={{fontSize: 20,}}>Humidity</Text>
                  <Image source={require("../assets/humidity.png")}></Image>
                  <Text>Result</Text>
                </View>
                <View style={{flexDirection: "row",}}>
                  <Text style={{fontSize: 20,}}>Pot Diameter</Text>
                  <Image source={require("../assets/pot.png")}></Image>
                  <Text>Input</Text>
                </View>
                <View style={{flexDirection: "row",}}>
                  <Text style={{fontSize: 20,}}>Location</Text>
                  <Image source={require("../assets/location.png")}></Image>
                  <Text>Input</Text>
                </View>
                <TouchableOpacity></TouchableOpacity>
              </View>
            </View>
          </Modal>
      </View>
      <View>
        <Navbar />
      </View>
      </ImageBackground>
    </View>
  );
};

export default WaterModule;
