import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const UsedVehicle = ({ vehicleData, usedData }) => {
  const usedVehicle =
    vehicleData &&
    vehicleData.slice(0, 12).filter((vehicle) => vehicle.condition === "new");

  const chartData = {
    labels: usedVehicle.map((vehicle, index) => vehicle.product_type),
    datasets: [
      {
        label: "USED Vehicles",
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200], // Example: using 'price' as the value
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex items-center justify-center  w-[78%] shadow-lg mt-5">
      {usedData && <Bar data={chartData} />}
    </div>
  );
};

export default UsedVehicle;
