import React from "react";

const HistoryLog = () => {
  const data = [
    {
      date: "Mar 10, 24",
      newInventory: 241,
      newTotalMsrp: "$9,109,873",
      newAverageMsrp: "$37,800",
      usedInventory: 83,
      usedTotalMsrp: "$27,409",
      usedAverageMsrp: "$437,488",
    },
    {
      date: "Mar 01, 24",
      newInventory: 241,
      newTotalMsrp: "$9,109,873",
      newAverageMsrp: "$37,800",
      usedInventory: 83,
      usedTotalMsrp: "$27,409",
      usedAverageMsrp: "$437,488",
    },
    {
      date: "Feb 29, 24",
      newInventory: 241,
      newTotalMsrp: "$9,109,873",
      newAverageMsrp: "$37,800",
      usedInventory: 83,
      usedTotalMsrp: "$27,409",
      usedAverageMsrp: "$437,488",
    },
    {
      date: "Feb 28, 24",
      newInventory: 241,
      newTotalMsrp: "$9,109,873",
      newAverageMsrp: "$37,800",
      usedInventory: 83,
      usedTotalMsrp: "$27,409",
      usedAverageMsrp: "$437,488",
    },
    {
      date: "Feb 10, 24",
      newInventory: 241,
      newTotalMsrp: "$9,109,873",
      newAverageMsrp: "$37,800",
      usedInventory: 83,
      usedTotalMsrp: "$27,409",
      usedAverageMsrp: "$437,488",
    },
    {
      date: "Feb 01, 24",
      newInventory: 241,
      newTotalMsrp: "$9,109,873",
      newAverageMsrp: "$37,800",
      usedInventory: 83,
      usedTotalMsrp: "$27,409",
      usedAverageMsrp: "$437,488",
    },
  ];

  return (
    <div className="w-screen h-full mt-10">
      <h2 className="font-bold ml-12">History Log</h2>
      <div className="w-[80%] h-full flex justify-center items-center mx-40 my-10 shadow-2xl">
        <table border="1" cellPadding="25">
          <thead className="">
            <tr>
              <th>Date</th>
              <th>New Inventory</th>
              <th>New Total MSRP</th>
              <th>New Average MSRP</th>
              <th>Used Inventory</th>
              <th>Used Total MSRP</th>
              <th>Used Average MSRP</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.newInventory}</td>
                <td>{item.newTotalMsrp}</td>
                <td>{item.newAverageMsrp}</td>
                <td>{item.usedInventory}</td>
                <td>{item.usedTotalMsrp}</td>
                <td>{item.usedAverageMsrp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryLog;
