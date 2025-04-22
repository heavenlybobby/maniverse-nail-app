import React from "react";

const colors = [
  { id: 1, name: "red" },
  { id: 2, name: "blue" },
  { id: 3, name: "green" },
  { id: 4, name: "yellow" },
  { id: 5, name: "pink" },
];

const ColorSwatch = ({ onSelect, selectedColor }) => {
  return (
    <div>
      <h2 className="font-bold text-pink-800 text-[30px] text-center mt-5">
        Select Color
      </h2>
      <div className="flex justify-center mt-5 gap-5 ">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onSelect(color.name)}
            style={{ backgroundColor: color.name }}
            className={`w-5 h-5 rounded-full hover:opacity-9 transition ${
              color.name === selectedColor
                ? "border-pink-500 border-2"
                : "border-transparent"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSwatch;
