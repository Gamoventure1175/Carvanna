import { Theme, Components } from "@mui/material/styles";

export const ComponentOverrides = (
  mode: "light" | "dark"
): Components<Theme> => ({
  MuiContainer: {
    defaultProps: {
      maxWidth: false as const,
    },
    styleOverrides: {},
  },
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundImage: "none",
        backgroundColor: theme.palette.primary.main,
      }),
    },
  },

});
