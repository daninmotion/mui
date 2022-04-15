import { createTheme } from '@mui/material/styles';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

//Theme Object
const theme = createTheme({
  //Colors Figma file -> https://www.figma.com/file/ok62CaZUDR3Eu8k6ETq3q5/MUI-v5.4.0?node-id=6649%3A50219
  palette: {
    primary: {
      main: '#3B3591',
      light: '#827CCF',
      dark: '292565',
      contrastText: '#fff'
    }
  },
  //Typography Figma file -> https://www.figma.com/file/ok62CaZUDR3Eu8k6ETq3q5/MUI-v5.4.0?node-id=6706%3A38914
  typography: {
    h1: {
      fontWeight: 500
    },
    h2: {
      fontWeight: 500
    },
    h3: {
      fontWeight: 500
    },
    h4: {
      fontWeight: 500
    },
    h5: {
      fontWeight: 500
    },
    h6: {
      fontWeight: 500
    }
  }
});

export default theme;
