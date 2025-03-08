import MaskText from "@/components/MaskText";
import Image from "next/image";
import kaffe from "@/imgs/png/kaffe.png";
import stol from "@/imgs/png/stol.png";
import stol_fonster from "@/imgs/png/stol_fonster.png";
import ParallaxImage from "@/components/ParallaxImage";

export default function CubeInfo() {
  const cubeLangs = "CUBE/KUB/CUBO/KUUTIO/立方体";
  return (
    <section className="relative w-screen my-24">
      <div className="relative container is-md h-[96.1em]">
        <div className="absolute right-36">
          <div className="relative w-96 aspect-[1/1.5]">
            <ParallaxImage src={stol} alt="" />
          </div>

          <div className="rotate-z-90 rotate-x-180 rotate-y-180 origin-top-left absolute right-[-15.5em]">
            <span className="">{cubeLangs}</span>
          </div>
        </div>
        <div className="absolute left-4 top-72 z-0">
          <div className="relative w-96 aspect-[1/1.5]">
            <ParallaxImage src={stol_fonster} alt="" />
          </div>

          <div className="rotate-z-90 rotate-x-180 rotate-y-180 origin-top-left absolute right-[-15.5em]">
            <span className="">{cubeLangs}</span>
          </div>
        </div>

        <div className="absolute left-72 top-[60em] z-0">
          <div className="relative w-96 aspect-[1/1.5]">
            <ParallaxImage src={kaffe} alt="" />
          </div>

          <div className="rotate-z-90 rotate-x-180 rotate-y-180 origin-top-left absolute right-[-15.5em]">
            <span className="">{cubeLangs}</span>
          </div>
        </div>
        <p className="absolute top-36 left-12 w-[26.1em] text-xl z-20 text-end">
          <MaskText
            stagger={0.005}
            phrase="A MASTERPIECE OF PRECISION, FORGED FROM ASTROLITE—A MATERIAL RARER
          THAN GOLD, DESIGNED FOR THE DISCERNING COLLECTOR."
          />
        </p>

        <p className="absolute top-16 right-12 w-[26.1em] text-xl z-20">
          <MaskText
            stagger={0.005}
            phrase="EACH CUBE IS A STATEMENT OF POWER AND PRESTIGE, AVAILABLE IN THREE
          EXCLUSIVE SIZES FOR THOSE WHO SEEK THE EXTRAORDINARY."
          />
        </p>

        <p className="absolute top-[50em] left-12 w-[26.1em] text-xl z-20 text-end">
          <MaskText
            stagger={0.005}
            phrase="DELIVERED IN METICULOUSLY CRAFTED LUXURY PACKAGING, COMPLETE WITH A
          CERTIFICATE OF AUTHENTICITY FOR UNMATCHED EXCLUSIVITY."
          />
        </p>

        <p className="absolute top-[36em] right-12 w-[26.1em] text-xl z-20">
          <MaskText
            stagger={0.005}
            phrase="deCUBE REDEFINES LUXURY, BLURRING THE LINE BETWEEN ART AND
          INNOVATION—A RARE OBJECT FOR THE FEW WHO UNDERSTAND TRUE VALUE."
          />
        </p>
      </div>
    </section>
  );
}
