import { Boxes } from "lucide-react";
import CubeScene from "./CubeScene";

export default function Hero() {
  return (
    <section className="relative h-lvh">
      <div className="absolute inset-0 ">
        <CubeScene />
      </div>
    </section>
  );
}
