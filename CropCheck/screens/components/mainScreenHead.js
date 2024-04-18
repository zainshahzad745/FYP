// MainScreenHead.js
import React from 'react';
import {useState} from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, Image} from 'react-native';
import moment from 'moment';
import { Modal } from 'react-native';
import SettingsModal from './SettingsModal';
const footerimg = require('../../assets/head1.png');

const MainScreenHead = () => {
  // Get the current date and day using moment
  const currentDate = moment().format('MMMM D, YYYY');
  const currentDay = moment().format('dddd');

  const [isModalVisible, setisModalVisible] = useState(false);
  const handleModal = () => setisModalVisible(() => !isModalVisible);
  
  // const [modalVisible, setModalVisible] = useState(false);
  // const openModal = () => {
  //   setModalVisible(true);
  // };

  // const closeModal = () => {
  //   setModalVisible(false);
  // };

  return (
    <ImageBackground
      source={footerimg} // Set the path to your background image
      style={styles.backgroundImage}
      //resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Left side */}
        <View style={styles.leftContainer}>
          <Text style={styles.textLeft}>Hi There!</Text>
          <Text style={styles.textLeft}>Zain! 😆</Text>
        </View>

        {/* Right side */}
        <View style={styles.rightContainer}>
          <Text style={styles.textRight}>{currentDate}</Text>
          <Text style={styles.textRight}>{currentDay}</Text>
        </View>
        <View style={styles.nav}>
          <TouchableOpacity 
            style={{color: 'black'}} 
            onPress={SettingsModal}
          >
            <Image 
              source={require("../../assets/settings.png")} 
              style={{ width: 30, height:30}}
            />
            {/* <Modal visible={isModalVisible} animationType="fade">
              <View style={{flex: 1,
                borderRadius: 30,
                marginLeft: 20,
                marginRight: 10,
                marginTop: "10%",
                marginBottom: "90%",
                justifyContent: "center",
                backgroundColor: "#bcdac2",
                alignItems: "center",
                height: "0%",
                width: "90%",
                marginVertical: "12%",}}>
              <View style={{opacity: "1", height: '100%',width:'100%',marginLeft: '13%'}}>
                <TouchableOpacity 
                  style={{paddingTop: 25}} 
                  onPress={handleModal}
                >
                    <Image 
                            source={require("../../assets/close.png")} 
                            style={{ width: "6%", height: "20%"}}
                    />
                </TouchableOpacity>
                        <TouchableOpacity
                        // onPress={handleSignUpGoogle}
                            style={{
                            flexDirection: "row",
                            backgroundColor: "#e3f3fb", // Green background color
                            borderRadius: 50, // Custom border radius
                            width: "80%", // Custom width
                            height: "18%",
                            marginLeft: "4%",
                            marginBottom: "7%",
                            shadowColor: "#000",
                            shadowOffset: {
                            width: 0,
                            height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            marginRight: "5%",
                            // marginTop: "1%", // Custom height
                            justifyContent: "center",
                            alignItems: "center",
                            }}
                        >
                          <Text style={{fontSize: 18,paddingRight: 50}}>Choose Language</Text>
                          <Image 
                            source={require("../../assets/dropdown.png")} 
                            style={{ width: "7%", height: "30%"}}
                          />
                    </TouchableOpacity>
                    <TouchableOpacity
                        // onPress={handleSignUpGoogle}
                            style={{
                            flexDirection: "row",
                            backgroundColor: "#e3f3fb", // Green background color
                            borderRadius: 50, // Custom border radius
                            width: "80%", // Custom width
                            height: "18%",
                            marginLeft: "4%",
                            marginTop: "4%",
                            shadowColor: "#000",
                            shadowOffset: {
                            width: 0,
                            height: 2,
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            marginRight: "5%",
                            // marginTop: "1%", // Custom height
                            justifyContent: "center",
                            alignItems: "center",
                            }}
                        >
                          <Text style={{fontSize: 18,paddingRight: 120}}>Log Out</Text>
                          <Image 
                            source={require("../../assets/logout.png")} 
                            style={{ width: "7%", height: "30%"}}
                          />
                    </TouchableOpacity>
            </View>
        </View>
    </Modal> */}
            {/* <Button title="Open Settings" onPress={openModal} />
            <SettingsModal isVisible={modalVisible} onClose={closeModal} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const { height } = Dimensions.get('window');
const componentHeight = height * 0.2;

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '10',
    resizeMode: 'contain',
  },
  container: {
    flexDirection: "row",
    height: componentHeight,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  nav: {
    margin: "3%",
    flexDirection: 'row',
    //width: 100,
  },
  leftContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 30,
    marginLeft: 40,
  },
  rightContainer: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textLeft: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  textRight: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
});

export default MainScreenHead;
