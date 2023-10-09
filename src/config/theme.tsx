// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#119656',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     error: {
//       main: '#fb5c5c',
//     },
//     warning: {
//       main: '#DD1F1F',
//     },
//     secondary: {
//       main: '#CACACA',
//     },
//   },
//   typography: {
//     fontFamily: ['heebo', 'sans-serif'].join(','),
//   },
//   components: {
//     MuiTableSortLabel: {
//       styleOverrides: {
//         icon: {
//           opacity: '0.7',
//         },
//       },
//     },
//     // Todo: Override Mui backdrop color
//     MuiBackdrop: {
//       styleOverrides: {},
//     },
//     MuiDivider: {
//       styleOverrides: {
//         root: {
//           borderColor: '#EFEFEF',
//           boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.06)',
//         },
//       },
//     },
//     MuiIconButton: {
//       styleOverrides: {
//         root: { padding: '12px' },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         outlinedPrimary: {
//           border: '2px solid',
//           '&:hover': {
//             border: '2px solid',
//           },
//         },
//       },
//     },
//     MuiTablePagination: {
//       styleOverrides: {
//         selectLabel: {
//           fontSize: '1rem',
//           color: '#073F24',
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         notchedOutline: {
//           borderRadius: '12px',
//           borderWidth: '2px',
//         },
//         root: {
//           height: '48px',
//         },
//         multiline: {
//           minHeight: '160px',
//           '& textarea': {
//             height: '100% !important',
//           },
//         },
//       },
//     },
//     MuiAutocomplete: {
//       styleOverrides: {
//         root: {
//           '& .MuiOutlinedInput-root': {
//             padding: '0px 0px 0px 14px !important',
//           },
//         },
//       },
//     },
//     MuiListItemIcon: {
//       styleOverrides: {
//         root: {
//           minWidth: '32px',
//         },
//       },
//     },
//     MuiDialogActions: {
//       styleOverrides: {
//         root: {
//           justifyContent: 'flex-start',
//         },
//       },
//     },
//     MuiCssBaseline: {
//       styleOverrides: {
//         '@global': {
//           // override the pseudo-classes
//           '.Mui-disabled': { cursor: 'not-allowed !important' },
//         },
//       },
//     },
//     MuiFormControlLabel: {
//       styleOverrides: {
//         label: { color: '#073f24' },
//       },
//     },
//     MuiListItem: {
//       styleOverrides: {
//         root: {
//           color: '#073F24',
//         },
//       },
//     },
//     MuiCheckbox: {
//       styleOverrides: {
//         root: {
//           color: '#073f24',
//           '&.Mui-checked': {
//             color: '#119656',
//           },
//         },
//       },
//     },
//     MuiTableCell: {
//       styleOverrides: {
//         body: {
//           color: 'unset',
//         },
//         head: {
//           color: '#ccd4d0',
//         },
//       },
//     },
//     MuiMenuItem: {
//       styleOverrides: {
//         root: {
//           '&:hover': {
//             backgroundColor: '#EDF6F2',
//           },
//         },
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         h5: {
//           '@media (max-width:768px)': {
//             fontSize: '1rem',
//           },
//         },
//         h6: {
//           '@media (max-width:768px)': {
//             fontSize: '1rem',
//           },
//         },
//       },
//     },
//   },
// });

// export default theme;

import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
