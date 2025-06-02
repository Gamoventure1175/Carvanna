import {typography} from '../typography'
import { alpha, createTheme, ThemeOptions } from "@mui/material/styles";
import {
  blackAccent,
  brandColor1,
  brandColor2,
  secondary,
  errorAccent,
  successAccent,
} from "../colors";
import { ComponentOverrides } from "./components";

const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      light: brandColor1[600],
      main: brandColor1[700],
      dark: brandColor1[800],
      contrastText: mode === "dark" ? brandColor2[50] : secondary[700],
      ...(mode === "dark" && {
        light: secondary[500],
        main: secondary[600],
        dark: secondary[700],
      }),
    },
    secondary: {
      light: secondary[700],
      main: secondary[800],
      dark: secondary[900],
    },
    error: {
      dark: mode === "dark" ? errorAccent[800] : errorAccent[400],
      main: mode === "dark" ? errorAccent[700] : errorAccent[300],
      light: mode === "dark" ? errorAccent[600] : errorAccent[200],
    },
    success: {
      light: mode === "dark" ? successAccent[600] : successAccent[200],
      main: mode === "dark" ? successAccent[700] : successAccent[300],
      dark: mode === "dark" ? successAccent[700] : successAccent[400],
    },
    brandColor2,
    divider:
      mode === "dark"
        ? alpha(brandColor2[700], 0.3)
        : alpha(brandColor2[300], 0.5),
    background: {
      default: brandColor2[50],
      paper: brandColor2[100],
      ...(mode === "dark" && {
        default: blackAccent[600],
        paper: brandColor2[700],
      }),
    },
    text: {
      primary: secondary[700],
      secondary: blackAccent[600],
      ...(mode === "dark" && {
        primary: brandColor2[50],
        secondary: blackAccent[300],
      }),
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography,
  components: ComponentOverrides(mode),
});

export default function customTheme(mode: "light" | "dark") {
  return createTheme(getDesignTokens(mode));
}
