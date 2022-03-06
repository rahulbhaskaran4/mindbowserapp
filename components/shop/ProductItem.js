import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Card from '../UI/Card';

const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <Card style={styles.product}>
      <View  style={styles.touchable}>
        <TouchableCmp onPress={props.onSelect} useForeground>
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: props.image}} resizeMode='contain' />

            </View>

            <View style={styles.detail}>
              <Text style={styles.title}> {props.title} </Text>
            </View>

            <View style={styles.actions}>{props.children}</View>
          </View>
        </TouchableCmp>
        
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  product: {
    height: 300,
    margin: 20,
  },
  touchable: {
    overflow: 'hidden',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    marginVertical: 2,
    fontFamily: 'Quicksand-Bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'Quciksand-Regular',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '23%',
    paddingHorizontal: 20,
  },
  detail: {
    alignItems: 'center',
    height: '17%',
    padding: 10,
  },
});

export default ProductItem;
