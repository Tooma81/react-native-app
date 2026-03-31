import HomeCategories from '@/components/home/categories';
import HomeSearch from '@/components/home/search';
import ProductList from '@/components/product-list';
import ProductPage from '@/components/product-page';
import { TabBarStyle } from '@/constants/tab-bar-style';
import { furnitureList } from '@/server/data/furniture';
import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface Furniture {
    id: number;
    name: string;
    price: string;
    description: string;
    imageKey: string;
}

export default function HomeScreen() {
    const [productList, setProductList] = useState<Furniture[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const[activeProductId, setActiveProductId] = useState(0); //Toote ID

    useEffect(() => {
        setProductList(furnitureList)
        try {
            setLoading(true);
            setProductList(furnitureList)
        } catch (err) {
            const message = (err as Error).message;
            console.error(message);
        } finally {
            setLoading(false);
        }
    }, [furnitureList])

    // Ava toote leht
    const handleOpenProduct = (productId: number) => {
        setActiveProductId(productId)
    };

    // Mine tagasi toote nimekirja
    const handleReturn = () => {
        setActiveProductId(0)
    };

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {activeProductId ?
                <>
                <Tabs.Screen options={{
                    tabBarStyle: {
                        display: 'none'
                    }
                }}/>
                <ProductPage 
                    productId={activeProductId}
                    onReturn={handleReturn}
                />
                </>
            :   
                // Kui toote ID on 0, naita nimekirja 
                <>
                <Tabs.Screen options={{
                    tabBarStyle: TabBarStyle
                }}/>    

                
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <HomeSearch />
                    <HomeCategories />
                    <ProductList 
                        onProductPress={handleOpenProduct}
                        furnitureData={productList}
                    />
                </View>
                </>
            }   
        </GestureHandlerRootView>
    )
}
