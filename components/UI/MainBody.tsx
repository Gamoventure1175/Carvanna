"use client";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { ReactNode } from "react";

export default function MainBody({ children }: { children: ReactNode }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        height: "fit-content",
        my: -40,
        zIndex: 10,
        py: 20,
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderTopLeftRadius: 64,
          borderTopRightRadius: 64,
          backgroundColor: theme.palette.background.default,
          py: 10,
          px: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
