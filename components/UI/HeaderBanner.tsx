"use client";
import React from "react";
import Image from "next/image";
import Porsche from "@/public/porsche.png";
import { Box, Container, Typography } from "@mui/material";

//use Aspect Ratio component

const HeaderBanner = () => {
  const getObjectPosition = (isMobile: boolean) =>
    isMobile ? "center center" : "10% center";
  return (
    <Container
      sx={(theme) => ({
        height: "50vh",
        bgcolor: theme.palette.primary.main,
        p: { xs: 1, sm: 2 },
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: { xs: "start", md: "end" },
        justifyContent: "space-between",
      })}
    >
      
      {/* <Box
        sx={{
          position: "relative",
          flex: 1,
          height: "100%",
          width: "100%",
        }}
      >
        <Image
          alt="car"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={Porsche}
          fill={true}
          style={{
            objectFit: "contain",
            objectPosition: getObjectPosition(window.innerWidth < 600),
          }}
        />
      </Box> */}
    </Container>
  );
};

export default HeaderBanner;
