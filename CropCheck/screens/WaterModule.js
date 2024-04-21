// // WaterModule.js
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, Button, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Modal from "react-native-modal";
import Navbar from "./components/Navbar";
// import {Dropdown} from "react-native-material-dropdown-v2-fixed";
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const backgroundimg = require("../assets/backgroundimg.jpg");

const WaterModule = () => {
  // API Functionality

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

  // Modal Functionality

  const [isModalVisible, setIsModalVisible] = useState(false); // State for plant modal visibility
  const [isDataModalVisible, setIsDataModalVisible] = useState(false); //State for data modal
  const [isResultModalVisible, setIsResultModalVisible] = useState(false); //State for result modal

  function goTo() {
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

// Water Requirements

  const [diameter, setDiameter] = useState(''); // State and function to handle diameter input field
  const [coefficient, setCoefficient] = useState(0);
  const [result, setResult] = useState('');
  const [tempFactor, setTempFactor] = useState('');
  const [humFactor, setHumFactor] = useState('');

  const Plants = {
    values: {
        'ap' : 'Apple',
        'bp' : 'Bell Pepper',
        'bl' : 'Blueberry',
        'ch' : 'Cherry',
        'co' : 'Corn',
        'gr' : 'Grape',
        'po' : 'Potato'
    }
};

  const coefficients = {'ap':2.5, 'bp':3.5, 'bl':3.5, 'ch':2.5, 'co':3, 'gr':3.4, 'po':3};
  console.log(coefficients);

  const [selectedPlant, setSelectedPlant] = useState('');

  const plantItems = Object.keys(Plants.values).map((key) => (
    <Picker.Item key={key} label={Plants.values[key]} value={key} />
));

  
  function settingCoefficient() {
    for (const [key, value] of Object.entries(coefficients)) {
        if (key == selectedPlant) {
          setCoefficient(value);
        }
    }
};

  function settingFactors(humidity, temp) {
    if (humidity >= 30 && humidity <= 50 ) {
      setHumFactor(0.8);
    }
    else  if (humidity > 50){
      setHumFactor(1);
    }
    else if (humidiy < 30) {
      setHumFactor(0.6)
    }
    if (temp = 20) {
      setTempFactor(0.4);
    }
    else if (temp > 20) {
      tempFactor = 0.4 + ( (temp-20)/10 )*0.1;
      setTempFactor(tempFactor);
    }
    else if (temp < 20) {
      tempFactor= 0.4 - ((20-temp)/10)*0.1;
      setTempFactor(tempFactor);
    }
  }

  function waterRequirement(diameter, humidity, temp) {
    settingCoefficient();
    settingFactors(humidity, temp);
    const result = diameter * coefficient * humFactor * tempFactor;
    setResult(result);
    console.log(result, tempFactor, humFactor, coefficient);
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
        <View style={{flexDirection: "row", marginBottom: "55%",  alignItems:"flex-end"}}>
          <Text style={{fontSize: 22, fontWeight: "bold"}}>Water Calculator</Text>
          <Image source={require("../assets/droplet.png")} style={{height: 40, width: 40 }}></Image>
        </View>
        <Text style={{fontSize: 22, marginBottom: 10, fontWeight:"bold", marginHorizontal: "5%",}}>
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
            marginBottom: "35%",
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>Calculate Now!</Text><Image style={{}} source={require("../assets/water.png")}></Image>
        </TouchableOpacity>

        {/* Snail Modal */}
        <Modal 
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onShow={() => { hideModal(setIsModalVisible,2200), showModal(setIsDataModalVisible,2200); }}
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
          onRequestClose={() => setIsDataModalVisible(false)}
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
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 9, }}>
                  <Text style={{fontSize: 20, }}>Location</Text>
                  <Image source={require("../assets/location.png")} style={{height: 60, width: 48,}}></Image>
                  <Text style={{fontSize: 20,}}>{location}</Text>
                  {/* <Dropdown label="Enter here" data={places} style={{padding:0, backgroundColor: "#A5CEA7",}}></Dropdown> */}
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 9,}}>
                  <Text style={{fontSize: 20, }}>Plant Type</Text>
                  <Image source={require("../assets/planttype.png")} style={{height: 74, width: 74,}}></Image>
                  <View 
                        style={{backgroundColor: '#e3f3fb', height: 35, width: 125, borderRadius: 50, justifyContent: "center", alignItems: "center"}}
                    >
                        <Picker style={{ fontSize: 12,  height: "80%", width: "100%"}}
                            selectedValue={selectedPlant}
                            onValueChange={(itemValue) => setSelectedPlant(itemValue)}
                        >
                            {plantItems}
                        </Picker>
                    </View>
                </View>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 9,}}>
                  <Text style={{fontSize: 20, }}>Pot Diameter</Text>
                  <Image source={require("../assets/pot.png")} style={{height: 37, width: 50, marginHorizontal: 5,}}></Image>
                  <TextInput style={{width: 125, height: 35, textAlign: "center", backgroundColor: "#e3f3fb", fontSize: 18, borderRadius: 50,}} 
                  value={diameter} placeholder={"Enter here"} onChangeText={(diameter) => setDiameter(diameter)}></TextInput>
                </View>
                <View style={{height: "10%", marginTop: 19,}}>
                <TouchableOpacity onPress={()=> {goTo(), waterRequirement(diameter, humidity, temp);}}
                style={{backgroundColor: "green", width: "40%", height: "80%", marginLeft: "60%", borderRadius: 20, justifyContent: "center", alignItems: "center", flexDirection: "row"}}><Text style={{fontSize: 18, color: "white"}}>Next</Text><Image source={require("../assets/arrow.png")} style={{marginLeft: "6%"}}></Image></TouchableOpacity>
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
                      <Text style={{fontSize: 19, marginTop: "4%",}}>Your Plant needs <Text style={{color: "#49a3d7",}}>{result} ml</Text> of Water Per Day!*</Text>
                      <Image source={require("../assets/droplets.png")} style={{height: 135, width: 90, marginBottom: "4%",}}></Image>
                    </View>
                    <Text style={{marginBottom: "10%"}}>*Please, note that this is just a suggestion and might not be accurate for all plants.</Text>
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