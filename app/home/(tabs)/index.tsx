import HomeCategories from '@/components/home/categories';
import HomeSearch from '@/components/home/search';
import ProductList from '@/components/product-list';
import ProductPage from '@/components/product-page';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const router = useRouter();

    const[activeProductId, setActiveProductId] = useState(1); //Toote ID

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
                <ProductPage 
                    productId={activeProductId}
                    onReturn={handleReturn}
                />
            :   
                // Kui toote ID on 0, naita nimekirja 
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <HomeSearch />
                    <HomeCategories />
                    <ProductList 
                        onProductPress={handleOpenProduct}
                    />
                </View>
            }   
        </GestureHandlerRootView>
    )
}
