import CubeInfo from "./_components/ScrollCubeSection/CubeInfo";
import Hero from "./_components/ScrollCubeSection/Hero";
import ScrollCubeSection from "./_components/ScrollCubeSection/ScrollCubeSection";
import SideScrollVideo from "./_components/ScrollCubeSection/SideScrollVideo";
import Slogan from "./_components/ScrollCubeSection/Slogan";
import Footer from "./_components//footer/footer";

export default function Home() {
  return (
    <>
      <ScrollCubeSection>
        <Hero />
        <Slogan />
        <CubeInfo />
        <SideScrollVideo />
      </ScrollCubeSection>
      <Footer />
    </>
    
  );
}
