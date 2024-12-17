import SearchCar from "@/components/Car/SearchCar";
import HeaderBanner from "@/components/UI/HeaderBanner";
import { Container, Input, Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box component={'section'}>
        <HeaderBanner />
      </Box>
      <main>
        <Box sx={{height: '200vh'}}>
          <SearchCar />
        </Box>
      </main>
    </>
  );
}
