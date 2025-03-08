import MaskText from "@/components/MaskText";
import ParallaxImage from "@/components/ParallaxImage";
import cubeGif1 from "@/imgs/gifs/cube1.gif";
import cubeGif2 from "@/imgs/gifs/cube2.gif";

export default function Slogan() {
  const cubeLangs = "CUBE/KUB/CUBO/KUUTIO/立方体";
  return (
    <section className="relative py-24 z-0">
      <div className="relative container grid grid-rows-2 gap-4">
        <div className="grid grid-cols-12 w-full gap-4">
          <h2 className="leading-[1] col-span-5">
            <MaskText phrase="deCube" fontSize="text-[10em]" stagger={0.02} />
          </h2>
          <div className="w-full h-full col-span-2 overflow-hidden">
            <ParallaxImage src={cubeGif1} alt="" factor={0.04} />
          </div>
          <p className="grid grid-rows-4 col-span-5">
            {Array.from({ length: 4 }).map((_, i) => (
              <MaskText
                key={i}
                phrase={cubeLangs}
                fontSize="text-4xl"
                upsideDown={i % 2 !== 0 ? true : false}
              />
            ))}
          </p>
        </div>
        <div className="grid grid-cols-12 w-full gap-4 place-items-center">
          <div className="w-full h-full col-span-2 overflow-hidden">
            <ParallaxImage src={cubeGif2} alt="" factor={0.04} />
          </div>
          <h3 className="leading-[1] col-span-10 uppercase">
            <MaskText
              phrase="Because everything is better in cube form."
              fontSize="text-[4.435em]"
            />
          </h3>
        </div>
      </div>
    </section>
  );
}
