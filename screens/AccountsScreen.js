import React from 'react';
import { Text, View, Button, StatusBar, StyleSheet, ImageBackground } from 'react-native';

const AccountsScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
        }}>
            <StatusBar backgroundColor='#63c5da' barStyle="light-content" />
            <ImageBackground source={require('../assets/image1.jpg')}
                style={{ width: "100%", height: "100%" }}>
                <Text style={styles.text}>Accounts Screen</Text>
            </ImageBackground>

            {/* Moving between screens */}
            {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} /> */}
        </View>
    )
}

export default AccountsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 42,
        textAlign: 'center',
        fontFamily: "Roboto",
        marginTop: '100%',
        color: '#fff',
        paddingHorizontal: 40,
        lineHeight: 84,
    }
});