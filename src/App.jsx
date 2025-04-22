import React, { useState } from "react";
import NailShape from "./components/NailShape";
import ColorSwatch from "./components/ColorSwatch";
import HandPreview from "./components/HandPreview";
import Loading from "./components/Loading";
import Summary from "./components/Summary";

const App = () => {
  const [shape, setShape] = useState(localStorage.getItem("shape") || "");
  const [color, setColor] = useState(localStorage.getItem("color") || "");
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(false);

  const handleSelecteShape = (selectedShape) => {
    setShape(selectedShape);
    localStorage.setItem("shape", selectedShape);
  };

  const handleSelectColor = (selectedColor) => {
    setLoading(true);
    setColor(selectedColor);
    localStorage.setItem("color", selectedColor);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const handleViewSumarry = () => {
    setSummary(true);
  };

  const handleCloseSummary = () => {
    setSummary(false);
  };

  return (
    <div>
      {!summary && (
        <div className="flex flex-col mx-auto pt-10 max-w-[500px] min-h-screen bg-gradient-to-r from-pink-300 to-pink-400">
          <h1 className="text-3xl font-bold underline text-center text-pink-800">
            Welcome to Maniverse nail salon
          </h1>
          <NailShape onSelect={handleSelecteShape} selectedShape={shape} />
          <ColorSwatch onSelect={handleSelectColor} selectedColor={color} />
          {loading ? <Loading /> : <HandPreview shape={shape} color={color} />}

          <button
            onClick={handleViewSumarry}
            className="bg-pink-500 w-[300px] py-5 text-[20px] text-white font-bold rounded-[5px] mx-auto mt-[30px] hover:bg-pink-400"
          >
            View Summary
          </button>
        </div>
      )}
      {summary && (
        <Summary shape={shape} color={color} onDone={handleCloseSummary} />
      )}
    </div>
  );
};

export default App;
