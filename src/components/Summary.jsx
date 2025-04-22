import React from "react";

const Summary = ({ shape, color, onDone }) => {
  return (
    <div className="flex flex-col mx-auto pt-10 max-w-[500px] min-h-screen bg-pink-300">
      <h1 className="text-3xl font-bold underline text-center text-pink-800 mb-10">
        Summary
      </h1>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-pink-800 text-[30px]">Selected Shape</h2>
        <p className="text-[20px] font-bold text-pink-600">{shape}</p>
        <h2 className="font-bold text-pink-800 text-[30px] mt-5">
          Selected Color
        </h2>
        <p className="text-[20px] font-bold text-pink-600">{color}</p>
      </div>
      <button
        onClick={onDone}
        className="bg-pink-500 w-[300px] py-5 text-[20px] text-white font-bold rounded-[5px] mx-auto mt-[30px] hover:bg-pink-400"
      >
        Done
      </button>
    </div>
  );
};

export default Summary;
