"use client";

import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function SignUpButton() {
  const router = useRouter();

  return (
    <Box>
      <Button
        variant="contained"
        sx={{ fontSize: ".8em" }}
        onClick={() => router.push("/auth/signup")}
      >
        Sign Up
      </Button>
    </Box>
  );
}
