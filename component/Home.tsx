import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.txt}>
        <Text style={{fontSize:50}} > KSquare Restaurants  </Text>
        {/* <Text style={{fontSize:50,fontWeight:'900'}}> Food App </Text> */}
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#c2eafc',
    justifyContent:'center',
    alignItems:'center'
  },
  txt: {
    flex: 1,
    
  },
  
});

export default Home;
