import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';
import ProductItem from './components/shop/ProductItem';
import axios from 'axios';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UserProductsScreen = props => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchItems();
  });

  const fetchItems = async () => {
    const response = await axios('https://api.giphy.com/v1/stickers/trending', {
      params: {
        api_key: '1NzEOSDwYZrcwlx3SzhuPunpsY3MsTBy',
        limit: '5',
      },
    });
    setData(response.data.data);
  };

  const Data = [
    {
      imageUrl:
        'https://st2.depositphotos.com/4643771/11480/v/600/depositphotos_114809588-stock-illustration-krishna-gopalpriya-paramatma.jpg',
      title: 'Hare Krishna',
      description: '50',
    },
  ];

  if (Data.length === 0) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>No products found , maybe start creating some</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.images.original.url}
          title={itemData.item.title}
          price={itemData.item.description}
          onSelect={() =>
            props.navigation.navigate('Details', {
              title: itemData.item.title,
              image: itemData.item.images.original.url,
            })
          }>
         

        <TouchableOpacity style={{height:45,width:45}} >
          <Ionicons onPress={() => {console.log('hello')}} name="heart-outline" size={35} color="red" />
          </TouchableOpacity>
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;
