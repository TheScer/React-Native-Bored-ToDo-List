import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native-web';

function WelcomeScreen(props) {
    return (
<ImageBackground source={require('../assets/background1.jpg')}>

</ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,

    },
})

export default WelcomeScreen;