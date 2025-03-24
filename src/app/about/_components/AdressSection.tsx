"use client";

import { Canvas } from "@react-three/fiber";
import Cube from "@/app/_components/ScrollCubeSection/Cube";
import { Environment } from "@react-three/drei";

export default function ContactSection() {
  return (
    <section className="relative z-20 w-screen h-screen bg-white">
      <div className="container w-full h-full grid place-items-center">
        <div className="flex flex-col justify-between h-[30em]">
          <h2 className="text-7xl text-center z-0">
            ANY <br /> QUESTIONS?
          </h2>
          <h2 className="text-7xl font-light z-20 relative pb-6">CONTACT US</h2>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-80 h-80 z-10">
          <Canvas>
            <Cube size={3.3} />
            <Environment /*files="/skybox.exr"*/ preset="studio" />
          </Canvas>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full container grid grid-cols-1 grid-rows-2 gap-36">
        <div className="w-full h-full flex justify-between items-end">
          <div className="w-fit h-fit rotate-[-90deg] origin-top-left">
            <p className="">CONTACT@DECUBE.COM</p>
          </div>
          <div className="w-fit h-fit rotate-[90deg] origin-top-right ">
            <p className="">
              DECUBE STREET,
              <br />
              GOTHENBURG, SWEDEN
            </p>
          </div>
        </div>
        <div className="w-full h-full flex justify-between">
          <div className="w-fit h-fit rotate-[-90deg] origin-top-left">
            <p className="translate-x-[-100%]">+46 123 456 789</p>
          </div>
          <div className="w-fit h-fit rotate-[90deg] origin-top-right ">
            <p className="translate-x-[100%]">
              WORLDWIDE SHIPPING &<br />
              NO RETURNS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
