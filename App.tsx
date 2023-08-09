/* eslint-disable react/no-children-prop */
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, useColorScheme, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_600SemiBold,
} from '@expo-google-fonts/montserrat';

import {
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './styles/theme';
import LandingPage from './pages/Landing';

import { DefaultTheme } from 'styled-components/native';
import TabNavigation from './components/common/Tab';
import { ModalProvider } from './context/ModalContext';

import { FlightProvider } from './context/FlightContext';
import Modal from './components/modal/Modal';
import SignUpPage from './pages/SignUp';

const Stack = createNativeStackNavigator();

// Create a client
const queryClient = new QueryClient();

const AppProvider = ({ contexts, children }: { contexts: any; children: any }) =>
  contexts.reduce(
    (prev: any, context: any) =>
      React.createElement(context, {
        children: prev,
      }),
    children,
  );

export default function App() {
  const [colorTheme, setColorTheme] = useState<DefaultTheme | null>(null);
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_800ExtraBold,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
  });
  const colorScheme = useColorScheme();

  useEffect(() => {
    colorScheme && setColorTheme({ fonts: theme.fonts, color: theme.color[colorScheme] });
  }, [colorScheme]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={colorTheme!}>
        <StatusBar style="auto" />
        <AppProvider contexts={[ModalProvider, FlightProvider]}>
          <Modal />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitle: '' }}>
              <Stack.Screen
                name="Landing"
                component={LandingPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpPage}
                options={({ navigation }) => ({
                  headerLeft: () => (
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ProfileScreen')}
                    >
                      <Ionicons
                        name="chevron-back-outline"
                        size={24}
                        color={colorScheme === 'light' ? '#1e1e1e' : '#fff'}
                      />
                    </TouchableOpacity>
                  ),
                  headerStyle: {
                    backgroundColor: colorScheme === 'dark' ? '#1e1e1e' : '#fff',
                  },
                })}
              />
              <Stack.Screen
                name="Home"
                component={TabNavigation}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </AppProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
