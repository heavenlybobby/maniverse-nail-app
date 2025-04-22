import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HandPreview = ({ shape, color }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Update the key to trigger re-render and animation
    setKey((prevKey) => prevKey + 1);
  }, [shape, setKey]);

  return (
    <div>
      <h2 className="font-bold text-pink-800 text-[30px] text-center mt-5">
        Preview
      </h2>
      <div className="relative flex justify-center mt-5">
        <img src="/placeholder.jpg" alt="Hand preview" className="w-64" />

        <motion.div
          key={key}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute top-8 flex justify-center gap-5"
        >
          {Array(5)
            .fill()
            .map((_, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: color,
                }}
                className={`
                  ${
                    shape === "Almond"
                      ? "w-6 h-12 rounded-full"
                      : shape === "Stiletto"
                      ? "w-6 h-12 rounded-t-full"
                      : "w-6 h-12 rounded-none"
                  } ${index === 0 ? "mt-[50px]" : ""} ${
                  index === 4 ? "mt-[115px]" : ""
                } ${index === 2 ? "ml-[7px]" : ""}`}
              ></span>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HandPreview;
