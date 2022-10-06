import React from 'react';
import { Text, View, Button, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Image
                style={{ width: 100, height: 100 }}
                source={require('../assets/logo.jpg')}
            />

            <Text>Home Screen</Text>

            {/* Moving between screens */}
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}

export default HomeScreen