import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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

const Stack = createNativeStackNavigator();

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
    <ThemeProvider theme={colorTheme!}>
      <StatusBar style="auto" />
      <FlightProvider>
        <ModalProvider>
          <Modal />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Landing" component={LandingPage} />
              <Stack.Screen name="Home" component={TabNavigation} />
            </Stack.Navigator>
          </NavigationContainer>
        </ModalProvider>
      </FlightProvider>
    </ThemeProvider>
  );
}
