import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailsScreen = ({ navigation, route }) => {
    const car = route.params;

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
        }}>
            <View style={styles.header}>
                <Icon name='arrow-back' size={28} onPress={() => navigation.goBack()} />
                <Icon name='shopping-cart' size={28} />
            </View>
            <View style={styles.imgContainer}>
                <Image source={car.img} style={{ resizeMode: 'contain', flex: 1 }} />
            </View>
            <View style={styles.detailsContainer}>
                <View style={{
                    marginTop: 20,
                    marginLeft: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        fontFamily: 'Roboto',
                    }}>{car.name}</Text>

                    <View style={styles.tag}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginLeft: 15
                        }}>${car.price}</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>

    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgContainer: {
        flex: 0.45,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailsContainer: {
        flex: 0.55,
        marginBottom: 7,
        marginHorizontal: 7,
        borderRadius: 20,
        backgroundColor: '#f2f2f2',
        paddingBottom: 30,
        marginTop: 30,
    },
    tag: {
        backgroundColor: '#63c5da',
        width: 80,
        height: 40,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
    },
});
