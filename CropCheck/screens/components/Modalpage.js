import React from 'react';
import { View, Modal, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsModal = ({ visible, onClose }) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Settings Content Here</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  
  export default SettingsModal;
  
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black background
    },
    modalView: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalText: {
      marginBottom: 20,
      textAlign: 'center',
    },
    closeButton: {
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#2196F3',
      borderRadius: 5,
    },
    closeButtonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
  

  ------------------------------------------------------------------------------------------
  import React from 'react';
import {useState} from "react";
import { View, Text, TouchableOpacity, Image} from 'react-native';
import Modal from "react-native-modal";

const SettingsModal = ({}) => {
 const [isModalVisible, setisModalVisible] = useState(false);
 const handleModal = () => setisModalVisible(() => !isModalVisible);
    
    // const handlekPress = () => {
    //     navigation.mainScreenHead();
    //     };
      
  return (
    <Modal visible={isModalVisible} animationType="fade">
        <View style={{flex: 1,
              borderRadius: 30,
              marginTop: 20,
              marginBottom: 350,
              justifyContent: "center",
              backgroundColor: "#bcdac2",
              alignItems: "center",
              height: "0%",
              width: "100%",
              marginVertical: "12%",}}>
            <View style={{opacity: "1", height: '100%',width:'110%',marginLeft: '13%'}}>
                <TouchableOpacity 
                        style={{paddingTop: 30,paddingLeft: 15}} 
                        onPress={handleModal}
                >
                    <Image 
                            source={require("../../assets/close.png")} 
                            style={{ width: "6%", height: "18%"}}
                    />
                </TouchableOpacity>
                <Text style={{fontSize: 18, marginTop: "10%",marginLeft: '10%'}}>Your password has been changed</Text>
                        {/* <TouchableOpacity
                        // onPress={handleSignUpGoogle}
                            style={{
                            backgroundColor: "#e3f3fb", // Green background color
                            borderRadius: 50, // Custom border radius
                            width: "75%", // Custom width
                            height: "9%",
                            marginLeft: "7%",
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
                    </TouchableOpacity> */}
            </View>
        </View>
    </Modal>
  );
};

export default SettingsModal;

