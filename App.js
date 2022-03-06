import React from 'react'
import HomeScreen from './HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './DetailScreen';
import ListScreen from './ListScreen';

const Stack = createStackNavigator();


const App = () => {
  return(
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
}

export default App