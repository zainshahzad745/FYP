import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image } from "react-native";
import Navbar from './components/Navbar';

const Disease = () => {
  return (
    <ImageBackground source={require('../assets/backgroundimg.jpg')} resizeMode="cover" style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.text}>Disease</Text>
        <Image source={require('../assets/pastscans1.png')} style={styles.img}></Image>
        <Text style={styles.text2}>Disease Type:  <Text style={styles.text3}>Wheat Rust</Text></Text>
        <Text style={styles.text4}>Proposed Solution</Text>
      </View>
      <View style={styles.solution}>
        <Text style={{ fontSize: 16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
      </View>
      <View>
        <Text> </Text>
      </View>
      <View style={{ marginTop: '32%'}}>
      <Navbar/>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    marginTop: 50,
    width: "100%",
    height: "50%",
    // backgroundColor: 'white',
    padding: 10,
  },
  text: {
    fontSize: 40,
    marginLeft: 35,
    fontWeight: 'bold'
  },
  img: {
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
    // marginLeft: 35,
    // marginTop: 30,
    // height: 150,
    width: '90%',
    backgroundColor: 'red',
    resizeMode: 'none',
  },
  text2:{
    fontSize: 40,
    marginLeft: 35,
    marginTop: 20
  },
  text3: {
    fontSize: 25,
    color: 'red',
    fontWeight: 'bold'
  },
  text4: {
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: 35,
    marginTop: 15
  },
  solution: {
    width: '85%',
    // backgroundColor: 'white',
    marginLeft: '10%', 
    marginRight: '5%',
    // fontSize: 30,
    // marginLeft: 35,
    // marginTop: 10
  }
});

export default Disease;