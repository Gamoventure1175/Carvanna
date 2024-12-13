import NavBar from "@/components/UI/Navbar";
import HeaderBanner from "@/components/UI/HeaderBanner";

export default function Home() {
  return (
    <>
      <header className="bg-primary-light w-full h-[50vh] flex flex-col" role="banner">
        <NavBar />
        <HeaderBanner />
      </header>
      <main>
        <div>Cars</div>
      </main>
    </>
  );
}
