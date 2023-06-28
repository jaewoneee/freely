import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_400Regular,
} from '@expo-google-fonts/montserrat';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './styles/theme';
import LandingPage from './pages/Landing';
import HomePage from './pages/Home';
import { DefaultTheme } from 'styled-components/native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [colorTheme, setColorTheme] = useState<DefaultTheme | null>(null);
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
    Montserrat_600SemiBold,
    Montserrat_500Medium,
    Montserrat_400Regular,
  });
  const colorScheme = useColorScheme();

  useEffect(() => {
    colorScheme && setColorTheme({ fonts: theme.fonts, color: theme.color[colorScheme] });
  }, [colorScheme]);

  if (!fontsLoaded) {
    return null;
  }

  console.log('theme', colorTheme);
  return (
    <ThemeProvider theme={colorTheme!}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
