"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeOut(true), 100);
    setTimeout(onFinish, 1000);
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-white z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100" }`}>

      <div className="flex items-center">
        <p className="text-4xl text-gray-1000 font-bold mr-4">Loading</p>
        <div className="w-8 h-8 border-3 border-t-3 border-gray-700 border-solid rounded-full animate-spin"
          style={{ borderTopColor: "transparent" }}>
        </div>
      </div>

      <p className={`absolute top-0 right-0 p-4 text-2xl text-gray-700 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0" : "opacity-100" }`}> CUBE/KUB/CUBO/KUUTIO/立方体
      </p>

      <p className={`absolute top-1/4 rotate-[90deg] ml-225 text-2xl text-gray-700 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0" : "opacity-100" }`}> CUBE/KUB/CUBO/KUUTIO/立方体
      </p>

      <p className={`absolute bottom-0 left-0 p-4 text-2xl text-gray-700 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0" : "opacity-100" }`}> CUBE/KUB/CUBO/KUUTIO/立方体
      </p>

      <p className={`absolute bottom-1/4 rotate-[270deg] mr-225 text-2xl text-gray-700 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0" : "opacity-100" }`}> CUBE/KUB/CUBO/KUUTIO/立方体
      </p>
    </div>
  );
}
