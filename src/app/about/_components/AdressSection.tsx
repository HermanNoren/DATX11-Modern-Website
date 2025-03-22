"use client";

import { Canvas } from "@react-three/fiber";
import Cube from "@/app/_components/ScrollCubeSection/Cube";
import { Environment } from "@react-three/drei";

export default function ContactSection() {
  return (
    <section className="w-screen flex justify-center items-center relative py-48 pb-150">
      <div className="w-full max-w-[1200px] text-center flex flex-col items-center relative">
        
        {/* Positioned text behind the cube */}
        <h2 className="text-6xl font-light absolute top-[-15%] z-0">ANY</h2>
        <h2 className="text-6xl font-light absolute top-[10%] z-0">QUESTIONS?</h2>
        
        {/* Cube positioned in the center */}
        <div className="w-64 h-64 relative z-10">
          <Canvas>
            <Cube size={2.5} />
            <Environment /*files="/skybox.exr"*/ preset="studio" />
          </Canvas>
        </div>
        
        {/* Positioned text in front of the cube */}
        <h2 className="text-6xl font-light mt-[-50px] z-20 relative">CONTACT US</h2>
        
        {/* Side text fully aligned to the edges */}
        <div className="absolute left-0 top-1/3 transform -translate-y-1/2 rotate-[-90deg] origin-left text-sm text-right pl-4">
          CONTACT@DECUBE.COM
        </div>
        <div className="absolute left-0 top-100 rotate-[-90deg] origin-left text-sm text-right pl-4">
          +46 123 456 789
        </div>
        <div className="absolute right-0 top-1/3 transform rotate-[90deg] origin-right text-sm text-left pr-4">
          DECUBE STREET,<br />
          GOTHENBURG, SWEDEN
        </div>
        <div className="absolute right-0 top-100 transform rotate-[90deg] origin-right text-sm text-left pr-4">
          WORLDWIDE SHIPPING &<br />
          NO RETURNS
        </div>
      </div>
    </section>
  );
}