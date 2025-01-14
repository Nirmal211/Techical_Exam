import React, { useState } from "react";

const Button = ({
  newData,
  usedData,
  cpoData,
  setCpoData,
  setNewData,
  setUsedData,
}) => {
  const [newButtonClicked, setNewButtonClicked] = useState(true);
  const [usedButtonClicked, setUsedButtonClicked] = useState(false);
  const [cpoButtonClicked, setCpoButtonClicked] = useState(false);

  const handleNewVehicleData = () => {
    setNewData(true);
    setUsedData(false);
    setCpoData(false);
    setNewButtonClicked(true);
    setUsedButtonClicked(false);
    setCpoButtonClicked(false);
  };

  const handleUsedVehicleData = () => {
    setUsedData(true);
    setNewData(false);
    setCpoData(false);
    setUsedButtonClicked(true);
    setNewButtonClicked(false);
    setCpoButtonClicked(false);
  };

  const handleCpoUsedVehicleData = () => {
    setCpoData(true);
    setNewData(false);
    setUsedData(false);
    setCpoButtonClicked(true);
    setNewButtonClicked(false);
    setUsedButtonClicked(false);
  };

  return (
    <div>
      <div className="flex gap-5">
        <button
          className={`btn ${
            newButtonClicked
              ? "bg-[#ff8C09] border-none text-white font-bold"
              : "bg-white border border-[#ff8C09]"
          }`}
          onClick={handleNewVehicleData}
        >
          NEW
        </button>
        <button
          className={`btn ${
            usedButtonClicked
              ? "bg-[#ff8C09] border-none text-white font-bold"
              : "bg-white border border-[#ff8C09]"
          }`}
          onClick={handleUsedVehicleData}
        >
          USED
        </button>
        <button
          className={`btn ${
            cpoButtonClicked
              ? "bg-[#ff8C09] border-none text-white font-bold"
              : "bg-white border border-[#ff8C09]"
          }`}
          onClick={handleCpoUsedVehicleData}
        >
          CPO
        </button>
      </div>
    </div>
  );
};

export default Button;
