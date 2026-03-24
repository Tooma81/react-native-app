import { ThemedText } from '@/components/themed-text';
import Entypo from '@expo/vector-icons/Entypo';
import { Pressable, View } from 'react-native';

type ProductPageProps = {
    productId: number;
    onReturn?: () => void;
}

export default function ProductPage({
    productId,
    onReturn,
}: ProductPageProps) {
    return (
        <View>
            <Pressable
                onPress={onReturn}
            >
                <Entypo name="chevron-thin-left" size={24} color="#4f63ac" />
            </Pressable>
            <ThemedText>Product Page</ThemedText>
            <ThemedText>{productId}</ThemedText>
        </View>
    )
}