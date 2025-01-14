import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewVehicle from "./NewVehicle";
import UsedVehicle from "./UsedVehicle";
import Button from "./Button";
import useVehicle from "../customHook/useVehicle";
import CpoVehicle from "./CpoVehicle";
import Msrp from "./Msrp";

const Vehicle = () => {
  const [newData, setNewData] = useState(true);
  const [usedData, setUsedData] = useState(false);
  const [cpoData, setCpoData] = useState(false);
  const vehicleData = useSelector((store) => store.vehicles.items[0]);

  const { getVehicleData } = useVehicle();

  console.log(vehicleData);

  if (!vehicleData) {
    return null;
  }

  return (
    <div>
      <div className="flex gap-2 justify-start items-center mx-10 mt-10">
        <h2 className="font-bold ml-5">Inventory Count</h2>
        <Button
          newData={newData}
          setNewData={setNewData}
          usedData={usedData}
          setUsedData={setUsedData}
          cpoData={cpoData}
          setCpoData={setCpoData}
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {vehicleData && (
          <>
            <NewVehicle vehicleData={vehicleData} newData={newData} />
            <UsedVehicle vehicleData={vehicleData} usedData={usedData} />
            <CpoVehicle vehicleData={vehicleData} cpoData={cpoData} />
          </>
        )}
      </div>
      <Msrp
        newData={newData}
        setNewData={setNewData}
        usedData={usedData}
        setUsedData={setUsedData}
        cpoData={cpoData}
        setCpoData={setCpoData}
      />
    </div>
  );
};

export default Vehicle;
