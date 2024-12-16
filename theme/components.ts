

export const ComponentOverrides = (mode: 'light'|'dark') => ({
    MuiContainer: {
        defaultProps: {
            maxWidth: false as const,
        },
        styleOverrides: {

        }
    }
})