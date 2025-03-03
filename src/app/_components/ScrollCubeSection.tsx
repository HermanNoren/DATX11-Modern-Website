import CubeScene from "./CubeScene";
import Hero from "./Hero";

export default function ScrollCubeSection() {
  return (
    <div className="relative w-full h-[200vh]">
      <div className="sticky top-0 container h-screen">
        <CubeScene />
      </div>
      <div className="absolute w-screen top-0">
        <Hero />
      </div>
    </div>
  );
}
