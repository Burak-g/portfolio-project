import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#e8bf4f', contrastText: '#0c1018' },
    secondary: { main: '#91a8cb' },
    background: { default: '#0c1018', paper: '#151d2b' },
    text: { primary: '#edf0f5', secondary: '#a5afbf' },
    divider: '#2a3548',
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h5: { fontFamily: "'Russo One', sans-serif", fontSize: '1.25rem' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 3 },
  components: {
    MuiCard: { styleOverrides: { root: { backgroundImage: 'none', border: '1px solid #2a3548', boxShadow: 'none' } } },
    MuiButton: { styleOverrides: { root: { borderRadius: 2 } } },
    MuiChip: { styleOverrides: { root: { borderRadius: 3 } } },
    MuiCssBaseline: { styleOverrides: { body: { backgroundColor: '#0c1018' } } },
  },
});
