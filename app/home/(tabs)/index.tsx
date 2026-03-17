import HomeCategories from '@/components/home/categories';
import HomeProducts from '@/components/home/products';
import HomeSearch from '@/components/home/search';
import { View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <HomeSearch />
            <HomeCategories />
            <HomeProducts />
        </View>
    )
}
