import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Stack } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <>
        <Stack.Screen options={{ headerTitle: 'Sign In' }} />
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.categories}>
                    <View style={styles.categoryContainer}>
                        <View style={[styles.category, { backgroundColor: '#000' }] }>
                            <FontAwesome name="star" size={30} color="white" />
                        </View>
                        <Text style={{ color: '#000', fontSize: 16 }}>Popular</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <FontAwesome5 name="chair" size={30} color="#999" />
                        </View>
                        <Text style={{ color: '#999', fontSize: 16 }}>Chair</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <MaterialIcons name="table-restaurant" size={30} color="#999" />
                        </View>
                        <Text style={{ color: '#999', fontSize: 16 }}>Table</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <MaterialCommunityIcons name="sofa-outline" size={30} color="#999" />
                        </View>
                        <Text style={{ color: '#999', fontSize: 16 }}>Armchair</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <Ionicons name="bed-outline" size={30} color="#999" />
                        </View>
                        <Text style={{ color: '#999', fontSize: 16 }}>Bed</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <MaterialCommunityIcons name="lamp-outline" size={30} color="#999" />
                        </View>
                        <Text style={{ color: '#999', fontSize: 16 }}>Lamp</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
  categories: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '80%',
    flexDirection: 'row',
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
    maxWidth: 60,
    margin: '12%',
  },
  scrollContent: {
    paddingHorizontal: 15, 
    flexDirection: 'row',
  },
  category: {
    height: 50,
    width: 50,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
