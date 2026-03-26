import { IMAGES } from '@/components/ImageRegistry';
import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export type ProductListItemProps = {
    name: string;
    price: string;
    description?: string;
    imageKey: string;
    onPress?: () => void;
    deleteButtonStyle: 'default' | 'trash';
}

export function ProductListItem({
    name,
    price,
    description,
    imageKey,
    onPress,
    deleteButtonStyle
}: ProductListItemProps) {
    const imageSource = IMAGES[imageKey] || IMAGES["productPlaceholder"];

    // Delete button styles
    const deleteButtons = {
        default: 'x-circle',
        trash: 'trash',
    } as const

    // Delete button colors
    const deleteButtonColors = {
        default: '#4F63AC',
        trash: '#000',
    }

    return (
        <Pressable 
            onPress={onPress}
            style={styles.productContainer}
        >
            <View style={styles.product}>
                <Feather 
                    style={styles.deleteButton}
                    name={deleteButtons[deleteButtonStyle]} 
                    size={28} 
                    color={deleteButtonColors[deleteButtonStyle]} 
                />
                <View style={styles.productImageContainer}>
                    <Image
                        source={imageSource}
                        style={styles.productImage}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.productDetails}>
                    <Text style={styles.productName}>{name}</Text>
                    <Text style={styles.productPrice}>$ {price.slice(0, 2)}.{price.slice(2, 4)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: '90%',
        height: 180, 
        marginVertical: 10, 
        borderBlockColor: '#f0f0f0',
        borderBottomWidth: 1,
    },
    product: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 150, 
    },
    productImage: {
        height: 150, 
        width: 150, 
        borderRadius: 12,

    },
    productImageContainer: {
        flex: 1,
        height: 150,
        maxWidth: 150, 
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
    },
    productDetails: {
        flex: 1,
        paddingLeft: '5%',
    },
    deleteButton: {
        position: 'absolute',
        zIndex: 999,
        right: 0,
        top: 0,
    }
})