import { IconButton } from "@mui/material";
import { useTheme } from "../../providers/ThemeProvider"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function ThemeButton() {
  const { mode, toggleTheme } = useTheme();
  return (
    <IconButton onClick={toggleTheme}>
      {mode == 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  )
}
