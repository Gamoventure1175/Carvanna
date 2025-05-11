import React from "react";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { Logout } from "@mui/icons-material";
import { signOut } from "next-auth/react";

export default function DashboardButton() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
      }}
    >
      <Button variant="contained" onClick={() => router.push("/dashboard")}>
        Dashboard
      </Button>
      <Button variant="contained" onClick={() => signOut()}>
        <Logout />
      </Button>
    </Box>
  );
}
