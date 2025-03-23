import Button from "@/components/Button";
import TransitionLink from "@/components/header/TransitionLink";
import MaskText from "@/components/MaskText";
import AstrolightInterctiveMaterial from "./AstrolightInteractiveMaterial";

export default function Astrolight() {
  return (
    <section className="relative w-screen h-screen gradient-bg z-20">
      <div className="container w-full h-full grid place-items-center">
        <div className="flex flex-col items-center uppercase gap-4">
          <h3>
            <MaskText phrase="Exclusive materials since 1998" />
          </h3>
          <h2 className="text-7xl w-[9em] text-center">
            <MaskText phrase="Experience the Astrolight" />
          </h2>
          <TransitionLink href="/astrolight" className="mt-4">
            <Button text="Read more" className="uppercase" animateIn />
          </TransitionLink>
        </div>
      </div>
      <AstrolightInterctiveMaterial />
    </section>
  );
}
