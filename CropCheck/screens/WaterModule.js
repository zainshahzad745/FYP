// WaterModule.js
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";
import Navbar from "./components/Navbar";
import {Dropdown} from "react-native-material-dropdown-v2-fixed";

const backgroundimg = require("../assets/backgroundimg.jpg");

const WaterModule = () => {
  const [isModalVisible, setIsModalVisible] = useState(false); // State for plant modal visibility
  const [isDataModalVisible, setIsDataModalVisible] = useState(false); //State for data modal
  const [isResultModalVisible, setIsResultModalVisible] = useState(false); //State for result modal
  const [diameter, inputDiameter] = useState(''); // State and function to handle diameter input field
  const [selectedPlace, setSelectedPlace] = useState(null);
  const places = [{
    value: "Karachi"}, { value: "Lahore"}, { value: "Islamabad"}, { value: "Peshawar"}, 
    { value: "Quetta"}, { value: "Faisalabad"}, { value: "Sialkot"}
  ];

  const test = () => {
    setIsDataModalVisible(false)
    console.log('2nd modal', isDataModalVisible)
    setIsResultModalVisible(true)
  }

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
        height: Dimensions.get("window").height,
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
          transparent={true}
          visible={isDataModalVisible}
          // onShow={() => { hideModal(setIsDataModalVisible, 10000); }}
          // onRequestClose={() => setIsDataModalVisible(false)}
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
                backgroundColor: "#d9e3db",
                borderRadius: 28,
                paddingHorizontal: 15,
                width: "100%",
                // flexDirection: "column",
              }}>
                <Text style={{fontSize: 22, fontWeight: "bold", marginTop: "10%",}}>Data</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 9,}}>
                  <Text style={{fontSize: 20,}}>Temperature</Text>
                  <Image source={require("../assets/temp.png")} style={{height: 50, width: 50, marginHorizontal: 5,}}></Image>
                  <Text style={{fontSize: 20,}}>Result</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 9,}}>
                  <Text style={{fontSize: 20,}}>Humidity</Text>
                  <Image source={require("../assets/humidity.png")} style={{height: 50, width: 50, marginHorizontal: 5,}}></Image>
                  <Text style={{fontSize: 20,}}>Result</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 9,}}>
                  <Text style={{fontSize: 20, }}>Pot Diameter</Text>
                  <Image source={require("../assets/pot.png")} style={{height: 37, width: 50, marginHorizontal: 5,}}></Image>
                  <TextInput style={{width: 75, height: 22, textAlign: "center", backgroundColor: "white",}} 
                  value={diameter} placeholder={"Enter here"} onChangeText={inputDiameter}></TextInput>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 9, }}>
                  <Text style={{fontSize: 20, }}>Location</Text>
                  <Image source={require("../assets/location.png")} style={{height: 60, width: 48,}}></Image>
                  <Dropdown label="Enter here" data={places} style={{padding:0, backgroundColor: "#A5CEA7",}}></Dropdown>
                </View>
                <View style={{marginTop: "5%", height: "10%", marginTop: "7%",}}>
                <TouchableOpacity onPress={test}
                style={{backgroundColor: "red", width: "45%", height: "77%", marginLeft: "55%",}}></TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          {/* Result Modal */}
          <Modal
          animationType="slide"
          transparent={false}
          visible={isResultModalVisible}
          // onShow={setIsDataModalVisible(false)}
          // onShow={() => { hideModal(setIsModalVisible,3000), showModal(setIsDataModalVisible,4000); }}
          // onRequestClose={() => {setIsModalVisible(false), setIsDataModalVisible(false)}}
          >
            <View style={{backgroundColor: "red",}}>

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
