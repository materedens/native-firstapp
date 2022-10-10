import React from 'react';
import { Text, View, StatusBar, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/image1.jpg')}
                style={{ width: "100%", height: "100%" }}>

                <StatusBar backgroundColor='#63c5da' barStyle="light-content" />
                <View style={styles.header}>
                    <Text style={styles.text}>Home Screen</Text>
                </View>
                <View style={styles.footer} >

                    <Text style={styles.text}>Footer</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#63c5da'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 42,
        textAlign: 'center',
        fontFamily: "Roboto",
        color: '#000000',
        lineHeight: 84,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: '28%',
    },
    footer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20
    },

});