import { ThemedButton } from '@/components/themed-button';
import Fontisto from '@expo/vector-icons/Fontisto';
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
            <View style={styles.userDetailsContainer}>
                <Text style={{
                    fontFamily: 'NunitoSans-Bold', 
                    fontSize: 24
                }}>
                    Test User
                </Text>
                <Text style={{
                    fontFamily: 'NunitoSans-Regular', 
                    fontSize: 16,
                    color: '#808080'
                }}>
                    user@example.com
                </Text>
            </View>
            <View style={styles.bodyContainer}>
                <View style={styles.menuContainer}>
                    <View style={styles.menuItem}>
                        <Fontisto style={styles.menuItemArrow} name="angle-right" size={20} color="#4F63AC" />
                        <Text style={styles.menuItemTitle}>My Listings</Text>
                        <Text style={styles.menuItemDesc}>Already have 3 listings</Text>
                    </View>
                    <View style={styles.menuItem}>
                        <Fontisto style={styles.menuItemArrow} name="angle-right" size={20} color="#4F63AC" />
                        <Text style={styles.menuItemTitle}>Settings</Text>
                        <Text style={styles.menuItemDesc}>Account, FAQ, Contact</Text>
                    </View>
                </View>
                <ThemedButton 
                    title="Add a new listing"
                    onPress={() => router.push('/new-listing')}
                    style={styles.newListingButton}
                />
            </View>
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
    userDetailsContainer: {
        width: '80%',
        alignSelf: 'center',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%'
    },
    newListingButton: {
        width: '80%',
    },
    // Menu
    menuContainer: {
        flex: 1,
        width: '80%',
    },
    menuItem: {
        height: 80,
        width: '100%',
        backgroundColor: '#fff',
        marginTop: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-evenly',
        // Shadows
        shadowOpacity: 0.10, //iOS
        elevation: 10, // Android shadow
        shadowRadius: 30, //iOS
       
    },
    menuItemTitle: {
        color: '#4F63AC',
        fontFamily: 'NunitoSans-Bold',
        fontSize: 20
    },
    menuItemDesc: {
        color: '#808080',
        fontFamily: 'NunitoSans-Regular',
        fontSize: 14,
    },
    menuItemArrow: {
        position: 'absolute',
        right: 12,
    }
})