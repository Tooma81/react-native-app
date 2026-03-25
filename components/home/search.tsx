import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeCategories() {
    return (
        <>
            <View style={styles.searchIcon}>
                <Feather name="search" size={24} color="#4f63ac" />
            </View>
            <View style={styles.searchContainer}>
                <Text style={styles.headerText}>Find All You Need</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10%',
    },
    searchIcon: {
        position: 'absolute',
        top: '3%',
        left: '5%',
    }
});
