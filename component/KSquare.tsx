import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Recipe from './Recipe';
import Home from './Home';
import Detail from './Detail';
import Productlist from './Productlist';

export default function KSquare() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name="FOOD APP" component={Home} />
        <Tab.Screen
          name="Recipe"
          component={Recipe}
          // options={{
          //   title: 'Recipe',
          //   tabBarIcon: ({focused, size, color}) => {
          //     return (
          //       <View
          //         style={{
          //           flex: 1,
          //           justifyContent: 'center',
          //           alignItems: 'center',
          //         }}>
          //         <Image
          //           source={require('../component/Images/burger.jpg')}
          //           style={{
          //             width: size,
          //             height: size,
          //             resizeMode: 'contain',
          //             tintColor: focused ? color : 'green',
          //           }}
          //         />
          //       </View>
          //     );
          //   },
          // }}
        />
        <Tab.Screen name="Detail" component={Detail} />
        <Tab.Screen name="Productlist" component={Productlist} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
