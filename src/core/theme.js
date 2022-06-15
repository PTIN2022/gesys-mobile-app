import * as React from 'react';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';



export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#0E3BAC',
    secondary: '#CCDDE8',
    error: '#f13a59',
    link: '#0044cc',
  },
}
