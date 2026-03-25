import ProductList from '@/components/product-list';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FavoritesScreen() {
    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Find All You Need</Text>
            </View>
            <ProductList type='list'/>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10%',
    },
})