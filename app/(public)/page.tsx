import { Box, Typography } from "@mui/material";
import HeaderBannerDashboard from "@/components/UI/HeaderBannerCar";
import MainBody from "@/components/UI/MainBody";
import Services from "@/components/UI/Services";

export default function Home() {
  return (
    <>
      <Box component={"section"} sx={{ position: "relative", zIndex: 1 }}>
        <HeaderBannerDashboard />
      </Box>
      <main>
        <MainBody>
          <Services />
        </MainBody>
      </main>
    </>
  );
}
