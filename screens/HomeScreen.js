import React, { useState } from 'react';
import {
    Text, View, StatusBar,
    StyleSheet, SafeAreaView,
    TextInput, TouchableOpacity, FlatList, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import cars from '../assets/cars';

const width = Dimensions.get('screen').width / 2 - 30;

const HomeScreen = ({ navigation }) => {
    //Arraylist
    const cars = ['LUXURY', 'SUV', 'TOYOTA', 'ISUZU'];
    const [carIndex, setCarIndex] = React.useState(0)

    const CarList = () => {
        return (
            <View style={styles.carContainer}>
                {cars.map((item, index) => (
                    <TouchableOpacity key={index}
                        activeOpacity={0.8}
                        onPress={() => setCarIndex(index)}>
                        <Text
                            style={[styles.carText, carIndex == index && styles.carSelected]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };
    const Card = ({ car }) => {
        <View style={styles.card}>

        </View>
    };
    return (
        <SafeAreaView style={{
            flex: 1, paddingHorizontal: 20,
            backgroundColor: '#fff'
        }}>
            <StatusBar backgroundColor='#63c5da' barStyle="light-content" />
            <View style={styles.header}>
                <View>
                    <Text style={styles.text}>Welcome to</Text>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#63c5da' }}>Luxury Car Shop</Text>
                </View>
                <Icon name='shopping-cart' size={20} />
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={styles.searchContainer}>
                    <Icon name='search' size={20} style={{ marginLeft: 20 }} />
                    <TextInput placeholder='Search' style={styles.input} />
                </View>
                <View style={styles.sortBtn}>
                    <Icon name='sort' size={30} style={{ color: '#fff' }} />
                </View>
            </View>
            <CarList />
            <FlatList numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                showsVerticalScrollIndicator={false}
                data={cars}
                contentContainerStyle={{
                    marginTop: 10,
                    paddingBottom: 50,
                }}
                renderItem={({ item }) => <Card car={item} />}
            />
        </SafeAreaView>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#63c5da'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: "Roboto",
        color: '#000000',
        // lineHeight: 84,
    },
    header: {
        marginTop: 30,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        borderRadius: 10,
        backgroundColor: '#f2f2f2',
        alignItems: 'center'
    },
    input: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        color: '#000000',
    },
    sortBtn: {
        marginLeft: 10,
        height: 50,
        width: 50,
        backgroundColor: '#63c5da',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    carContainer: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    carText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#808080'
    },
    carSelected: {
        color: '#63c5da',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#63c5da'
    },
    card: {
        height: 255,
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#F1F1F1'
    }

});