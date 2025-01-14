import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";

const NewMsrp = () => {
  const vehicleData = useSelector((store) => store.vehicles.items[0]);

  const chartData = {
    labels: vehicleData.slice(0, 12).map((vehicle, index) => vehicle.timestamp),
    datasets: [
      {
        label: "NEW Vehicles",
        data: [60, 75, 44, 26, 89, 70, 40, 45, 30, 38, 62, 55],
        backgroundColor: "rgba(255,153,38,1)",
        borderColor: "rgba(255,153,38,1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex items-center justify-center  w-[78%] shadow-lg mt-5">
      <Bar data={chartData} />
    </div>
  );
};

export default NewMsrp;
