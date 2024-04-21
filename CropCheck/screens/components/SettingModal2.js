import React, { useContext, useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TranslationContext } from '../../providers/TranslationProvider';

// Define language options
const languageOptions = {
    en: "English",
    ur: "Urdu",
    ps: "Pashto",
    pn: "Punjabi",
    sn: "Sindhi",
    bl: "Balochi",
};

const SettingsModal2 = ({ onClose, navigation }) => {
    const { language, switchLanguage, t } = useContext(TranslationContext); // Ensure correct variable name
    const [selectedLanguage, setSelectedLanguage] = useState(language); // Set default to current language

    const handleLanguageChange = (itemValue) => {
        switchLanguage(itemValue); // Change language when a new one is selected
        setSelectedLanguage(itemValue); // Update local state
    };

    const logout = () => {
        navigation.replace('Signin'); // Redirect to Signin screen on logout
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true} // Should be controlled by the parent component
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableOpacity onPress={onClose} style={{ marginLeft: '90%', padding: 10 }}>
                        <Image
                            source={require('../../assets/Close.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>

                    <Text style={{fontSize: 20, marginBottom: '1%', fontSize: 28, fontWeight: 'bold'}}>Select Language</Text>

                    <TouchableOpacity 
                        style={{backgroundColor: '#e3f3fb', marginTop: '20%', width: '100%', height: '22%', borderRadius: 50, alignContent: 'center', justifyContent: 'space-between'}}
                    >

                    <Picker
                        selectedValue={selectedLanguage} // Default to the current language
                        style={{fontSize: 18}}
                        onValueChange={handleLanguageChange} // Handle language change event
                    >
                        {Object.entries(languageOptions).map(([code, name]) => (
                            <Picker.Item key={code} label={name} value={code} />
                        ))}
                    </Picker>
                    </TouchableOpacity>

                    {/* <TouchableOpacity 
                        style={{backgroundColor: '#e3f3fb', marginTop: '10%', width: '100%', height: '20%', borderRadius: 50, alignItems: 'center', justifyContent: 'space-evenly', display: 'flex', flexDirection: 'row'}}
                        onPress={logout}
                    >
                        <Text style={{fontSize: 20, color: 'red'}}>Logout</Text>
                        <Image 
                            source={require("../../assets/logout.png")} 
                            style={{ width: 28, height: 30 }}
                        />
                    </TouchableOpacity> */}

                </View>
            </View>
        </Modal>
    );
};

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
    title: {
        fontSize: 20,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    logoutButton: {
        backgroundColor: '#e3f3fb',
        marginTop: '10%',
        width: '100%',
        height: 50,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SettingsModal2;


