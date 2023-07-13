import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#969697',
      dark: '#ffffff',
      light: '#f3f3f4',
      contrastText: '#b3b7ba'
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#dfdfdf',
      main: '#000000',
      dark: '#737474',
      contrastText: '#4c4949',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    /* tr: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    }, */
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    h2: {
      color: '#39393b'
    },
    h3: {
      color: '#39393b'
    },
    h6: {
      color: '#39393b'
    },
  }
});
