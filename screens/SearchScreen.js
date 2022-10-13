import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const SearchScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center',
        }}>
            <ImageBackground source={require('../assets/image1.jpg')}
                style={{ width: "100%", height: "100%" }}>
                <Text style={styles.text}>Settings Screen</Text>
            </ImageBackground>
        </View>
    )
}

export default SearchScreen;

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