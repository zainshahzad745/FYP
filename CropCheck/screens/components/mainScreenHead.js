// MainScreenHead.js
import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Touchable, TouchableOpacity, Image, Modal } from 'react-native';
import moment from 'moment';
const footerimg = require('../../assets/head1.png');


const MainScreenHead = ({navigation}) => {
  // Get the current date and day using moment
  const currentDate = moment().format('MMMM D, YYYY');
  const currentDay = moment().format('dddd');
  const [isModalVisible, setisModalVisible] = useState(false);
  const handleModalClick = () => {
    setisModalVisible(!isModalVisible); // Toggle modal visibility
  }

  const handleLogout = () => {
      navigation.replace('Signin')
  }

  return (
    <ImageBackground
      source={footerimg} // Set the path to your background image
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Left side */}
        
        <View style={styles.leftContainer}>
          <Text style={styles.textLeft}>Hi There!</Text>
          <Text style={styles.textLeft}>Have a great day ! 🌱</Text>
        </View>

        {/* Right side */}
        <View style={styles.rightContainer}>
          <Text style={styles.textRight}>{currentDate}</Text>
          <Text style={styles.textRight}>{currentDay}</Text>
          <TouchableOpacity style={{width: 30, height: 30, alignItems: 'center'}} onPress={handleModalClick}>

            <Image source={require('../../assets/logout.png')} style={{width: 31, height: 33, marginRight: '35%'}} />
          </TouchableOpacity>
          <Text style={{fontSize: 15, color: 'red', marginRight: '1%', fontWeight: '800', backgroundColor: 'white', marginTop: '5%', borderRadius: 5}}>Logout</Text>
        </View>
        <Modal
          animation="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {setisModalVisible(false)}}
        >
          <View style={{
            width: Dimensions.get('window').width,
            height: 300,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.2)', 
          }}>
            <View style={{
              display: 'flex',
              backgroundColor: "#bcdac2",
              height: 200,
              borderRadius: 20,
              padding: 16,
              alignItems: "center",
              width: '60%',
            }}>
              <TouchableOpacity onPress={handleModalClick} style={{ marginLeft: '90%', padding: 10 }}>
                        <Image
                            source={require('../../assets/Close.png')}
                            style={{ width: 20, height: 20 }}
                        />
                    </TouchableOpacity>
                    <Text style={{fontSize: 15, marginBottom: '1%', fontSize: 28,}}>Are you sure?</Text>
                    <TouchableOpacity onPress={handleLogout}
                        style={{backgroundColor: '#e3f3fb', marginTop: '10%', width: '60%', height: '22%', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 18, color: "red"}}>Log Out</Text>
                    </TouchableOpacity>

            </View>

          </View>
        </Modal>


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
    display: 'flex',
    flexDirection: 'row',
    height: componentHeight,
    // backgroundColor: 'green',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  leftContainer: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    marginTop: '12%',
    padding: 10,
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
