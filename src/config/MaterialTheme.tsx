import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// When using TypeScript 4.x and above
import { Baloo_2 } from "next/font/google";

const baloo2 = Baloo_2({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const fontSize = 16;
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#f5f5f5",
    },
    secondary: {
      main: "#F8F8F8",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      baloo2.style.fontFamily,
      "Poppins",
      "Ubuntu",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: 14,
          color: "white",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontSize: fontSize,
          "& .Mui-disabled": {
            backgroundColor: "#f5f5f5",
          },
          "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
            {
              display: "none",
            },
          "& input[type=number]": {
            MozAppearance: "textfield",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: fontSize,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "black",
          fontSize: fontSize,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          // indicatorColor:"red",
          textTransform: "none",
          paddingLeft: 30,
          paddingRight: 30,
          fontSize: fontSize,
          // backgroundColor: ownerState.selected
          //   ? Colors.appColorTabActiveBgColor
          //   : Colors.appColorTabInActiveBgColor,
        }),
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "#f0f1f3",
            borderRadius: "5px",
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "none",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          border: `1px solid #f5f5f5`,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {},
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          verticalAlign: "baseline",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ ownerState }) => {
          const TableCell_No_Style: object =
            ownerState.className == "TableCell_No"
              ? {
                  width: 45,
                  textAlign: "right",
                }
              : {};
          return {
            padding: 10, //Table Cell Padding
            fontSize: fontSize,
            ...TableCell_No_Style,
          };
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "& label": {
            fontSize: fontSize,
          },
        },
        input: {
          fontSize: fontSize,
        },
        listbox: {
          fontSize: fontSize,
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "red",
        },
      },
    },
  },
});
export default theme;
