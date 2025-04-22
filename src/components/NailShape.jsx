import React from "react";
const nailShapes = [
  { id: 1, name: "Almond" },
  { id: 2, name: "Stiletto" },
  { id: 3, name: "Square" },
];

const NailShape = ({ onSelect, selectedShape }) => {
  return (
    <div>
      <h2 className="font-bold text-pink-800 text-[30px] text-center mt-5">
        Select Shape
      </h2>
      <div className="flex justify-center mt-5 gap-5">
        {nailShapes.map((shape) => (
          <button
            key={shape.id}
            onClick={() => onSelect(shape.name)}
            className={`px-3 py-1 rounded-full border ${
              selectedShape === shape.name
                ? "bg-pink-500 text-white"
                : "bg-white text-pink-600 border-pink-300"
            } hover:bg-pink-100 transition`}
          >
            {shape.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NailShape;
