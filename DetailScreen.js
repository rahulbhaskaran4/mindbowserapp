import React from 'react'
import {View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailScreen = props => {

      const title = props.route.params.title
      const image = props.route.params.image

  return (
    <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}
            source={{uri:image}}
            resizeMode='contain'
          />        
        </View>
        <View style={styles.details} >
            <Text>
              {title}
            </Text>

          <TouchableOpacity style={{marginTop:5}} onPress={() => {}}>
            <Ionicons name="heart-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>

        
        
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    alignItems:"center",
    paddingTop:10,
    marginHorizontal:5,
    backgroundColor:"#FFFFFF"
  },
  imageContainer: {
    
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    elevation:1
  },

  image: {
    width: '100%',
    height: '100%',
  },
  details:{
    marginTop:5,
    borderBottomWidth:0.5,
    borderColor:"grey",
    width:"100%",
    height:100,
    alignItems:"center"
    
  }

})

export default DetailScreen