"use client";

import { Canvas } from "@react-three/fiber";
import Cube from "@/app/_components/ScrollCubeSection/Cube";
import { Environment } from "@react-three/drei";

export default function ContactSection() {
  return (
    <section className="w-screen flex justify-center items-center relative py-48 pb-150">
      <div className="w-full max-w-[1200px] text-center flex flex-col items-center relative">
        
        {/* Positioned text behind the cube */}
        <h2 className="text-7xl font-light absolute top-[-30%] z-0">ANY</h2>
        <h2 className="text-7xl font-light absolute top-[-5%] z-0">QUESTIONS?</h2>
        
        {/* Cube positioned in the center */}
        <div className="w-80 h-80 relative z-10">
          <Canvas>
            <Cube size={3.3} />
            <Environment /*files="/skybox.exr"*/ preset="studio" />
          </Canvas>
        </div>
        
        {/* Positioned text in front of the cube */}
        <h2 className="text-7xl font-light mt-[-80px] z-20 relative">CONTACT US</h2>
        
        {/* Side text fully aligned to the edges */}
        <div className="absolute left-0 top-1/3 transform -translate-y-1/2 rotate-[-90deg] origin-left text-s text-right pl-4">
          CONTACT@DECUBE.COM
        </div>
        <div className="absolute left-0 top-100 rotate-[-90deg] origin-left text-s text-right pl-4">
          +46 123 456 789
        </div>
        <div className="absolute right-0 top-1/3 transform rotate-[90deg] origin-right text-s text-left pr-4">
          DECUBE STREET,<br />
          GOTHENBURG, SWEDEN
        </div>
        <div className="absolute right-0 top-100 transform rotate-[90deg] origin-right text-s text-left pr-4">
          WORLDWIDE SHIPPING &<br />
          NO RETURNS
        </div>
      </div>
    </section>
  );
}