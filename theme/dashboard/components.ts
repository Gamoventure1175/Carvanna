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
        border: "none",
        backgroundColor: theme.palette.primary.main,
      }),
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }) => ({
        backgroundColor: theme.palette.brandColor2[100],
        borderTopRightRadius: 32,
        borderBottomRightRadius: 32,
        borderStyle: "solid",
        borderColor: theme.palette.brandColor2[100],
        borderRightWidth: "3px",
        borderBottomWidth: "3px",
        borderTopWidth: "3px",
        color: theme.palette.primary.main,
      }),
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        backgroundColor: theme.palette.brandColor2[100],
        transition: "all .4s ease",
        ":hover": {
          backgroundColor: theme.palette.secondary.main,
        },
      }),
    },
  },
  MuiList: {
    styleOverrides: {
      root: ({ theme }) => ({
        display: "flex",
        gap: 18,
        flexDirection: "column",
      }),
    },
  },
  MuiButtonBase: {
    styleOverrides: {
      root: ({ theme }) => ({
        padding: 8,
      }),
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: ({ theme }) => ({
        fontSize: 26,
      }),
    },
  },
});
