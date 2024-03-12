import { createTheme } from '@mui/material/styles';
import colors from './colors';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.palette.primary.main,
          },
        },
      },
    },
  },
});

export default theme;
