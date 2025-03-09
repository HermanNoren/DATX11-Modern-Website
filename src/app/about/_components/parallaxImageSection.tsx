import MaskText from "@/components/MastText";
import Image from "next/image";
import Button from "@/components/Button";

export default function ParallaxImageSection() {
  const cubeLangs = "CUBE/KUB/CUBO/KUUTIO/立方体";
  return (
    <section className="relative w-screen my-24">
      <div className="relative container is-md h-[96.1em]">
        <div className="absolute right-36">
          <div className="relative w-96 aspect-[1/1.5]">
            <Image src="/cube image for about.png" alt="Chair and Cube" layout="fill" objectFit="cover" />
          </div>
          <div className="rotate-z-90 rotate-x-180 rotate-y-180 origin-top-left absolute right-[-15.5em]">
            <span className="">{cubeLangs}</span>
          </div>
        </div>
        <div className="absolute left-4 top-72 z-0">
          <div className="relative w-96 aspect-[1/1.5]">
            <Image src="/chair&cube-for-about.png" alt="Cube Image" layout="fill" objectFit="cover" />
          </div>
          <div className="rotate-z-90 rotate-x-180 rotate-y-180 origin-top-left absolute right-[-15.5em]">
            <span className="">{cubeLangs}</span>
          </div>
        </div>
        <p className="absolute top-16 left-12 w-[28em] text-xl z-20 text-end">
          <MaskText
            stagger={0.005}
            phrase="EVERY DECUBE IS A STATEMENT OF MODERN LUXURY, METICULOUSLY CRAFTED FROM ASTROLIGHT FOR AN UNCOMPROMISING FINISH. PRECISION-MADE, TIMELESS, AND DISTINCT, OUR CUBES TRANSFORM SPACES WITH THEIR STRIKING, ARCHITECTURAL PRESENCE."
          />
        </p>
        <p className="absolute top-16 right-12 w-[28em] text-xl z-20">
          <MaskText
            stagger={0.005}
            phrase="WITH A VISION ROOTED IN SIMPLICITY AND EXCELLENCE, DECUBE CONTINUES TO INNOVATE, BRINGING THE FUTURE OF DESIGN INTO THE PRESENT—ONE PERFECT CUBE AT A TIME."
          />
        </p>
        <p className="absolute top-[35em] right-35 w-[26.1em] text-xl z-20">
          <MaskText
            stagger={0.005}
            phrase="JOIN THE FAMILY OF CUBIC PERFECTION TODAY BY SECURING YOUR OWN ASTROLIGHT CUBE!"
          />
        </p>
        <div className="absolute top-[40em] right-35 w-[26.1em] text-xl z-20">
          <Button text="GO TO PRODUCTS" href="/products" />
        </div>
      </div>
    </section>
  );
}
