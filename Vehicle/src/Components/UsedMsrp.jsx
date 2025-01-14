import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { useSelector } from "react-redux";

const UsedMsrp = () => {
  const vehicleData = useSelector((store) => store.vehicles.items[0]);

  const chartData = {
    labels: vehicleData.slice(0, 12).map((vehicle, index) => vehicle.timestamp),
    datasets: [
      {
        label: "NEW Vehicles",
        data: [20, 35, 80, 66, 39, 60, 69, 90, 29, 39, 50, 15],
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

export default UsedMsrp;
