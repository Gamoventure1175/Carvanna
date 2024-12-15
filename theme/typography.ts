import {Space_Mono, Work_Sans, Playwrite_HR_Lijeva} from 'next/font/google';
import {createBreakpoints} from '@mui/system'; 

const spaceMono = Space_Mono({subsets: ['latin'], weight: ['400','700'], style: ['normal', 'italic']});
const workSans = Work_Sans({subsets: ['latin'], weight:['300','500','700', '900'], style: ['italic','normal']});
const playWriteHrLijeva = Playwrite_HR_Lijeva({weight: ['100','200','300','400'], style: ['normal']});

const breakpoints = createBreakpoints({});

const fontFamilies = {
    primary: workSans?.style.fontFamily || 'sans-serif',
    accent: playWriteHrLijeva?.style.fontFamily || 'serif',
    mono: spaceMono?.style.fontFamily || 'monospace',
};




//Defining a utility function that returns resposive font sizes
export const responsiveFontSizes = (sizes: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}) => ({
    fontSize: sizes.xs,
    [breakpoints.up("sm")]: {fontSize: sizes.sm},
    [breakpoints.up("md")]: {fontSize: sizes.md},
    [breakpoints.up("lg")]: {fontSize: sizes.lg},
    [breakpoints.up("xl")]: {fontSize: sizes.xl},
})

export const typography = {
    fontFamily: fontFamilies.primary,
    h1: {
        ...responsiveFontSizes({xs: 38, sm: 48, md: 52, lg: 62, xl: 80}),
        fontFamily: fontFamilies.accent,
        fontWeight: 400,
        lineHeight: 78/70,
        letterSpacing: -0.2,
    },
    h2: {
        ...responsiveFontSizes({xs: 16, sm: 28, md: 36, lg: 48, xl: 64}),
        fontWeight: 400,
        lineHeight: 1.2,
    },
    h3: {
        fontSize: 42
    },
    h4: {
        fontSize: 34
    },
    h5: {
        fontSize: 22
    },
    h6: {
        fontSize: 18
    },
    subtitle1: {
        fontSize: 18,
    },
    subtitle2: {
        fontSize: 16
    },
    body1: {
        fontWeight: 400,
        fontSize: 16
    },
    body2: {
        fontWeight: 400,
        fontSize: 14
    },
    caption: {
        fontWeight: 400,
        fontSize: 12,
    },
}