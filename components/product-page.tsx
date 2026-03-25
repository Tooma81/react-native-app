import { IMAGES } from '@/components/ImageRegistry';
import { furnitureList } from '@/server/data/furniture';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState } from 'react';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemedButton } from './themed-button';
import { ThemedText } from './themed-text';

type ProductPageProps = {
    productId: number;
    onReturn?: () => void;
}

export default function ProductPage({
    productId = 0,
    onReturn,
}: ProductPageProps) {
    const productData = furnitureList.find((item) => item.id === productId);

    const [wishlisted, setWishlisted] = useState(false); //Wishlist status (UI only)

    return (
        <View style={{flex: 1}}>
            <Pressable
                onPress={onReturn}
                style={styles.backButton}
            >
                <Entypo name="chevron-thin-left" size={20} color="#4f63ac" />
            </Pressable>
            {productData ? 
            <View style={styles.productContainer}>
                <Image
                    source={IMAGES[productData.imageKey] || IMAGES["productPlaceholder"]}
                    style={styles.productImage}
                    resizeMode="cover"
                />
                <View style={styles.productDetailsContainer}>
                    <View style={styles.productDetails}>
                        <Text style={styles.name}>{productData.name}</Text>
                        <Text style={styles.price}>${productData.price.slice(0, 2)}</Text>
                        <Text style={styles.description}>{productData.description}</Text>
                    </View>
                    <View style={styles.productControls}>
                        <ThemedButton 
                            type={'inverted'}
                            title={
                                <FontAwesome 
                                    name={wishlisted ? 'bookmark' : 'bookmark-o'}
                                    size={24}
                                />
                            }
                            onPress={() => setWishlisted(!wishlisted)}
                            style={styles.wishListButton}
                        />
                        <ThemedButton
                            title={'Contact Seller'}
                            onPress={() => Alert.alert('Seller contacted')}
                            style={{flex: 1, elevation: 15}}
                        />
                    </View>
                </View>
            </View>
            :
            <View>
                <ThemedText>Product not found</ThemedText>
            </View>}       
        </View>
    )
    
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        top: 50,
        left: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        borderRadius: 8,
        elevation: 10, // Android shadow
    },
    productContainer: {
        flex: 1,
    },
    productImage: {
        height: '55%',
        width: '100%',
    },
    productDetailsContainer: {
        flex: 1,
        minHeight: '60%',
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 30,
        top: -30,
        padding: 30,
    },
    productDetails: {
        flex: 1,
        maxHeight: '50%',
        justifyContent: 'space-between',
    },
    name: {
        fontFamily: 'Gelasio-Regular',
        fontSize: 30,
    },
    price: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: 30,
    },
    description: {
        fontFamily: 'NunitoSans-Regular',
        fontSize: 14,
        fontWeight: 300,
        color: '#606060'
    },
    productControls: {
        flexDirection: 'row',
        height: '20%',
        alignItems: 'center',
    },
    wishListButton: {
        flex: 1, 
        minWidth: 60,
        maxWidth: 60,
        marginRight: '5%',
    }
})