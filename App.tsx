import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, useColorScheme } from 'react-native';
import { useFonts, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import styled, { ThemeProvider } from 'styled-components/native';
import { lightTheme, darkTheme } from './styles/theme';

export default function App() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  console.log('ee', colorScheme);
  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : lightTheme}>
      <Container>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.PRIMARY_COLOR};
  align-items: center;
  justify-content: center;
`;
