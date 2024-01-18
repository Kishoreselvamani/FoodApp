import React, {Component, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {SectionGrid} from 'react-native-super-grid';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Detail from './Detail';

export default function Recipe({navigation}) {
  const Stack = createStackNavigator();

  const [data, SetData] = useState([]);
  const [items, setItems] = React.useState([
    {
      id:1,
      name: 'Cheese Burger',
      imgurl: require('../component/Images/burger1.jpg'),
      code: '#1abc9c',
    },
    {
      id:2,
      name: 'Chicken Burger',
      imgurl: require('../component/Images/burger1.jpg'),
      code: '#2ecc71',
    },
    {
      id:3,
      name: 'Big Burger',
      imgurl: require('../component/Images/burger2.jpg'),
      code: '#3498db',
    },
    {
      id:4,
      name: 'Mutton Burger',
      imgurl: require('../component/Images/burger3.jpg'),
      code: '#9b59b6',
    },
    {
      id:5,
      name: 'Sandwich Burger',
      imgurl: require('../component/Images/burger4.jpg'),
      code: '#34495e',
    },
    {
      id:6,
      name: 'KFC Burger',
      imgurl: require('../component/Images/burger3.jpg'),
      code: '#16a085',
    },
    {
      id:7,
      name: 'Plain Pizza',
      imgurl: require('../component/Images/Pizza/Pizza1.jpg'),
      code: '#27ae60',
    },
    {
      id:8,
      name: 'Rose Pizza',
      imgurl: require('../component/Images/Pizza/Pizza2.jpg'),
      code: '#2980b9',
    },
    {
      id:9,
      name: 'Special Pizza',
      imgurl: require('../component/Images/Pizza/Pizza3.jpg'),
      code: '#8e44ad',
    },
    {
      id:10,
      name: 'Coconut Pizza',
      imgurl: require('../component/Images/Pizza/Pizza4.jpg'),
      code: '#2c3e50',
    },
    {
      id:11,
      name: 'Chicken Pizza',
      imgurl: require('../component/Images/Pizza/Pizza5.jpg'),
      code: '#f1c40f',
    },
    {
      id:12,
      name: 'Veg Pizza',
      imgurl: require('../component/Images/Pizza/Pizza6.jpg'),
      code: '#e67e22',
    },
    {
      id:13,
      name: 'Chicken Momos',
      imgurl: require('../component/Images/Momos/momo1.jpg'),
      code: '#e74c3c',
    },
    {
      id:14,
      name: 'Veg Momos',
      imgurl: require('../component/Images/Momos/momo2.jpg'),
      code: '#ecf0f1',
    },
    {
      id:15,
      name: 'Special Momos',
      imgurl: require('../component/Images/Momos/momo3.jpg'),
      code: '#95a5a6',
    },
    {
      id:16,
      name: 'Beef Momos',
      imgurl: require('../component/Images/Momos/momo4.jpg'),
      code: '#f39c12',
    },
    {
      id:17,
      name: 'Mutton Momos',
      imgurl: require('../component/Images/Momos/momo5.jpg'),
      code: '#d35400',
    },
    {
      id:18,
      name: 'Rabbit Momos',
      imgurl: require('../component/Images/Momos/momo6.jpg'),
      code: '#c0392b',
    },
  ]);

  const additem = (selecteditem: any) => {
    if(selecteditem && selecteditem.imgurl){

      navigation.navigate('Detail', {item: selecteditem});
    }
    else{
      Alert.alert("Please selected the recipe before moving to detail page");
    }
  };

  return (
    <SectionGrid
      itemDimension={150}
      // staticDimension={300}
      fixed
      // spacing={20}
      sections={[
        {
          title: 'Burger',
          data: items.slice(0, 6),
        },
        {
          title: 'Pizza',
          data: items.slice(6, 12),
        },
        {
          title: 'Momos',
          data: items.slice(12, 20),
        },
      ]}
      style={styles.gridView}
      renderItem={({item, section, index}) => (
        <TouchableOpacity onPress={() => additem(item)}>
          <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
            <Image source={item.imgurl} style={{width: 150, height: 100}} />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({section}) => (
        <View style={styles.sectionHeaderContainer}>
          <Image
            source={require('../component/Images/chef.png')}
            style={styles.sectionImage}
          />
          <Text style={styles.sectionHeader}>{section.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#c2eafc',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
  itemCode: {
    fontWeight: '600',
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 30,
    fontWeight: '600',
    alignItems: 'center',

    color: '#0a4239',
    padding: 10,
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c2eafc',
    padding: 10,
  },
  sectionImage: {
    width: 70, // Adjust the width of the image as needed
    height: 70, // Adjust the height of the image as needed
    marginRight: 10,
  },
});
