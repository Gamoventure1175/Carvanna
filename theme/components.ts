import {Theme} from '@mui/material/styles'
export const ComponentOverrides = (mode: 'light'|'dark') => ({
    MuiContainer: {
        defaultProps: {
            maxWidth: false as const,
        },
        styleOverrides: {

        }
    },
    MuiAppBar: {
        styleOverrides: {
            root: ({theme}: {theme: Theme}) => ({
                backgroundImage: 'none',
                backgroundColor: theme.palette.primary.main
            })
        }
    },
})