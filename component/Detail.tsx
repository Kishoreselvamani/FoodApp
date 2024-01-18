import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// Define the type for the navigation stack
type RootStackParamList = {
  Recipe: undefined;
  Detail: {
    item: {
      id: number;
      name: string;
      imgurl: any;
      code: string;
    };
  };
};

interface DetailProps {
  route: RouteProp<RootStackParamList, 'Detail'>;
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
}

const Detail: React.FC<DetailProps> = ({route, navigation}) => {
  const {item} = route.params || {};
  

  const handledata = async () => {
    try {
      if (item) {
        await fetch('http://localhost:5000/data', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(item),
        });
        Alert.alert('Successfully Added');
        navigation.navigate('Productlist');
      } else {
        Alert.alert('No item selected');
      }
    } catch (err) {
      console.log(err);
    }
  };
 

  if (!item || !item.imgurl) {
    Alert.alert('Alert', 'Please select the recipe in Recipe Page', [
      {
        text: 'OK',
        onPress: () => navigation.navigate('Recipe'),
      },
    ]);
    return <Image source={require('../component/Images/nodata.jpg')} />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={item.imgurl}
          style={{borderRadius: 60, marginTop: 60, width: '80%', height: 800}}
        />
        <Text style={styles.txt}>{item.name} </Text>
        <TouchableOpacity
          style={{margin: 30, backgroundColor: '#f7f572', padding: 20}}
          onPress={handledata}>
          <Text style={styles.cart}>Add to Cart</Text>
        </TouchableOpacity>
      
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5c4b8',
    // backgroundColor:'#d1f7a3'
  },
  txt: {
    fontSize: 50,
    fontWeight: '800',
  },
  cart: {
    fontSize: 25,
  },
});

export default Detail;
