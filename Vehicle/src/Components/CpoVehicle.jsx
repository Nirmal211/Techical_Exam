import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const CpoVehicle = ({ vehicleData, cpoData }) => {
  const newVehicle =
    vehicleData && vehicleData.slice(0, 12).filter((vehicle) => vehicle.brand);

  const chartData = {
    labels: newVehicle.map((vehicle, index) => vehicle.brand),
    datasets: [
      {
        label: "CPO Vehicles",
        data: [
          100,
          200,
          300,
          400,
          500,
          600,
          700,
          800,
          900,
          1100,
          1200,
          1300,
          1400,
        ], // Example: using 'price' as the value
        backgroundColor: "rgba(255,153,38,1)",
        borderColor: "rgba(255,153,38,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex items-center justify-center  w-[78%] shadow-lg mt-5">
      {cpoData && <Bar data={chartData} />}
    </div>
  );
};

export default CpoVehicle;
