import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';

const Productlist = ({navigation}) => {
  const [data, setData] = useState([]);

  const getdata = async () => {
    try {
      const response = await fetch('http://localhost:5000/data', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      });
      const result = await response.json();

      setData(result);
      console.error('Data is shown');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={getdata}
          style={{padding: 20, backgroundColor: 'green', margin: 20 , borderRadius:20 }}>
          <Text style={{fontWeight:'600', fontSize:20 }} >View Product</Text>
        </TouchableOpacity>
        {data.map((value, index) => (
          <View key={index} style={{margin:30}}>
            <Image source={value.imgurl} style={{width: 300, height: 300}} />
            <Text style={{fontSize:30}}> {value.name} </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Productlist;






// 