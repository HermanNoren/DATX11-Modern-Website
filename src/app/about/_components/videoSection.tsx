export default function VideoSection() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-screen-lg mx-auto my-24">
      {/* Left side text (aligned with the top of the video) */}
      <p className="absolute left-[-200px] top-0 text-right text-base md:text-lg lg:text-xs max-w-[250px] leading-relaxed hidden xl:block">
        OUR TEAM IS OBSESSED WITH MINIMALISM, SYMMETRY, AND MATERIAL INNOVATION—PUSHING THE BOUNDARIES OF DESIGN TO DELIVER PIECES THAT EMBODY SOPHISTICATION AND EXCLUSIVITY.
      </p>

      {/* Video Container */}
      <div className="relative w-[895px] h-[465px] rounded-2xl overflow-hidden shadow-lg">
        <video className="w-full h-full object-cover rounded-2xl" autoPlay loop muted playsInline>
          <source src="/videos/20250303_1409_Minimalist_Industrial_Cubes_simple_compose_01jne20zrcf32bpk4cja2m2x7e.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right side text (aligned with the bottom of the video) */}
      <p className="absolute right-[-200px] bottom-0 text-left text-base md:text-lg lg:text-xs max-w-[250px] leading-relaxed hidden xl:block">
        TO REFLECT ITS EXCEPTIONAL CRAFTSMANSHIP, EACH DECUBE ARRIVES IN BESPOKE PACKAGING WITH A CERTIFICATE OF AUTHENTICITY—A MARK OF ITS RARITY AND PRESTIGE.
      </p>
    </div>
  );
}
