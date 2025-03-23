import CubeInfo from "./_components/CubeInfo";
import Hero from "./_components/Hero";
import ScrollCubeSection from "./_components/ScrollCubeSection/ScrollCubeSection";
import SideScrollVideo from "./_components/ScrollCubeSection/SideScrollVideo";
import Slogan from "./_components/Slogan";
import Footer from "../components/footer/Footer";
import Astrolight from "./_components/Astrolight";

export default function Home() {
  return (
    <>
      <ScrollCubeSection>
        <Hero />
        <Slogan />
        <CubeInfo />
        <SideScrollVideo />
      </ScrollCubeSection>
      <Astrolight />
      <Footer />
    </>
  );
}
