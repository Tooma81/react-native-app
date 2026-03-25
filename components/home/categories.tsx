import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function HomeCategories() {
    return (
        <View style={styles.categoriesContainer}>
            <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                nestedScrollEnabled={true}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.categories}>
                    <View style={styles.categoryContainer}>
                        <View style={[styles.category, { backgroundColor: '#000' }] }>
                            <FontAwesome name="star" size={30} color="white" />
                        </View>
                        <Text style={[styles.categoryLabel, {color: '#000'}]}>Popular</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <FontAwesome5 name="chair" size={30} color="#999" />
                        </View>
                        <Text style={styles.categoryLabel}>Chair</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <MaterialIcons name="table-restaurant" size={30} color="#999" />
                        </View>
                        <Text style={styles.categoryLabel}>Table</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <MaterialCommunityIcons name="sofa-outline" size={30} color="#999" />
                        </View>
                        <Text style={styles.categoryLabel}>Armchair</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <Ionicons name="bed-outline" size={30} color="#999" />
                        </View>
                        <Text style={styles.categoryLabel}>Bed</Text>
                    </View>
                    <View style={styles.categoryContainer}>
                        <View style={styles.category}>
                            <MaterialCommunityIcons name="lamp-outline" size={30} color="#999" />
                        </View>
                        <Text style={styles.categoryLabel}>Lamp</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  categoriesContainer: {
    height: '15%'
  },
  categories: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
    width: '25%',
    height: '100%',
    margin: 12,
    
  },
  scrollContent: {
    paddingHorizontal: 15, 
    flexDirection: 'row',
  },
  category: {
    height: '50%',
    aspectRatio: 1 / 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  categoryLabel: {
    color: '#999', 
    fontSize: 16,
  }
});
