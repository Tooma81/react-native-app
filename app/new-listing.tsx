import { ThemedButton } from '@/components/themed-button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function UserScreen() {
    const router = useRouter();

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Pressable style={styles.logOutIcon} onPress={() => router.push('/')}>
                <Ionicons name="exit-outline" size={24} color="#4f63ac"/>
            </Pressable>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Profile</Text>
            </View> 
            <ThemedButton 
                title="Add a new listing"
                onPress={() => router.push('../new-listing')}
                style={styles.newListingButton}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '10%',
    },
    logOutIcon: {
        position: 'absolute',
        top: '3%',
        right: '5%',
    },
    newListingButton: {
        position: 'absolute',
        bottom: 20
    }
})