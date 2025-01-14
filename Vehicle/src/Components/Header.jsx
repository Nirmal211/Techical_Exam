import React from "react";

const Header = ({ toggleButton, setToggleButton }) => {
  const handleButtonClick = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between items-center px-10 py-10 border-b-2  mx-4">
        <h1 className="text-2xl font-semibold">Inventory</h1>
        <button
          className="border border-transparent px-4 py-1.5 bg-white shadow-2xl"
          onClick={handleButtonClick}
        >
          FILTER DATA BY
        </button>
      </div>
    </div>
  );
};

export default Header;
