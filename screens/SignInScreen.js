import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

const SignInScreen = () => {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <StatusBar backgroundColor='#63c5da' barStyle="light-content" />

            <Text style={styles.text}>LogIn Screen</Text>

        </View>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    }
});