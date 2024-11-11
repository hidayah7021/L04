// // ======= Exercise1 =======
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View style={{marginTop: 50, margin: 20}}>
//         <Text style={{fontSize: 24}}>
//           RP Values
//         </Text>
//         <Text style={{color: 'green'}}>
//           Excellence
//         </Text>
//         <Text style={{backgroundColor: 'yellow'}}>
//           Customer-centric
//         </Text>
//         <Text style={{fontStyle: 'italic'}}>
//           Intelligence
//         </Text>
//         <Text style={{textAlign: 'center'}}>
//           Teamwork
//         </Text>
//         <Text style={{backgroundColor: 'black', color: 'white'}}>
//           Enterprising
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise1;

// // ====== Exercise2 =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   greenBox:{
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   boxText:{
//     textAlign: 'center',
//     color: 'white',
//   },
//   title: {
//     fontWeight: 'bold'
//   }
// });
//
// const Exercise2 = () => {
//   return (
//       <View style={{marginTop: 50, margin:20}}>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>
//             Who We Are
//           </Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>
//             Our Campus
//           </Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>
//             Our People
//           </Text>
//         </View>
//       </View>
//   )
// }
//
// export default Exercise2;

// // // ====== Exercise3A =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles2 = StyleSheet.create({
//   parent:{
//     marginTop:50,
//     margin:20,
//     flexDirection: 'row',
//     backgroundColor:'#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     flexDirection: 'row',
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 27
//   }
// });
//
// const Exercise3A = () => {
//   return (
//       <View style={styles2.parent}>
//         <Text style={[styles2.child, {backgroundColor: 'powderblue'}]}>
//           ChildOne
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'skyblue'}]}>
//           ChildTwo
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'steelblue'}]}>
//           ChildThree
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3A;

// // // ====== Exercise3B =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles2 = StyleSheet.create({
//   parent:{
//     flex:1,
//     marginTop:50,
//     margin:20,
//     flexDirection: 'column',
//     backgroundColor:'#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     flex:1,
//     flexDirection: 'row',
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 27
//   }
// });
//
// const Exercise3B = () => {
//   return (
//       <View style={styles2.parent}>
//         <Text style={[styles2.child, {backgroundColor: 'powderblue'}]}>
//           ChildOne
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'skyblue'}]}>
//           ChildTwo
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'steelblue'}]}>
//           ChildThree
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3B;

// // // ====== Exercise3C =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles2 = StyleSheet.create({
//   parent:{
//     flex:1,
//     marginTop:50,
//     margin:20,
//     flexDirection: 'column',
//     backgroundColor:'#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     flex:1,
//     flexDirection: 'row',
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 20
//   }
// });
//
// const Exercise3C = () => {
//   return (
//       <View style={styles2.parent}>
//         <Text style={[styles2.child, {backgroundColor: 'powderblue', maxWidth:90}]}>
//           Child One
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'skyblue'}]}>
//           Child Two
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'steelblue', maxHeight:120}]}>
//           Child Three
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3C;

// // ====== Exercise3D =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles2 = StyleSheet.create({
//   parent:{
//     marginTop:50,
//     margin:20,
//     flexDirection: 'row',
//     backgroundColor:'#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     flexDirection: 'row',
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 20
//   }
// });
//
// const Exercise3D = () => {
//   return (
//       <View style={styles2.parent}>
//         <Text style={[styles2.child, {backgroundColor: 'powderblue', flex:1 }]}>
//           ChildOne
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'skyblue', flex:2}]}>
//           ChildTwo
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'steelblue', flex:3}]}>
//           ChildThree
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3D;

// // // ====== Exercise3E =======
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles2 = StyleSheet.create({
//   parent:{
//     flex: 1,
//     marginTop:50,
//     margin:20,
//     flexDirection: 'column',
//     // justifyContent: 'space-around'
//     // justifyContent: 'flex-end'
//     // justifyContent: 'flex-start'
//     justifyContent: 'space-between',
//     backgroundColor:'#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5
//   },
//   child:{
//     flexDirection: 'row',
//     borderWidth: 2,
//     textAlign:'center',
//     fontSize: 20
//   }
// });
//
// const Exercise3E = () => {
//   return (
//       <View style={styles2.parent}>
//         <Text style={[styles2.child, {backgroundColor: 'powderblue'}]}>
//           ChildOne
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'skyblue'}]}>
//           ChildTwo
//         </Text>
//         <Text style={[styles2.child, {backgroundColor: 'steelblue'}]}>
//           ChildThree
//         </Text>
//       </View>
//   )
// }
//
// export default Exercise3E;

// // // ====== Exercise4 =======
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles2 = StyleSheet.create({
  parent:{
    flex: 1,
    marginTop:50,
    margin:20,
    flexDirection: 'row',
    backgroundColor:'smokegrey',
    borderColor: '#0099AA',
    borderWidth: 5,
      justifyContent:'space-evenly',
      alignItems: 'center'
  },
  child:{
      width: 80,
      height: 80,
      backgroundColor:'powderblue',
    flexDirection: 'row',
    borderWidth: 2,
    textAlign:'center',
    fontSize: 20
  }
});

const Exercise4 = () => {
  return (
      <View style={styles2.parent}>
        <Text style={[styles2.child, {backgroundColor: 'red'}]}>
          Square 1
        </Text>
        <Text style={[styles2.child, {backgroundColor: 'yellow'}]}>
          Square 2
        </Text>
        <Text style={[styles2.child, {backgroundColor: 'green'}]}>
          Square 3
        </Text>
      </View>
  )
}

export default Exercise4;
