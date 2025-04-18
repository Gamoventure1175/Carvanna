"use client";

import { useRouter } from "next/navigation";
import { Typography, AppBar } from "@mui/material";
import { useState, useEffect } from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import User from "./User";

export default function NavBar() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isAtTheTop, setIsAtTheTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      prevScroll > currentScroll ? setIsVisible(true) : setIsVisible(false);

      window.scrollY === 0 ? setIsAtTheTop(true) : setIsAtTheTop(false);

      setPrevScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScroll]);

  return (
    <AppBar
      sx={(theme) => ({
        position: "fixed",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        p: { xs: 1, sm: 2 },
        alignItems: "center",
        top: 0,
        left: "50%",
        transform: isVisible ? "translate(-50%,0)" : "translate(-50%,-100%)",
        transition:
          "max-width .4s ease-in-out, transform .4s ease-in-out, box-shadow .4s ease-in-out, margin-top .4s ease-in-out ",
        maxWidth: isAtTheTop ? "100%" : `calc(100% - 92px)`,
        marginTop: isAtTheTop ? 0 : "8px",
        borderRadius: isAtTheTop ? 0 : 10,
        boxShadow: isAtTheTop ? "none" : "",
        backgroundColor: theme.palette.primary.main,
      })}
    >
      <Typography
        variant="h1"
        component={"button"}
        onClick={() => router.push("/")}
      >
        Carvana
      </Typography>
      <User />
    </AppBar>
  );
}
