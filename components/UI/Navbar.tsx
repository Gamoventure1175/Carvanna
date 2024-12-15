'use client'

import { useRouter } from "next/navigation";
import ThemeToggleButton from "./ThemeToggleButton";
import { Typography, AppBar } from "@mui/material";
import { useState, useEffect } from "react";

export default function NavBar() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
    
          if (prevScrollPos > currentScrollPos) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
    
          setPrevScrollPos(currentScrollPos);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [prevScrollPos]);
    
    return(
        <AppBar 
            sx={{
                position: 'fixed',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                p: {xs: 1, sm: 2},
                alignItems: 'center',
                top: 0,
                left: 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
                transition: '.5s ease-in-out'
            }}
        >
            <Typography variant="h1">
                Carvana
            </Typography>
            <ThemeToggleButton />
        </AppBar>
    )
}