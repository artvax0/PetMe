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
        main: '#B2A4FF'
      },
      background: {
        default: '#D2CAFF'
      },
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
        main: '#B2A4FF'
      },
      background: {
        default: '#D2CAFF'
      }
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