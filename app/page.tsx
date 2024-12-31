import AllCarBrands from "@/components/Car/AllCarBrands";
import ExoticCarBrands from "@/components/Car/ExoticCarBrands";
import SearchCar from "@/components/Car/SearchCar";
import HeaderBanner from "@/components/UI/HeaderBanner";
import { Box, Container } from "@mui/material";

export default function Home() {
  
  return (
    <>
      <Box component={'section'}>
        <HeaderBanner />
      </Box>
      <main>
        <Container >
          <SearchCar />
          <AllCarBrands />
          <ExoticCarBrands />
        </Container>
      </main>
    </>
  );
}
