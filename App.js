import React from 'react';
import {View, Text} from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";


console.log('outta app.js')

function App() {
  console.log('./app/screens/WelcomeScreen')
  return(
  <>
  <WelcomeScreen/>
  </>
    
  );
}

export default App;