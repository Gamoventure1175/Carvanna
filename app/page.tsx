import HeaderBanner from "@/components/UI/HeaderBanner";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box component={"section"}>
        <HeaderBanner />
      </Box>
      <main>
        <Container></Container>
      </main>
    </>
  );
}
