import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        {...props}
    >
        <Text style={styles.text}>Skip</Text>
    </TouchableOpacity>
);
const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        {...props}
    >
        <Text style={styles.text}>Next</Text>
    </TouchableOpacity>
);
const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 8 }}
        {...props}
    >
        <Text style={styles.text}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {

    return (

        <Onboarding
            bottomBarHeight={40}
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            onSkip={() => navigation.replace('SignIn')}
            onDone={() => navigation.navigate('SignIn')}
            pages={[
                {
                    backgroundColor: '#63c5da',
                    image: <Image source={require('../assets/image1.jpg')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#63c5da',
                    image: <Image source={require('../assets/image2.jpg')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#63c5da',
                    image: <Image source={require('../assets/image3.jpg')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    }
});