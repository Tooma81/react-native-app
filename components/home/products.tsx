import { getAllFurniture } from '@/services/api';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { IMAGES } from './ImageRegistry';

export default function HomeProducts() {
    const [furniture, setFurniture] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)
    

    useEffect(() => {
        loadData();
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
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
            </View>
        )
    };
    
    console.log(furniture)
    return (
        <View style={styles.productListContainer}>
            <ScrollView 
                showsHorizontalScrollIndicator={false}
            >
                <FlatList
                    data={furniture}
                    renderItem={renderProduct}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2} 
                    columnWrapperStyle={styles.productRow} 
                />
            </ScrollView>
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
        margin: 10,  
    },
    product: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '90%',
        height: '100%', 
    },
    productImage: {
        width: '100%',
        height: '80%', 
        borderRadius: 12,
    },
});
