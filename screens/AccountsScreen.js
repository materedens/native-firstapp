import React from 'react';
import { Text, View, Button, StatusBar, StyleSheet } from 'react-native';

const AccountsScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
        }}>
            <StatusBar backgroundColor='#63c5da' barStyle="light-content" />
            <Text style={styles.text}>Accounts Screen</Text>
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
        fontSize: 16
    }
});