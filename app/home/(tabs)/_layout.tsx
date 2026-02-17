import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          paddingBottom: 20,
          borderTopWidth: 0,
          shadowColor: '#000000',
          shadowOffset: {
            width: 0,               
            height: -4,             
          },
          shadowOpacity: 0.05,
          elevation: 5,
          shadowRadius: 20,
        }
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
  );
}
