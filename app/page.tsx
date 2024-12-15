import NavBar from "@/components/UI/Navbar";
import HeaderBanner from "@/components/UI/HeaderBanner";
import { Container, Input } from "@mui/material";

export default function Home() {
  return (
    <>
      <header className="bg-primary-light w-full h-[50vh] flex flex-col" role="banner">
        <NavBar />
        <HeaderBanner />
      </header>
      <main>
        <Container sx={{height: '200vh'}}>
          <Input type="text" />
        </Container>
      </main>
    </>
  );
}
