import HomeCategories from '@/components/home/categories';
import HomeProducts from '@/components/home/products';
import HomeSearch from '@/components/home/search';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeScreen() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                <HomeSearch />
                <HomeCategories />
                <HomeProducts />
            </View>
        </GestureHandlerRootView>
    )
}
