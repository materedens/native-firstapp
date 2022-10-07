import React from 'react';
import { Text, View, Button } from 'react-native';

const AccountsScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 1, alignItems: 'center', justifyContent: 'center',
            backgroundColor: '#63c5da'
        }}>
            <Text>Accounts Screen</Text>
            {/* Moving between screens */}
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    )
}

export default AccountsScreen