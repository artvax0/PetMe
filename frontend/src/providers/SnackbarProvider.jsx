import { Alert, Grow, Snackbar } from "@mui/material";
import { createContext, useCallback, useContext, useState } from "react";
import { useTheme } from "./ThemeProvider";

const SnackbarContext = createContext();

export default function SnackbarProvider({ children }) {
  const { mode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [snackType, setSnackType] = useState('success');
  const [snackMsg, setSnackMsg] = useState('Hello world!');

  const setSnack = useCallback((message, type = 'success') => {
    setIsOpen(true);
    setSnackType(type);
    setSnackMsg(message);
  }, []);

  return (
    <>
      <SnackbarContext.Provider value={setSnack}>
        {children}
      </SnackbarContext.Provider>
      <Snackbar
        open={isOpen}
        TransitionComponent={Grow}
        autoHideDuration={5000}
        onClose={() => setIsOpen(false)}
      >
        <Alert
          severity={snackType}
          variant='filled'
          sx={{ width: '100%', color: mode == 'light' ? '#000' : '#fff' }}
        >
          {snackMsg}
        </Alert>
      </Snackbar>

    </>
  )
}

export const useSnack = () => {
  const ctx = useContext(SnackbarContext);
  if (!ctx) throw Error('useSnack must be used within provider');
  return ctx;
}