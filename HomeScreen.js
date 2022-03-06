import React from 'react'
import {View,Text,Button} from 'react-native'

const HomeScreen = props => {
  return (
   <View style={{justifyContent:"center",alignItems:"center"}}>
     <Text>HomeScreen</Text>
     <Button title='Detail Screen' onPress={() => props.navigation.navigate('List')}/>
     </View>

  )
}

export default HomeScreen;


