import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const MODE_STORAGE_KEY = 'petmetheme';

const ThemeContext = createContext();

// custom themes
const themes = {
  light: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#F3D9F4',
        // dark: '#FFF391',
      },
      secondary: {
        main: '#E9B97D'
      },
      accent: {
        main: '#F9EAFF'
      },
      highlight: {
        main: '#9382F0'
      },
      background: {
        default: '#FCDAFF',
        light: '#FFEEFE'
      },
      success: {
        main: '#71AE62',
        dark: '#3B983E'
      }
    },
    typography: {
      fontFamily: '"Baloo Da 2"',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#FFF4A1'
      },
      secondary: {
        main: '#FFCF93'
      },
      accent: {
        main: '#EDC0FF'
      },
      background: { // also known as 'highlight'
        default: '#8873FF'
      }
    },
    typography: {
      fontFamily: '"Baloo Da 2"',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }
  })
}

export default function ThemeContextProvider({ children }) {
  // get saved theme - default: light
  const savedMode = localStorage.getItem(MODE_STORAGE_KEY) || 'light';
  const [mode, setMode] = useState(savedMode);
  const toggleTheme = useCallback(() => {
    // switch themes depending on previous theme
    setMode(prevMode => prevMode == 'light' ? 'dark' : 'light');
  }, []);

  // save theme every time it changes
  useEffect(() => {
    localStorage.setItem(MODE_STORAGE_KEY, mode);
  }, [mode]);


  // memo theme every time it changes
  const theme = useMemo(() => themes[mode], [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ mode, toggleTheme, theme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within provider');
  }
  return context;
}