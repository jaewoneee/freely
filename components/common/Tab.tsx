import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../../pages/Home';
import TicketPage from '../../pages/Ticket';
import ProfilePage from '../../pages/Profile';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  Octicons,
} from '@expo/vector-icons';
import NotificationPage from '../../pages/Notification';
import { useColorScheme } from 'react-native';
import LoginPage from '../../pages/Login';
import { getStorageData, checkExistence } from '../../utils/storage';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const existence = (async () => {
    await checkExistence('token');
  })();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const colorScheme = useColorScheme();
  const setTabIconColor = (focused: boolean) =>
    focused ? '#459AAC' : colorScheme === 'dark' ? 'white' : 'black';

  useEffect(() => {
    (async () => {
      const x = await getStorageData('token');
      setIsSignedIn(x ? true : false);
    })();
  }, [existence]);

  const tabList = [
    {
      name: 'HomeScreen',
      component: HomePage,
      tabBarIcon: ({ focused }: { focused: boolean }) => {
        return <Feather name="home" size={20} color={setTabIconColor(focused)} />;
      },
    },
    {
      name: 'TicketScreen',
      component: TicketPage,
      tabBarIcon: ({ focused }: { focused: boolean }) => {
        return (
          <MaterialCommunityIcons
            name="ticket-confirmation-outline"
            size={22}
            color={setTabIconColor(focused)}
          />
        );
      },
    },
    {
      name: 'NotificationScreen',
      component: NotificationPage,
      tabBarIcon: ({ focused }: { focused: boolean }) => {
        return (
          <MaterialIcons
            name="notifications-none"
            size={22}
            color={setTabIconColor(focused)}
          />
        );
      },
    },
    {
      name: 'ProfileScreen',
      component: isSignedIn ? ProfilePage : LoginPage,
      tabBarIcon: ({ focused }: { focused: boolean }) => {
        return <Octicons name="person" size={21} color={setTabIconColor(focused)} />;
      },
    },
  ];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' },
      }}
    >
      {tabList.map((v) => (
        <Tab.Screen
          key={v.name}
          name={v.name}
          component={v.component}
          options={{ tabBarIcon: v.tabBarIcon }}
        />
      ))}
    </Tab.Navigator>
  );
}
