import React from 'react';
import { Text, View, StatusBar, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center'
        }}>
            <StatusBar backgroundColor='#63c5da' barStyle="light-content" />

            <Text style={styles.text}>Home Screen</Text>

        </View>
    );
}

export default HomeScreen;

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