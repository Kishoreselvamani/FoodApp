import {View, Text, BackHandler} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './component/Welcome';
import KSquare from './component/KSquare';


const App = () => {
 
  const Stack = createStackNavigator();

  //saran

 

  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName='welcome' >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name='KSquare' component={KSquare}  />      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
