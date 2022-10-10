import React from 'react'
import { Text, View, Button, StatusBar, StyleSheet, ImageBackground } from 'react-native';

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center'
        }}>
            <StatusBar backgroundColor='#63c5da' barStyle="light-content" />
            <ImageBackground source={require('../assets/image1.jpg')}
                style={{ width: "100%", height: "100%" }}>
                <Text style={styles.text}>Details Screen</Text>
            </ImageBackground>

            {/* Moving between screens */}
            {/* <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            <Button
                title="Go to Accounts"
                onPress={() => navigation.navigate('Accounts')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            /> */}
        </View>
    );
}

export default DetailsScreen;

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