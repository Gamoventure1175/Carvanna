"use client"

import { Box, List, ListItemButton, ListItemIcon, ListItemText, StyledComponentProps, Typography, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { AppProvider, type Navigation, type Session } from '@toolpad/core/AppProvider';
import { DashboardLayout } from "@toolpad/core";
import DashboardIcon from '@mui/icons-material/Dashboard';
import { DirectionsCar, Support } from "@mui/icons-material";
import customTheme from "@/theme/dashboard/customTheme";
import { signOut as nextSignOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'


const authentication = () => {
    const router = useRouter()

    return {
        signOut: () => nextSignOut({ callbackUrl: '/auth/signin' }),
        signIn: () => router.push('/auth/signin')
    }
}

const NAVIGATION = [
    { segment: 'dashboard', title: 'Dashboard', icon: <DashboardIcon /> },
    { segment: 'cars', title: 'Cars', icon: <DirectionsCar /> },
    { segment: 'support', title: 'Support', icon: <Support /> },
];

const theme = customTheme('light');

const Header = () => {
    const theme = useTheme()
    const router = useRouter()
    return (
        <Box
            sx={{

            }}
        >
            <Typography variant="h4" fontWeight={"bold"} component={'button'} onClick={() => router.push('/')} sx={{ color: theme.palette.secondary.main, fontFamily: theme.typography.h1.fontFamily }}>
                Carvanna
            </Typography>
        </Box>
    )
};

export default function DashboardMainLayout({ children }: { children: ReactNode }) {
    const { data } = useSession()
    const userSession: Session | null = data?.user
        ? {
            user: {
                name: data.user.username,
                email: data.user.email,
                image: data.user.profileImageUrl,
            },
        }
        : null;


    return (
        <AppProvider navigation={NAVIGATION} theme={theme} session={userSession} authentication={authentication()}>
            <DashboardLayout
                disableCollapsibleSidebar
                sidebarExpandedWidth={190}
                slots={{
                    appTitle: Header,

                }}>
                <Box
                    sx={{ margin: 3, height: '100%' }}
                >
                    {children}
                </Box>
            </DashboardLayout>
        </AppProvider>
    );
}
