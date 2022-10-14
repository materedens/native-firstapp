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
                <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About</Text>
                    <Text style={{
                        marginTop: 20,
                        lineHeight: 22,
                        color: '#36454F',
                        fontFamily: 'Roboto'
                    }}>{car.about}</Text>
                    <View style={{
                        marginTop: 20,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.borderBtn}>
                                <Text style={styles.borderBtnText}>-</Text>
                            </View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginHorizontal: 10 }}>1</Text>
                            <View style={styles.borderBtn}>
                                <Text style={styles.borderBtnText}>+</Text>
                            </View>

                        </View>
                        <View style={styles.buyBtn}>
                            <Text style={{
                                fontWeight: 'bold',
                                fontSize: '20',
                                color: '#fff',
                            }}>Buy</Text>
                        </View>
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
    borderBtn: {
        borderRadius: 5,
        borderColor: '#36454F',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 60,
    },
    borderBtnText: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    buyBtn: {
        backgroundColor: '#63c5da',
        height: 50,
        width: 150,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
