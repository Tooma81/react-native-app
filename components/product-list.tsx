import { ProductListItemGrid } from '@/components/product-list-item-grid';
import { useRouter } from 'expo-router';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ProductListItem } from './product-list-item';

interface Furniture {
    id: number;
    name: string;
    price: string;
    description: string;
    imageKey: string;
}

export type ProductListProps = {
    furnitureData: Furniture[];
    type?: 'grid' | 'list';
    onProductPress?: (productId: number) => void;
    deleteButtonStyle?: 'default' | 'trash';
}

export default function ProductList({
    furnitureData,
    type = 'grid',
    onProductPress,
    deleteButtonStyle = 'default',
}: ProductListProps) {
    const router = useRouter();

    /* 
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
    */

    const renderProduct = ({ item }: { item: any }) => {
        
        return(
            <>
            {type === 'grid' ?
                <ProductListItemGrid
                    name={item.name}
                    price={item.price}
                    imageKey={item.imageKey}
                    onPress={() => onProductPress?.(item.id)}
                />
            :
                <ProductListItem
                    name={item.name}
                    price={item.price}
                    imageKey={item.imageKey}
                    onPress={() => onProductPress?.(item.id)}
                    deleteButtonStyle={deleteButtonStyle}
                />
            }   
            </>
        )
    };
    
    return (
        <View style={styles.productListContainer}>
            <FlatList
                data={furnitureData}
                renderItem={renderProduct}
                keyExtractor={(item, index) => index.toString()}
                numColumns={type === 'list' ? 1 : 2} 
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
});
