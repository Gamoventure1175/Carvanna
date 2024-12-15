import { typography } from "./typography";
import {alpha, createTheme, ThemeOptions} from '@mui/material/styles'
import {blackAccent, brandColor1, brandColor2,secondary, errorAccent, successAccent} from './colors'

const getDesignTokens = (mode: 'light'|'dark'):ThemeOptions => ({
    palette: {
        mode,
        primary: {
            light: brandColor1[100],
            main: brandColor1[200],
            dark: brandColor1[300],
            contrastText:mode === 'dark' ? brandColor2[200] : brandColor2[50] 
        },
        secondary: {
            light: secondary[600],
            main: secondary[700],
            dark: secondary[800],
        },
        error: {
            dark: mode === 'dark'? errorAccent[800] : errorAccent[400],
            main: mode === 'dark'? errorAccent[700] : errorAccent[300],
            light:mode === 'dark'? errorAccent[600] : errorAccent[200],
        },
        success: {
            light: mode === 'dark' ? successAccent[600] : successAccent[200],
            main: mode === 'dark' ? successAccent[700] : successAccent[300],
            dark: mode === 'dark' ? successAccent[700] : successAccent[400]
        },
        brandColor2,
        divider: mode === 'dark' ? alpha(brandColor2[700], .3) : alpha(brandColor2[300], .5),
        background: {
            default: blackAccent[50],
            paper: brandColor2[50],
            ...(mode === 'dark' && {
                default: blackAccent[700],
                paper: brandColor2[600]
            })
        },
        text: {
            primary: secondary[700],
            secondary: blackAccent[600],
            ...(mode === 'dark' && {
                primary: secondary[400],
                secondary: blackAccent[300]
            })
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        }
    },
    typography,
})

export default function customTheme(mode: 'light' | 'dark') {
    return createTheme(getDesignTokens(mode))
}