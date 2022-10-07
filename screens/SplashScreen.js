import React from 'react';
import {
    Text, View, StyleSheet,
    Image, Dimensions,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <StatusBar backgroundColor='#63c5da' barStyle="light-content" />
            <View style={styles.header} >
                <Animatable.Image style={{ width: 100, height: 100 }}
                    source={require('../assets/logo.jpg')}
                    resizeMode='stretch'
                    animation="bounceIn" duration={1000} />

                <Text>Splash Screen</Text>

            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig" >
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.signIn}>
                        {/* <LinearGradient colors={['#4c669f', '#192f6a']}> */}
                        {/* <Button
                            title="Get Started"
                            onPress={() => navigation.navigate('Home')}
                        /> */}
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons
                            name='navigate-next'
                            color="blue"
                            size={20} />
                        {/* </LinearGradient> */}
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default SplashScreen;

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
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,

    },
    textSign: {
        color: 'blue',
        fontWeight: 'bold'
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    }

})