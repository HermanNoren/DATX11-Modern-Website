"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [exit, setExit] = useState(false);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    setTimeout(() => setExit(true), 3000);
    setTimeout(onFinish, 4500);
  }, [onFinish]);

  const clipPathVariants = {
    initial: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    exit: {
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
      transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-white z-1000"
      variants={clipPathVariants}
      initial="initial"
      animate={exit ? "exit" : "initial"}
    >
      <div className="flex items-center">
        <p className="text-4xl text-gray-1000 font-bold mr-4">Loading</p>
        <div
          className="w-8 h-8 border-3 border-t-3 border-gray-700 border-solid rounded-full animate-spin"
          style={{ borderTopColor: "transparent" }}
        ></div>
      </div>
      
      <p className="absolute top-0 right-0 p-4 text-2xl text-gray-700">
        CUBE/KUB/CUBO/KUUTIO/立方体
      </p>
      <p className="absolute top-1/4 rotate-[90deg] p-1 ml-225 text-2xl font-bold text-gray-700">
        CUBE/KUB/CUBO/KUUTIO/立方体
      </p>
      <p className="absolute bottom-0 left-0 p-4 text-2xl text-gray-700">
        CUBE/KUB/CUBO/KUUTIO/立方体
      </p>
      <p className="absolute bottom-1/4 rotate-[270deg] p-1 mr-225 text-2xl font-bold text-gray-700">
        CUBE/KUB/CUBO/KUUTIO/立方体
      </p>

    </motion.div>
  );
}
