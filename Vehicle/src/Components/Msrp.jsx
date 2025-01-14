import React, { useState } from "react";
import NewMsrp from "./NewMsrp";
import UsedMsrp from "./UsedMsrp";
import CpoMsrp from "./CpoMsrp";

const Msrp = () => {
  const [newMsrp, setNewMsrp] = useState(true);
  const [usedMsrp, setUsedMsrp] = useState(false);
  const [cpoMsrp, setCpoMsrp] = useState(false);
  const [newButtonClicked, setNewButtonClicked] = useState(true);
  const [usedButtonClicked, setUsedButtonClicked] = useState(false);
  const [cpoButtonClicked, setCpoButtonClicked] = useState(false);

  const handleNewMsrp = () => {
    setNewButtonClicked(true);
    setNewMsrp(true);
    setUsedMsrp(false);
    setCpoMsrp(false);
    setUsedButtonClicked(false);
    setCpoButtonClicked(false);
  };

  const handleUsedMsrp = () => {
    setNewButtonClicked(false);
    setNewMsrp(false);
    setUsedMsrp(true);
    setCpoMsrp(false);
    setUsedButtonClicked(true);
    setCpoButtonClicked(false);
  };

  const handleCpoMsrp = () => {
    setNewButtonClicked(false);
    setUsedButtonClicked(false);
    setCpoButtonClicked(true);
    setNewMsrp(false);
    setUsedMsrp(false);
    setCpoMsrp(true);
  };

  return (
    <div className="w-screen h-full">
      <div className="flex items-center gap-2 mx-10 mt-10">
        <h2 className="font-bold ml-5">Average MSRP in USD</h2>
        <div className="flex gap-5">
          <button
            className={`btn ${
              newButtonClicked
                ? "bg-[#ff8C09] border-none text-white font-bold"
                : "bg-white border border-[#ff8C09]"
            }`}
            onClick={handleNewMsrp}
          >
            NEW
          </button>
          <button
            className={`btn ${
              usedButtonClicked
                ? "bg-[#ff8C09] border-none text-white font-bold"
                : "bg-white border border-[#ff8C09]"
            }`}
            onClick={handleUsedMsrp}
          >
            USED
          </button>
          <button
            className={`btn ${
              cpoButtonClicked
                ? "bg-[#ff8C09] border-none text-white font-bold"
                : "bg-white border border-[#ff8C09]"
            }`}
            onClick={handleCpoMsrp}
          >
            CPO
          </button>
        </div>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        {newMsrp ? <NewMsrp /> : <React.Fragment />}
        {usedMsrp ? <UsedMsrp /> : <React.Fragment />}
        {cpoMsrp ? <CpoMsrp /> : <React.Fragment />}
      </div>
    </div>
  );
};

export default Msrp;
