import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SearchScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={styles.text}>Search Screen</Text>
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
        marginTop: '10%',
        color: '#63c5da',
        paddingHorizontal: 40,
        lineHeight: 84,
    }
});