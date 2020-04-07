import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home';


const Stack = createStackNavigator();

const Index = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
              title:'Its mah home',
              headerShown:false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Index

