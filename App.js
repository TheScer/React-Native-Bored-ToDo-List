import { NavigationContainer, StackActions } from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ToDoListScreen from "./app/screens/ToDoListScreen";


console.log('outta app.js')

function App() {
  console.log('./app/screens/WelcomeScreen')
  return(
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          name="welcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="todolist" component={ToDoListScreen} />
    </Stack.Navigator>  
  </NavigationContainer>
    
  );
}

export default App;