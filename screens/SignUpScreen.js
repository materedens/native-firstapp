import React from 'react';
import { Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#63c5da' barStyle="light-content" />
            <View style={styles.header}>
                <Animatable.Text style={styles.text} animation='bounceIn' duration={2000}>
                    Register Here!
                </Animatable.Text>
            </View>
            <Animatable.View style={styles.footer} animation='fadeInUpBig'>
                <Text style={styles.text_footer}>Register Here</Text>
                <Text style={styles.text_label}>Email</Text>
                <View style={styles.input_field}>
                    <FontAwesome
                        name='envelope'
                        color='#63c5da'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Email'
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                    <Animatable.View animation='bounceIn'>
                        <Feather
                            name='check-circle'
                            color='green'
                            size={20}
                        />
                    </Animatable.View>
                </View>
                <Text style={[styles.text_label, , {
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.input_field}>
                    <FontAwesome
                        name='lock'
                        color='#63c5da'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                    <Feather
                        name='eye-off'
                        color='grey'
                        size={20}
                    />
                </View>
                <Text style={[styles.text_label, , {
                    marginTop: 35
                }]}>Confirm Password</Text>
                <View style={styles.input_field}>
                    <FontAwesome
                        name='lock'
                        color='#63c5da'
                        size={20}
                    />
                    <TextInput
                        placeholder='Your Password'
                        secureTextEntry={true}
                        style={styles.textInput}
                        autoCapitalize='none'
                    />
                    <Feather
                        name='eye-off'
                        color='grey'
                        size={20}
                    />
                </View>
                <View style={styles.button}>

                    <Text style={styles.signIn}>SignIn</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignInScreen')} style={[styles.signIn, {
                            borderColor: '#63c5da',
                            borderWidth: 1,
                            marginTop: 15
                        }]}>
                        <Text style={styles.textSign}>SignUp</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
        </View>
    )
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#63c5da'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        color: "#fff"
    },
    text_footer: {
        color: '#63c5da',
        fontSize: 30,
        textAlign: 'center'
    },
    text_label: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    input_field: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#63c5da'
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#63c5da',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
});