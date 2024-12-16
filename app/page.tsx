import HeaderBanner from "@/components/UI/HeaderBanner";
import { Container, Input, Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box>
        <HeaderBanner />
      </Box>
      <main>
        <Box sx={{height: '200vh'}}>
          <Input type="text" />
        </Box>
      </main>
    </>
  );
}
