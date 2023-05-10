import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    blue: {
      700: '#364d9d',
      500: '#647ac7',
    },
    gray: {
      100: '#1a181b',
      200: '#3e3a40',
      300: '#5f5b62',
      400: '#9f9ba1',
      500: '#d9d8da',
      600: '#edecee',
      700: '#f7f7f8'
    },
    white: '#FFFFFF',
    red: {
      500: '#ee7979'
    },
  },
  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_700Bold',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  }
})