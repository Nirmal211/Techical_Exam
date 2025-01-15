import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addVehicle } from "../utils/ReduxSlice/vehicleSlice";

const useVehicle = () => {
  const dispatch = useDispatch();

  const getVehicleData = async () => {
    try {
      const data = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/get/inventory`
      );
      if (!data) {
        throw new Error("Network Connection Error");
      }
      const json = await data.json();
      dispatch(addVehicle(json));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getVehicleData();
  }, []);

  return <div></div>;
};

export default useVehicle;
