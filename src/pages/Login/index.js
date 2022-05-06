import React from 'react';
import { View, Image, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

export default function Login({navigation}) {

    const saveAndNavigate = () => {
        navigation.navigate('Products');
    }

    return (
    <View style={styles.container}>
        <View>
            <Image source={{uri: 'https://logodownload.org/wp-content/uploads/2014/12/estacio-logo.png'}} style={styles.logo}></Image>
        </View>
        <TextInput placeholder='User email' style={styles.input}></TextInput>
        <TextInput placeholder='User password' secureTextEntry={true} style={styles.input}></TextInput>
        <View style={styles.buttonContainer}>
                <Button onPress={saveAndNavigate} style={styles.loginButton} title="Logar"></Button>
        </View>
    </View>
    );
}