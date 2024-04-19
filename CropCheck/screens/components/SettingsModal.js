import React from 'react';
import { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
//import DropDownPicker from 'react-native-dropdown-picker';
import Dropdown from './Dropdown';

const SettingsModal= ({onClose}) => {
  // Get the current date and day using moment

  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownVisible(false); // Hide the dropdown after language selection
  };

    return(
        <Modal 
          animationType="fade" 
          transparent={true}
          visible={true} // This should be controlled by the parent component
          onRequestClose={onClose} // Close modal when back button is pressed
        >
          <View style={{
                flex: 1,
                borderRadius: 30,
                paddingTop: 30,
                marginLeft: 30,
                marginRight: 10,
                //marginTop: 50,
                marginBottom: "90%",
                justifyContent: "center",
                backgroundColor: "#bcdac2",
                alignItems: "center",
                height: "0%",
                width: "85%",
                marginVertical: "12%",
              }}>
            <View style={{opacity: "1", height: '100%',width:'80%',backgroundColor: "#bcdac2", borderRadius: 20, paddingTop: 60,
            alignItems: "center",}}>
                <TouchableOpacity 
                  style={{position: "absolute", right: 0}} 
                  onPress={onClose}
                >
                    <Image 
                            source={require("../../assets/close.png")} 
                            style={{ width: 20, height: 20}}
                    />
                </TouchableOpacity>
                        <TouchableOpacity
                        // onPress=Choose Language
                            onPress={toggleDropdown}
                            style={{
                            flexDirection: "row",
                            backgroundColor: "#e3f3fb", // Green background color
                            borderRadius: 50, // Custom border radius
                            width: "100%", // Custom width
                            height: 50,
                            marginLeft: "4%",
                            //marginBottom: 40,
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
                          <Text style={{fontSize: 18,paddingRight: 50}}>{selectedLanguage || 'Choose Language'}</Text>
                          <Image 
                            source={require("../../assets/dropdown.png")} 
                            style={{ width: 20, height: 20}}>
                          </Image>
                    </TouchableOpacity>
                    {isDropdownVisible && <Dropdown onSelect={handleLanguageChange} />}
                    {/* {isDropdownVisible && <Dropdown />} */}
                    <TouchableOpacity
                        // onPress={handleSignUpGoogle}
                        style={{
                          flexDirection: "row",
                          backgroundColor: "#e3f3fb", // Green background color
                          borderRadius: 50, // Custom border radius
                          width: "100%", // Custom width
                          height: 50,
                          marginLeft: "4%",
                          marginTop: "15%",
                          //marginBottom: 15,
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
                            style={{ width: 20, height: 20}}
                          />
                    </TouchableOpacity>
            </View>
          </View>
        </Modal>
    )
}

export default SettingsModal;

