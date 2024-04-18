// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image } from 'react-native';
// import Modal from "react-native-modal";

// const SettingsModal = ({ isVisible, onClose }) => {
//   const [isModalVisible, setIsModalVisible] = useState(isVisible);

//   const handleModal = () => {
//     setIsModalVisible(!isModalVisible);
//     onClose(); // Call onClose callback to notify parent component
//   };

//   return (
//     <Modal isVisible={isModalVisible} animationIn="fadeIn" animationOut="fadeOut">
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <View style={{ borderRadius: 30, backgroundColor: '#bcdac2', padding: 20 }}>
//           <TouchableOpacity onPress={handleModal} style={{ alignSelf: 'flex-end' }}>
//             <Image source={require('../../assets/close.png')} style={{ width: 20, height: 20 }} />
//           </TouchableOpacity>
//           <Text style={{ fontSize: 18, marginTop: 20 }}>Your password has been changed</Text>
//         </View>
//       </View>
//     </Modal>
//   );
// };
import { useState } from 'react';
import { Modal } from 'react-native';

const SettingsModal= () => {
  // Get the current date and day using moment
  const [isModalVisible, setisModalVisible] = useState(false);
  const handleModal = () => setisModalVisible(() => !isModalVisible);
  
    return(
        <Modal visible={isModalVisible} animationType="fade">
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
    </Modal>

    )
}

export default SettingsModal;

