import HomeCategories from '@/components/home/categories';
import HomeProductList from '@/components/home/product-list';
import HomeSearch from '@/components/home/search';
import ProductPage from '@/components/product-page';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeScreen() {
    const router = useRouter();

    const[activeProductId, setActiveProductId] = useState(0); 

    const handleOpenProduct = () => {
        router.push('./product')
    };


    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            {activeProductId ?
                <ProductPage />
            :
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <HomeSearch />
                    <HomeCategories />
                    <HomeProductList />
                </View>
            }   
        </GestureHandlerRootView>
    )
}
