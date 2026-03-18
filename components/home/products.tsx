import { furnitureList } from '@/server/data/furniture';
import { getAllFurniture } from '@/services/api';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { IMAGES } from './ImageRegistry';

export default function HomeProducts() {
    interface Furniture {
        id: number;
        name: string;
        price: string;
        description: string;
        imageKey: string;
    }

    const [furniture, setFurniture] = useState<Furniture[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)

    console.log(furnitureList)
    

    useEffect(() => {
        setFurniture(furnitureList)
    }, []);

    const loadData = async () => {
        try {
            setLoading(true);
            const [furnitureData] = await Promise.all([
            getAllFurniture(),
        ]);
            setFurniture(furnitureData);
            setError(null);
        } catch (err) {
            const message = (err as Error).message;
            console.error(message);
        } finally {
            setLoading(false);
        }
    };

    console.log(furniture)

    const renderProduct = ({ item }: { item: any }) => {
        const imageSource = IMAGES[item.imageKey] || IMAGES["productPlaceholder"];

        return (
            <View style={styles.productContainer}>
                <View style={styles.product}>
                    <Image
                        source={imageSource}
                        style={styles.productImage}
                        resizeMode="cover"
                    />
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>$ {item.price.slice(0, 2)}.{item.price.slice(2, 4)}</Text>
                </View>
            </View>
        )
    };
    
    console.log(furniture)
    return (
        <View style={styles.productListContainer}>
            <FlatList
                data={furniture}
                renderItem={renderProduct}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2} 
                columnWrapperStyle={styles.productRow} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    productListContainer: {
        flex: 1,
        width: '100%',
    },
    productRow: {
        justifyContent: 'space-between',
    },
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
});
