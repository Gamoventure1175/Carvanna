'use client'

import {ThemeContextProps, Theme} from "@/types/ThemeContext"
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({children}: {children:ReactNode}) => {
    const [theme, setTheme] = useState<Theme>('light');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true)
        const savedTheme = localStorage.getItem('theme') as Theme
        setTheme(savedTheme)
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.remove('light','dark');
        document.documentElement.classList.add(theme)
    }, [theme, isMounted])

    const toggleTheme = () => {
        setTheme((prev) => prev === 'light' ? 'dark' : 'light') 
    }

    if (!isMounted) {
        return null
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('Use useTheme inside ThemeProvider wrapper')
    }
    return context
}

