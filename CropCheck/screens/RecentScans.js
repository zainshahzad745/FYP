// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   ImageBackground,
//   scrollView,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import Navbar from "./components/Navbar";

// const RecentScans = ({ navigation }) => {
//   const handleImageClick = () => {
//     navigation.navigate("Disease");
//   };

//   return (
//     <ImageBackground
//       source={require("../assets/backgroundimg.jpg")}
//       resizeMode="cover"
//       style={styles.bg}
//     >
//       <Text style={styles.text}>Past Scans</Text>
//       <View style={styles.scans}>
//         <View style={styles.scans1}>
//           <TouchableOpacity onPress={handleImageClick}>
//             <Image
//               // source={require("../assets/pastscans1.png")}
//               style={styles.images}
//             ></Image>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleImageClick}>
//             <Image
//               // source={require("../assets/pastscans3.png")}
//               style={styles.images}
//             ></Image>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleImageClick}>
//             <Image
//               source={require("../assets/pastscans5.png")}
//               style={styles.images}
//             ></Image>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.scans2}>
//           <TouchableOpacity onPress={handleImageClick}>
//             <Image
//               source={require("../assets/pastscans2.png")}
//               style={styles.images}
//             ></Image>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleImageClick}>
//             <Image
//               source={require("../assets/pastscans4.png")}
//               style={styles.images}
//             ></Image>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={handleImageClick}>
//             <Image
//               source={require("../assets/pastscans6.png")}
//               style={styles.images}
//             ></Image>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={{ marginTop: "33%" }}>
//         <Navbar />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     // marginTop: 70,
//     // marginLeft: 35,
//     fontSize: 40,
//     marginLeft: '5%',
//     marginRight: '5%',
//     fontWeight: "bold",
//     // backgroundColor: 'red',
//     marginTop: "15%"
//   },
//   scans: {
//     flexDirection: "row",
//     justifyContent: "space-evenly",
//     color: "blue",
//     // backgroundColor: "white",
//     marginTop: "10%",
//   },
//   scans1: {
//     flexDirection: "column",
//     justifyContent: "space-evenly",
//     alignItems: "flex-start",
//   },
//   scans2: {
//     flexDirection: "column",
//     justifyContent: "space-evenly",
//     alignItems: "flex-start",
//   },
//   bg: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//   },
//   images: {
//     height: 130,
//     width: 130,
//     margin: 20,
//   },
// });

// export default RecentScans;
