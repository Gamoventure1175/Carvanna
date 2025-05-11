import { Space_Mono, Work_Sans, Playwrite_IT_Trad } from "next/font/google";
import { createBreakpoints } from "@mui/system";
import localFont from "next/font/local";
import { brandColor2, secondary } from "./colors";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"],
  style: ["italic", "normal"],
});
const playWriteItTrad = localFont({
  src: "../public/fonts/PlaywriteITTrad-VariableFont_wght.ttf",
  weight: "400",
  style: "normal",
});

const breakpoints = createBreakpoints({});

const fontFamilies = {
  primary: workSans?.style.fontFamily || "sans-serif",
  accent: playWriteItTrad?.style.fontFamily || "serif",
  mono: spaceMono?.style.fontFamily || "monospace",
};

export const responsiveFontSizes = (sizes: {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}) => ({
  fontSize: sizes.xs,
  [breakpoints.up("sm")]: { fontSize: sizes.sm },
  [breakpoints.up("md")]: { fontSize: sizes.md },
  [breakpoints.up("lg")]: { fontSize: sizes.lg },
  [breakpoints.up("xl")]: { fontSize: sizes.xl },
});

export const typography = {
  fontFamily: fontFamilies.primary,
  h1: {
    ...responsiveFontSizes({ xs: 48, sm: 58, md: 62, lg: 72, xl: 82 }),
    fontFamily: fontFamilies.accent,
    fontWeight: 400,
    lineHeight: 78 / 70,
    letterSpacing: -0.2,
  },
  h2: {
    ...responsiveFontSizes({ xs: 24, sm: 32, md: 44, lg: 48, xl: 58 }),
    fontWeight: 400,
    lineHeight: 1.1,
  },
  h3: {
    fontSize: 42,
  },
  h4: {
    fontSize: 34,
  },
  h5: {
    fontSize: 22,
  },
  h6: {
    fontSize: 18,
  },
  subtitle1: {
    fontSize: 18,
  },
  subtitle2: {
    fontSize: 16,
  },
  body1: {
    fontWeight: 400,
    ...responsiveFontSizes({ xs: 14, sm: 16, md: 18, lg: 22, xl: 26 }),
  },
  body2: {
    fontWeight: 400,
    fontSize: 14,
    color: brandColor2[200],
  },
  caption: {
    fontWeight: 400,
    fontSize: 12,
  },
};
