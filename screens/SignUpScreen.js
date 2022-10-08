import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SignUpScreen = () => {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <StatusBar backgroundColor='#63c5da' barStyle="light-content" />

            <Text style={styles.text}>SignUp Screen</Text>

        </View>
    )
}

export default SignUpScreen;

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