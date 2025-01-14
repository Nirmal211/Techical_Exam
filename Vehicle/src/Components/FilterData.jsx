import React, { useState } from "react";
import { useSelector } from "react-redux";

const FilterData = () => {
  const vehicleData = useSelector((store) => store.vehicles.items);
  const [checkBox, setCheckBox] = useState([
    { title: "Last Month", state: false },
    { title: "This Month", state: false },
    { title: "Last 3 Months", state: false },
    { title: "Last 6 Months", state: false },
    { title: "This Year", state: false },
    { title: "Last Year", state: false },
  ]);
  const [addButton, setAddButton] = useState(false);
  const [removeButton, setRemoveButton] = useState(false);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("This month");

  // Get unique makes for dropdown
  const uniqueMakes = Array.from(
    new Set(vehicleData.map((vehicle) => vehicle.brand))
  );

  const handleFilterButton = () => {
    setAddButton(!addButton);
    setRemoveButton(false);
  };

  const handleFilterRemoveButton = (index) => {
    setRemoveButton(!removeButton);
    setAddButton(false);
    setCheckBox(checkBox.map((item) => ({ ...item, state: false })));
  };

  const handleCheckBoxData = (index) => {
    const updateCheckBoxData = [...checkBox];
    updateCheckBoxData[index].state = !updateCheckBoxData[index].state;
    setCheckBox(updateCheckBoxData);
  };

  // Function to filter data based on make and duration
  const filterData = () => {
    let filteredData = vehicleData;

    if (selectedMake) {
      filteredData = filteredData.filter(
        (vehicle) => vehicle.brand === selectedMake
      );
    }

    // Filter by duration (Example logic)
    const now = new Date();
    filteredData = filteredData.filter((vehicle) => {
      const vehicleDate = new Date(vehicle.date); // Assuming there's a date property
      switch (selectedDuration) {
        case "Last month":
          return (
            vehicleDate > new Date(now.getFullYear(), now.getMonth() - 1, 1)
          );
        case "This month":
          return vehicleDate > new Date(now.getFullYear(), now.getMonth(), 1);
        case "Last 3 months":
          return (
            vehicleDate > new Date(now.getFullYear(), now.getMonth() - 3, 1)
          );
        case "Last 6 months":
          return (
            vehicleDate > new Date(now.getFullYear(), now.getMonth() - 6, 1)
          );
        case "This year":
          return vehicleDate > new Date(now.getFullYear(), 0, 1);
        case "Last year":
          return (
            vehicleDate > new Date(now.getFullYear() - 1, 0, 1) &&
            vehicleDate <= new Date(now.getFullYear(), 0, 1)
          );
        default:
          return true;
      }
    });

    return filteredData;
  };

  const filteredData = filterData();

  return (
    <div className="absolute top-24 right-5 w-[26%] px-6 py-10 shadow-xl bg-white">
      <h1 className="text-2xl font-bold">Filter Data By</h1>
      <div className="flex flex-col gap-1.5">
        <h2 className="text-sm">Duration</h2>
        {checkBox.map((item, index) => {
          return (
            <div className="flex items-center  justify-start gap-2">
              <input
                className="w-3 h-3"
                type="checkbox"
                checked={item.state}
                onChange={() => handleCheckBoxData(index)}
              />
              <label className="text-[12px]">{item.title}</label>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-full mt-5">
        <button
          className={`text-[13px]   px-9 py-2 ${
            addButton
              ? "bg-[#ff8C09] text-white"
              : " border border-[#ff8C09] text-[#ff8C09]"
          }`}
          onClick={handleFilterButton}
        >
          APPLY FILTER
        </button>
        <button
          className={`text-[13px]   px-9 py-2 ${
            removeButton
              ? "bg-[#ff8C09] text-white "
              : "border border-[#ff8C09] text-[#ff8C09]"
          }`}
          onClick={handleFilterRemoveButton}
        >
          REMOVE ALL FILTER
        </button>
      </div>
    </div>
  );
};

export default FilterData;
