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

function ContactSection2() {
  return (
    <section className="w-screen h-screen flex justify-center items-center relative py-48 pb-150">
      <div className="container w-full h-full text-center flex flex-col items-center relative border">
        {/* Positioned text behind the cube */}
        <h2 className="text-7xl font-light absolute top-[-29%] z-0">
          ANY <br /> QUESTIONS?
        </h2>
        {/* Cube positioned in the center */}
        <div className="w-80 h-80 relative z-10">
          <Canvas>
            <Cube size={3.3} />
            <Environment /*files="/skybox.exr"*/ preset="studio" />
          </Canvas>
        </div>
        {/* Positioned text in front of the cube */}
        <h2 className="text-7xl font-light mt-[-80px] z-20 relative">
          CONTACT US
        </h2>
        {/*
        <div className="absolute left-[3em] top-1/3 transform -translate-y-1/2 rotate-[-90deg] origin-left text-s text-right">
          CONTACT@DECUBE.COM
        </div>
        <div className="absolute left-[3em] top-100 rotate-[-90deg] origin-left text-s text-right">
          +46 123 456 789
        </div>
        <div className="absolute right-[3.6em] top-1/3 transform rotate-[90deg] origin-right text-s text-left">
          DECUBE STREET,
          <br />
          GOTHENBURG, SWEDEN
        </div>
        <div className="absolute right-[3.6em] top-100 transform rotate-[90deg] origin-right text-s text-left">
          WORLDWIDE SHIPPING &<br />
          NO RETURNS
        </div>
        */}
        {/* Side text fully aligned to the edges */}
      </div>
    </section>
  );
}
