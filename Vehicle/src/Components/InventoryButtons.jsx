import React from "react";

const InventoryButtons = () => {
  return (
    <div>
      <h1 className="font-bold mt-4 ml-5">Recent Gathered Data 04/01/24</h1>
      <div className="flex ">
        <button className="inButton  shadow-md">
          <p className="font-bold text-xl">379</p>
          <p className="text-sm"># New Units</p>
        </button>
        <button className="inButton  shadow-md">
          <p className="font-bold text-xl">$ 13,023,46</p>
          <p className="text-sm">New MSRP</p>
        </button>
        <button className="inButton  shadow-md">
          <p className="font-bold text-xl">$52,882</p>
          <p className="text-sm">New Avg. MSRP</p>
        </button>
        <button className="inButton  shadow-md">
          <p className="font-bold text-xl">67</p>
          <p className="text-sm"># Used Units</p>
        </button>
        <button className="inButton  w-32 shadow-md">
          <p className="font-bold text-xl">$ 13,576,45</p>
          <p className="text-sm"># Used MSRP</p>
        </button>
        <button className="inButton shadow-md">
          <p className="font-bold text-xl">$ 23,351</p>
          <p className="text-sm"># Used Avg. MSRP</p>
        </button>
        <button className="inButton  shadow-md">
          <p className="font-bold text-xl"># 1</p>
          <p className="text-sm"># CPO Units</p>
        </button>
        <button className="inButton  shadow-md">
          <p className="font-bold text-xl">$ 31,200</p>
          <p className="text-sm"># CPO MSRP</p>
        </button>
      </div>
    </div>
  );
};

export default InventoryButtons;
