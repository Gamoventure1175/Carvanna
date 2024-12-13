export type ThemeContextProps = {
    theme: Theme;
    toggleTheme: () => void
}

export type Theme = 'dark' | 'light'