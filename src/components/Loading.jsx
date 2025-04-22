import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-20 gap-5">
      {[0, 1, 2].map((index) => (
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          className="w-5 h-5 bg-pink-500 rounded-full"
        />
      ))}
    </div>
  );
};

export default Loading;
