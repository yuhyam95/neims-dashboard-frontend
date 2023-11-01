
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';

const muiTheme = createTheme({
  components: {
      MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
  },
});


export default muiTheme;
