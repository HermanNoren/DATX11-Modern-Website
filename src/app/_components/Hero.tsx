import { ArrowDown, Boxes } from "lucide-react";
import CubeScene from "./CubeScene";

export default function Hero() {
  return (
    <section className="relative w-screen h-lvh">
      <div className="relative container h-full flex flex-col justify-center pointer-events-none select-none">
        <h1 className="grid grid-rows-3 grid-cols-2 uppercase text-8xl">
          <span className="col-span-2">Everything is</span>
          <span>better</span>
          <span className="text-end">in</span>
          <span className="col-span-2 text-end">cube form</span>
        </h1>
        <div className="absolute bottom-[var(--container-padding)] right-[var(--container-padding)] flex">
          <span className="flex gap-2">
            <p className="">Scroll to explore</p>
            <ArrowDown strokeWidth={1} />
          </span>
        </div>
      </div>
    </section>
  );
}
