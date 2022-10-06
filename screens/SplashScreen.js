import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Image style={{ width: 100, height: 100 }}
                    source={require('../assets/logo.jpg')}
                    resizeMode='stretch' />

                <Text>Splash Screen</Text>

            </View>
            <View style={styles.footer} >

            </View>
        </View>
    )
}

export default SplashScreen

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63c5da'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    }

})