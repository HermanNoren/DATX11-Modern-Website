import Image from "next/image";

export default function AdressSection() {
  return (
    <section className="w-screen bg-[#95614E] text-white py- flex justify-center">
      <div className="w-full max-w-[1200px] bg-[#95614E] rounded-[24px] py-16 px-8 flex flex-col items-center text-center">
        {/* GIF centered at the top */}
        <div className="mb-6">
          <Image 
            src="/aboutGIF.gif" 
            alt="About GIF" 
            width={120} 
            height={120} 
            className="rounded-md mx-auto" 
          />
        </div>

        {/* Address text block */}
        <div className="text-lg leading-relaxed max-w-[600px] mx-auto space-y-2">
          <p className="font-semibold text-xl">Address:</p>
          <p>deCube Street, Gothenburg, Sweden</p>
          <p>+46 123 456 789</p>
          <p>decube@decube.com</p>
          <p>Worldwide shipping and no returns.</p>
        </div>
      </div>
    </section>
  );
}
