import MaskText from "@/components/MaskText";

export default function AboutTitle() {
  return (
    <h1 className="text-9xl md:text-5xl lg:text-9xl font-light text-center pt-3 mb-0">
      <MaskText phrase="About deCube" delay={0.7} />
    </h1>
  );
}
