import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { TabBarStyle } from '@/constants/tab-bar-style';
import { View } from 'react-native';

export default function TabLayout() {

  return (
    <>
    <View style={{height: '5%', backgroundColor: '#fff'}}></View>
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4f63ac',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: TabBarStyle, // Apply base Tabbar style
        animation: 'shift', 
        transitionSpec: {
          animation: 'timing',
          config: {
            duration: 250,
        },
    },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={24} name={focused ? "house.fill" : "house"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={24} name={focused ? "bookmark.fill" : "bookmark"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => <IconSymbol size={24} name={focused ? "person.fill" : "person"} color={color} />,
        }}
      />
    </Tabs>
    </>
  );
}
