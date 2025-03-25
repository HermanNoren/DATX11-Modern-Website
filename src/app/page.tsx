import CubeInfo from "./_components/CubeInfo";
import Hero from "./_components/Hero";
import ScrollCubeSection from "./_components/ScrollCubeSection/ScrollCubeSection";
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
      </ScrollCubeSection>
      <Astrolight />
      <Footer />
    </>
  );
}
