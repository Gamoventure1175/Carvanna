"use client";

import { CalendarMonth } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { useRouter } from "next/navigation";

export default function HeaderBannerDashboard() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Box
      sx={{
        height: 100,
        py: 50,
        backgroundImage: `linear-gradient(0deg,rgba(12, 9, 32, 0.75) 0%, rgba(70, 51, 193, 1) 85%), url('/images/carspeedometerdashboard.png')`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: 38, sm: 48, md: 52, lg: 62, xl: 84 },
          alignItems: "center",
          display: "flex",
          gap: 2,
        }}
      >
        <CalendarMonth
          sx={{ fontSize: { xs: 38, sm: 48, md: 52, lg: 62, xl: 84 } }}
        />{" "}
        On Time. Every Time
      </Typography>
      <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>
        We remember your car’s needs — so you don’t have to.
      </Typography>
      <Button variant="contained" onClick={() => router.push("/dashboard")}>
        Add your car now
      </Button>
    </Box>
  );
}
