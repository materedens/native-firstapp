import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={styles.text}>Settings Screen</Text>

        </View>
    )
}

export default SettingsScreen;

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