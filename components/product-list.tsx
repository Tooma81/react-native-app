import { ProductListItemGrid } from '@/components/product-list-item-grid';
import { furnitureList } from '@/server/data/furniture';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ProductListItem } from './product-list-item';

export type ProductListProps = {
    type?: 'grid' | 'list';
    onProductPress?: (productId: number) => void;
}

export default function ProductList({
    type = 'grid',
    onProductPress
}: ProductListProps) {
    const router = useRouter();

    interface Furniture {
        id: number;
        name: string;
        price: string;
        description: string;
        imageKey: string;
    }

    const [furniture, setFurniture] = useState<Furniture[]>([]); //Toote nimekiri
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); 
    

    useEffect(() => {
        setFurniture(furnitureList)
    }, []);

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
                />
            }   
            </>
        )
    };
    
    return (
        <View style={styles.productListContainer}>
            <FlatList
                data={furniture}
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
