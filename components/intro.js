import React from 'react';
import { Button, AppRegistry, TextInput, StyleSheet, Text, View  } from 'react-native';

const intro = () => {
    return ( 
        <View>
            <Button 
            title='come in'
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            onPress ={console.log('hey buddy :)')}/>
            <TextInput placeholder='you know wassup' />
        </View>
        
    )
}

export default intro;