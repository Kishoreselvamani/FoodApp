import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function Welcome({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../component/Images/burger.jpg')}
        style={{height: '100%', width: '100%'}}>
        <View
          style={{justifyContent: 'center', alignItems: 'center', margin: 50}}>
          <Text style={{fontSize: 60, fontWeight: '800', margin: 10,color:'#d5f0e6'}}>
            Welcome
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('KSquare')}
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 40,

              marginLeft: 90,
            }}>
            <Text
              style={{
                // backgroundColor: 'white',
                fontSize: 40,
                fontWeight: 'bold',
                color: '#ba1a9f',
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
          <View style={{marginTop: 100}}>
            <Text style={{fontSize: 50,fontWeight:'900',color:'#CCC1DC'}}> K Square Restaurant </Text>
            <Text style={{fontSize: 50, fontWeight: '900'}}> Food App </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
