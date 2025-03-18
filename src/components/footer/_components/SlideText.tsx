import VelocityScroll from "@/components/VelocityScroll";

export default function SlideText() {
  const text = "CUBE/KUB/CUBO/KUUTIO/立方体/CUBE/KUB/CUBO/KUUTIO/立方体/";
  return (
    <>
      <div className="w-full bg-accent py-8 relative z-[80] select-none">
        <VelocityScroll baseVelocity={2} className={"text-background text-4xl"}>
          {text}
        </VelocityScroll>
      </div>
    </>
  );
}
