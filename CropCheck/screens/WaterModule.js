// // WaterModule.js
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";
import Navbar from "./components/Navbar";
// import {Dropdown} from "react-native-material-dropdown-v2-fixed";
import axios from 'axios'
const backgroundimg = require("../assets/backgroundimg.jpg");

const WaterModule = () => {
  const [temp, setTemp ] = useState('')
  const [humidity, setHumidity] = useState('')
  const [location, setLocation] = useState('')
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  // const [weatherData, setWeatherData] = useState(null);
  // let weather = {}
  const fahrenheitToCelsius = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };
  const fetchWeatherData = async () => {
    try {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Karachi,pk&appid=38046aa8b3800991fcc53f7007d058a3`;
      const response = await axios.get(apiUrl);
      const tempInKelvin = response.data.main.temp;
      const humidity = response.data.main.humidity;
      const location = response.data.name; 
      // console.log('temp:', tempInKelvin, 'humidity:', humidity, 'location:', location)
      setHumidity(humidity)
      setLocation(location)
      const tempInCelsius = fahrenheitToCelsius((tempInKelvin - 273.15) * 9/5 + 32); // Convert Kelvin to Celsius
      setTemp(tempInCelsius.toFixed(2)); // Set temperature in Celsius with 2 decimal places
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  

  const handleCalculateNow = () => {
    fetchWeatherData();
    celsius = 
    // const temp = weatherData.main.temp;
    setIsModalVisible(true);
  }

  const [isModalVisible, setIsModalVisible] = useState(false); // State for plant modal visibility
  const [isDataModalVisible, setIsDataModalVisible] = useState(false); //State for data modal
  const [isResultModalVisible, setIsResultModalVisible] = useState(false); //State for result modal
  const [diameter, inputDiameter] = useState(''); // State and function to handle diameter input field
  const [selectedPlace, setSelectedPlace] = useState(null);


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
      <View style={{justifyContent: "center", height: "96%", paddingLeft: "5%", paddingRight: "5%", height: windowHeight*0.94}}>
        <Text style={{fontSize: 22, marginBottom: 10, fontWeight:"bold", marginHorizontal: "5%", marginLeft: '15%', marginRight: "15%"}}>
          Elevating Plant Health with Tailored Watering Guidelines
        </Text>
        <TouchableOpacity onPress={handleCalculateNow} style={{
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
          <Text style={{fontSize: 18, color: 'white'}}>Calculate Now!</Text><Image style={{}} source={require("../assets/water.png")}></Image>
        </TouchableOpacity>

        {/* Snail Modal */}
        <Modal 
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onShow={() => { hideModal(setIsModalVisible,3000), showModal(setIsDataModalVisible,3000); }}
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
                backgroundColor: "#bcdac2",
                padding: 8,
                borderRadius: 28,
              }}>
                  <Text style={{
                    marginTop: "8%",
                    fontSize: 22,
                    fontWeight: "bold",
                    // color: "white",
                  }}>Hold Tight!</Text>
                  <Text style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    // color: "white",
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
                backgroundColor: "#bcdac2",
                borderRadius: 28,
                paddingHorizontal: 15,
                width: "100%",
                // flexDirection: "column",
              }}>
                <Text style={{fontSize: 22, fontWeight: "bold", marginTop: "10%",}}>Data</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 9,}}>
                  <Text style={{fontSize: 20,}}>Temperature</Text>
                  <Image source={require("../assets/temp.png")} style={{height: 50, width: 50, marginHorizontal: 5,}}></Image>
                  <Text style={{fontSize: 20,}}>{temp}°C</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 9,}}>
                  <Text style={{fontSize: 20,}}>Humidity</Text>
                  <Image source={require("../assets/humidity.png")} style={{height: 50, width: 50, marginHorizontal: 5,}}></Image>
                  <Text style={{fontSize: 20,}}>{humidity}%</Text>
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
                  <Text style={{fontSize: 20,}}>{location}.</Text>
                  {/* <Dropdown label="Enter here" data={places} style={{padding:0, backgroundColor: "#A5CEA7",}}></Dropdown> */}
                </View>
                <View style={{marginTop: "5%", height: "10%", marginTop: "7%",}}>
                <TouchableOpacity onPress={test}
                style={{backgroundColor: "green", width: "40%", height: "88%", marginLeft: "60%", borderRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row"}}><Text style={{fontSize: 18, color: "white"}}>Next</Text><Image source={require("../assets/arrow.png")} style={{marginLeft: "6%"}}></Image></TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          {/* Result Modal */}
          <Modal
          animationType="slide"
          transparent={true}
          visible={isResultModalVisible}
          // onShow={setIsDataModalVisible(false)}
          // onShow={() => { hideModal(setIsModalVisible,3000), showModal(setIsDataModalVisible,4000); }}
          onRequestClose={() => setIsResultModalVisible(false)}
          >
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
              width: "94%",
              marginHorizontal: "3%",
              marginVertical: "12%",
              // backgroundColor: "red",
              }}>
                <View style={{
                  backgroundColor: "#bcdac2",
                  borderRadius: 28,
                  paddingHorizontal: 15,
                  width: "100%",
                }}>
                  <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: "8%", marginBottom: "12%",}}>
                    <Text style={{fontSize: 28, fontWeight: "bold",}}>Result</Text>
                    <Image source={require("../assets/tick.png")} style={{height: 65, width: 70, marginLeft: "8%",}}></Image>
                  </View>
                    <View style={{backgroundColor: "#ECF3FA", marginBottom: "10%", alignItems: "center", borderRadius: 20, padding: 17,}}>
                      <Text style={{fontSize: 19, marginTop: "4%",}}>Your Plant needs <Text style={{color: "#49a3d7",}}>10 Liters</Text> of Water Per Week!</Text>
                      <Image source={require("../assets/droplets.png")} style={{height: 135, width: 90, marginBottom: "4%",}}></Image>
                    </View>
                </View>
            </View>
          </Modal>
      </View>
      <View style={{height: Dimensions.get("window").height*0.06}}>
        <Navbar />
      </View>
      </ImageBackground>
    </View>
  );
};

export default WaterModule;
