import { IMAGES } from '@/components/ImageRegistry';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export type ProductListItemGridProps = {
    name: string;
    price: string;
    description?: string;
    imageKey: string;
    onPress?: () => void;
}

export function ProductListItemGrid({
    name,
    price,
    description,
    imageKey,
    onPress
}: ProductListItemGridProps) {
    const imageSource = IMAGES[imageKey] || IMAGES["productPlaceholder"];

    return (
        <Pressable 
            onPress={onPress}
            style={styles.productContainer}
        >
            <View style={styles.product}>
                <Image
                    source={imageSource}
                    style={styles.productImage}
                    resizeMode="cover"
                />
                <Text style={styles.productName}>{name}</Text>
                <Text style={styles.productPrice}>$ {price.slice(0, 2)}.{price.slice(2, 4)}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1, 
        alignItems: 'center',
        maxWidth: '50%',
        height: 300, 
        marginVertical: 10,  
    },
    product: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '85%',
        height: '100%', 
    },
    productImage: {
        width: '100%',
        height: '75%', 
        borderRadius: 12,
    },
    productName: {
        color: '#606060',
        fontFamily: 'NunitoSans-Regular',
        fontSize: 16,
        fontWeight: 400,
    },
    productPrice: {
        color: '#000',
        fontFamily: 'NunitoSans-Bold',
        fontSize: 16,
    }
})