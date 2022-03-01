import React from 'react';
import {ImageBackground,
        Text,
        Container,
        View,
        StyleSheet,
        Image,
        Button,
    } from 'react-native'

function WelcomeScreen(props) {
    return (
    <ImageBackground
        style={styles.background}
        source={require("../originalAssets/Background1.jpg")}
    >
        <Image style={styles.logo} source={require('../originalAssets/TuniLogo.png')}></Image>
        <Text style={styles.text}>Plan your day, and if you're bored, find a new task! Lets get shit done!</Text>
        <View style={styles.loginButton}>
            <Button 
            title='Login' 
            color='pink' 
            style={styles.button}>
                
            </Button>
        </View>
        <View style={styles.registerButton}>
            <Button
             title='Register'
             color='grey'
             style={styles.button}>
                
            </Button>
        </View>

    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex:1,
        //backgroundColor: 'black',
        justifyContent: 'flex-end',
    },
    loginButton: {
        width:'100%',
        height:70,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        //absolute: 'bottom',
    },
    registerButton: {
        width:'100%',
        height:40,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        //absolute: 'bottom',
    },
    logo: {
        width:100,
        height:100,
        position: 'absolute',
        top:45,
        opacity:.2,

    },
    text: {
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
    },
    button: {
        flex:1,
    }

})

export default WelcomeScreen;