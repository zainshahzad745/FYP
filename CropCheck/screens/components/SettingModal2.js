import React, { useState } from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SettingsModal2 = ({ onClose, navigation }) => {

    const logout = () => {
        navigation.replace('Signin');
    }

    const Languages = {
        values: {
            'en': 'English',
            'ur': 'Urdu',
            'pn': 'Punjabi',
            'ps': 'Pushto',
            'sn': 'Sindhi',
            'bl': 'Balochi'
        }
    };

    const [selectedLanguage, setSelectedLanguage] = useState('');

    const languageItems = Object.keys(Languages.values).map((key) => (
        <Picker.Item key={key} label={Languages.values[key]} value={key} />
    ));

    console.log(iterateLanguages());

    function iterateLanguages() {
        const keyValuePairs = [];

        for (const [key, value] of Object.entries(Languages.values)) {
            keyValuePairs.push({ [key]: value });
        }

        return keyValuePairs;
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true} // This should be controlled by the parent component
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={onClose} style={{ marginLeft: '90%', padding: 10 }}>
                        <Image 
                            source={require("../../assets/Close.png")} 
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>

                    <Text style={{fontSize: 20, marginBottom: '1%', fontSize: 18}}>Select Language</Text>

                    <TouchableOpacity 
                        style={{backgroundColor: '#e3f3fb', marginTop: '10%', width: '100%', height: '20%', borderRadius: 50, alignContent: 'center', justifyContent: 'space-between'}}
                    >
                        {/* <Text style={{marginTop: '5%', fontSize: 20}}>Choose Language</Text> */}
                        <Picker style={{ fontSize: 18 }}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                        >
                            {languageItems}
                        </Picker>
                        {/* <Text style={styles.selectedValue}>
                            Selected Value: {Languages.values[selectedLanguage]}
                        </Text> */}
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={{backgroundColor: '#e3f3fb', marginTop: '10%', width: '100%', height: '20%', borderRadius: 50, alignItems: 'center', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row'}}
                        onPress={logout}
                    >
                        <Text style={{fontSize: 20, color: 'red'}}>Logout</Text>
                        <Image 
                            source={require("../../assets/logout.png")} 
                            style={{ width: 28, height: 30 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        width: Dimensions.get('window').width,
        height: 300,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.2)', // semi-transparent background
    },
    modalView: {
        display: 'flex',
        backgroundColor: "#bcdac2",
        height: 250,
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        width: '70%',
    },
    selectedValue: {
        fontSize: 18,
        marginTop: 10,
    }
});

export default SettingsModal2;
