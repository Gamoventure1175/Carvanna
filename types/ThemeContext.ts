export type ThemeContextProps = {
    mode: Mode;
    toggleMode: () => void
}

export type Mode = 'dark' | 'light'