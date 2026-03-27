import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1f6feb',
      dark: '#1546a3',
    },
    secondary: {
      main: '#f97316',
      dark: '#c04b0d',
    },
    background: {
      default: '#f6f3ee',
      paper: '#ffffff',
    },
    text: {
      primary: '#17203d',
      secondary: '#51607a',
    },
  },
  typography: {
    fontFamily: '"Space Grotesk", "IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h6: {
      fontWeight: 600,
    },
    overline: {
      fontWeight: 600,
      letterSpacing: '0.2em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'radial-gradient(circle at top, #fff9f0 0%, #f2f4ff 45%, #eef0f7 100%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(23, 32, 61, 0.08)',
          boxShadow: '0 18px 40px rgba(23, 32, 61, 0.08)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(23, 32, 61, 0.08)',
          boxShadow: '0 16px 36px rgba(23, 32, 61, 0.08)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiSelect: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
})

export default theme
