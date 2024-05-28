import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image, ScrollView } from "react-native";
import Navbar from './components/Navbar';
// import { decode } from 'base-64';

const Disease = ({route}) => {
  const {diseaseData} = route.params;
  console.log('at disease.js update ', diseaseData.image);
  // useEffect(() => {
  //   const base64Data = diseaseData.image;
  //   const decodedData = decode(base64Data);
  //   console.log('decoded data', decodedData);
  // }, [diseaseData.image]);
  return (
    <ImageBackground source={require('../assets/backgroundimg.jpg')} resizeMode="cover" style={styles.bg}>
      <View style={styles.container}>
        <Text style={styles.text}>{diseaseData.disease_name}</Text>
        <Image source={{ uri: `data:image/jpeg;base64,${diseaseData.image}` }} style={styles.img}></Image>
        {/* <Text style={styles.text2}>Disease Type:  <Text style={styles.text3}>Wheat Rust</Text></Text> */}
        <Text style={styles.text4}>Proposed Solution</Text>
      </View>
      <ScrollView style={{flex: 1,  height: '50%', marginBottom: '22%'}}>
      <View style={styles.solution}>
        <Text style={{ fontSize: 16}}>{diseaseData.solution}</Text>
      </View>
      </ScrollView>
      <View>
        <Text> </Text>
      </View>
      <View style={{ height: '10%', position: 'absolute', bottom: 0}}>
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
    height: '60%',
    backgroundColor: 'red',
    resizeMode: 'contain',
    borderRadius: 20
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
    height: '100%',
    // backgroundColor: 'white',
    marginLeft: '10%', 
    marginRight: '5%',
    // fontSize: 30,
    // marginLeft: 35,
    // marginTop: 10
  }
});

export default Disease;